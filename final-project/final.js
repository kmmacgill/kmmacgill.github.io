/**
 * Created by kmmac on 7/6/2017.
 */
var characterArray = [];

function pushToDB() {
    var entry = document.getElementById('name').value + ":" +
        document.getElementById('level').value + ":" +
        document.getElementById('other').value;

    characterArray.push(entry);

    fetch('https://dungeon-master-utility.firebaseio.com/party.json', {
        method: 'put',
        body: JSON.stringify(characterArray)
    });
}

function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function pullFromDB() {
    url = 'https://dungeon-master-utility.firebaseio.com/party.json';
    getJSON(url).then(function(data) {
        for (var node in data) {
            console.log(node.value);
        }
    });
}

function createElement (tag,text) {
    el = document.createElement(tag);
    el.textContent = text;
    return el;
}