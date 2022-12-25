import axios from "axios";
import { useEffect, useState } from "react";

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
                            <div dangerouslySetInnerHTML={
                                { __html: item.description }
                            }></div>
                        </div>
                    )
                })
            }
        </div>
    )
}
