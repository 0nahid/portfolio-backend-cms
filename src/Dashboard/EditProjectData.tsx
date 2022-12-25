import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RxCross2 } from "react-icons/rx";
import ReactQuill from 'react-quill';
import useCatagories from '../Hooks/useCatagories';
import Loading from '../Shared/Loading';

type Inputs = {
    name: string;
    description: string;
    category: string;
};

interface Props {
    singleProject: any;
    setSingleProject: any;
    isLoading: boolean;
}

export default function EditProjectData(props: Props) {
    const { name, image, description, technologies, type, _id } = props?.singleProject;

    const [state, setState] = useState("")
    const [descriptionError, setDescriptionError] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
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
    console.log(errors);
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
    const categories = useCatagories();

    if (props.isLoading) return <Loading />
    return (
        <>
            <input type="checkbox" id="edit-project" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        onClick={() => props.setSingleProject({})}
                        htmlFor="edit-project" className="btn btn-sm btn-circle btn-error absolute right-2 top-2">
                        <RxCross2 />
                    </label>
                    {/* Form */}
                    <h1>Edit: <span className='font-bold'>{name}</span> </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-2">
                            <label htmlFor="name" className="my-2">
                                Project Name
                            </label>
                            <input
                                type="text"
                                placeholder={name}
                                value={name}
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
                                value={
                                    description
                                }
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
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
