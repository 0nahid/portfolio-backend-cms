import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-hot-toast"
import Loading from "../Shared/Loading"
import Projects from "./Projects"

export default function ManageProject() {
    const { data: projects, isLoading, error, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                const response = await axios(`${process.env.REACT_APP_SERVER}/projects`)
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
    // console.log(projects);

    if (isLoading) {
        <Loading />
    }

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
                                <Projects key={project._id} project={project} />
                            ))
                        }
                    </tbody>
                    <tfoot>
                        {tableRow}
                    </tfoot>

                </table>
            </div>
        </>
    )
}
