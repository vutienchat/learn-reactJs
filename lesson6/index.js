const Search = document.querySelector(".form-search");
Search.addEventListener("submit", (e) => {
  e.preventDefault();
  const textSearch = document.querySelector(".text-search").textContent.trim();
  const valueSearch = document.querySelector(".input_search").value;
  const re = new RegExp(valueSearch, "g");
  const resulte = textSearch.match(re);
  if (resulte) {
    document.querySelector(
      ".resulte-search"
    ).innerHTML = `<ul><li>Chữ  <h2 style="display: inline;">'${valueSearch}'</h2> xuất hiện lần đầu tại vị trí ${textSearch.indexOf(
      valueSearch
    )}</li><li>Chữ <h2 style="display: inline;">'${valueSearch}'</h2> xuất hiện ${
      resulte.length
    } lần</li></ul>`;
  } else {
    document.querySelector(
      ".resulte-search"
    ).innerHTML = `Không có <h2 style="display: inline;">'${valueSearch}'</h2>`;
  }
});
