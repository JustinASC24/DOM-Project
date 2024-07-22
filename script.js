// Add your code to this file
let body1 = document.querySelector('body');
body1.style.backgroundColor = 'darkblue';

let heading1 = document.querySelector ('h1');
heading1.style.textDecoration = 'underline';

let heading2 = document.querySelector('h2');
heading2.style.textAlign = 'center';
heading2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";

let bulb_container = document.getElementById('bulbasaur_container');
bulb_container.style.backgroundColor = 'teal';

let poke_images = document.getElementsByClassName('pokemon_images')

for (let i = 0; i < poke_images.length; i++) {
    poke_images[i].style.borderStyle = 'dotted'
    poke_images[i].style.borderColor = 'yellow';

}


let poke_names = document.getElementsByClassName('pokemon_names');

for (let i = 0; i < poke_names.length; i++) {
    poke_names[i].style.color = 'yellow';
    poke_names[i].innerHTML += '!';

}

let starter_image = document.querySelector('img');
starter_image.style.borderStyle = 'dotted';
starter_image.style.borderColor = 'yellow';

let footer_edit = document.querySelector('footer');
footer_edit.style.textDecoration = 'underline overline'
footer_edit.innerHTML = 'All Star Code - DOM Project'
footer_edit.style.fontSize = '30px'