/**
 * Created by kmmac on 7/6/2017.
 */
var characterArray = [];

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
    "Elf: High","Elf: Wood","Elf: Drow","Elf: High","Elf: Wood","Elf: Drow",
    "Elf: High","Elf: Wood","Elf: Drow","Elf: High","Elf: Wood","Elf: Drow",
    "Elf: High","Elf: Wood","Elf: Drow","Elf: High","Elf: Wood","Elf: Drow",
    "Elf: High","Elf: Wood","Elf: Drow","Elf: High","Elf: Wood","Elf: Drow",
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
    document.getElementById('str').innerHTML = "Strength: " + str;
    var int = Math.floor((Math.random() * 20) + 1);
    if (int < 5){int = 5;}
    document.getElementById('int').innerHTML = "Intelligence: " + int;
    var dex = Math.floor((Math.random() * 20) + 1);
    if (dex < 5){dex = 5;}
    document.getElementById('dex').innerHTML = "Dexterity: " + dex;
    var cha = Math.floor((Math.random() * 20) + 1);
    if (cha < 5){cha = 5;}
    document.getElementById('cha').innerHTML = "Charisma: " + cha;
    var wis = Math.floor((Math.random() * 20) + 1);
    if (wis < 5){wis = 5;}
    document.getElementById('wis').innerHTML = "Wisdom: " + wis;
    var con = Math.floor((Math.random() * 20) + 1);
    if (con < 5){con = 5;}
    document.getElementById('con').innerHTML = "Constitution: " + con;
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

function getMonsterDetails(mon) {
    var monsters = document.getElementById('monstercharacteristics');
    monsters.innerHTML = "";
    fetch('https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        for (var item = 0; item < data.length; item++) {
            if (data[item].name === mon) {
                var parseIt = data[item];
                for(var node in parseIt){
                    var temp = createElement('li','');
                        if (parseIt.hasOwnProperty(node)) {
                            if (Array.isArray(parseIt[node])){
                                var subnode = parseIt[node];
                                var othertemp = createElement('ul','');
                                var othertempslistitem = createElement('li','');
                                for (var thing in subnode){
                                    var subsub = subnode[thing];
                                    var onemorething = createElement('ul','');
                                    for(var otherthing in subsub) {
                                        var anothertemp = createElement('li','');
                                        anothertemp.innerHTML = "<h5>" + otherthing + "</h5>" + subsub[otherthing];
                                        onemorething.appendChild(anothertemp);
                                    }
                                    othertempslistitem.appendChild(onemorething);
                                    othertemp.appendChild(othertempslistitem);
                                }
                                var toDisplay = othertemp.innerHTML;
                                temp.innerHTML = "<h4>" + node + "</h4>" + toDisplay;
                                monsters.appendChild(temp);
                            } else {
                            temp.innerHTML = "<h4>" + node + "</h4>" + parseIt[node];
                            monsters.appendChild(temp);
                        }
                    }
                }
            }
        }
    }).catch(function(err) {
        // Error :(
    });
}

function getMonsters(value) {
    fetch('https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        var monsterselector = document.getElementById('listselect');
        monsterselector.innerHTML = "";
        for (var item = 0; item < data.length; item++) {
            if (data[item].name.charAt(0).toLowerCase() === value) {
                var temp1 = createElement('li', '');
                var temp2 = createElement('button',''+data[item].name);
                temp2.setAttribute('onclick','getMonsterDetails(\''+ data[item].name + '\')');
                temp1.appendChild(temp2);
                monsterselector.appendChild(temp1);
            }
        }
    }).catch(function(err) {
        // Error :(
    });
}




