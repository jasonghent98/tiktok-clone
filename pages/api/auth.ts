import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../utils/client";


export default async function handler (req: NextApiRequest,res: NextApiResponse) {
    if (req.method === 'POST') {
        // return all posts 
        const user = req.body
        // will create a new user in sanity DB
        client.createIfNotExists(user).then(() => res.status(200).json('Login Successful'))
    }
}
