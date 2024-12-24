//this script blocks access to yt shorts by replacing the page content with a message

(function () {
  const notAllowedMessage = ` <p>You are not allowed to watch YouTube Shorts </p> <a href="https://www.youtube.com">Visit YouTube</a>`;

  const AllowedMessage = `<p>Refresh the page to go back to original content</p>`;

  let wasBlocked = false;
  const blockShorts = (msg) => {
    document.body.innerHTML = "";
    document.body.classList.add("blocker-container");
    document.body.innerHTML = msg;
  };

  setInterval(() => {
    if (window.location.href.includes("/shorts/")) {
      blockShorts(notAllowedMessage);
      wasBlocked = true;
    } else if (wasBlocked) {
      window.location.href = blockShorts(AllowedMessage);
      wasBlocked = false;
    }
  }, 1000);
})();
