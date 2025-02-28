import axios from "axios";

const Base_Url = "https://jsonplaceholder.typicode.com/";

const ApiConfigure = axios.create({
  base: Base_Url,
  header: {
    "Content-Type": "applicayion/json",
  },
});

ApiConfigure.interceptors.request.use(
)
const APIService = () => {
  return <div>APIService</div>;
};

export default APIService;
