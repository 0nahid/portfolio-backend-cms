import axios from "axios";
import { useEffect, useState } from "react";
import '../Editor.scss';
export default function Manage2() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/projects/all")
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
    }, [])
    return (
        <div>
            {
                data?.length > 0 && data.map((item: any) => {
                    return (
                        <div key={item._id}
                            className="m-4 p-2 border border-gray-300 rounded-xl"
                        >
                            <h1>{item.name}</h1>
                            {/* render html + li */}
                            <div
                                className="ql-container"
                            >
                                <span
                                    dangerouslySetInnerHTML={
                                        { __html: item.description }
                                    }></span>

                            </div>
                            <h3>Code:{item.codeLink}</h3>
                            <h3>Live:{item.liveLink}</h3>
                            <h3>Backend:{item.backendLink}</h3>
                            {/* <h3>Category:{item.category.type}</h3> */}
                        </div>
                    )
                })
            }
        </div>
    )
}
