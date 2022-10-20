import { IUser } from '~/types/user';
import { Module } from './modules';
import {
  ApiUsersResponsePaginated
} from './types';

export class UserModule extends Module {
  public async getPaginated(page: number, size: number): Promise<ApiUsersResponsePaginated<IUser[]>> {
    const result = await this.api.$get<ApiUsersResponsePaginated<IUser[]>>(`/user?page=${page}&size=${size}`);

    return result;
  }

  public async getById(id: string): Promise<IUser> {
    const result = await this.api.$get<IUser>(`/user/${id}`);

    return result;
  }

  public async post(payload: Omit<IUser, 'id'>): Promise<IUser> {
    const result = await this.api.$post<IUser>(`/user/`, payload);

    return result;
  }

  public async edit(id: string, payload: IUser): Promise<IUser> {
    const result = await this.api.$put<IUser>(`/user/${id}`, payload);

    return result;
  }

  public async deleteById(payload: string): Promise<void> {
    await this.api.delete<IUser>(`/user/${payload}`);
  }
}
