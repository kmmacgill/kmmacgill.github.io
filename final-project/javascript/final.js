/**
 * Created by kmmac on 7/6/2017.
 */
var characterArray = [];
var api = 'http://www.dnd5eapi.co/api/';
var climateCreatures = null;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNPC(){
    generateName();
    generateRace();
    generateGender();
    generateAge();
    generateClass();
    generateScores();
    generateProfession();
}

var NAME_PARTS = [
    ["A", "bb", "a"] ,["Ada","bl","ab"],["Aki","bold","ac"],["Al","br","ace"],
    ["Ali","bran","ach"],["Alo","can","ad"],["Ana","carr","adle"],["Ani","ch","af"],
    ["Ba","cinn","ag"],["Be","ck","ah"],["Bo","ckl","ai"],["Bra","ckr","ak"],
    ["Bro","cks","aker"],["Cha","dd","al"],["Chi","dell","ale"],["Da","dr","am"],
    ["De","ds","an"],["Do","fadd","and"],["Dra","fall","ane"],["Dro","farr","ar"],
    ["Eki","ff","ard"],["Eko","fill","ark"],["Ele","fl","art"],["Eli","fr","ash"],
    ["Elo","genn","at"],["Er","gg","ath"],["Ere","gl","ave"],["Eri","gord","ea"],
    ["Ero","gr","eb"],["Fa","gs","ec"],["Fe","h","ech"],["Fi","hall","ed"],
    ["Fo","hark","ef"],["Fra","hill","eh"],["Gla","hork","ek"],["Gro","jenn","el"],
    ["Ha","kell","elle"],["He","kill","elton"],["Hi","kk","em"],["Illia","kl","en"],
    ["Ira","klip","end"],["Ja","kr","ent"],["Jo","krack","enton"],["Ka","ladd","ep"],
    ["Kel","lah","eq"],
    ["Ki","land","er"],["Kra","lark","esh"],["La","ld","ess"],["Le","ldr","ett"],
    ["Lo","lind","ic"],["Ma","ll","ich"],["Me","ln","id"],["Mi","lord","if"],
    ["Mo","ls","ik"],["Na","matt","il"],["Ne","mend","im"],["No","mm","in"],
    ["O","ms","ion"],["Ol","nd","ir"],["Or","nett","is"],["Pa","ng","ish"],
    ["Pe","nk","it"],["Pi","nn","ith"],["Po","nodd","ive"],["Pra","ns","ob"],
    ["Qua","nt","och"],["Qui","part","od"],["Quo","pelt","odin"],["Ra","pl","oe"],
    ["Re","pp","of"],["Ro","ppr","oh"],["Sa","pps","ol"],["Sca","rand","olen"],
    ["Sco","rd","omir"],["Se","resh","or"],["Sha","rn","orb"],["She","rp","org"],
    ["Sho","rr","ort"],["So","rush","os"],["Sta","salk","osh"],["Ste","sass","ot"],
    ["Sti","sc","oth"],["Stu","sh","ottle"],["Ta","sp","ove"],["Tha","ss","ow"],
    ["The","st","ox"],["Tho","tall","ud"],["Ti","tend","ule"],["To","told","umber"],
    ["Tra","v","un"],["Tri","vall","under"],["Tru","w","undle"],["Ul","wall","unt"],
    ["Ur","wild","ur"],["Va","will","us"],["Vo","x","ust"],["Wra","y","ut"],
    ["Xa","yang",""],["Xi","yell",""],["Zha","z",""],["Zho","zenn",""]];
function generateName()
{
    var num1 = Math.floor((Math.random() * 100) + 1);
    var num2 = Math.floor((Math.random() * 100) + 1);
    var num3 = Math.floor((Math.random() * 100) + 1);
    document.getElementById('name').innerHTML = NAME_PARTS[num1][0] + NAME_PARTS[num2][1] + NAME_PARTS[num3][2];
}
var races = [
    "Aasimar",
    "Deep Gnome","Deep Gnome","Deep Gnome","Deep Gnome","Deep Gnome","Deep Gnome",
    "Dragonborn","Dragonborn","Dragonborn","Dragonborn","Dragonborn","Dragonborn",
    "Dragonborn","Dragonborn","Dragonborn","Dragonborn","Dragonborn","Dragonborn",
    "Dwarf: Mountain","Dwarf: Hill","Dwarf: Mountain","Dwarf: Hill","Dwarf: Mountain","Dwarf: Hill",
    "Dwarf: Mountain","Dwarf: Hill","Dwarf: Mountain","Dwarf: Hill","Dwarf: Mountain","Dwarf: Hill",
    "Dwarf: Mountain","Dwarf: Hill","Dwarf: Mountain","Dwarf: Hill","Dwarf: Mountain","Dwarf: Hill",
    "Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: Drow",
    "Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: Drow",
    "Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: Drow",
    "Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: High","Elf: Wood","Elf: Drow",
    "Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain",
    "Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain",
    "Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain",
    "Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain","Gnome: Forest","Gnome: Mountain",
    "Goliath","Goliath","Goliath","Halfling: Lightfoot","Halfling: Stout",
    "Halfling: Lightfoot","Halfling: Stout","Halfling: Lightfoot","Halfling: Stout",
    "Halfling: Lightfoot","Halfling: Stout","Halfling: Lightfoot","Halfling: Stout",
    "Halfling: Lightfoot","Halfling: Stout","Halfling: Lightfoot","Halfling: Stout",
    "Halfling: Lightfoot","Halfling: Stout","Halfling: Lightfoot","Halfling: Stout",
    "Halfling: Lightfoot","Halfling: Stout","Halfling: Lightfoot","Halfling: Stout",
    "Halfling: Lightfoot","Halfling: Stout","Halfling: Lightfoot","Halfling: Stout",
    "Halfling: Lightfoot","Halfling: Stout","Half-Elf","Half-Orc","Half-Elf","Half-Orc",
    "Half-Elf","Half-Orc","Half-Elf","Half-Orc","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Human",
    "Human","Human","Human","Human","Human","Human","Human","Human","Human","Kenku",
    "Kobold","Lizardfolk","Orc","Tabaxi","Tiefling","Tiefling","Tiefling","Tiefling",
    "Tiefling","Tiefling","Triton","Yuan-Ti Pureblood",
    "Aarakocra","Anthropomorphic Mice","Changeling","Changeling","Changeling","Changeling",
    "Merfolk","Minotaur","Vampire","Vampire","Vampire","Vampire","Vampire","Vampire"];
