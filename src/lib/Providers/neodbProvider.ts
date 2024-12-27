import axios from 'axios';
import {
    DataProvider,
    GetListParams,
    GetListResult,
    GetOneParams,
    GetOneResult,
    UpdateParams, UpdateResult,
} from 'react-admin';
import {BlogInputSchema, BlogInputType, BlogType} from '@/types/prismaTypes';
import {Prisma} from "@prisma/client";

const neondbProvider: DataProvider = {
  getList: async (res: string, params: GetListParams): Promise<GetListResult> => {
    const data = await axios.get<{ data: BlogType[] }>('/api/posts/get_all/', {
      ...params,
    });
    const resultFromReturn: GetListResult = {
      data: data.data.data,
      total: data.data.data.length,
      ...params,
    };
    return resultFromReturn;
  },
  getOne: async (res: string, params: GetOneParams): Promise<GetOneResult> => {
    const data = await axios.get<{ data: BlogType[] }>('/api/posts/get_one/', {
      params: {
        ...params,
      },
    });
    return {
      data: data.data.data[0],
      ...params,
    };
  },
  update: async (res: string, params: UpdateParams):Promise<UpdateResult> => {
        const objFromUpdate:BlogInputType = {
            id:Number(params.data.id),
            content:params.data.content,
            title:params.data.title
        }

        BlogInputSchema.parse(objFromUpdate)

        const x = await axios.put('/api/posts/update/', {objFromUpdate},{headers:{'Content-Type':'application/json'}})
      // const updatePromise = await updateBlog(params.id, objFromUpdate)
      console.log(x)

    return {data:{...x.data}}
  },
};
export default neondbProvider;
