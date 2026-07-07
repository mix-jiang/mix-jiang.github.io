/* 渲染 content.json + 分类筛选。无依赖,无构建。 */

const TYPE_LABEL = { project: "Project", post: "Post" };

let items = [];
let currentFilter = "all";

const stream = document.getElementById("stream");
const empty = document.getElementById("empty");

function render() {
  const visible = items
    .filter((it) => it.status === "published")
    .filter((it) => currentFilter === "all" || it.type === currentFilter)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  stream.innerHTML = visible.map(cardHTML).join("");
  empty.hidden = visible.length > 0;
}

function cardHTML(it) {
  const title = it.link
    ? `<a href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.title)}</a>`
    : esc(it.title);
  const tags = (it.tags || []).length
    ? `<p class="card-tags">${it.tags.map(esc).join(" · ")}</p>`
    : "";
  return `
    <article class="card">
      <p class="card-meta">${TYPE_LABEL[it.type] || esc(it.type)} · ${esc(it.date)}</p>
      <h2 class="card-title">${title}</h2>
      <p class="card-summary">${esc(it.summary)}</p>
      ${tags}
    </article>`;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((b) =>
      b.classList.toggle("is-active", b === btn)
    );
    render();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

fetch("content.json")
  .then((r) => r.json())
  .then((data) => {
    items = data.items || [];
    render();
  })
  .catch(() => {
    empty.hidden = false;
    empty.textContent = "内容加载失败(本地预览请用 python3 -m http.server 而非直接打开文件)。";
  });
