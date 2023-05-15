import axios from "axios";
import {useQuery} from "react-query";
import {IResponse} from "../types";


const fetchCaravans = async () => {
    const data = await axios.get<IResponse>('http://localhost:3000/api/data')
    return [...data.data.items]
}

export const useGetAllCaravansAPI = () => {
    return useQuery(['all-caravans'], () => fetchCaravans())
}