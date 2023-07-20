let images = [
    'https://github.com/annehanako/adrianofofinho/blob/main/imgs/adriano2.jpg?raw=true',
    'https://github.com/annehanako/adrianofofinho/blob/main/imgs/adriano5.jpg?raw=true',
    'https://github.com/annehanako/adrianofofinho/blob/main/imgs/adriano4.jpg?raw=true',
    'https://github.com/annehanako/adrianofofinho/blob/main/imgs/adriano6.jpg?raw=true',
    'https://github.com/annehanako/adrianofofinho/blob/main/imgs/adriano1.jpg?raw=true',
    'https://github.com/annehanako/adrianofofinho/blob/main/imgs/adriano0.jpg?raw=true'

    
];


let imgTag = document.querySelector ('.imgTag');
let i = 0

function next(){
    if (i>= images.length -1){
        return false;

    }
i++;
imgTag.setAttribute('src', images[i]);
}
function previous () {
    if (i <= 0){
        return false;
    }
    i--;
    imgTag.setAttribute('src', images[i])
}