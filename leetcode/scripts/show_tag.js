(function () {
  function simulateClickActions() {
    const popupDivSelector =
      ".relative.inline-flex.items-center.justify-center.font-medium.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-1.focus-visible\\:ring-sd-ring.disabled\\:pointer-events-none.disabled\\:opacity-50.border.border-sd-input.bg-transparent.hover\\:bg-sd-accent.text-sd-foreground.hover\\:text-sd-accent-foreground.h-7.text-xs.rounded-full.px-3";

    const showTagsBtnId = "showTags";

    const popupDiv = document.querySelector(popupDivSelector);

    if (popupDiv) {
      popupDiv.click();
      console.log("PopupDiv opened");

      setTimeout(() => {
        const showTagsBtn = document.getElementById(showTagsBtnId);

        if (showTagsBtn) {
          showTagsBtn.click();
          console.log("showTagsBtn clicked");
        }

        popupDiv.click();
        console.log("popupDiv closed");
      }, 150);
    }
  }

  window.addEventListener("load", () => {
    setTimeout(simulateClickActions, 500);
  });
})();
