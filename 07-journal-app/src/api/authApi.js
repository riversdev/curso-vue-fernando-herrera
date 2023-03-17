import axios from 'axios'

export const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyA2AHsxUsPsiZFwsWfEpS3xfRUQgrqP-AA'
    }
})