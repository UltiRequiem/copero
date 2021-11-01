import "../../utils/db.js";
import randomString from "randomstring";
import Snippet from "../../models/snippet.js";

export default async function handleRaw(req, res) {
  if (req.method !== "GET") {
    response.json({ error: "Method not allowed" });
  }

  const snippetObject = await Snippet.findOne({ slug: req.query.raw });

  if (!snippetObject) {
    res.json({ error: `Snippet ${req.query.raw} not found.` });
  }

  res.statusCode = 200;
  res.send(snippetObject.snippet);
}
