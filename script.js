var red = "color:rgb(255,0,0);background:#1a1a1a;font-size:xx-large";
var grey = "color:white;background:#1a1a1a;font-size:xx-large";
console.log("%cS%cantosh %cP%candey %c©2020.", red, grey, red, grey, grey);

let dig = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

let encode = {
  0: [1, 2, 3, 5, 6, 7],
  1: [3, 6],
  2: [1, 3, 4, 5, 7],
  3: [1, 3, 4, 6, 7],
  4: [2, 4, 3, 6],
  5: [1, 2, 4, 6, 7],
  6: [1, 2, 5, 4, 6, 7],
  7: [1, 3, 6],
  8: [1, 2, 3, 4, 5, 6, 7],
  9: [1, 2, 3, 4, 6, 7],
};

writing = function (h1, h2, m1, m2) {
  for (i = 0; i < encode[h1].length; i++) {
    s = ".hhone-" + dig[encode[h1][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
  }

  for (i = 0; i < encode[h2].length; i++) {
    s = ".hhtwo-" + dig[encode[h2][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }

  for (i = 0; i < encode[m1].length; i++) {
    s = ".mmone-" + dig[encode[m1][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }

  for (i = 0; i < encode[m2].length; i++) {
    s = ".mmtwo-" + dig[encode[m2][i]];
    document.querySelector(s).style.setProperty("fill", "var(--coloncolor)");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 0.5vw var(--neon))");
  }
};

off = function (h1, h2, m1, m2) {
  for (i = 0; i < encode[h1].length; i++) {
    s = ".hhone-" + dig[encode[h1][i]];
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
  }

  for (i = 0; i < encode[h2].length; i++) {
    s = ".hhtwo-" + dig[encode[h2][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }

  for (i = 0; i < encode[m1].length; i++) {
    s = ".mmone-" + dig[encode[m1][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }

  for (i = 0; i < encode[m2].length; i++) {
    s = ".mmtwo-" + dig[encode[m2][i]];
    document
      .querySelector(s)
      .style.setProperty("filter", "drop-shadow(0 0 2px rgb(0,0,0,0)");
    document.querySelector(s).style.setProperty("fill", "rgb(10,10,10,0.2");
  }
};

window.onload = () => {
  // light = () => {
  //   document
  //     .getElementById("lightbulb")
  //     .style.setProperty("visibility", "hidden");
  //   document
  //     .getElementById("darkbulb")
  //     .style.setProperty("visibility", "visible");
  //   document
  //     .getElementById("darkbulb")
  //     .style.setProperty("filter", "drop-shadow(0 25px 30px black");
  //   document.documentElement.style.setProperty("--themecolor", "white");
  //   document.documentElement.style.setProperty("--themeinvert", "black");
  //   document.documentElement.style.setProperty("--coloncolor", "black");
  //   document.documentElement.style.setProperty("--neon", "rgb(0,0,0,0");
  //   document.documentElement.style.setProperty("--general", "rgb(71,71,71)");
  //   document.documentElement.style.setProperty("--general2", "rgb(55,55,55)");
  //   document.documentElement.style.setProperty("--black", "white");
  // };

  // dark = () => {
  //   document
  //     .getElementById("darkbulb")
  //     .style.setProperty("visibility", "hidden");
  //   document
  //     .getElementById("lightbulb")
  //     .style.setProperty("visibility", "visible");
  //   document.documentElement.style.setProperty("--themecolor", "black");
  //   document.documentElement.style.setProperty("--themeinvert", "white");
  //   document.documentElement.style.setProperty("--coloncolor", "red");
  //   document.documentElement.style.setProperty("--neon", "rgb(255, 0, 0, 0.7)");
  //   document.documentElement.style.setProperty("--general", "rgb(144,144,144");
  //   document.documentElement.style.setProperty(
  //     "--general2",
  //     "rgb(168,168,168)"
  //   );

  //   document.documentElement.style.setProperty("--black", "black");
  //   // document.documentElement.style.setProperty(
  //   //   "--bluerotate",
  //   //   "hue-rotate(-0deg)"
  //   // );
  // };

  function main() {
    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();
    var h1 = Math.floor(hh / 10);
    var h2 = Math.floor(hh % 10);
    var m1 = Math.floor(mm / 10);
    var m2 = mm % 10;

    off(8, 8, 8, 8);
    writing(h1, h2, m1, m2);

    setTimeout(main, 500);
  }
  main();
};
