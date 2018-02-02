const button = document.querySelector('#btn');

function reqListener(event) {
    //console.log(this.responseText);

    var xmlHTTPRequest = new XMLHttpRequest();
    xmlHTTPRequest.open("GET", "https://developer.github.com/v3/", true);
    xmlHTTPRequest.onload = function(event) {
        console.log('done');
        console.log(event);
        console.log(xmlHTTPRequest.responseText);
    };
    xmlHTTPRequest.send();
}
button.addEventListener("click", reqListener);
