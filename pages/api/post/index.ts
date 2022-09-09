import type { NextApiRequest, NextApiResponse } from "next";
import { allPostsQuery } from "../../../utils/queries";

export default function handler (req: NextApiRequest,res: NextApiResponse) {
    if (req.method === 'GET') {
        // return all posts 
        const query = allPostsQuery()

        // fetch data from sanity (setup the sanity client) **
        // const data = await client 
    }
}
