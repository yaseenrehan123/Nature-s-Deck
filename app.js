function showSidebar(){
    const sidebar = document.querySelector(".side-bar")
    if(sidebar != null){
        sidebar.classList.add('side-bar-enabled');
    }
}
function hideSidebar(){
    const sidebar = document.querySelector(".side-bar")
    if(sidebar != null){
        sidebar.classList.remove('side-bar-enabled');
    }
}
//Reusable Navbar
const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
       <div class="nav-bar">
        <div class="main-bar">
            <div class="main-bar-left-section">
                
            </div>

            <div class="main-bar-middle-section hide-on-mobile">
                <ul class="main-bar-list">
                    <li class="nav-bar-elements ">
                        <a class="a-removed-style" href="/Nature-s-Deck/index.html">Home</a>
                    </li>
                    <li class="nav-bar-elements">
                        <a class="a-removed-style" href="/Nature-s-Deck/deck-pages/page1.html">Deck</a>
                    </li>
                    <li class="nav-bar-elements">
                        <a class="a-removed-style" href="/Nature-s-Deck/about.html">About</a>
                    </li>
                    <li class="nav-bar-elements">
                        <a class="a-removed-style" href="/Nature-s-Deck/contacts.html">Contact</a>
                    </li>
                </ul>
            </div>

            <div class="main-bar-right-section">
                <div class="menu-icon" onclick = showSidebar()>
                    <i class='bx bx-menu'></i>
                </div>
                
            </div>
        </div>

        <div class="side-bar">
            <div class="side-bar-wrapper">
                <div class="cancel-icon" onclick = hideSidebar()>
                    <i class='bx bx-x'></i>
                </div>
                <ul class="side-bar-list">
                    <li class="nav-bar-elements"><a class="a-removed-style" href="/Nature-s-Deck/index.html">Home</a></li>
                    <li class="nav-bar-elements"><a class="a-removed-style" href="/Nature-s-Deck/deck-pages/page1.html">Deck</a></li>
                    <li class="nav-bar-elements"><a class="a-removed-style" href="/Nature-s-Deck/about.html">About</a></li>
                    <li class="nav-bar-elements"><a class="a-removed-style" href="/Nature-s-Deck/contacts.html">Contact</a></li>
                </ul>
            </div>
        </div>
       
    </div>
`
    document.body.appendChild(navTemplate.content);

//Pagination

let paginationLinks = document.getElementsByClassName('pagination-link');

// Retrieve the current value from localStorage or default to 1
let currentValue = parseInt(sessionStorage.getItem('currentValue')) || 1;



