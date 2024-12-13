// this script removes the yt shorts button from the main page to prevent you from watching shorts

(function () {
  const load = () => {
    const allBtns = document.querySelectorAll(
      ".yt-simple-endpoint.style-scope"
    );

    let seen = false;

    allBtns.forEach((btn) => {
      if (btn.title === "Shorts") {
        btn.style.display = "none";
        seen = true;
      }
    });

    if (!seen) {
      console.log("Shorts button not found. Retrying...");
      setTimeout(load, 100);
    }
  };

  load();
})();
