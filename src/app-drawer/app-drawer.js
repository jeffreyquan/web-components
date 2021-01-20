// https://github.com/wes566/side-drawer

const appDrawerTemplate = document.createElement("template");

appDrawerTemplate.innerHTML = `<style>
:host {
  visibility: hidden;
  transition: visibility 0.3s;
}

:host button {
  visibility: visible;
}

:host([open]) {
  visibility: visible;
}

::slotted(div) {
  box-sizing: border-box;
}

#drawer {
  position: fixed;
  z-index: 100;
  width: 50vw;
  max-width: 75vw;
  background-color: #ffffff;
  overflow: auto;
  overscroll-behavior: contain;
  backdrop-filter: blur(10px);

  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  box-sizing: border-box;
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}

:host([open]) #drawer {
  transform: none;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.5);
}

#freespace {
  position: fixed;
  z-index: 98;
  background-color: #000000;
  backdrop-filter: none;

  top: 0;
  bottom: 0;
  right: -30px; /* hide scrollbar until overscroll bug is fixed */
  height: 100vh;
  transition: opacity 0.25s ease-in-out 0.25s;
  width: calc(
    100vw + 30px
  ); /* put back to just 100vw once overscroll bug fixed */
  opacity: 0;
  visibility: hidden;

  overflow: auto;
  overscroll-behavior: contain;
}

:host([open]) #freespace {
  opacity: 0.7;
  visibility: visible;
}

#ifs {
  height: calc(100vh + 1px);
}
</style>
<div>
  <button class="toggle-drawer"></button>
  <div id="drawer"><slot></slot></div>
  <div id="freespace">
    <div id="ifs"></div>
  </div>
</div>
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
