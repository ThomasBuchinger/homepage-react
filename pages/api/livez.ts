import { ContentCutOutlined } from '@mui/icons-material';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
  ) {

  res.json({message: "ok"})
  return res.status(200)
}