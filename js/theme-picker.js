// adapted from https://www.aleksandrhovhannisyan.com/blog/the-perfect-theme-switch/

const THEME_STORAGE_KEY = "theme";
const THEME_OWNER = document.documentElement;

// get the stored theme and apply it
const cachedTheme = localStorage.getItem(THEME_STORAGE_KEY);
if (cachedTheme) {
  THEME_OWNER.dataset[THEME_STORAGE_KEY] = cachedTheme;
} else {
  applyAutoTheme();
}

document.addEventListener("DOMContentLoaded", () => {
  const themePicker = document.getElementById("theme-picker");
  if (!themePicker) return;

  // set the theme picker to match the cached theme
  const systemThemeInput = themePicker.querySelector("input[checked]");
  if (cachedTheme && cachedTheme !== systemThemeInput.value) {
    systemThemeInput.removeAttribute("checked");
    themePicker
      .querySelector(`input[value="${cachedTheme}"]`)
      .setAttribute("checked", "");

    themeElements(cachedTheme);
  }

  themePicker.addEventListener("change", (e) => {
    const theme = e.target.value;
    if (theme === "auto") {
      applyAutoTheme();
      themeElements("auto");
    } else {
      THEME_OWNER.dataset[THEME_STORAGE_KEY] = theme;
      localStorage.setItem(THEME_STORAGE_KEY, theme);

      themeElements(theme);
    }
  });

  // Popup handling
  const themeMenu = document.getElementById("theme-menu");
  const themeMenuButton = document.getElementById("theme-menu-button");

  // toggle theme-menu visibility when clicking theme-menu-button
  themeMenuButton.addEventListener("click", () => {
    themeMenu.classList.toggle("hidden");
  });

  // hide theme-menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (
      !themeMenu.contains(event.target) &&
      !themeMenuButton.contains(event.target)
    ) {
      themeMenu.classList.add("hidden");
    }
  });
});

function applyAutoTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    THEME_OWNER.dataset[THEME_STORAGE_KEY] = "dark";
  } else {
    THEME_OWNER.dataset[THEME_STORAGE_KEY] = "light";
  }
  localStorage.removeItem(THEME_STORAGE_KEY);
}

function themeElements(theme) {
  const autoCheck = document.getElementById("auto-check");
  const lightCheck = document.getElementById("light-check");
  const darkCheck = document.getElementById("dark-check");

  const selectedThemeIcon = document.getElementById("selected-theme-icon");

  autoCheck.classList.add("invisible");
  lightCheck.classList.add("invisible");
  darkCheck.classList.add("invisible");

  selectedThemeIcon.classList.remove("icon-sun");
  selectedThemeIcon.classList.remove("icon-moon");
  selectedThemeIcon.classList.remove("icon-sun-moon");

  switch (theme) {
    case "light":
      lightCheck.classList.remove("invisible");
      selectedThemeIcon.classList.add("icon-sun");
      break;
    case "dark":
      darkCheck.classList.remove("invisible");
      selectedThemeIcon.classList.add("icon-moon");
      break;
    case "auto":
      autoCheck.classList.remove("invisible");
      selectedThemeIcon.classList.add("icon-sun-moon");
      break;
  }
}
