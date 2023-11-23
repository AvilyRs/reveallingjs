"use strict";
(() => {
  // src/revealling.ts
  var Revealling = class {
    #hideClass = "reveallingHideElement";
    #showClass = "reveallingShowElement";
    #elements = null;
    constructor() {
      this.#elements = document.getElementsByClassName("reveal");
      this.#initialize();
    }
    #hideElements() {
      if (this.#elements !== null) {
        for (let item of this.#elements) {
          const elementClass = item.attributes.getNamedItem("class")?.value;
          item.setAttribute("class", `${elementClass} reveallingHideElement`);
        }
      }
    }
    #showElements() {
      if (this.#elements !== null) {
        for (let item of this.#elements) {
          const elementClass = item.attributes.getNamedItem("class")?.value?.replace(
            this.#hideClass,
            this.#showClass
          );
          item.setAttribute("class", elementClass || "");
        }
      }
    }
    #initialize() {
      this.#hideElements();
      setTimeout(() => {
        this.#showElements();
      }, 1e3);
    }
  };

  // src/index.ts
  new Revealling();
})();
