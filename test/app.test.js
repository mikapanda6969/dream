import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { benefits } from "../src/benefits.js";
import { LINE_OPEN_CHAT_URL } from "../src/MikaPromoSection.js";

test("shareholder benefit data remains searchable", () => {
  assert.ok(benefits.length > 0);
  assert.equal(benefits.filter((item) => item.company.includes("イオン")).length, 1);
});

test("promo uses the requested LINE URL and accessible image text", async () => {
  const source = await readFile("src/MikaPromoSection.js", "utf8");
  assert.equal(LINE_OPEN_CHAT_URL, "https://line.me/ti/g2/G6a7e1zqDhCXhE82QJnI8MFO4154lVXbB_021g?utm_source=invitation&utm_medium=link_copy&utm_campaign=default");
  assert.match(source, /alt="マネーアドバイザー美香"/);
  assert.match(source, /aria-label=/);
});
