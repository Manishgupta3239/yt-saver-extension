function createSaveVideoButton() {
  const button = document.createElement("div");
  button.className = "save-video-button";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.marginRight = "10px";
  button.style.height = "36px";
  button.style.gap = "6px";
  button.style.padding = "0px 16px";
  button.style.borderRadius = "18px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  button.style.fontSize = "14px";
  button.style.fontWeight = "500";
  button.style.color = "#f1f1f1";
  button.style.userSelect = "none";

  const icon = document.createElement("img");
  icon.src = chrome.runtime.getURL("/icons/icon.png");
  icon.alt = "Save";
  icon.style.width = "20px";
  icon.style.height = "20px";

  const text = document.createElement("span");
  text.textContent = "Save Video";

  button.appendChild(icon);
  button.appendChild(text);

  // Hover effects
  button.addEventListener("mouseover", () => {
    if (!button.classList.contains("saved")) {
      button.style.backgroundColor = "#4c4c4b";
    }
  });
  button.addEventListener("mouseout", () => {
    if (!button.classList.contains("saved")) {
      button.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
  });

  return button;
}

function updateButtonToSaved(button) {
  const icon = button.querySelector("img");
  const text = button.querySelector("span");

  icon.src = chrome.runtime.getURL("/icons/checkmark.png");
  text.textContent = "Video Saved";
  button.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  button.style.color = "#FFFFFF";
  button.classList.add("saved");
}

function revertToSaveVideoButton(button) {
  const icon = button.querySelector("img");
  const text = button.querySelector("span");

  icon.src = chrome.runtime.getURL("/icons/icon.png");
  text.textContent = "Save Video";
  button.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  button.style.color = "#f1f1f1";
  button.classList.remove("saved");
}