function generateRace(){
    var random = Math.floor((Math.random() * 254) + 1);
    document.getElementById('race').innerHTML = races[random];
}

var genders = ['male','female']
function generateGender() {
    var num = Math.floor(Math.random() * 10) + 1;
    if (num % 2 === 0) {
        num = 0;
    } else {num = 1;}
    document.getElementById('gender').innerHTML = genders[num];
}

function generateAge() {
    var race = document.getElementById('race').innerHTML;
    race = race.replace("Race: ", "");
    var maxAge;
    switch (race ) {
        case 'Aasimar':
            maxAge = 100;
            break;
        case 'Deep Gnome':
            maxAge = 500;
            break;
        case 'Dragonborn':
            maxAge = 100;
            break;
        case 'Dwarf: Mountain':
            maxAge = 400;
            break;
        case 'Dwarf: Hill':
            maxAge = 400;
            break;
        case 'Elf: High':
            maxAge = 800;
            break;
        case 'Elf: Wood':
            maxAge = 800;
            break;
        case 'Elf: Drow':
            maxAge = 800;
            break;
        case 'Gnome: Forest':
            maxAge = 500;
            break;
        case 'Gnome: Mountain':
            maxAge = 500;
            break;
        case 'Goliath':
            maxAge = 95;
            break;
        case 'Halfling: Lightfoot':
            maxAge = 250;
            break;
        case 'Halfling: Stout':
            maxAge = 250;
            break;
        case 'Half-Elf':
            maxAge = 200;
            break;
        case 'Half-Orc':
            maxAge = 75;
            break;
        case 'Human':
            maxAge = 85;
            break;
        case 'Kenku':
            maxAge = 60;
            break;
        case 'Kobold':
            maxAge = 400;
            break;
        case 'Lizardfolk':
            maxAge = 120;
            break;
        case 'Orc':
            maxAge = 75;
            break;
        case 'Tabaxi':
            maxAge = 85;
            break;
        case 'Tiefling':
            maxAge = 80;
            break;
        case 'Triton':
            maxAge = 200;
            break;
        case 'Yuan-Ti Pureblood':
            maxAge = 120;
            break;
        case 'Aarakocra':
            maxAge = 200;
            break;
        case 'Anthropomorphic Mice':
            maxAge = 400;
            break;
        case 'Changeling':
            maxAge = 400;
            break;
        case 'Merfolk':
            maxAge = 50;
            break;
        case 'Minotaur':
            maxAge = 150;
            break;
        case 'Vampire':
            maxAge = 5000;
            break;

    }
    document.getElementById('age').innerHTML = ""+ Math.floor((Math.random() * maxAge) + 1);
}
var classesArray = [
    'Barbarian',
    'Bard',
    'Cleric',
    'Druid',
    'Fighter',
    'Monk',
    'Paladin',
    'Ranger',
    'Rogue',
    'Sorcerer',
    'Warlock',
    'Wizard'
];
function generateClass(){
    var charClass = classesArray[Math.floor((Math.random() * 11) + 1)];
    document.getElementById('class').innerHTML = charClass;
}

var professions = [
    'Miller – grinds flour',
    'StoneMason',
    'BlackSmith',
    'Armorer',
    'Falconer',
    'Tailor',
    'Carpenter',
    'Plowman',
    'Butcher',
    'GoldSmith',
    'MetalSmith',
    'Groom – takes care of horses etc.',
    'Squire/Page',
    'SilverSmith',
    'Grocer – sells food/household goods',
    'Draper – fabric salesperson',
    'Furrier – sells fur',
    'FishMonger – sells fish',
    'Baker',
    'Weaver',
    'Cooper - This is the profession of Barrel Maker',
    'Cobbler - repaired shoes',
    'Cordwainer - Made new shoes. Cobbler and Cordwainer were very distinct job differences.',
    'Cartwright - Cart Maker',
    'Chandler - A candlemaker. But often times in castles a chandler was also in charge of all the candles making sure they were lit and put out at appropriate times.',
    'Hayward or HedgeWarder - His duty was to inspect the fences and hedges around the meadows or gardens.',
    'Bailiff - Was hired by the lord to be his general overseer',
    'Reeve - Was elected by the Peasants to be their representative',
    'Brewer - Would make various alcoholic beverages.'

];
function generateProfession(){
    document.getElementById('profession').innerHTML = professions[Math.floor((Math.random() * 28) + 1)]
}

