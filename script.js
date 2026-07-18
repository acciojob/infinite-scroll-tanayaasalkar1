const list = document.getElementById("infi-list");
let itemCount = 1;

// Function to add items
function addItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    li.innerText = `List Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Infinite scrolling
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
    addItems(2);
  }
});