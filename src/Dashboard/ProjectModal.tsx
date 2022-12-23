interface Props {
    singleProject: any;
}
export default function ProjectModal(props: Props) {
    const { name, image, description, technologies, type, _id } = props?.singleProject;
    return (
        <>
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="project-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={image} alt
                        ={name} />
                    <h3 className="font-bold text-lg"> {name} </h3>
                    <p>
                        {description}
                    </p>
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
                    <p
                        className="font-bold"
                    >
                        Type:  {type?.charAt(0).toUpperCase() + type?.slice(1)}
                    </p>
                    <p>Live link:
                        
                    </p>
                </div>
            </div>
        </>
    )
}
