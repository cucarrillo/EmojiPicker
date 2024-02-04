// about: allows for filtering and puts emojis in to the "main.html" file
// author: Cesar Carrillo

// holds all emoji buttons that the user can click on
var EMOJI_BUTTON_LIST = null;

// the text field input element
const FILTER_TEXT_FIELD = document.getElementById("emojifilter");

// filters emoji using given text from user
// note: this is used as a key press event
function filterEmoji(event)
{
    if (event.keyCode == 13) // enter key was pressed
    {
        // here we are going through all the elements
        // and are going to apply the appropriate
        // action depending on user input
        for(var i = 0; i < EMOJI_BUTTON_LIST.length; i++)
        {
	        var isel = EMOJI_BUTTON_LIST[i];

            EMOJI_BUTTON_LIST[i].style.display = ""; // always reset

            if(!FILTER_TEXT_FIELD.value == "") // make sure that we have real text in textfield
            {
                // here we are hiding anything that does not include
                // what the user is looking for
                if(!isel.title.includes(FILTER_TEXT_FIELD.value))
                {
                   isel.style.display = "none"; 
                }
            }
        }
    }
}

// entry point
function main()
{
    // home of the emoji buttons we will be creating
    const emojidiv = document.getElementById("emojilist");
   
    // grab the key and value from the emoji dictionary found in emoji_list.js
    for(const [key, value] of Object.entries(EMOJI_DICT))
    {
        // create the button and set the properties
        var button = document.createElement("BUTTON");

        button.textContent = value;
        button.className = "moji";
        button.title = key;
        button.addEventListener("click", function() { navigator.clipboard.writeText(value);});

        emojidiv.appendChild(button); // add to the DOM
    }

    // update this so it includes what we added
    EMOJI_BUTTON_LIST = document.querySelectorAll("button");

    // apply the filter event listener so users can filter the emoji
    document.getElementById("emojifilter").addEventListener("keydown", filterEmoji);
}

window.onload = main; // set entry point