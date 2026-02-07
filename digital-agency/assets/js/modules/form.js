function showToast(toastEl, title, subtitle) {
  toastEl.innerHTML = `<strong>${title}</strong><small>${subtitle || ""}</small>`;
  toastEl.style.display = "block";

  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => (toastEl.style.display = "none"), 3200);
}

function msg(key, fallback) {
  const api = window.__NW_I18N__;
  return (api && api.getMsg(key)) || fallback;
}

export function initForm() {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");
  const hint = document.getElementById("formHint");
  if (!form || !toast || !hint) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    hint.textContent = "";

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name.length < 2) return (hint.textContent = msg("msg.name", "Name is too short."));
    if (!emailOk) return (hint.textContent = msg("msg.email", "Invalid email."));
    if (subject.length < 3) return (hint.textContent = msg("msg.subject", "Subject is too short."));
    if (message.length < 10) return (hint.textContent = msg("msg.message", "Message is too short."));

    form.reset();
    showToast(toast, msg("msg.sentTitle", "Message sent!"), msg("msg.sentDesc", "Demo form."));
  });
}
