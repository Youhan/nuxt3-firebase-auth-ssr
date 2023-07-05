
import { UserRecord } from "firebase-admin/lib/auth/user-record";

export interface User extends UserRecord{
    username?: string;
}
