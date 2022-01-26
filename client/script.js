//Event listener here
const searchButton = document.getElementById("searchbutton");
const randomButton = document.getElementById("randombutton");
const form = document.querySelector("#theform");
const resultSpace = document.getElementById("searchresults");

function showResults(e){
    e.preventDefault();
    let topic = e.target.sitesearch.value;
    console.log(topic);
    fetch(`http://localhost:3000/topics/${topic}`)
    .then(resp => resp.text())
    .then(data =>{ resultSpace.textContent =data;
    //    let results = document.querySelector("results");
    //    let newItem = document.createElement("p");
    //    newItem.textContent = data;
    //    results.appendChild(newItem);
    })
}

//searchButton.addEventListener('click',showResults);
form.addEventListener('submit',showResults);
// randomButton.onclick(returnFirst());

