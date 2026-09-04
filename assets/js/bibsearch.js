document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("bibsearch");
  if (!input) return;
  const items = [...document.querySelectorAll(".bibliography > li")];
  const filter = () => {
    const term = input.value.trim().toLowerCase();
    let count = 0;
    items.forEach((item) => {
      const matches = item.textContent.toLowerCase().includes(term);
      item.hidden = !matches;
      if (matches) count++;
    });
    document.querySelectorAll("h2.bibliography").forEach((heading) => {
      let sibling = heading.nextElementSibling;
      let visible = false;
      while (sibling && sibling.tagName !== "H2") {
        if (sibling.tagName === "OL") {
          sibling.hidden = ![...sibling.children].some((item) => !item.hidden);
          visible ||= !sibling.hidden;
        }
        sibling = sibling.nextElementSibling;
      }
      heading.hidden = !visible;
    });
    document.getElementById("filter-status").textContent = count
      ? `${count} publication${count === 1 ? "" : "s"}${term ? " found" : ""}.`
      : "No matching publications. Try another term or clear the filter.";
  };
  const fromHash = () => {
    let value;
    try {
      value = decodeURIComponent(location.hash.slice(1));
    } catch {
      value = "";
    }
    // Publication anchors navigate to the entry rather than becoming filter terms.
    input.value = value && document.getElementById(value) ? "" : value;
    filter();
  };
  input.addEventListener("input", filter);
  document.getElementById("clear-filter").addEventListener("click", () => {
    input.value = "";
    history.replaceState(null, "", location.pathname + location.search);
    filter();
    input.focus();
  });
  window.addEventListener("hashchange", fromHash);
  fromHash();
});
