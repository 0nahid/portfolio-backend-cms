import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-hot-toast"
import Loading from "../Shared/Loading"
import EditProjectData from "./EditProjectData"
import ProjectModal from "./ProjectModal"
import Projects from "./Projects"

export default function ManageProject() {
    const { data: projects, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                const response = await axios(`${process.env.REACT_APP_SERVER}/api/v1/projects/all`)
                // console.log(response);

                if (response.status !== 200) {
                    throw new Error('Something went wrong')
                }
                return response.data
            } catch (error) {
                toast.error(error as string)
            }
        }
    })

    const [singleProject, setSingleProject] = useState({})
    // console.log(singleProject);

    // console.log(isLoading);

    const tableRow = [
        <>
            <tr>
                <th>Name</th>
                <th>Description & Technology</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
        </>
    ]

    if (isLoading) {
        return <Loading />
    }

    if(projects?.length === 0) {
        return (
            <div className="flex justify-center items-center">
                <h1 className="text-2xl text-gray-500">No Projects Found</h1>
            </div>
        )
    }

    return (
        <>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead >
                        {tableRow}
                    </thead>
                    <tbody>
                        {
                            projects?.map((project: any, index: number) => (
                                <Projects key={project._id} project={project} setSingleProject={setSingleProject} />
                            ))
                        }
                    </tbody>
                    <tfoot>
                        {tableRow}
                    </tfoot>
                </table>
            </div>
            <>
                <ProjectModal
                    singleProject={singleProject}
                    setSingleProject={setSingleProject}
                    isLoading={isLoading}
                />
                <EditProjectData
                    singleProject={singleProject}
                    setSingleProject={setSingleProject}
                    isLoading={isLoading}
                />
            </>
        </>
    )
}
