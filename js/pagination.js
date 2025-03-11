export function createPagination(containerSelector, totalPages) {
    const paginationContainer = document.querySelector(containerSelector);
    if (!paginationContainer) return;

    const currentPage = parseInt(paginationContainer.dataset.currentPage, 10);
    paginationContainer.innerHTML = ""; // Clear existing content

    const ul = document.createElement("ul");

    // Left Arrow (Disabled if on first page)
    const prevLi = document.createElement("li");
    prevLi.classList.add("pagination-arrow-links");
    prevLi.innerHTML = `<i class='bx bx-left-arrow-alt btn-arrow'></i>`;
    if (currentPage > 1) {
        prevLi.addEventListener("click", () => navigateToPage(currentPage - 1));
    } else {
        prevLi.classList.add("disabled");
    }
    ul.appendChild(prevLi);

    // Generate Pagination Numbers
    let startPage = Math.max(1, currentPage - 1); // One page behind
    let endPage = Math.min(totalPages, startPage + 4); // Show 5 pages max

    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement("li");
        li.classList.add("pagination-link");
        if (i === currentPage) {
            li.classList.add("active-pagination-link");
        }
        li.innerText = i;
        li.addEventListener("click", () => navigateToPage(i));
        ul.appendChild(li);
    }

    // Right Arrow (Disabled if on last page)
    const nextLi = document.createElement("li");
    nextLi.classList.add("pagination-arrow-links");
    nextLi.innerHTML = `<i class='bx bx-right-arrow-alt btn-arrow'></i>`;
    if (currentPage < totalPages) {
        nextLi.addEventListener("click", () => navigateToPage(currentPage + 1));
    } else {
        nextLi.classList.add("disabled");
    }
    ul.appendChild(nextLi);

    paginationContainer.appendChild(ul);
}

// Function to navigate to a new page
function navigateToPage(pageNumber) {
    window.location.href = `page${pageNumber}.html`; // Adjust URL structure if needed
}