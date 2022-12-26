import { BiMessageSquareEdit } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

interface Props {
    project: any;
    setSingleProject: any;
};

export default function Projects(props: Props) {
    const { name, image, description, technologies, _id, category } = props.project;
    console.log(props.project);

    const handleDelete = (id: string) => {
        console.log(`Delete ${id}`);
    }
    return (
        <>
            <tr
                key={_id}
            >
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt={name} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex">
                        <span
                            dangerouslySetInnerHTML={
                                { __html: description?.slice(0, 80) }
                            }>
                        </span> <span>
                            {description?.length > 80 && "..."}
                        </span>
                    </div>
                    <br />
                    {
                        technologies?.map((tech: any, index: number) => (
                            <span
                                key={index}
                                className={
                                    "badge badge-sm mr-1 " + (tech === "React" ? " badge-info" : tech === "Sanity" ? " badge-success" : tech === "MasionaryCSS" ? " badge-error" : tech === ("NodeJs" || "NodeJS") ? " badge-success badge-outline" :
                                        tech === "ExpressJS" ? " badge-ghost badge-outline" : tech === "MongoDB" ? " badge-warning badge-outline" : tech === "Typescript" ? " badge-primary " : tech === "TailwindCSS" ? " badge-neural" : tech === "JavaScript" ? " badge-warning" : " badge-ghost"
                                    )
                                }>{tech}</span>
                        ))
                    }
                </td>
                <td>
                    {category.type?.charAt(0).toUpperCase() + category.type?.slice(1)}
                </td>
                <th>
                    <div
                        className="flex items-center space-x-3"
                    >
                        <label htmlFor="project-modal"
                            className="cursor-pointer"
                            onClick={() => props.setSingleProject(props.project)}
                        ><BsEyeFill className="h-5 w-5" /></label>

                        <label
                            onClick={() => props.setSingleProject(props.project)}
                            htmlFor="edit-project" className="cursor-pointer"><BiMessageSquareEdit className="h-5 w-5" /></label>

                        <MdDeleteForever
                            onClick={() => handleDelete(_id)}
                            className="h-5 w-5" />
                    </div>
                </th>
            </tr>
        </>
    )
}
