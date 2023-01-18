export interface User{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    username: string;
    password: string;
}
export interface GetUsersResponse{
    limit: number;
    skip: number;
    total: number;
    users: User[];
}