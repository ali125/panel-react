import { GET_USER } from "./types";

export const get_user = () => {
    return {
        type: GET_USER,
        payload: 'user'
    }
}