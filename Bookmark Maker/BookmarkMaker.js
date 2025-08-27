let siteName = document.getElementById("siteNameInput");
let siteUrl = document.getElementById("siteUrlInput");
let bookmarkForm = document.getElementById("bookmarkForm");
let nameErrMsg = document.getElementById("siteNameErrMsg");
let urlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

siteName.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});

siteUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrMsg.textContent = "Required*";
    } else {
        urlErrMsg.textContent = "";
    }
});

bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let siteNameValue = siteName.value;
    let siteUrlValue = siteUrl.value;

    // Create styled bookmark card
    let container = document.createElement("div");
    container.className = "bookmark-card";

    let nameEl = document.createElement("p");
    nameEl.textContent = siteNameValue;
    nameEl.classList.add("sitename");

    let linkEl = document.createElement("a");
    linkEl.href = siteUrlValue;
    linkEl.textContent = siteUrlValue;
    linkEl.target = "_blank";
    linkEl.style.color = "#1a73e8";
    linkEl.style.textDecoration = "none";

    container.appendChild(nameEl);
    container.appendChild(linkEl);
    bookmarksList.appendChild(container);

    siteName.value = "";
    siteUrl.value = "";

    // Reset inputs
    siteName.value = "";
    siteUrl.value = "";

});