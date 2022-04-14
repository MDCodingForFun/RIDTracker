export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").value.trim();
    const regex = /[]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, "")
    return searchTerm;
};


const searchResult = document.getElementById("searchContent")
export const retrieveSearchResult = async (searchTerm) => {
    const res = await fetch('https://script.google.com/macros/s/AKfycby_gnGan8rqByR8QPJ4klh384tLoW8uCwvBX7-Et5ZO_OOSNGOn3aoQaWHaNU0hdzoq/exec');
    const data = await res.json();
    
    
    let match = data.find(item => item.RID === searchTerm);
        if (match === undefined) {
            console.log("Not found");
            document.getElementById("searchContent").innerHTML += `
            <div class="rows row1">
                <p>No match found for Transaction Number:</p>
                <p>${searchTerm}</p>
            </div>`;
        }
        else {
            outputHtml(match);
        }
      
};  
       
const outputHtml = (match) => {
     console.log(typeof match);
     document.getElementById("searchContent").innerHTML += `
                <div class="rows row1">
                    <p>Result found for Transaction Number:</p>
                    <p>${match.RID}</p>
                </div>
                <div class="rows row2">
                    <p>You may claim your Phil ID (National ID) at: </p>
                    <p>${match.Location}</p>
                </div>
                <div class="rows row3">
                    <p>
                    Bring your transaction slip and any of the IDs/Documents listed <a href="docsList.html" target="blank">HERE.</a>
                    </p>
                </div>`;

};