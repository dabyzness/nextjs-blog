import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello" });
}

// You should NOT fetch an API route from getStaticProps or getStaticPaths
// Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function)

// This is because getStaticPaths and getStaticProps run only on the server-side and will never run on the client-side. These functions will also NOT be included in the JS bundle for the browser. f
