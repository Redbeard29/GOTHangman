const word_array = ["Aegon the Conqueror", "Arya Stark", "The Battle of the Bastards", "Beric Dondarrion", "Brandon Stark", 
"Brienne of Tarth", "Bronn", "Casterly Rock", "Catelyn Stark", "Cersei Lannister", "Chaos is a ladder", "The Children", 
"Daario Naharis", "Daenerys Targaryen", "Davos Seaworth", "Dorne", "Dragonglass", "The Drowned God", "Eddard Stark", "Edmure Tully", 
"Ellaria Sand", "The Eyrie", "The Free Folk", "The Fist of the First Men", "Gendry Baratheon", "Grey Worm", "Joffrey Baratheon", 
"Gilly", "A Girl is no one", "Highgarden", "The High Septon", "Hodor", "I drink and I know things", 
"If you think this has a happy ending you haven't been paying attention", "Iron Islands", "The Iron Throne", 
"Jaime Lannister", "Jaqen Hghar", "Jojen Reed", "Jon Snow", "Jorah Mormont", "Khal Drogo", "King Robert", "King's Landing", 
"Lady Melisandre", "A Lannister always pays his debts", "Loras Tyrell","Longclaw", "The Lord of Light", "Lysa Arryn", 
"The man who passes the sentence should swing the sword", "Margaery Tyrell", "Mhysa", "Missandei", "Mother of Dragons", 
"Myrcella Baratheon", "Never forget what you are bastard", "Night gathers and now my watch begins", "The night is dark and full of terrors", 
"The Night King", "The North Remembers", "Nymeria", "Oberyn Martell", "Osha", "Olenna Tyrell", "Podrick Payne", "Petyr Baelish", "Pyke", 
"Qyburn", "Ramsay Bolton", "Riverrun", "Roose Bolton", "Robb Stark", "Storm's End", "Samwell Tarly", "Sansa Stark", "The Sept of Baelor", 
"Shae", "Stannis Baratheon", "Syrio Forel", "Tommen Baratheon", "Tormund Giantsbane", "Tyrion Lannister", "Theon Greyjoy", "The Hound", 
"The Mountain", "The Sand Snakes", "Tywin Lannister", "Viserys Targaryen", "The Lord of Light", "Lord Varys", "Walder Frey", 
"What do we say to the god of death? Not Today", "Where are my Dragons?", "White Walkers", "Winterfell", "Winter is coming", "Xaro Xhoan Daxos", 
"You know nothing Jon Snow", "Ygritte"];


//Logic for hangman.html
let guesses = 6;
let wins = 0;
let answer = '';
let guessedLetters = [];
let wordDisplay = null;

const word = getWord(word_array);

function getWord(array){
    const randIdx = Math.floor(Math.random() * array.length);
    const word = (array[randIdx]).toUpperCase();
    return word;
}

function formatWord(){
    formattedWord = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('word_spotlight').innerHTML = formattedWord;
    console.log(word);
}


function createLetters(){
    let letterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
            <h1
                class="d-inline-block display-4 font-weight-bold text-center mr-2 mt-2 py-2 letters"
                id="` + letter + `"
                onClick="handleGuess('` + letter + `')"
            >
                ` + letter + `
            </h1>
        `).join('');
    document.getElementById('letter_column').innerHTML = letterList;
}

function handleGuess(letter){
    //If letter has not already been guessed, push it to guessed array
    if(!(guessedLetters.includes(letter))){
        guessedLetters.push(letter);
        document.getElementById(letter).setAttribute('disabled', true);
    }
    console.log(letter);
    console.log(guessedLetters);
}


$(document).ready(function(){

    // Logic for choose_house.html
    $('.sigils').click(function(){
        let house = $(this).attr('data-house');
        $('#house_choice_display').html('house ' + house);

        $('img:not([data-house=' + house + '])').removeClass('active');
        $('img[data-house=' + house + ']').addClass('active');

        // Store chosen house in local storage
        localStorage.setItem('chosen_house', house);
    });

    // Display chosen house name on hangman.html page
    $('#chosen_house').html('for house ' + localStorage.getItem('chosen_house'));

    // Display chosen house sigils on hangman.html page
    $('#chosen_house_sigil_left').attr("src", "images/house" + localStorage.getItem('chosen_house') + ".png");
    $('#chosen_house_sigil_right').attr("src", "images/house" + localStorage.getItem('chosen_house') + ".png");
});

//Display guesses left
document.getElementById('guesses').innerHTML += guesses;
//Display number of wins
document.getElementById('wins').innerHTML += wins;

createLetters();
formatWord();