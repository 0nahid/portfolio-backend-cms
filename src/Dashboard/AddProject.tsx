import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

type Inputs = {
    projectName: string;
    description: string;
};
export default function AddProject() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [state, setState] = useState("")
    const [descriptionError, setDescriptionError] = useState("");
    const [loading, setLoading] = useState(false);
    const onSubmit: SubmitHandler<Inputs> = data => {
        if (!state) {
            setDescriptionError("Description is required");
            return;
        }
        const newData = {
            ...data,
            description: state  // this is the value of the quill editor
        }
        console.log(newData);
    }
    console.log(state.length);

    return (
        <>
            <h1>Add Project</h1>
            <div className="max-w-[1100px] mx-auto rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2">
                        <label htmlFor="name" className="my-2">
                            Project Name
                        </label>
                        <input
                            type="text"
                            placeholder="Project Name"
                            className="input input-bordered w-full"
                            {...register("projectName", { required: true })}
                        />
                        {errors.projectName?.type === "required" && (
                            <span className="text-error">Project name is required</span>
                        )}
                    </div>
                    <div className="my-2">
                        <label htmlFor="name" className="my-2">
                            Product Description
                        </label>
                        <ReactQuill
                            value={state}
                            onChange={setState}
                            theme="snow" />
                        {(state.length < 8 || state.length < 11) ? (
                            <span className="text-error">{descriptionError}</span>
                        ) : null
                        }
                    </div>

                    <div className="my-3 text-right">
                        <button
                            className="btn btn-primary text-white"
                        // disabled={!loading}
                        >
                            {!loading ? "Sending Product..." : "Save Product"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
