import {AxiosError, AxiosRequestConfig} from "axios";

export const RequestInterceptor = (config: AxiosRequestConfig) => {
    return config;
};

export const ErrorInterceptor = (error: AxiosError) => {
    const { response } = error;

    if (response) {
        // ...
    }

    return Promise.reject(error);
};