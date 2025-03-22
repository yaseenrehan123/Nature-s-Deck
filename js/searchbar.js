
export function initializeSearchbar(){
    const searchbarContainer = document.querySelector('.searchbar-container');
    const searchbarTemplate = `
<input type="text" class="searchbar">
`
if(searchbarContainer){
    searchbarContainer.innerHTML = searchbarTemplate;
}
};
