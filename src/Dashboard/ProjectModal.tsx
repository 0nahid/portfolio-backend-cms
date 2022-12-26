import { RxCross2 } from "react-icons/rx";
import { SiReacttable, SiTsnode } from "react-icons/si";
import { VscLiveShare } from "react-icons/vsc";

import Loading from "../Shared/Loading";

interface Props {
    singleProject: any;
    setSingleProject: any;
    isLoading: boolean;
}
export default function ProjectModal(props: Props) {
    const { name, image, description, technologies, category, codeLink, liveLink, backendLink } = props?.singleProject;
    // console.log(props.singleProject);

    if (props.isLoading) return <Loading />
    return (
        <>
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor="project-modal" className="btn btn-sm btn-circle btn-error absolute right-2 top-2 ">  <RxCross2 /></label>
                    <h3 className="font-bold text-lg rounded-sm"> {name} </h3>
                    <img src={image} alt={name} className="mt-6" />
                    <p>
                        <span
                            dangerouslySetInnerHTML={
                                { __html: description?.slice(0, 80) }
                            }>
                        </span>
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
                    <p>Type:  {category?.type?.charAt(0).toUpperCase() + category?.type?.slice(1)}</p>
                    <div className="flex items-center">
                        <a href={liveLink} target="_blank" rel="noreferrer" className="flex hover:underline items-center"> <VscLiveShare className="mr-1" /> Live Link</a>
                    </div>
                    <div className="flex items-center">
                        <a href={backendLink} target="_blank" rel="noreferrer" className="flex hover:underline items-center"> <SiTsnode className="mr-1" /> Backend</a>
                    </div>
                    <div className="flex items-center">
                        <a href={liveLink} target="_blank" rel="noreferrer" className="flex hover:underline items-center"> <SiReacttable className="mr-1" /> Frontend</a>
                    </div>

                </div>
            </div>
        </>
    )
}
