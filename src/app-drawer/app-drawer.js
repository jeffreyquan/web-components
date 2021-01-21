// copied from https://github.com/wes566/side-drawer to learn about web components
import html from "./app-drawer.html";
import css from "./app-drawer.css";

const appDrawerTemplate = document.createElement("template");

appDrawerTemplate.innerHTML = `
<style>
${css}
</style>
${html}
`;

class AppDrawer extends HTMLElement {
  constructor() {
    super();

    this.open = false;

    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(appDrawerTemplate.content.cloneNode(true));

    this.freeSpaceDiv = shadowRoot.getElementById("freespace");

    this.shadowRoot.querySelector("button").innerText = this.getAttribute(
      "name"
    );
  }

  openDrawer() {
    this.open = true;
  }

  connectedCallback() {
    const openButton = this.shadowRoot.querySelector(".toggle-drawer");

    openButton.addEventListener("click", () => {
      this.openDrawer();
    });

    if (this.freeSpaceDiv) {
      this.freeSpaceDiv.addEventListener("click", () =>
        this.handleFreeSpaceDivClick()
      );
    }

    this.upgradeProperty("open");
  }

  disconnectedCallback() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  handleKeyUp(event) {
    if (event.altKey) {
      return;
    }

    switch (event.keyCode) {
      case 27:
        event.preventDefault();
        this.open = false;
        break;
    }
  }

  upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  get open() {
    return this.hasAttribute("open");
  }

  set open(isOpen) {
    if (isOpen) {
      if (!this.hasAttribute("open")) {
        this.setAttribute("open", "");
      }
    } else {
      if (this.hasAttribute("open")) {
        this.removeAttribute("open");
      }
    }
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "open") {
      if (!this.open) {
        this.setAttribute("tabindex", "-1");
        this.setAttribute("aria-disabled", "true");

        document.removeEventListener("keyup", (e) => this.handleKeyUp(e));

        this.dispatchEvent(
          new CustomEvent("close", {
            bubbles: true,
          })
        );
      } else {
        this.setAttribute("tabindex", "0");
        this.setAttribute("aria-disabled", "false");

        this.focus({
          preventScroll: true,
        });

        document.addEventListener("keyup", (e) => this.handleKeyUp(e));

        this.dispatchEvent(
          new CustomEvent("open", {
            bubbles: true,
          })
        );
      }
    }
  }

  handleFreeSpaceDivClick(event) {
    this.open = false;
  }
}

window.customElements.define("app-drawer", AppDrawer);
