import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import handleMultipleErrors from "../Hooks/handleMulripleErrors";
import useCatagories from "../Hooks/useCatagories";
export type Inputs = {
    name: string;
    description: string;
    category: string;
    codeLink: string;
    liveLink: string;
    image: string;
    backendLink: string;
    technologies: string;
};


export default function AddProject() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    const [state, setState] = useState("")
    const [descriptionError, setDescriptionError] = useState("");
    const [loading, setLoading] = useState(false);

    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/v1/categories/all")
    //         .then(res => {
    //             console.log(res.data.category);
    //             setCategories(res.data.category)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [])

    const categories = useCatagories();
    // console.log(categories);


    const onSubmit: SubmitHandler<Inputs> = data => {
        if (!state) {
            setDescriptionError("Description is required");
            return;
        }
        // make array of technologies object & remove spaces & remove " from the string
        const technologies = data.technologies.split(",").map((item: string) => {
            return item.trim().replace(/"/g, "")
        })
        // console.log(technologies);

        const newData = {
            ...data,
            technologies,
            description: state  // this is the value of the quill editor
        }
        console.log(newData);
        setLoading(true);
        axios.post(`${process.env.REACT_APP_SERVER}/projects/new`, newData)
            .then(res => {
                if (res.status === 201) {
                    setLoading(false);
                    reset();
                    setState("");
                    toast.success("Project added successfully");
                }

            }
            )
            .catch(err => handleMultipleErrors(err))
    }
    // console.log(state.length);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link'
    ]

    return (
        <>
            <h1 className="text-center text-2xl font-bold">Add Project</h1>
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
                            {...register("name", { required: true })}
                        />
                        {errors.name?.type === "required" && (
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
                            modules={modules}
                            formats={formats}
                            theme="snow" />
                        {(state.length < 8 || state.length < 11) ? (
                            <span className="text-error">{descriptionError}</span>
                        ) : null
                        }
                    </div>
                    <div className="my-2">
                        <label htmlFor="name" className="my-2 mr-2">
                            Select Category
                        </label>
                        <select
                            className="input input-bordered"
                            {...register("category", { required: true })}
                        >
                            {categories.map((category: any) => (
                                <option key={category._id} value={category._id}>{category.type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="my-2">
                        <label htmlFor="name" className="my-2">
                            Code Link
                        </label>
                        <input type="url" placeholder="Code Link" className="input input-bordered w-full" {...register("codeLink")} />
                    </div>
                    <div className="my-2">
                        <label htmlFor="name" className="my-2">
                            Live Link
                        </label>
                        <input type="url" placeholder="Live Link" className="input input-bordered w-full" {...register("liveLink")} />
                    </div>

                    <div className="my-2">
                        <label htmlFor="name" className="my-2">
                            Backend Link
                        </label>
                        <input type="url" placeholder="Backend Link" className="input input-bordered w-full" {...register("backendLink")} />
                    </div>

                    <div className="my-2">
                        <label htmlFor="name" className="my-2">
                            Image
                        </label>
                        <input type="url" placeholder="Image" className="input input-bordered w-full" {...register("image")} />
                    </div>

                    <div className="my-2">
                        <label htmlFor="name" className="my-2">
                            Technologies Used
                        </label>
                        <input type="text" placeholder="Technologies Used" className="input input-bordered w-full" {...register("technologies")} />
                    </div>
                    <div className="my-3 text-right">
                        <button
                            className="btn btn-primary text-white"
                            disabled={loading}
                        >
                            Save Project
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
