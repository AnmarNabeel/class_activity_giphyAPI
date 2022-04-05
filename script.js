let btn = document.querySelector('header button');
let serachtext = document.querySelector('header input[type="text"]');
let searchResult = document.getElementById("searchResults");

btn.addEventListener("click", function () {
    searchResult.innerHTML = "";
    API(serachtext.value);
});


function API(keyword) {
    if (!keyword) {
        return;
    }



    var url = "https://api.giphy.com/v1/gifs/search";
    var params = "api_key=qsHdvCMjRcZ9NFViXqfGcgCsHxPD67uV&limit=5&q="+encodeURIComponent(keyword);
    var xhr = new XMLHttpRequest();
    

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            prosessResponse(this.responseText);
        }
    });

    xhr.open("GET", url + "?" + params);

    xhr.send();
}



function prosessResponse(responseText) {
    var resp = JSON.parse(responseText);

    for (item of resp.data) {
        let imgElem = document.createElement("img");
        imgElem.src = item.images.downsized_medium.url;
        imgElem.alt = item.title;
        searchResult.appendChild(imgElem);

    }
}