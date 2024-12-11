(function () {
  const load = () => {
    const body = document.querySelector("body");
    body.innerHTML = ""; 
    const message = document.createElement("p");
    message.textContent = "You are not allowed to watch YouTube Shorts";
    body.appendChild(message);

    const anchorTag = document.createElement("a");
    anchorTag.href = "https://www.youtube.com";
    anchorTag.innerText = "Visit YouTube";
    body.appendChild(anchorTag);
  };

  window.addEventListener("load", load);
})();
