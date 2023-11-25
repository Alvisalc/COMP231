 // JavaScript to handle the search functionality
 const searchContainer = document.getElementById('search-container');
 const searchInput = document.getElementById('search');
 const searchIcon = document.getElementById('search-icon');

 searchIcon.addEventListener('click', () => {
    
     alert(`Searching for: ${searchInput.value}`);
 });

function redirectTo(page) {
    const targetPage = `/${page}`;
    window.location.href = targetPage;
}

document.getElementById("freeTrialBtn").addEventListener("click", function() {
    window.location.href = "/JobSearch.html";
});

function home(){
    window.location.href = "/Home.html";
}
