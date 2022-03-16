const data = [
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale American",
  },
];

const init = () => {
  const main = document.getElementById("cards");
  data.map((item, i) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";

    const number = document.createElement("div");
    number.innerText = i + 1;
    number.className = "number";

    const title = document.createElement("h2");
    title.innerText = item.title;

    const divider = document.createElement("hr");

    const sub = document.createElement("p");
    sub.innerText = item.sub;

    const text = document.createElement("p");
    text.innerText = item.text;

    const button = document.createElement("button");
    button.innerText = "details";

    const icon = document.createElement("span");
    icon.innerText = "arrow_forward";
    icon.className = "material-icons";

    main.append(cardWrapper);
    cardWrapper.append(number, title, divider, sub, text, button);
    button.append(icon);
  });
};

window.addEventListener("load", init);
