const targetSelector = "#top-level-buttons-computed";

function displaySaveVideoButton() {
  const videoTitleComponent = document.querySelector(targetSelector);

  if (
    videoTitleComponent &&
    !videoTitleComponent.querySelector(".save-video-button")
  ) {
    const saveVideoButton = createSaveVideoButton();

    saveVideoButton.addEventListener("click", () => {
      // if (saveVideoButton.classList.contains("saved")) {
      //   sendMessageToBackground("delete_video", {}, (response) => {
      //     if (response?.status === "success") {
      //       revertToSaveVideoButton(saveVideoButton);
      //     }
      //   });
      // } else {
      sendMessageToBackground("save_video", {}, (response) => {
        if (response?.status === "success") {
          updateButtonToSaved(saveVideoButton);
        }
      });
      // }
    });

    videoTitleComponent.prepend(saveVideoButton);

    checkIfVideoSaved((exists) => {
      if (exists) {
        updateButtonToSaved(saveVideoButton);
      }
    });
  }
}

// Observe changes in the DOM
const observer = new MutationObserver(() => displaySaveVideoButton());
observer.observe(document.body, { childList: true, subtree: true });

// Initial load
displaySaveVideoButton();
