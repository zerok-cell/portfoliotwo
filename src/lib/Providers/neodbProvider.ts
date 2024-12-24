import {DataProvider, GetListParams, GetListResult, GetOneParams, GetOneResult} from "react-admin";
import axios from "axios";
import {BlogType} from "@/types/prismaTypes";

const neondbProvider:DataProvider = {
    getList: async (res: string, params:GetListParams): Promise<GetListResult> =>{
        const data = await axios.get<{ data: BlogType[] }>('/api/posts/get_all/',{
            ...params
        })
        const resultFromReturn:GetListResult =  {
            data:data.data.data,
            total:data.data.data.length,
            ...params,

        }
        return resultFromReturn

    },
    getOne: async (res: string, params:GetOneParams):Promise<GetOneResult> => {
        console.log(res)
        const data = await axios.get<{data:BlogType[]}>('/api/posts/get_one/',{params:{

                ...params
            }})
        return {
            data: data.data.data[0],
            ...params
        }

    }
}
export default neondbProvider;