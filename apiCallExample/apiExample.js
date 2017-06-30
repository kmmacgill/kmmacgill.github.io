/**
 * Created by kmmac on 6/30/2017.
 */
function getJSON(part) {
    var url = "https://dnd5eapi.co/api/";
    //FETCH INIT
    var myHeader = new Headers();

    var myInit = { method: 'GET',
                   headers: myHeader,
                   mode: 'cors',
                   cache: 'default' };
    var myRequest = new Request(url + part, myInit);

    return fetch(myRequest)
        .then(function (response) {
            response.forEach(function(element) {
                createElement(element);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function createCORSRequest(method, part) {
    var url = "https://dnd5eapi.co/api/" + part;
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

    } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

    }
    if (!xhr) {
        var chaoticList = document.getElementsByClassName('chaos_list');
        chaoticList.innerHTML = "";
        chaoticList.innerHTML = "CORS NOT SUPPORTED"
    }
}

function createElement (element) {
    var chaoticList = document.getElementsByClassName('chaos_list');
    chaoticList.innerHTML = "";
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute('href', element.url);
    listItem.innerHTML = element.name;
    link.addEventListener('click', function(event){
        getDetails(element.url);
    });
    listItem.appendChild(link);
    chaoticList.appendChild(listItem);
}

function getDetails(url) {

}