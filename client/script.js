//Event listener here
const searchButton = document.getElementById("searchbutton");
const randomButton = document.getElementById("randombutton");
const form = document.querySelector("#theform");
const resultSpace = document.getElementById("searchresults");
function showResults(e){
    e.preventDefault();
    let submitter = e.submitter;
    let handler = submitter.id;
    if(handler === 'searchbutton'){
    let topic = e.target.sitesearch.value;
    console.log(topic);
    fetch(`http://localhost:3000/topics/${topic}`)
    .then(resp => resp.text())
    .then(data =>{resultSpace.textContent =data;
    })}
    if(handler === 'randombutton'){
    let topic = e.target.sitesearch.value;
    console.log(topic);
    fetch(`http://localhost:3000/topics/${topic}[0]`)
    .then(resp => resp.text())
    .then(data =>{resultSpace.textContent =data;
     })}
}
//searchButton.addEventListener('click',showResults);
form.addEventListener('submit',showResults);
// randomButton.onclick(returnFirst());
