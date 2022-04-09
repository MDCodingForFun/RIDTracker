import {setSearchFocus, showClearTextButton, clearSearchText, clearPushListener} from "./searchBar.js";
import {deleteSearchResult} from "./searchResult.js";
import {
    getSearchTerm,
    retrieveSearchResult
} from "./dataFunctions.js"

document.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    //3 listeners clear text
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener);

    //listener on search bar
    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

//Procedural "workflow" function
const submitTheSearch = (e) => {
    e.preventDefault();
    deleteSearchResult();
    processTheSearch();
    setSearchFocus();
};

// Procedural
const processTheSearch = async() => {
    
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResult(searchTerm);
};