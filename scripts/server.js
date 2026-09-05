import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.argv.includes("--dist") ? "dist" : ".";
const mime = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".jpg": "image/jpeg", ".svg": "image/svg+xml" };

createServer((request, response) => {
  const requested = normalize(decodeURIComponent(request.url.split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  let file = join(root, requested === "/" ? "index.html" : requested);
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(root, "index.html");
  response.setHeader("Content-Type", `${mime[extname(file)] || "application/octet-stream"}; charset=utf-8`);
  createReadStream(file).pipe(response);
}).listen(4173, "0.0.0.0", () => console.log("http://0.0.0.0:4173"));
