import api from "../api/axios";

export async function generateResponse(payload) {
    const response = await api.post("/test", payload);
    return response.data;
}