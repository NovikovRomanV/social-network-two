import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "8f0a712f-144a-4882-8429-3f5d82606576"
    },
});

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return  instance.get<any>(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {return response.data})
    },
}

export default usersAPI;