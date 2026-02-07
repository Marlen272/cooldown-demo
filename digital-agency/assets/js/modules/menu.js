export function initMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobilePanel = document.getElementById("mobilePanel");
  if (!menuBtn || !mobilePanel) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobilePanel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobilePanel.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
