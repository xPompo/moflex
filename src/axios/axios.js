import axios from "axios";
const axiosPoint = axios.create({ baseURL: "https://api.themoviedb.org/3" });
export default axiosPoint;
