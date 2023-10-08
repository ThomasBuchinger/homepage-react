import { ContentCutOutlined } from '@mui/icons-material';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const axios = require('axios');
  const url: string|undefined|string[] = req.query["url"]
  const host: string | undefined | string[] = req.query["host"] || ""
  
  const request_params = { maxRedirects: 0, headers: {} }
  if (host !== "" && host !== "na"){
    request_params.headers = {"Host": host}
  }


  if (url === "" || url === undefined) {
    res.status(500).json({ message: "please specify a URL in the URL query parameter"})
  } else {
    axios.get(url, request_params)
      // .then(res=>{console.log(res); return res})
      .then((response: any) => {
        console.log("OK: Pinging URL: " + url);
        return res.status(response.status).json(response.data)
      })
      .catch((error: any) => {
        if (error.response) {
          console.log("Error-Code: Pinging URL: " + url);
          return res.status(error.response.status).json(error.response.data)
        }

        console.log("Network-Error" + error)
        return res.status(500).json(error)

      });
  }
}