/**
 * Created by kmmac on 7/6/2017.
 */
var characterArray = [];

function pushToDB() {
    var entry = document.getElementById('name').value + ":" +
        document.getElementById('level').value + ":" +
        document.getElementById('other').value;

    characterArray.push(entry);
    var uniqueID;
    getUserIP(function(ip){
        uniqueID = ip.toString();
        for(var i = 0; i < 3; i++) {
            //used to remove .'s from ip address so fetch will work.
            uniqueID = uniqueID.replace(".", "");
        }
        fetch('https://dungeon-master-utility.firebaseio.com/party' + uniqueID + '.json', {
            method: 'put',
            body: JSON.stringify(characterArray)
        });
    });
}

///MANY THANKS TO:
// http://ourcodeworld.com/articles/read/257/how-to-get-the-client-ip-address-with-javascript-only
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function() {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer().then(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function(reason) {
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}
///////////////////////////////////////////////////////////////////////
//back to my own code
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
            console.log(data[node]);
        }
    });
}

function createElement (tag,text) {
    el = document.createElement(tag);
    el.textContent = text;
    return el;
}