function generateScores() {
    var str = Math.floor((Math.random() * 20) + 1);
    if (str < 5){str = 5;}
    document.getElementById('str').innerHTML = "<h3>Strength:</h3> " + str;
    var int = Math.floor((Math.random() * 20) + 1);
    if (int < 5){int = 5;}
    document.getElementById('int').innerHTML = "<h3>Intelligence:</h3> " + int;
    var dex = Math.floor((Math.random() * 20) + 1);
    if (dex < 5){dex = 5;}
    document.getElementById('dex').innerHTML = "<h3>Dexterity:</h3> " + dex;
    var cha = Math.floor((Math.random() * 20) + 1);
    if (cha < 5){cha = 5;}
    document.getElementById('cha').innerHTML = "<h3>Charisma:</h3> " + cha;
    var wis = Math.floor((Math.random() * 20) + 1);
    if (wis < 5){wis = 5;}
    document.getElementById('wis').innerHTML = "<h3>Wisdom:</h3> " + wis;
    var con = Math.floor((Math.random() * 20) + 1);
    if (con < 5){con = 5;}
    document.getElementById('con').innerHTML = "<h3>Constitution:</h3> " + con;
}

function pushToDB() {
    var name = document.getElementById('name').value;
    var level = document.getElementById('level').value;
    var note = document.getElementById('other').value;
    if (name !== "" && level !== "" && note !== ""){
        var entry = name+":"+level+":"+note;
        characterArray.push(entry);
    }
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
    document.getElementById('name').value = "";
    document.getElementById('level').value = "";
    document.getElementById('other').value = "";
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
function pullFromDB() {
    var uniqueID;
    getUserIP(function (ip) {
        uniqueID = ip.toString();
        for (var i = 0; i < 3; i++) {
            //used to remove .'s from ip address so fetch will work.
            uniqueID = uniqueID.replace(".", "");
        }
        fetch('https://dungeon-master-utility.firebaseio.com/party' + uniqueID + '.json')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
            var list = document.getElementById('listofparty');
            //reset
            list.innerHTML = "";
            var header = createElement('tr','');
            var headContent1 = createElement('th','Character Name');
            var headContent2 = createElement('th','|Character Level');
            var headContent3 = createElement('th','|Details/Notes');
            var headContent4 = createElement('th','|remove Character');
            header.appendChild(headContent1);
            header.appendChild(headContent2);
            header.appendChild(headContent3);
            header.appendChild(headContent4);
            list.appendChild(header);
            for (var entry in data) {
                var rawData = data[entry];
                characterArray.push(rawData);
                var tableData = rawData.split(":");
                var newElem = createElement('tr','');
                newElem.setAttribute('id',Math.floor(Math.random() * 100).toString());
                for (var tabD in tableData) {
                    newElem.appendChild(createElement('td',tableData[tabD]));
                }
                var deleteButton = createElement('button','Delete');
                deleteButton.setAttribute('onclick','deleteChar('+'\''+newElem.id+'\'' +')');
                deleteButton.setAttribute('class','deletebutton');
                newElem.appendChild(deleteButton);
                list.appendChild(newElem);
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    })
}

function deleteChar(id) {
    var tablEntry = document.getElementById(id);
    //name we're looking for
    var characterName = tablEntry.childNodes[0].innerHTML;
    for (var thing in characterArray) {
        var entry = characterArray[thing];
        var entrySplit = entry.split(":");
        for (var index in entrySplit) {
            if (entrySplit[index] === characterName) {
                characterArray.splice(thing,1);
            }
        }
    }
    var uniqueID;
    getUserIP(function (ip) {
        uniqueID = ip.toString();
        for (var i = 0; i < 3; i++) {
            //used to remove .'s from ip address so fetch will work.
            uniqueID = uniqueID.replace(".", "");
        }
        fetch('https://dungeon-master-utility.firebaseio.com/party' + uniqueID + '.json', {
        method: 'delete'
        })
    });
    pushToDB();
}

function createElement (tag,text) {
    el = document.createElement(tag);
    el.textContent = text;
    return el;
}

function getMonsterDetails(url) {
    var monsters = document.getElementById('monstercharacteristics');
    monsters.innerHTML = "";
    fetch(url, {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        for(var node in data) {
            if (node !== '_id' && node !== 'index' && node !== 'url') {
                var temp = createElement('li', '');
                if (Array.isArray(data[node])) {
                    var subnode = data[node];
                    var othertemp = createElement('ul', '');
                    var othertempslistitem = createElement('li', '');
                    for (var thing in subnode) {
                        var subsub = subnode[thing];
                        var onemorething = createElement('ul', '');
                        onemorething.setAttribute('class', 'subentry');
                        for (var otherthing in subsub) {
                            var anothertemp = createElement('li', '');
                            anothertemp.innerHTML = "<h2>" + otherthing.replace('_',' ') + "</h2>" + "<h3>" + subsub[otherthing] + "</h3>";
                            onemorething.appendChild(anothertemp);
                        }
                        othertempslistitem.appendChild(onemorething);
                        othertemp.appendChild(othertempslistitem);
                    }
                    var toDisplay = othertemp.innerHTML;
                    temp.innerHTML = "<h2>" + node.replace('_',' ') + "</h2>" + "<h3>" + toDisplay + "</h3>";
                    monsters.appendChild(temp);
                } else {
                    //only show what isn't blank
                    if (data[node]) {
                        temp.innerHTML = "<h2>" + node.replace('_',' ') + "</h2>" + "<h3>" + data[node] + "</h3>";
                        temp.setAttribute('class', 'entry');
                        monsters.appendChild(temp);
                    }
                }
            }
        }
    }).catch(function(err) {
        console.log('ERROR: no monster found!');
        console.log(err.toString());
    });
}

function getMonsters(value) {
    fetch(api + 'monsters', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        var monsterselector = document.getElementById('listselect');
        monsterselector.innerHTML = "";
        for (var item = 0; item < data.count; item++) {
            if (data.results[item].name.charAt(0).toLowerCase() === value) {
                var temp1 = createElement('li', '');
                var temp2 = createElement('a',''+ data.results[item].name);
                temp2.setAttribute('onclick','getMonsterDetails(\''+ data.results[item].url + '\')');
                temp2.setAttribute('class','monsterSelectButton');
                temp2.setAttribute('href','#');
                temp1.appendChild(temp2);
                monsterselector.appendChild(temp1);
            }
        }
    }).catch(function(err) {
        // Error :(
    });
}




function getSpellDetails(url) {
    var spells = document.getElementById('spellcharacteristics');
    spells.innerHTML = "";
    fetch(url, {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        for (var node in data) {
            //filter through categories we don't care about...
            if (node !== '_id' && node !== 'index' && node !== 'url' && node !== 'classes' && node !== 'subclasses') {
                var temp = createElement('li', '');
                if (Array.isArray(data[node])) {
                    var subnode = data[node];
                    var othertemp = createElement('ul', '');
                    for (var thing in subnode) {
                        var othertempslistitem = createElement('li', '');
                        temp.setAttribute('class', 'entry');
                        othertempslistitem.innerHTML = "<h3>" + subnode[thing] + "</h3>";
                        othertemp.appendChild(othertempslistitem);
                    }
                    var toDisplay = othertemp.innerHTML;
                    temp.innerHTML = "<h2>" + node.replace('_', ' ') + "</h2>" + "<h3>" + toDisplay + "</h3>";
                    spells.appendChild(temp);
                } else {
                    if (node === 'school'){
                        temp.innerHTML = "<h2>" + node.replace('_', ' ') + "</h2>" + "<h3>" + data[node].name + "</h3>";
                        temp.setAttribute('class', 'entry');
                        spells.appendChild(temp);
                    }
                    else {
                        temp.innerHTML = "<h2>" + node.replace('_', ' ') + "</h2>" + "<h3>" + data[node] + "</h3>";
                        temp.setAttribute('class', 'entry');
                        spells.appendChild(temp);
                    }
                }
            }
        }
    }).catch(function(err) {
        // Error :(
    });
}

function getSpells(value) {
    fetch(api + 'spells', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        var spellselector = document.getElementById('listselect');
        spellselector.innerHTML = "";
        for (var item = 0; item < data.count; item++) {
            if (data.results[item].name.charAt(0).toLowerCase() === value) {
                var temp1 = createElement('li', '');
                var temp2 = createElement('button',''+data.results[item].name);
                temp2.setAttribute('onclick','getSpellDetails(\''+ data.results[item].url + '\')');
                temp2.setAttribute('class','spellSelectButton');
                temp2.setAttribute('href','#');
                temp1.appendChild(temp2);
                spellselector.appendChild(temp1);
            }
        }
    }).catch(function(err) {
        // Error :(
    });
}

