import html from "./app-card.html";
import css from "./app-card.css";

const appCardtTemplate = document.createElement("template");

appCardtTemplate.innerHTML = `
<style>
${css}
</style>
${html}
`;

class AppCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(appCardtTemplate.content.cloneNode(true));
  }
}

window.customElements.define("app-card", AppCard);