function getSpellDetails(spell) {
    var spells = document.getElementById('spellcharacteristics');
    spells.innerHTML = "";
    fetch('https://dl.dropboxusercontent.com/s/121t7xstyyeofxw/5e-SRD-Spells.json', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        for (var item = 0; item < data.length; item++) {
            if (data[item].name === spell) {
                var parseIt = data[item];
                for(var node in parseIt){
                    var temp = createElement('li','');
                    if (parseIt.hasOwnProperty(node)) {
                        if (Array.isArray(parseIt[node])){
                            var subnode = parseIt[node];
                            var othertemp = createElement('ul','');
                            var othertempslistitem = createElement('li','');
                            for (var thing in subnode){
                                var subsub = subnode[thing];
                                var onemorething = createElement('ul','');
                                for(var otherthing in subsub) {
                                    var anothertemp = createElement('li','');
                                    anothertemp.innerHTML = "<h5>" + otherthing + "</h5>" + subsub[otherthing];
                                    onemorething.appendChild(anothertemp);
                                }
                                othertempslistitem.appendChild(onemorething);
                                othertemp.appendChild(othertempslistitem);
                            }
                            var toDisplay = othertemp.innerHTML;
                            temp.innerHTML = "<h4>" + node + "</h4>" + toDisplay;
                            spells.appendChild(temp);
                        } else {
                            temp.innerHTML = "<h4>" + node + "</h4>" + parseIt[node];
                            spells.appendChild(temp);
                        }
                    }
                }
            }
        }
    }).catch(function(err) {
        // Error :(
    });
}

function getSpells(value) {
    fetch('https://dl.dropboxusercontent.com/s/121t7xstyyeofxw/5e-SRD-Spells.json', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        var spellselector = document.getElementById('listselect');
        spellselector.innerHTML = "";
        for (var item = 0; item < data.length; item++) {
            if (data[item].name.charAt(0).toLowerCase() === value) {
                var temp1 = createElement('li', '');
                var temp2 = createElement('button',''+data[item].name);
                temp2.setAttribute('onclick','getSpellDetails(\''+ data[item].name + '\')');
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
['1/4', 11500],
['1/8', 25],
['15', 13000],
['1/4', 50],
['16', 15000],
['1/2', 100],
['17', 18000],
['1', 200],
['18', 20000],
['2', 450],
['19', 22000],
['3', 700],
['20', 25000],
['4', 1100],
['21', 33000],
['5', 1800],
['22', 41000],
['6', 2300],
['23', 50000],
['7', 2900],
['24', 62000],
['8', 3900],
['25', 75000],
['9', 5000],
['26', 90000],
['10', 5900],
['27', 105000],
['11', 7200],
['28', 120000],
['12', 8400],
['29', 135000],
['13', 10000],
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

function generateEncounter(threshHold){
    var monstersForEncounter = [];
    var encounter = document.getElementById('encounterdetails');
    var plural = false;
    encounter.innerHTML = "<h2>We're getting one ready...</h2>"
    fetch('https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        var encounterXP = 0;
        do {
            var monster = data[getRandomInt(0, 326)];
            var numOfMonster = getRandomInt(1,25);
            if (numOfMonster > 1){
                plural = true;
            }
            var xpForMonster = getXpForMonster(monster, numOfMonster);
            if ((encounterXP + xpForMonster) < threshHold + 100) {
                encounterXP += xpForMonster;
                monstersForEncounter.push([monster,numOfMonster]);
                if (numOfMonster > 10){
                    break;
                }
            }
        } while(encounterXP < threshHold);
        encounter.innerHTML = "";
        for (var x in monstersForEncounter){
            var isplural = "";
            if(monstersForEncounter[x][1] > 1){
                isplural = "s";
            }
            var temp = createElement('h3','');
            temp.innerHTML = '<h3>' + monstersForEncounter[x][1] + ' ' + monstersForEncounter[x][0]['name'] + isplural +'</h3>';
            encounter.appendChild(temp);
        }
    });
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
            switch(value){
                case 'easy':
                    xpThreshHold = getMaxXP(value, partyLevel)
                    generateEncounter(xpThreshHold);
                    break;
                case 'norm':
                    xpThreshHold = getMaxXP(value, partyLevel);
                    generateEncounter(xpThreshHold);
                    break;
                case 'hard':
                    xpThreshHold = getMaxXP(value, partyLevel);
                    generateEncounter(xpThreshHold);
                    break;
                case 'dead':
                    xpThreshHold = getMaxXP(value, partyLevel);
                    generateEncounter(xpThreshHold);
                    break;
                default:
                    //???
                    break;
            }
        })
    });
}
