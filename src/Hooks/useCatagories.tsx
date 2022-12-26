import axios from "axios";
import { useEffect, useState } from "react";

const useCatagories = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/categories/all`)
            .then(res => {
                // console.log(res.data.category);
                setCatagories(res.data.category)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return catagories;
}

export default useCatagories;