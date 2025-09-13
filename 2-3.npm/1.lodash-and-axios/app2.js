import axios from "axios";

const req = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(res.data);
};

req();
