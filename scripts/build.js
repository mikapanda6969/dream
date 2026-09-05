import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
for (const entry of ["index.html", "src", "public"]) {
  await cp(entry, `dist/${entry === "public" ? "" : entry}`, { recursive: true });
}
console.log("Static site built in dist/");
