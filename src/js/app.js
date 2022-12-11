import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.getElementsByClassName('hot');
  for(let i = 0 ; i<elements.length;i++){
    elements[i].insertAdjacentText('beforeend', "🔥")
  }
  // This block will be executed once the page is loaded and ready
});
