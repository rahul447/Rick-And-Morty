import config from "../config/config";
import { getAxiosObject } from "../../common/axiosWrapper";

// driving route -> 2nd api call
const getDrivingRoute = async (token) => {
    try {
        let res = await getAxiosObject().axios.get(`${config.APIURL}/route/${token}`)
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err.message)
    }
}

// post start an pickup point -> 1st api call
export const submitPickUpDrop = async () => {
    try {
        let res = await getAxiosObject().axios.post(`${config.APIURL}/route`)
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err.message)
    }
}

export async function drivingRouteCall(token) {
    return await getDrivingRoute(token)
}