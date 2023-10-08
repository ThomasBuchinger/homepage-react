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
  const url: string|string[]|undefined = req.query["url"]
  

  if (url === "" || url === undefined || url instanceof Array) {
    res.status(500).json({ message: "please specify a URL in the URL query parameter"})
  } else {
    axios.get(url, {maxRedirects: 0})
      .then((response: any) => {
        console.log("OK: Fetching Metrics from: " + url);
        return res.status(response.status).send(response.data)
      })
      .catch((error: any) => {
        console.log(error)
        res.send(error.code)
        return res.status(500)
      });
  }
}