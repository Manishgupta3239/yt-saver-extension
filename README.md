# YouTube Video Saver 🎥

**YouTube Video Saver** is a Chrome extension that lets you save YouTube videos inside your browser.

---

## 🚀 Installation

There are three ways to install the extension:

### 1. From Releases (Recommended)

- Go to the [Releases](./releases) page of this repository.
- Download the latest `.zip` package.
- Load it into Chrome using the steps in [Adding to Chrome](#-adding-to-chrome).

### 2. From Source Code

- Download this repository as a `.zip` or clone it.
- Inside the source, locate the `extension/` folder.
- Load that folder into Chrome using the steps in [Adding to Chrome](#-adding-to-chrome).

### 3. Build It Yourself

- Make sure you have [Node.js](https://nodejs.org) and npm installed.
- Clone this repository and install dependencies:
  ```bash
  npm install
  ```
- Build the extension:
  ```bash
  npm run build
  ```
- Load the generated `extension/` folder into Chrome using the steps in [Adding to Chrome](#-adding-to-chrome).

## 🧩 Adding to Chrome

1. Open Chrome and go to:
   ```
   chrome://extensions/
   ```
2. Enable **Developer mode** (toggle in the top-right).
3. Click **Load unpacked**.
4. Select the `extension/` folder from the repository (or the built folder if you ran `npm run build`).
5. The extension will now appear in your Chrome toolbar.
