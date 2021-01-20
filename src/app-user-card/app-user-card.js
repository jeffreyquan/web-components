// https://www.youtube.com/watch?v=PCWaFLy3VUo&ab_channel=TraversyMedia
import html from "./template.html";
import style from "./style.css";

const appUserCardTemplate = document.createElement("template");
appUserCardTemplate.innerHTML = `
<style>
${style}
</style>
${html}
`;

class AppUserCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(appUserCardTemplate.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");

    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector(".info");
    const toggleBtn = this.shadowRoot.querySelector("#toggle-info");

    if (this.showInfo) {
      info.style.display = "block";
      toggleBtn.innerText = "Hide Info";
    } else {
      info.style.display = "none";
      toggleBtn.innerText = "Show Info";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => {
        this.toggleInfo();
      });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define("app-user-card", AppUserCard);
