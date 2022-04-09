export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").value.trim();
    const regex = /[]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, "")
    return searchTerm;
    // console.log(searchTerm);
};

// export const retrieveSearchResult = async (searchTerm) => {
//     const foundRID = getRID(searchTerm);
//     let resultArray = [];
//     console.log(resultArray);
//     if (foundRID.hasOwnProperty("RID")) {
//         resultArray = processRIDResult (foundRID.RID);
//     }
//     return resultArray;
// }
const searchResult = document.getElementById("searchContent")
export const retrieveSearchResult = async (searchTerm) => {
    const res = await fetch('https://script.google.com/macros/s/AKfycby_gnGan8rqByR8QPJ4klh384tLoW8uCwvBX7-Et5ZO_OOSNGOn3aoQaWHaNU0hdzoq/exec');
    const data = await res.json();
    // console.log(data);
    
    
    let match = data.find(item => item.RID === searchTerm);
    //  console.log(match.hasOwnProperty("RID"));
        if (match === undefined) {
            console.log("Not found");
            document.getElementById("searchContent").innerHTML += `
            <p>No result found for ${searchTerm}.</p>`;
        }
        else {
            outputHtml(match);
        }
      
};  
       
const outputHtml = (match) => {
     console.log(typeof match);
     document.getElementById("searchContent").innerHTML += `
            <p>Result found for Transaction number ${match.RID}.</p>
            <p>You may claim your National ID at: </p>
            <p>${match.Location}.</p>
            <p>Bring any of the documents/ID listed <a href="./docsList.html" target="_blank"> HERE </a>.`;

};