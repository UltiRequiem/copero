import "../../utils/db.js";
import randomString from "randomstring";
import Snippet from "../../models/snippet.js";

export default async function handlePost({ body: { snippet }, method }, res) {
  if (method !== "POST") {
    response.json({ error: "Method not allowed" });
  }

  const snippetPost = await Snippet.create({
    snippet,
    slug: randomString.generate({ length: 6, charset: "alphabetic" }),
  });

  res.statusCode = 200;
  res.json(snippetPost);
}
