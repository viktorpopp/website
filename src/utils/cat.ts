const CATS = [":3", ";3", ">:3", ">w<", "^w^", "^o^", "^-^", "^.^", ">.<"];

function displayCat(elementId: string) {
  const e = document.getElementById(elementId);
  if (!e) return;
  e.textContent = CATS[Math.floor(Math.random() * CATS.length)];
}

export default displayCat;
