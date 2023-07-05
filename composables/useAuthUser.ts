import { User } from "types";

export const useAuthUser = () => {
    return useState<User | null>("user", () => null);
};