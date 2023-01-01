$(function () {
  "use strict";

  // function fitMyText() {

  //     var fit__text = $(".fit__text");

  //     if (fit__text.length !== 0) {

  //         fit__text.fitText(1, { mixFontSize: '30px', maxFontSize: '45px' });

  //     }

  // }

  var type_d = "#typed";

  if ($(type_d).length) {
    var typed = new Typed(type_d, {
      stringsElement: "#typed-strings",
      typeSpeed: 40,
      backSpeed: 0,
      backDelay: 1500,
      startDelay: 1000,
      fadeOut: false,
      loop: true,
    });
  }

  // fitMyText();
});
