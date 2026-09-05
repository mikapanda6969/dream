export const LINE_OPEN_CHAT_URL = "https://line.me/ti/g2/G6a7e1zqDhCXhE82QJnI8MFO4154lVXbB_021g?utm_source=invitation&utm_medium=link_copy&utm_campaign=default";

const HTMLElementBase = globalThis.HTMLElement ?? class {};

export class MikaPromoSection extends HTMLElementBase {
  connectedCallback() {
    this.innerHTML = `
      <section class="mika-promo" aria-labelledby="mika-promo-title">
        <p class="mika-promo__label">PR</p>
        <div class="mika-promo__conversation">
          <div class="mika-promo__portrait-wrap">
            <img class="mika-promo__portrait" src="/mika-profile.svg" alt="マネーアドバイザー美香" width="240" height="240" />
          </div>
          <div class="mika-promo__bubble">
            <h2 id="mika-promo-title">お金のこと、<br />一緒に楽しく学びませんか？🌱</h2>
            <p>株主優待・AI・節約・デジタル資産など<br />初心者さんにもわかりやすく<br />お伝えしています✨</p>
            <p class="mika-promo__name">マネーアドバイザー美香</p>
          </div>
        </div>
        <a class="mika-promo__cta" href="${LINE_OPEN_CHAT_URL}" target="_blank" rel="noopener noreferrer" aria-label="LINEオープンチャットに参加する（外部サイトが開きます）">
          オープンチャットに参加する📱✨
        </a>
        <p class="mika-promo__catch">スマホひとつで📱叶えられる未来✨💰</p>
      </section>`;
  }
}

if (globalThis.customElements && !customElements.get("mika-promo-section")) {
  customElements.define("mika-promo-section", MikaPromoSection);
}
