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
                    <h3 className="font-bold text-lg"> {name} </h3>
                    <div className="flex items-center space-x-3">
                        <img src={image} alt
                            ={name} />
                    </div>
                </div>
            </div>
        </>
    )
}
