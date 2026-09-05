import { benefits } from "./benefits.js";
import "./MikaPromoSection.js";

const form = document.querySelector(".search-form");
const input = document.querySelector("#keyword");
const results = document.querySelector("#results");
const count = document.querySelector("#result-count");

function render(items) {
  count.textContent = `${items.length}件の優待が見つかりました`;
  results.innerHTML = items.length
    ? items.map((item) => `<article class="benefit-card"><div><span class="code">${item.code}</span><h2>${item.company}</h2></div><p>${item.detail}</p><strong>${item.minimum}</strong></article>`).join("")
    : '<p class="empty">該当する株主優待はありません。キーワードを変えてお試しください。</p>';
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim().toLocaleLowerCase("ja");
  render(benefits.filter(({ company, detail, code }) => `${company}${detail}${code}`.toLocaleLowerCase("ja").includes(query)));
});

render(benefits);
