import Loading from "../Shared/Loading";
interface Props {
    singleProject: any;
    setSingleProject: any;
    isLoading: boolean;
}
export default function ProjectModal(props: Props) {
    const { name, image, description, technologies, type, _id } = props?.singleProject;
    if (props.isLoading) return <Loading />
    return (
        <>
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        onClick={() => props.setSingleProject({})}
                        htmlFor="project-modal" className="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2 ">✕</label>
                    <img src={image} alt={name} className="mt-6" />
                    <h3 className="font-bold text-lg rounded-sm"> {name} </h3>
                    <p>
                        {description}
                    </p>
                    {
                        technologies?.map((tech: any, index: number) => (
                            <span
                                key={index}
                                className={
                                    "badge badge-sm mr-1 " + (tech === "React" ? " badge-info" : tech === "Sanity" ? " badge-success" : tech === "MasionaryCSS" ? " badge-error" : tech === "NodeJS" ? " badge-success badge-outline" :
                                        tech === "ExpressJS" ? " badge-ghost badge-outline" : tech === "MongoDB" ? " badge-warning badge-outline" : tech === "Typescript" ? " badge-primary " : tech === "TailwindCSS" ? " badge-neural" : tech === "JavaScript" ? " badge-warning" : " badge-ghost"
                                    )
                                }>{tech}</span>
                        ))
                    }
                    <p
                        className="font-bold"
                    >
                        Type:  {type?.charAt(0).toUpperCase() + type?.slice(1)}
                    </p>
                    <p>Live link:
                        {_id}
                    </p>
                </div>
            </div>
        </>
    )
}
