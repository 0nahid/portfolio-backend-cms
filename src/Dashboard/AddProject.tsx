import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import useCatagories from "../Hooks/useCatagories";
type Inputs = {
    name: string;
    description: string;
    category: string;
};


export default function AddProject() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
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
    console.log(categories);
    

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

        setLoading(true);
        axios.post("http://localhost:5000/api/v1/projects/new", newData)
            .then(res => {
                console.log(res);
                setLoading(false);
            })

    }
    console.log(state.length);

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

                    <div className="my-3 text-right">
                        <button
                            className="btn btn-primary text-white"
                        // disabled={!loading}
                        >
                            Save Project
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
