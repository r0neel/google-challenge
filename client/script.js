//Event listener here
const searchButton = document.getElementById("searchbutton");
const randomButton = document.getElementById("randombutton");
const form = document.querySelector("#theform");
const resultSpace = document.getElementById("searchresults");
function showResults(e){
    e.preventDefault();
    let submitter = e.submitter;
    let handler = submitter.id;
    let topic = e.target.sitesearch.value;
    if(topic!=""){
        if(handler === 'searchbutton'){
        fetch(`http://localhost:3000/topics/${topic}`)
        .then(resp => resp.text())
        .then(data =>{resultSpace.textContent =data;
        })}
        
        // if(handler === 'randombutton'){
        //     console.log(topic);
        //     fetch(`http://localhost:3000/topics/${topic}/first`)
        //     .then(resp => resp.text())
        //     .then(data =>{
        //         console.log(data);
        //         resultSpace.textContent=data;
        //     })
        // }

        if(handler === 'randombutton'){
            console.log(topic);
            fetch(`http://localhost:3000/topics/${topic}`)
            .then(resp => resp.text())
            .then(data =>{
                resultSpace.textContent= JSON.parse(data)[1];
            })
        }

    }
}
//searchButton.addEventListener('click',showResults);
form.addEventListener('submit',showResults);
// randomButton.onclick(returnFirst());
