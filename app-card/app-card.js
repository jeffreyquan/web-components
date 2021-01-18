const appCardtTemplate = document.createElement("template");

appCardtTemplate.innerHTML = `
<style>
 .card {
   padding: 16px;
  background-color: grey;
  border-radius: 4px;
  width: 200px;
  height: 200px;
 }
</style>
<div class="card">
  <slot></slot>
</div>
`;

class AppCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(appCardtTemplate.content.cloneNode(true));
  }
}

window.customElements.define("app-card", AppCard);
