function loadHTML() {
  document.getElementById('cssStyle').disabled = true;
  removeInteractiveElements();
}

function loadHTMLCSS() {
  document.getElementById('cssStyle').disabled = false;
  removeInteractiveElements();
}

function loadHTMLCSSJS() {
  document.getElementById('cssStyle').disabled = false;
  addInteractiveElements();
}

function addInteractiveElements() {
  let content = document.getElementById('content');
  let btn = document.createElement('button');
  btn.innerHTML = "Click Me for a Surprise!";
  btn.onclick = function() {
      alert("You're exploring the interactive JavaScript world!");
  };
  btn.id = "interactiveButton";
  content.appendChild(btn);
}

function removeInteractiveElements() {
  let interactiveButton = document.getElementById('interactiveButton');
  if (interactiveButton) {
      interactiveButton.remove();
  }
}
