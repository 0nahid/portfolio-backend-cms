import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";
import ReactQuill from 'react-quill';
import useCatagories from '../Hooks/useCatagories';
import Loading from '../Shared/Loading';
import { Inputs } from './AddProject';


interface Props {
    singleProject: any;
    setSingleProject: any;
    isLoading: boolean;
}

export default function EditProjectData(props: Props) {
    const { name, image, description, technologies, type, _id } = props?.singleProject;
    console.log(`description: ${description}`);
    const [state, setState] = useState<String>(description)
    console.log(`state: ${state}`);

    const [descriptionError, setDescriptionError] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        if (!state) {
            setDescriptionError("Description is required");
            return;
        }
        const newData = {
            //    if the user doesn't change the value of the input then use the old value
            // name: data.name || name,
            // image: data.image || image,
            // description: state || description,
            // technologies: data.technologies || technologies,
            // type: data.type || type,
            ...data,
            description: state
        }
        console.log(newData);
        toast.success(`Project ${name} updated successfully !`)
    }
    // console.log(errors);
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
                        onClick={() => props.setSingleProject("")}
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
                                defaultValue={name}
                                className="input input-bordered w-full"
                                {...register("name")}
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
                                // value={description}
                                defaultValue={description}
                                onChange={setState}
                                modules={modules}
                                formats={formats}
                                theme="snow" />
                            {(state?.length < 8 || state?.length < 11) ? (
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
                                {...register("category")}
                            >
                                {categories.map((category: any) => (
                                    <option key={category._id} value={category._id}>{category.type}</option>
                                ))}
                            </select>
                        </div>

                        <div className="my-3 text-right">
                            <button
                                className="btn btn-primary text-white"
                            // disabled
                            >
                                Update
                            </button>
                        </div>
                        <p className="text-red-400 text-xl">Edit function will be added soon...</p>
                    </form>
                </div>
            </div>
        </>
    )
}
