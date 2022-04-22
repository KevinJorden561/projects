import fetch from "node-fetch";

function getCoffee(){
    fetch('https://api.sampleapis.com/coffee/hot')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}

getCoffee()