var xpThresholdsByLevel = [
    [1, 25, 50, 75, 100],
    [2, 50, 100, 150, 200],
    [3, 75, 150, 225, 400],
    [4, 125, 250, 375, 500],
    [5, 250, 500, 750, 1100],
    [6, 300, 600, 900, 1400],
    [7, 350, 750, 1100, 1700],
    [8, 450, 900, 1400, 2100],
    [9, 550, 1100, 1600, 2400],
    [10, 600, 1200, 1900, 2800],
    [11, 800, 1600, 2400, 3600],
    [12, 1000, 2000, 3000, 4500],
    [13, 1100, 2200, 3400, 5100],
    [14, 1250, 2500, 3800, 5700],
    [15, 1400, 2800, 4300, 6400],
    [16, 1600, 3200, 4800, 7200],
    [17, 2000, 3900, 5900, 8800],
    [18, 2100, 4200, 6300, 9500],
    [19, 2400, 4900, 7300, 10900],
    [20, 2800, 5700, 8500, 12700]
];

var xpMultipliers = [
    [1, 1],[2, 1.5],[3,2],
    [4,2],[5,2],[6,2],
    [7,2.5],[8,2.5],[9,2.5],
    [10,2.5],[11,3],[12,3],
    [13,3],[14,3],[15,4]
];

var challengeRatingtoXpValues = [
['0',10],
['1/8', 25],
['1/4', 50],
['1/2', 100],
['1', 200],
['2', 450],
['3', 700],
['4', 1100],
['5', 1800],
['6', 2300],
['7', 2900],
['8', 3900],
['9', 5000],
['10', 5900],
['11', 7200],
['12', 8400],
['13', 10000],
['14', 11500],
['15', 13000],
['16', 15000],
['17', 18000],
['18', 20000],
['19', 22000],
['20', 25000],
['21', 33000],
['22', 41000],
['23', 50000],
['24', 62000],
['25', 75000],
['26', 90000],
['27', 105000],
['28', 120000],
['29', 135000],
['30', 155000]
];

function getMaxXP(value, levels) {
    var maxXP = 0;
    var index;
    switch(value){
        case 'easy':
            index = 1;
            break;
        case 'norm':
            index = 2;
            break;
        case 'hard':
            index = 3;
            break;
        case 'dead':
            index = 4;
            break;
        default:
            break;
    }
    for (var i in levels){
        for(var j in xpThresholdsByLevel){
            if(xpThresholdsByLevel[j][0] === levels[i]){
                maxXP += xpThresholdsByLevel[j][index];
            }
        }
    }
    return maxXP;
}

function getXpForMonster(monster,numOF) {
    var challengeRating = monster['challenge_rating'];
    var multiplier = 0;
    var xpForMonster = 0;
    for(var i in xpMultipliers) {
        if(xpMultipliers[i][0] === numOF) {
            multiplier = xpMultipliers[i][1];
        }
    }
    if(multiplier === 0) {
        multiplier = 4;
    }
    for (var j in challengeRatingtoXpValues) {
        if (challengeRatingtoXpValues[j][0] === challengeRating){
            xpForMonster = challengeRatingtoXpValues[j][1] * multiplier;
        }
    }
    return xpForMonster;
}

