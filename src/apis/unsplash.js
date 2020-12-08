import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: `Client-ID sIlmRozEtKilu_TOOiQjhYUV1RDpbCy2v3Fh05N1Zno` },
    params: { per_page: 21 },
});
