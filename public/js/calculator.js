document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("calcBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const w = Number(document.getElementById("w").value);
    const h = Number(document.getElementById("h").value);
    const a = Number(document.getElementById("a").value);
    const r = document.getElementById("res");

    if (!w || !h || !a) {
      r.textContent = "Заполни все поля";
      return;
    }

    r.textContent =
      "≈ " + Math.round((10 * w + 6.25 * h - 5 * a + 5) * 1.55) + " ккал / день";
  });
});
