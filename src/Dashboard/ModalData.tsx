import axios from "axios";
import { useEffect, useState } from "react";

export default function ModalData(props: any) {
    const { data, setData, handleModalClose } = props;
    // console.log(data);
    const [fetchData, setFetchData] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/projects`)
            .then(res => setFetchData(res.data))
    }, [])
    const singleData:any = fetchData.filter((item: any) => item._id === data)
    console.log(singleData);

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3"
                        onClick={handleModalClose}
                        className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                        {singleData[0]?.type}
                    </h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    )
}
