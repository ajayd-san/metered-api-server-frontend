import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function callApi(key) {
  const config = {};
  if (key.trim() != "") {
    const config = {
      headers: {
        Authorization: key,
      },
    };
  }

  //   const res = await axios.get(process.env.AWS_END_POINT + "/get", config);
  console.log(process.env.AWS_END_POINT);
}
