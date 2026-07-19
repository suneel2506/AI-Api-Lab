import api from "../api/axios";

export async function getProviders() {

    console.log("Axios Base URL:", api.defaults.baseURL);

    const response = await api.get("/providers");

    console.log("Axios Response:", response);

    return response.data;
}

export async function getModels(provider) {

    const response = await api.get(`/providers/${provider}/models`);

    return response.data;
}