import axios from 'axios';
import {
  CreateParams,
  CreateResult,
  DataProvider,
  GetListParams,
  GetListResult,
  GetOneParams,
  GetOneResult,
  UpdateParams,
  UpdateResult,
} from 'react-admin';
import { BlogInputSchema, BlogInputType, BlogType } from '@/types/prismaTypes';

const neondbProvider: DataProvider = {
  getList: async (res: string, params: GetListParams): Promise<GetListResult> => {
    const data = await axios.get<{ data: BlogType[] }>('/api/posts/get_all/', {
      ...params,
    });

    return {
      data: data.data.data,
      total: data.data.data.length,
      ...params,
    };
  },
  getOne: async (res: string, params: GetOneParams): Promise<GetOneResult> => {
    const { data } = await axios.get<BlogType>('/api/posts/get_one/', { params });
    return { data: data[0], ...params };
  },
  update: async (res: string, par: UpdateParams<BlogInputType>): Promise<UpdateResult> => {
    const { content, id, title } = BlogInputSchema.parse(par.data);
    const params: BlogInputType = {
      id: Number(id),
      content,
      title,
    };

    const { data } = await axios.put(
      '/api/posts/update/',
      { params },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return { data };
  },
  create: async (res: string, params: CreateParams): Promise<CreateResult> => {},
};
export default neondbProvider;
