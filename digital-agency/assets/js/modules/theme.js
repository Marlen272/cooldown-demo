const STORAGE_KEY = "nw_theme";

export function initTheme() {
  const btn = document.getElementById("themeBtn");
  const label = document.getElementById("themeLabel");
  const root = document.documentElement;

  if (!btn || !label) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved === "light" || saved === "dark" ? saved : "dark";

  setTheme(initial);

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    label.textContent = theme === "dark" ? "Dark" : "Light";
  }
}
