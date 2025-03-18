const tabsContent = {
  btn0: [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  btn1: [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  btn2: [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
};

// console.log(tabsContent["btn0"]);
// console.log("********************");
const btn_btn0 = document.querySelector(".btn-0");
const btn_btn1 = document.querySelector(".btn-1");
const btn_btn2 = document.querySelector(".btn-2");
const UlEl = document.querySelector(".ContentList");

const tabContentDisplay = function (btnnum) {
  UlEl.innerHTML = "";
  tabsContent[btnnum].forEach((el) => {
    const createliEl = document.createElement("li");
    createliEl.textContent = el;
    UlEl.appendChild(createliEl);
  });
};

const Handleclicks = function (btnDOM) {
  btnDOM.addEventListener("click", function (event) {
    const btn_click = event.target.id;
    if (btn_click === "btn-0") {
      tabContentDisplay("btn0");
    } else if (btn_click === "btn-1") {
      tabContentDisplay("btn1");
    } else {
      tabContentDisplay("btn2");
    }
  });
};

Handleclicks(btn_btn0);
Handleclicks(btn_btn1);
Handleclicks(btn_btn2);