function contains(nameOfMonster) {
    if (climateCreatures !== null) {
        for (var i = 0; i < climateCreatures.length; i++) {
            if (climateCreatures[i] === nameOfMonster) {
                return true;
            }
        }
        return false;
    } else {
        return true;
    }
}

var numOfMonsByChallengeRating = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

function determineNumOfMon(challengeRating, avg) {
    numOfMons = 0;



    return numOfMons;
}

function generateEncounter(threshHold, avgLvl) {
    var monstersForEncounter = [];
    var encounter = document.getElementById('encounterdetails');
    encounter.innerHTML = "<h2>We're getting one ready...</h2>"
    fetch('https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        var encounterXP = 0;
        do {
            do{
                var monster = data[getRandomInt(0, 326)];
            }while(contains(monster.name) === false);
            var numOfMoster = determineNumOfMon(monster.challenge_rating, avgLvl);
            var xpForMonster = getXpForMonster(monster, numOfMonster);
            if ((encounterXP + xpForMonster) <= threshHold) {
                encounterXP += xpForMonster;
                monstersForEncounter.push([monster,numOfMonster]);
                if (numOfMonster > 10){
                    break;
                }
            }
        } while(encounterXP < threshHold);
        encounter.innerHTML = "";
        for (var x in monstersForEncounter){
            var temp = createElement('h3','');
            temp.innerHTML = '<h3>' + monstersForEncounter[x][1] + ' ' + monstersForEncounter[x][0]['name'] + '</h3>';
            encounter.appendChild(temp);
        }
        if (!encounter.hasChildNodes()){
            var error = createElement('h3','');
            error.innerHTML = 'There is no party loaded into the system, please load a party into the system to generate encounters.';
            encounter.appendChild(error);
        }
    });
}

function getAvgLvl(partyLevels) {
    var sum = 0;
    for (var i = 0; i < partyLevels.length; i++) {
        sum += partyLevels[i];
    }
    sum = sum / partyLevels.length;
    return sum;
}

function randomEnc(value) {
    var uniqueID;
    var partyLevel = [];
    getUserIP(function (ip) {
        uniqueID = ip.toString();
        for (var i = 0; i < 3; i++) {
            //used to remove .'s from ip address so fetch will work.
            uniqueID = uniqueID.replace(".", "");
        }
        fetch('https://dungeon-master-utility.firebaseio.com/party' + uniqueID + '.json')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
            for(var item in data) {
                var seperated = data[item].split(':');
                partyLevel.push(parseInt(seperated[1]));
            }
            var xpThreshHold;
            var avgPartyLvl;
            switch(value){
                case 'easy':
                    xpThreshHold = getMaxXP(value, partyLevel)
                    avgPartyLvl = getAvgLvl(partyLevel);
                    generateEncounter(xpThreshHold, avgPartyLvl);
                    break;
                case 'norm':
                    xpThreshHold = getMaxXP(value, partyLevel);
                    avgPartyLvl = getAvgLvl(partyLevel);
                    generateEncounter(xpThreshHold, avgPartyLvl);
                    break;
                case 'hard':
                    xpThreshHold = getMaxXP(value, partyLevel);
                    avgPartyLvl = getAvgLvl(partyLevel);
                    generateEncounter(xpThreshHold, avgPartyLvl);
                    break;
                case 'dead':
                    xpThreshHold = getMaxXP(value, partyLevel);
                    avgPartyLvl = getAvgLvl(partyLevel);
                    generateEncounter(xpThreshHold, avgPartyLvl);
                    break;
                default:
                    //do nothing - should not occur.
                    break;
            }
        })
    });
}

