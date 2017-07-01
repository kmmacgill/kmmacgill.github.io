/**
 * Created by kmmac on 6/30/2017.
 */
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function fetchShips(url) {
    var timeToHideIt = document.getElementById('apiCallButton');
    timeToHideIt.style.display = 'none';

    url = url.attributes.href.value;
    if (url === undefined || url === 'null'){
        url = 'https://swapi.co/api/starships/';
    }
    var listOStuff = document.getElementById('listOfStuff');
    listOStuff.innerHTML = "";
    var details = document.getElementById('details');
    details.innerHTML = "";
    var prev = document.getElementById('prev-button');
    var next = document.getElementById('next-button');

    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        for (var node in data) {
            if (node === 'next') {
                next.setAttribute('href', data[node]);
                next.style.visibility = 'visible';
            } else if (node === 'previous') {
                prev.setAttribute('href', data[node]);
                prev.style.visibility = 'visible';
            }
        }

        var results = data.results;

        results.forEach(function(item){
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.setAttribute('href', item.url);
            listItem.innerHTML = item.name;
            listItem.addEventListener('click', function(event){
                details.innerHTML = "";
                getJSON(item.url).then(function (dat) {
                    for (var key in dat) {
                        var entry = document.createElement('p');
                        if (key === 'films') {
                            var appearances = dat[key];
                            for (var appearance in appearances) {
                                getJSON(appearances[appearance]).then(function (da) {
                                    entry.innerHTML += "<b>Appeared in:</b> " + da.title + "<br />";
                                });
                            }
                        } else {
                            entry.innerHTML += "<b>" + key + ":</b> " + dat[key] + "<br />";
                        }
                        if (entry.innerHTML !== "") {
                            details.appendChild(entry);
                        }
                    }
                });
            });
            listItem.appendChild(link);
            listOStuff.appendChild(listItem);
        });
    });
}