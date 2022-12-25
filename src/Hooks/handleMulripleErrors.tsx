import { toast } from "react-hot-toast";

const handleMultipleErrors = (errors: any) => {
    const errorMsg = [errors.response.data.error.errors];
    errorMsg.map((err: any) => {
        for (const key in err) {
            toast.error(err[key].message);
            // console.log(err[key].message);
        }
        return null;
    })
}

export default handleMultipleErrors;