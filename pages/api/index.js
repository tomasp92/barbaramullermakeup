// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import Papa from "papaparse"
/* export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
} */
const list = async () =>{
  return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vTDWEEo-mRg7sR7EdDmzDvCTCGaK3xPGoZcdyv8XeqNejnjNs8ilzmxx4jSnndybucbfEmCYT9Axr-8/pub?output=csv", {
    responseType: 'blob'
  }).then(response => {
    return new Promise((resolve, reject)=>{
      Papa.parse(response.data,{
        header:true,
        complete: results =>resolve(results.data),
        error: error => reject(error.message)
      })
    })
  })
}
export default {list}