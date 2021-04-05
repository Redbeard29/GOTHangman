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
let guessedLetters = [];
let win = false;
let lose = false;

const word = getWord(word_array);

function getWord(array){
    const randIdx = Math.floor(Math.random() * array.length);
    const word = (array[randIdx]).toUpperCase();
    return word;
}

function formatWord(){
    let currentWordStatus = word.split('').map(char => {
        //Check if char is alphanumeric - these are the only chars we want hidden
        if(char.match(/^[A-Z]/)){
            return guessedLetters.includes(char) ? char : " _ ";
        }
        //Check if word has spaces using regex
        if(char.match("^\\s+$")){
            //Use template literals to fill those spaces
            return '\xa0\xa0';
        }
        else{
            return char;
        }
    }).join(''); 
    document.getElementById('word_spotlight').innerHTML = currentWordStatus;
    checkWinOrLoss(currentWordStatus);
}


function createLetters(){
    let letterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
            <h1
                class="d-inline-block display-4 font-weight-bold text-center mr-2 mt-2 py-2 letters"
                id="` + letter + `"
            >
                ` + letter + `
            </h1>
        `).join('');
    document.getElementById('letter_column').innerHTML = letterList;
}

function checkWinOrLoss(currentWordStatus){
    //The template literals in the formatting of the word display added extra spaces - in order to compare the final
    // words, I'm elimating all spaces from the guessed word and the word itself in order to compare them. 
    let wordWithoutSpaces = word.replace(/\s/g, '');
    let guessedWordWithoutSpaces = currentWordStatus.replace(/\s/g, '');
    if(wordWithoutSpaces === guessedWordWithoutSpaces){
        console.log("You win!")
        wins ++;
        win = true;
    }
    else if(guesses === 0){
        console.log("You lose!");
        wins = 0;
        lose = true;
    }
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

    // Add letters to guessedLetters array on click
    $('#letter_column h1').click(function(){
        const letter = $(this).attr('id');
        guessedLetters.push(letter);
        if(word.includes(letter)){
            $(this).removeClass('letters').addClass('correctly_guessed_letters');
            $(this).off('click');

            //Call formatWord, which will check for win
            formatWord(letter);
            if(win){
                $('#winningModal').modal('show');
            }
        }
        else{
            $(this).removeClass('letters').addClass('incorrectly_guessed_letters');
            //Disable buttons of already guessed letters
            $(this).off('click');

            //Decrement guesses after incorrect guess
            guesses --;

            /* Swap original hangman for dead icon on incorrect guess, decrementing hangman index at same rate as
            guess index */
            let hangmanIdx = $('#hangman_pos_' + guesses);
            let hangmanTemp = hangmanIdx.attr('src');
            hangmanIdx.attr('src', hangmanIdx.attr('alt-src'));
            hangmanIdx.attr('alt-src', hangmanTemp);
            hangmanIdx.removeClass('hangman').addClass('scream').addClass('mb-3');
            
            // same concept but with fire index
            let fireIdx = $('#fire_pos_' + guesses);
            let fireTemp = fireIdx.attr('src');
            fireIdx.attr('src', fireIdx.attr('alt-src'));
            fireIdx.attr('alt-src', fireTemp);

            //Replace html guess count with correctly decremented number
            $('#guesses').html('Guesses: ' + guesses);

            //Call format word, which will check for loss
            formatWord(letter);
            if(lose){
                $('#losingModal').modal('show');
            }
        }
    });

    //Refresh page on win to start new game
    $("#winning_button").click(function(){
        $('#winningModal').hide('slow');
        location.reload();
    });

    //Refresh page on lose to start new game
    $("#losing_button").click(function(){
        $('#losingModal').hide('slow');
        location.reload();
    });

    //Sets default house to House Arryn on selection page
    if(document.URL.includes('choose_house')){
        localStorage.setItem('chosen_house', 'Arryn');
    }
    
});


//Display guesses left
document.getElementById('guesses').innerHTML += guesses;
//Display number of wins
document.getElementById('wins').innerHTML += wins;


formatWord();
createLetters();