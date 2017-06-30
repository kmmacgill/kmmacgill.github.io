/**
 * Created by kmmac on 6/30/2017.
 */
function getJSON(part) {
    var url = "http://dnd5eapi.co/api/";
    return fetch(url+part)
        .then(function (response) {
            response.forEach(function(element) {
                createElement(element);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
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