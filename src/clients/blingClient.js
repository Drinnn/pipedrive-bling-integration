import axios from "axios";
import xml from "xml";

const apiKey = process.env.BLING_API_KEY;
const baseUrl = "https://bling.com.br/Api/v2";

export const createOrder = (xmlObject) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}/pedido/json/&apikey=${apiKey}&xml=${xml(xmlObject)}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.data);
      });
  });
};
