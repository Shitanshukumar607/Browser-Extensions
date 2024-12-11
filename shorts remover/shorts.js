(function () {
  const load = () => {
    const allBtns = document.querySelectorAll(
      ".yt-simple-endpoint.style-scope"
    );

    allBtns.forEach((btn) => {
      if (btn.title === "Shorts") {
        btn.style.display = "none"; 
      }
    });
  };

  window.addEventListener("load", () => {
    setTimeout(load, 2000);
  });
})();
