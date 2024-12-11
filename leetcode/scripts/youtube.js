(function () {
  const createYouTubeButton = () => {
    const ytBtn = document.createElement("div");
    ytBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-3.5 w-3.5">
      <path fill="currentColor" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
    </svg>
    <p>YouTube</p>
  `;

    ytBtn.classList.add(
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "text-caption",
      "px-2",
      "py-1",
      "gap-1",
      "rounded-full",
      "bg-fill-secondary",
      "cursor-pointer",
      "transition-colors",
      "hover:bg-fill-primary",
      "hover:text-text-primary",
      "text-sd-secondary-foreground",
      "hover:opacity-80"
    );

    ytBtn.addEventListener("click", () => {
      const currentUrl = window.location.href;
      const urlSegments = currentUrl.split("/");
      const searchQuery = urlSegments[4];
      const youtubeSearchUrl = `https://youtube.com/results?search_query=leetcode problem ${searchQuery}`;
      window.open(youtubeSearchUrl, "_blank");
    });

    return ytBtn;
  };

  // Function to append the YouTube button to the target div
  const appendYouTubeButton = () => {
    let targetDiv =
      document.querySelector("div.flex.gap-1:has(> div:nth-child(4))") ||
      document.querySelector("div.flex.gap-1:has(> div:nth-child(3))");

    if (targetDiv) {
      const ytBtn = createYouTubeButton();
      targetDiv.appendChild(ytBtn);
    } else {
      console.error("Target div not found.");
    }
  };

  window.addEventListener("load", appendYouTubeButton);
})();
