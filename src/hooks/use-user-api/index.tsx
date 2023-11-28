import { useQuery } from "@tanstack/react-query";
import { getUserInAPI } from "../../services/UserService";

export const useUserApi = (name: string) => {
    console.log('----------', name);
    return useQuery({
        queryKey: ['user', name],
        queryFn: getUserInAPI
    });
};
