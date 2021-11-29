/*
    id recovery
 */
let history = document.getElementById('historyG');
let push = document.getElementById('push');
let objet = ["avec un ami","avec une copine","avec un parent","avec un telephone","avec un vere de porto"];
let temps = ["quand il fait -1000","quand il fait 15°","quand il fait 25°","quand il fait 5°","quand il fait 7°"];
let lieux = ["a fourmies ","en chine ","au japon ","a la plage "," en guadeloupe "];
let verbes = ["a manger","a dormir","a chicher","a partager","a courir"];

/*
    apply the Math.floor followed by a Math.random on the different boards
 */
let randomobjet = objet[Math.floor(Math.random() * objet.length)];
let randomtemps = temps[Math.floor(Math.random() * temps.length)];
let randomlieux = lieux[Math.floor(Math.random() * lieux.length)];
let randomverbes = verbes[Math.floor(Math.random() * verbes.length)];

/*
    generat function
 */
function gener(){

    history.innerHTML = document.getElementById('name').value + ' '
        + randomverbes + randomobjet + " " + randomlieux + randomtemps;

}

push.addEventListener('click',gener);