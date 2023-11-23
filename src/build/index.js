"use strict";
(() => {
  // src/revealling.ts
  var Revealling = class {
    #revealElementsClasses = [];
    constructor(revealElementsClasses) {
      this.#revealElementsClasses = revealElementsClasses;
    }
  };

  // src/index.ts
  var setup = new Revealling([]);
  console.log(setup);
})();