function selectClimate(climateID) {
    switch (climateID) {
        case 'artic':
            document.getElementById('currentClimate').innerHTML = 'Currently: Artic';
            climateCreatures = [
                'Commoner',
                'Owl',
                'Blood Hawk',
                'Kobold',
                'Giant Owl',
                'Winged Kobold',
                'Ice Mephit',
                'Orc',
                'Brown Bear',
                'Half-ogre',
                'Griffon',
                'Ogre',
                'Orc Eye of Gruumsh',
                'Orog',
                'Polar Bear',
                'Saber-toothed Tige',
                'Manticore',
                'Winter Wolf',
                'Yeti',
                'Revenant',
                'Troll',
                'Werebear',
                'Young Remorhaz',
                'Mammoth',
                'Young White Dragon',
                'Frost Giant',
                'Abominable Yeti',
                'Remorhaz',
                'Roc',
                'Adult White Dragon',
                'Ancient White Dragon'
            ];
            break;
        case 'coastal':
            document.getElementById('currentClimate').innerHTML = 'Currently: Coastal';
            climateCreatures = [
                'Commoner',
                'Crab',
                'Eagle',
                'Bandit',
                'Blood Hawk',
                'Giant Crab',
                'Kobold',
                'Merfolk',
                'Poisonous Snake',
                'Stirge',
                'Giant Lizard',
                'Giant Wolf Spider',
                'Pseudodragon',
                'Pteranodon',
                'Winged Kobold',
                'Sahuagin',
                'Giant Eagle',
                'Giant Toad',
                'Harpy',
                'Griffon',
                'Merrow',
                'Ogre',
                'Plesiosaurus',
                'Sahuagin Priestess',
                'Sea Hag',
                'Manticore',
                'Banshee',
                'Sahuagin Baron',
                'Water Elemental',
                'Cyclops',
                'Young Bronze Dragon',
                'Young Blue Dragon',
                'Djinni	',
                'Marid',
                'Roc',
                'Storm Giant',
                'Adult Bronze Dragon',
                'Adult Blue Dragon',
                'Dragon Turtle',
                'Ancient Bronze Dragon',
                'Ancient Blue Dragon'
            ];
            break;
        case 'desert':
            document.getElementById('currentClimate').innerHTML = 'Currently: Desert';
            climateCreatures = [
                'Cat',
                'Commoner',
                'Hyena',
                'Jackal',
                'Scorpion',
                'Vulture',
                'Camel',
                'Bandit',
                'Flying Snake',
                'Kobold',
                'Mule',
                'Poisonous Snake',
                'Stirge',
                'Constrictor Snake',
                'Giant Lizard',
                'Giant Poisonous Snake',
                'Giant Wolf Spider',
                'Pseudodragon',
                'Winged Kobold',
                'Dust Mephit',
                'Gnoll',
                'Hobgoblin',
                'Jackalwere',
                'Swarm of Insects',
                'Death Dog',
                'Giant Hyena',
                'Giant Spider',
                'Giant Toad	Large',
                'Giant Vulture',
                'Half-ogre',
                'Lion',
                'Thri-kreen',
                'Yuan-ti Pureblood',
                'Giant Constrictor Snake',
                'Gnoll Pack Lord',
                'Ogre',
                'Giant Scorpion',
                'Hobgoblin Captain',
                'Mummy',
                'Phase Spider',
                'Wight',
                'Yuan-ti Malison',
                'Couatl',
                'Gnoll Fang of Yeenoghu',
                'Lamia',
                'Weretiger',
                'Air Elemental',
                'Fire Elemental',
                'Revenant',
                'Cyclops',
                'Hobgoblin Warlord',
                'Medusa',
                'Young Brass Dragon',
                'Yuan-ti Abomination',
                'Young Blue Dragon',
                'Guardian Naga',
                'Efreeti',
                'Gynosphinx',
                'Roc',
                'Adult Brass Dragon',
                'Mummy Lord',
                'Purple Worm',
                'Adult Blue Dragon',
                'Adult Blue Dracolich',
                'Androsphinx',
                'Ancient Brass Dragon',
                'Ancient Blue Dragon'
            ];
            break;
        case 'forest':
            document.getElementById('currentClimate').innerHTML = 'Currently: Forest';
            climateCreatures = [
                'Awakened Shrub',
                'Baboon',
                'Badger',
                'Bandit',
                'Cat',
                'Commoner',
                'Deer',
                'Hyena',
                'Owl',
                'Bandit',
                'Blood Hawk',
                'Flying Snake',
                'Giant Rat',
                'Giant Weasel',
                'Kobold',
                'Mastiff',
                'Poisonous Snake',
                'Stirge',
                'Twig Blight',
                'Blink Dog',
                'Boar',
                'Constrictor Snake',
                'Elk',
                'Giant Badger',
                'Giant Bat',
                'Giant Frog',
                'Giant Lizard',
                'Giant Owl',
                'Giant Poisonous Snake',
                'Giant Wolf Spider',
                'Goblin',
                'Kenku',
                'Needle Blight',
                'Panther',
                'Pixie',
                'Pseudodragon',
                'Sprite',
                'Swarm of Ravens',
                'Winged Kobold',
                'Wolf',
                'Ape',
                'Black Bear',
                'Giant Wasp',
                'Gnoll',
                'Hobgoblin',
                'Lizardfolk',
                'Orc',
                'Satyr',
                'Swarm of Insects',
                'Vine Blight',
                'Worg',
                'Brown Bear',
                'Bugbear',
                'Dire Wolf',
                'Dryad',
                'Giant Hyena',
                'Giant Spider',
                'Giant Toad',
                'Goblin Boss',
                'Half-ogre',
                'Harpy',
                'Tiger',
                'Young Faerie Dragon',
                'Yuan-ti Pureblood',
                'Adult Faerie Dragon',
                'Ankheg',
                'Awakened Tree',
                'Centaur',
                'Ettercap',
                'Giant Boar',
                'Giant Constrictor Snake',
                'Giant Elk',
                'Gnoll Pack Lord',
                'Grick',
                'Lizardfolk Shaman',
                'Ogre',
                'Orc Eye of Gruumsh',
                'Orog',
                'Pegasus',
                'Swarm of Poisonous Snakes',
                'Wererat',
                'Will-o-wisp',
                'Displacer Beast',
                'Green Hag',
                'Hobgoblin Captain',
                'Owlbear',
                'Phase Spider',
                'Werewolf',
                'Yuan-ti Malison',
                'Banshee',
                'Couatl',
                'Gnoll Fang of Yeenoghu',
                'Wereboar',
                'Weretiger',
                'Gorgon',
                'Revenant',
                'Shambling Mound',
                'Troll',
                'Unicorn',
                'Werebear',
                'Hobgoblin Warlord',
                'Giant Ape',
                'Grick Alpha',
                'Oni',
                'Yuan-ti Abomination',
                'Young Green Dragon',
                'Treant',
                'Guardian Naga',
                'Young Gold Dragon',
                'Adult Green Dragon',
                'Adult Gold Dragon',
                'Ancient Green Dragon',
                'Ancient Gold Dragon'
            ];
            break;
        case 'grassland':
            document.getElementById('currentClimate').innerHTML = 'Currently: Grassland';
            climateCreatures = [
                'Cat',
                'Commoner',
                'Deer',
                'Eagle',
                'Goat',
                'Hyena',
                'Jackal',
                'Vulture',
                'Bandit',
                'Blood Hawk',
                'Flying Snake',
                'Giant Weasel',
                'Poisonous Snake',
                'Stirge',
                'Axe Beak',
                'Boar',
                'Elk',
                'Giant Poisonous Snake',
                'Giant Wolf Spider',
                'Goblin',
                'Panther',
                'Pteranodon',
                'Riding Horse',
                'Wolf',
                'Cockatrice',
                'Giant Goat',
                'Giant Wasp',
                'Gnoll',
                'Hobgoblin',
                'Jackalwere',
                'Orc',
                'Swarm of Insects',
                'Worg',
                'Bugbear',
                'Giant Eagle',
                'Giant Hyena',
                'Giant Vulture',
                'Goblin Boss',
                'Hippogriff',
                'Lion',
                'Scarecrow',
                'Thri-kreen',
                'Tiger',
                'Allosaurus',
                'Ankheg',
                'Centaur',
                'Giant Boar',
                'Giant Elk',
                'Gnoll Pack Lord',
                'Griffon',
                'Ogre',
                'Orc Eye of Gruumsh',
                'Orog',
                'Pegasus',
                'Rhinoceros',
                'Ankylosaurus',
                'Hobgoblin Ca',
                'Manticore',
                'Phase Spider',
                'Couatl',
                'Elephant',
                'Gnoll Fang of Yeenoghu',
                'Wereboar',
                'Weretiger',
                'Bulette',
                'Gorgon',
                'Triceratops',
                'Chimera',
                'Cyclops',
                'Hobgoblin Warlord',
                'Tyrannosaurus Rex',
                'Young Gold Dragon',
                'Adult Gold Dragon',
                'Ancient Gold Dragon'
            ];
            break;
        case 'hill':
            document.getElementById('currentClimate').innerHTML = 'Currently: Hill';
            climateCreatures = [
                'Commoner',
                'Baboon',
                'Bandit',
                'Eagle',
                'Goat',
                'Hyena',
                'Raven',
                'Vulture',
                'Blood Hawk',
                'Giant Weasel',
                'Kobold',
                'Mastiff',
                'Mule',
                'Poisonous Snake',
                'Stirge',
                'Axe Beal',
                'Boar',
                'Elk',
                'Giant Owl',
                'Giant Wolf Spider',
                'Goblin	Small',
                'Panther',
                'Pseudodragon',
                'Swarm of Bats',
                'Swarm of Rav',
                'Winged Kobold',
                'Wolf',
                'Giant Goat',
                'Gnoll',
                'Hobgoblin',
                'Orc',
                'Swarm of Insects',
                'Worg',
                'Brown Bear',
                'Dire Wolf',
                'Giant Eagle',
                'Giant Hyena',
                'Goblin Boss',
                'Half-ogre',
                'Harpy',
                'Hippogriff',
                'Lion',
                'Giant Boar',
                'Giant Elk',
                'Gnoll',
                'Griffon',
                'Ogre',
                'Orc Eye of Gruumsh',
                'Orog',
                'Pegasus',
                'Peryton',
                'Green Hag',
                'Hobgoblin Captain',
                'Manticore',
                'Phase Spider',
                'Werewolf',
                'Ettin',
                'Gnoll Fang of Yeenoghu',
                'Wereboar',
                'Bulette',
                'Gorgon',
                'Hill Giant',
                'Revenant',
                'Troll',
                'Werebear',
                'Chimera',
                'Cyclops',
                'Galeb Duhr',
                'Hobgoblin Warlord',
                'Wyvern',
                'Stone Giant',
                'Young Copper Dragon',
                'Young Red Dragon',
                'Roc',
                'Adult Copper Dragon',
                'Adult Red Dragon',
                'Ancient Copper Dragon',
                'Ancient Red Dragon'
            ];
            break;
        case 'mountain':
            document.getElementById('currentClimate').innerHTML = 'Currently: Mountain';
            climateCreatures = [
               'Eagle',
               'Commoner',
               'Goat',
               'Bandit',
               'Blood Hawk',
               'Bandit',
               'Kobold',
               'Stirge',
               'Aarakocra',
               'Pseudodragon',
               'Pteranodon',
               'Swarm of Bats',
               'Winged Kobold',
               'Giant Goat',
               'Orc',
               'Giant Eagle',
               'Half-ogre',
               'Harpy',
               'Hippogriff',
               'Lion',
               'Giant Elk',
               'Griffon',
               'Ogre',
               'Orc Eye of Gruumsh',
               'Orog',
               'Peryton',
               'Saber-toothed Tiger',
               'Basilisk',
               'Hell Hound',
               'Manticore',
               'Ettin',
               'Air Elemental',
               'Bulette',
               'Troll',
               'Chimera',
               'Cyclops',
               'Galeb Duhr',
               'Wyvern',
               'Stone Gian',
               'Frost Giant',
               'Cloud Giant',
               'Fire Giant',
               'Young Silver Dragon',
               'Young Red Dragon',
               'Roc',
               'Adult Silver Dragon',
               'Adult Red Dragon',
               'Ancient Silver Dragon',
                'Ancient Red Dragon'
            ];
            break;
        case 'swamp':
            document.getElementById('currentClimate').innerHTML = 'Currently: Swamp';
            climateCreatures = [
                'Bandit',
                'Commoner',
                'Rat',
                'Raven',
                'Giant Rat',
                'Kobold',
                'Poisonous Snake',
                'Stirge',
                'Bullywug',
                'Constrictor Snake',
                'Giant Frog',
                'Giant Lizard',
                'Giant Poisonous Snake',
                'Mud Mephit',
                'Swarm of Rats',
                'Swarm of Ravens',
                'Winged Kobold',
                'Crocodile',
                'Lizardfolk',
                'Orc',
                'Swarm of Insects',
                'Ghoul',
                'Giant Spider',
                'Giant Toad',
                'Yuan-ti Pureblood',
                'Ghast',
                'Giant Constrictor Snake',
                'Lizardfolk Shaman',
                'Ogre',
                'Orc Eye of Gruumsh',
                'Swarm of Poisonous Snakes',
                'Will-o-wisp',
                'Green Hag',
                'Wight',
                'Yuan-ti Malison',
                'Giant Crocodile',
                'Revenant',
                'Shambling Mound',
                'Troll',
                'Water Elemental',
                'Young Black Dragon',
                'Yuan-ti Abomination',
                'Hydra',
                'Adult Black Dragon',
                'Ancient Black Dragon',
            ];
            break;
        case 'underdark':
            document.getElementById('currentClimate').innerHTML = 'Currently: Underdark';
            climateCreatures = [
                'Giant Fire Beetle',
                'Myconid Sprout',
                'Shrieker',
                'Flumph',
                'Giant Rat',
                'Kobold',
                'Stirge',
                'Drow',
                'Giant Bat',
                'Giant Centipede',
                'Giant Lizard',
                'Giant Poisonous Snake',
                'Goblin',
                'Grimlock',
                'Kuo-toa',
                'Swarm of Bats',
                'Troglodyte',
                'Violet Fungus',
                'Winged Kobold',
                'Darkmantle',
                'Gas Spore',
                'Gray Ooze',
                'Hobgoblin',
                'Magma Mephit',
                'Myconid Adult',
                'Orc',
                'Piercer',
                'Rust Monster',
                'Shadow',
                'Svirfneblin',
                'Swarm of Insects',
                'Bugbear',
                'Duergar',
                'Fire Snake',
                'Ghoul',
                'Giant Spider',
                'Giant Toad',
                'Goblin Boss',
                'Half-ogre',
                'Kuo-toa Whip',
                'Quaggoth Spore Servant',
                'Specter',
                'Carrion Crawler',
                'Gargoyle',
                'Gelatinous Cube',
                'Ghast',
                'Giant Constrictor Snake',
                'Gibbering Mouther',
                'Grick',
                'Intellect Devourer',
                'Mimic',
                'Minotaur Skeleton',
                'Nothic',
                'Ochre Jelly',
                'Ogre',
                'Orc Eye of Gruumsh',
                'Orog',
                'Polar Bear',
                'Quaggoth',
                'Doppelganger',
                'Grell',
                'Hell Hound',
                'Hobgoblin Captain',
                'Hook Horror',
                'Minotaur',
                'Phase Spider',
                'Quaggoth Thonot',
                'Spectator',
                'Water Weird',
                'Wight',
                'Black Pudding',
                'Bone Naga',
                'Chuul',
                'Ettin',
                'Flameskull',
                'Ghost',
                'Beholder Zombie',
                'Drow Elite Warrior',
                'Earth Elemental',
                'Otyugh',
                'Roper',
                'Salamander',
                'Troll',
                'Umber Hulk',
                'Vampire Spawn',
                'Wraith',
                'Xorn',
                'Chimera',
                'Cyclops',
                'Drider',
                'Hobgoblin Warlord',
                'Kuo-toa Archpriest',
                'Drow Mage',
                'Grick Alpha',
                'Mind Flayer',
                'Stone Giant',
                'Cloaker',
                'Fomorian',
                'Mind Flayer Arcanist',
                'Spirit Naga',
                'Fire Giant',
                'Aboleth',
                'Behir',
                'Dao',
                'Beholder',
                'Young Red Shadow Dragon',
                'Death Tyrant',
                'Purple Worm'
            ];
            break;
        case 'underwater':
            document.getElementById('currentClimate').innerHTML = 'Currently: Underwater';
            climateCreatures = [
                'Quipper',
                'Merfolk',
                'Constrictor Snake',
                'Steam Mephit',
                'Giant Sea Horse',
                'Reef Shark',
                'Sahuagin',
                'Giant Octopus',
                'Swarm of Quippers',
                'Giant Constrictor Snake',
                'Hunter Shark',
                'Merrow',
                'Plesiosaurus',
                'Sahuagin Priestess',
                'Sea Hag',
                'Killer Whale',
                'Giant Shark',
                'Sahuagin Baron',
                'Water Elemental',
                'Marid',
                'Dragon Turtle',
                'Kraken'
            ];
            break;
        case 'urban':
            document.getElementById('currentClimate').innerHTML = 'Currently: Urban';
            climateCreatures = [
                'Cat',
                'Commoner',
                'Goat',
                'Rat',
                'Raven',
                'Bandit',
                'Flying Snake',
                'Giant Rat',
                'Kobold',
                'Mastiff',
                'Mule',
                'Pony',
                'Stirge	Tiny',
                'Draft Horse',
                'Giant Centipede',
                'Giant Poisonous Snake',
                'Kenku',
                'Pseudodragon',
                'Riding Horse',
                'Skeleton',
                'Smoke Mephit',
                'Swarm of Bats',
                'Swarm of Rats',
                'Swarm of Ravens',
                'Winged Kobold',
                'Zombie',
                'Crocodile',
                'Giant Wasp',
                'Shadow',
                'Swarm of Insects',
                'Warhorse',
                'Ghoul',
                'Giant Spider',
                'Half-ogre',
                'Specter',
                'Yuan-ti Pureblood',
                'Gargoyle',
                'Ghast',
                'Mimic',
                'Wererat',
                'Will-o-wisp',
                'Doppelganger',
                'Phase Spider',
                'Water Weird',
                'Wight',
                'Couatl',
                'Ghost',
                'Incubus',
                'Succubus',
                'Cambion',
                'Revenant',
                'Vampire Spawn',
                'Invisible Stalker',
                'Oni',
                'Shield Guardian',
                'Gray Slaad',
                'Young Silver Dragon ',
                'Rakshasa',
                'Vampire',
                'Adult Silver Dragon',
                'Ancient Silver Dragon',
                'Tarrasque'
            ];
            break;
        default:
            document.getElementById('currentClimate').innerHTML = 'Currently: All';
            climateCreatures = null;
            break;
    }
}

