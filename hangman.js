const word_array = ["Aegon/the/Conqueror", "Arya/Stark", "The/Battle/of/the/Bastards", "Beric/Dondarrion", "Brandon/Stark", 
"Brienne/of/Tarth", "Bronn", "Casterly/Rock", "Catelyn/Stark", "Cersei/Lannister", "Chaos/is/a/ladder", "The/Children", 
"Daario/Naharis", "Daenerys/Targaryen", "Davos/Seaworth", "Dorne", "Dragonglass", "The/Drowned/God", "Eddard/Stark", "Edmure/Tully", 
"Ellaria/Sand", "The/Eyrie", "The/Free/Folk", "The/Fist/of/the/First/Men", "Gendry/Baratheon", "Grey/Worm", "Joffrey/Baratheon", 
"Gilly/Craster", "A/Girl/is/no/one", "Highgarden", "The/High/Septon", "Hodor", "I/drink/and/I/know/things", 
"If/you/think/this/has/a/happy/ending/you/havent/been/paying/attention", "Iron/Islands", "The/Iron/Throne", 
"Jaime/Lannister", "Jaqen/Hghar", "Jojen/Reed", "Jon/Snow", "Jorah/Mormont", "Khal/Drogo", "King/Robert", "Kings/Landing", 
"Lady/Melisandre", "A/Lannister/always/pays/his/debts", "Loras/Tyrell","Longclaw", "The/Lord/of/Light", "Lysa/Arryn", 
"The/man/who/passes/the/sentence/should/swing/the/sword", "Margaery/Tyrell", "Mhysa", "Missandei", "Mother/of/Dragons", 
"Myrcella/Baratheon", "Never/forget/what/you/are/bastard", "Night/gathers/and/now/my/watch/begins", "The/night/is/dark/and/full/of/terrors", 
"The/Night/King", "The/North/Remembers", "Nymeria", "Oberyn/Martell", "Osha", "Olenna/Tyrell", "Podrick/Payne", "Petyr/Baelish", "Pyke", 
"Qyburn", "Ramsay/Bolton", "Riverrun", "Roose/Bolton", "Robb/Stark", "Storms/End", "Samwell/Tarly", "Sansa/Stark", "The/Sept/of/Baelor", 
"Shae", "Stannis/Baratheon", "Syrio/Forel", "Tommen/Baratheon", "Tormund/Giantsbane", "Tyrion/Lannister", "Theon/Greyjoy", "The/Hound", 
"The/Mountain", "The/Sand/Snakes", "Tywin/Lannister", "Viserys/Targaryen", "The/Lord/of/Light", "Lord/Varys", "Walder/Frey", 
"What/do/we/say/to/the/god/of/death?Not/Today", "Where/are/my/Dragons?", "White/Walkers", "Winterfell", "Winter/is/coming", "Xaro/Xhoan/Daxos", 
"You/know/nothing/Jon/Snow", "Ygritte"];

function getWord(array){
    const randIdx = Math.floor(Math.random() * array.length);
    const word = (array[randIdx]).toUpperCase();
    return word;
}


function displayBoard(tries){
    stages = [
        
    ];
}
console.log(getWord(word_array));