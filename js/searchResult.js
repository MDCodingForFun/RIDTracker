export const deleteSearchResult =() => {
    const parentElement = document.getElementById("searchContent");
    let child =parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};