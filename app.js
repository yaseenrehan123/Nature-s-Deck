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
                            <a class="a-removed-style" href="index.html">Home</a>
                        </li>
                        <li class="nav-bar-elements">
                            <a class="a-removed-style" href="deck-pages/page1.html">Deck</a>
                        </li>
                        <li class="nav-bar-elements">
                            <a class="a-removed-style" href="about.html">About</a>
                        </li>
                        <li class="nav-bar-elements">
                            <a class="a-removed-style" href="contacts.html">Contact</a>
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
                        <li class="nav-bar-elements"><a class="a-removed-style" href="index.html">Home</a></li>
                        <li class="nav-bar-elements"><a class="a-removed-style" href="deck-pages/page1.html">Deck</a></li>
                        <li class="nav-bar-elements"><a class="a-removed-style" href="about.html">About</a></li>
                        <li class="nav-bar-elements"><a class="a-removed-style" href="contacts.html">Contact</a></li>
                    </ul>
                </div>
            </div>
           
        </div>
`
    document.body.appendChild(navTemplate.content);

//Pagination
let paginationWrapper = document.getElementById('pagination-wrapper')
const paginationTemplate = `
     <div class="pagination">
   
        <ul>
            <li class="pagination-arrow-links" onclick = backBtn()>
                <i class='bx bx-left-arrow-alt btn-arrow'></i>
            </li>
            
                <a href="page1.html">
                    <li value="1" class="pagination-link active-pagination-link" onclick = activeLink()>
                        1
                    </li>
                </a>
            
                <a href="page2.html">
                    <li value="2" class="pagination-link active-pagination-link" onclick = activeLink()>
                        2
                    </li>
                </a>

                <a href="page3.html">
                    <li value="3" class="pagination-link active-pagination-link" onclick = activeLink()>
                        3
                    </li>
                </a>

                <a href="page4.html">
                    <li value="4" class="pagination-link active-pagination-link" onclick = activeLink()>
                        4
                    </li>
                </a>

                <a href="page5.html">
                    <li value="5" class="pagination-link active-pagination-link" onclick = activeLink()>
                        5
                    </li>
                </a>
            <li class="pagination-arrow-links" onclick = forwardBtn()>
                <i class='bx bx-right-arrow-alt btn-arrow pagination-arrow-links' ></i>
            </li>
        </ul>

    </div>
`;
// Add the pagination template to the wrapper
paginationWrapper.innerHTML = paginationTemplate;

let paginationLinks = document.getElementsByClassName('pagination-link');

// Retrieve the current value from localStorage or default to 1
let currentValue = parseInt(sessionStorage.getItem('currentValue')) || 1;

removeActiveClass();
assignActiveClass();

function activeLink(){
    removeActiveClass()
    event.target.classList.add('active-pagination-link');
    currentValue = parseInt(event.target.getAttribute('value'));
     // Save the current value to localStorage
     sessionStorage.setItem('currentValue', currentValue);
}
function backBtn(){
    if(currentValue > 1){
        removeActiveClass()
        currentValue--;
        assignActiveClass()
         // Save the current value to localStorage
         sessionStorage.setItem('currentValue', currentValue);
    }
}
function forwardBtn(){
    if(currentValue < paginationLinks.length){
        removeActiveClass();
        currentValue++;
       assignActiveClass()
        // Save the current value to localStorage
        sessionStorage.setItem('currentValue', currentValue);
    }
}
function removeActiveClass(){
    for(i of paginationLinks){
        i.classList.remove('active-pagination-link');
    }
}
function assignActiveClass(){
    paginationLinks[currentValue-1].classList.add('active-pagination-link');
}
