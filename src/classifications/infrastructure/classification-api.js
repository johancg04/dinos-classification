import axios from "axios";

const classificationApi     = import.meta.env.VITE_CLASSIFICATIONS_API_URL;
const sourcesEndpoint       = import.meta.env.VITE_CLASSIFICATIONS_ENDPOINT_PATH;

const http = axios.create({
    baseURL: classificationApi,
})

export class ClassificationApi {
    getClassifications(){
        return http.get(`${sourcesEndpoint}`);
    }
}