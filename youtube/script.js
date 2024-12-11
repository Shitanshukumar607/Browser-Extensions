(function () {
  const playbackSpeeds = [
    "0.25",
    "0.5",
    "0.75",
    "Normal",
    "1.25",
    "1.5",
    "1.75",
    "2",
  ];
  let currentSpeedIndex = 3; // Default index for 'Normal' speed
  let videoPlayer = null;
  let settingsButton = null;

  const initializeVideoPlayer = () => {
    videoPlayer = document.querySelector(".html5-video-player");

    if (!videoPlayer) {
      console.log("Video player not found. Retrying...");
      setTimeout(initializeVideoPlayer, 500);
      return;
    }

    locateSettingsButton();
  };

  const locateSettingsButton = () => {
    settingsButton = document.querySelector(".ytp-settings-button");

    if (settingsButton) {
      settingsButton.click();
      locateSpeedOptionButton();
    } else {
      console.log("Settings button not found. Retrying...");
      setTimeout(locateSettingsButton, 500);
    }
  };

  const locateSpeedOptionButton = () => {
    const speedOptionButtons = document.querySelectorAll(".ytp-menuitem-label");
    let speedOptionFound = false;

    speedOptionButtons.forEach((button) => {
      if (button.textContent === "Playback speed") {
        button.click();
        adjustPlaybackSpeed(playbackSpeeds[currentSpeedIndex]);
        speedOptionFound = true;
      }
    });

    if (!speedOptionFound) {
      console.log("Playback speed option button not found. Retrying...");
      setTimeout(locateSpeedOptionButton, 500);
    }
  };

  const adjustPlaybackSpeed = (speed) => {
    const speedOptionButtons = document.querySelectorAll(".ytp-menuitem-label");
    let speedOptionSelected = false;

    speedOptionButtons.forEach((button) => {
      if (button.textContent === speed) {
        button.click();
        console.log(`Playback speed changed to: ${speed}`);
        speedOptionSelected = true;
        settingsButton.click();
      }
    });

    if (!speedOptionSelected) {
      console.log("Desired speed option not found. Retrying...");
      setTimeout(() => adjustPlaybackSpeed(speed), 500);
    }
  };

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
      if (event.key === "=" || event.key === "+") {
        event.preventDefault();
        increasePlaybackSpeed();
      }

      if (event.key === "_" || event.key === "-") {
        event.preventDefault();
        decreasePlaybackSpeed();
      }
    }
  });

  const increasePlaybackSpeed = () => {
    currentSpeedIndex = (currentSpeedIndex + 1) % playbackSpeeds.length;
    initializeVideoPlayer();
    displaySpeedPopup(playbackSpeeds[currentSpeedIndex]);
  };

  const decreasePlaybackSpeed = () => {
    currentSpeedIndex =
      (currentSpeedIndex - 1 + playbackSpeeds.length) % playbackSpeeds.length;
    initializeVideoPlayer();
    displaySpeedPopup(playbackSpeeds[currentSpeedIndex]);
  };

  const displaySpeedPopup = (speed) => {
    if (speed === "Normal") speed = "1";

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = `Video playing at ${speed}x speed`.trim();

    document.body.appendChild(popup);

    popup.classList.add("show");

    // Remove popup after 2 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => document.body.removeChild(popup), 150);
    }, 2000);
  };

  window.addEventListener("load", initializeVideoPlayer);
})();
