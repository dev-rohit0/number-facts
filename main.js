//created using Ajax and Fetch API you can use any of two method

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

 let numberInput = document.querySelector('#numberInput');
// numberInput.addEventListener('input',getFact);
 numberInput.addEventListener('input',getFactFetch);

// function getFactAjax(){
//     let number = numberInput.value;
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','http://numbersapi.com/'+number);

//     xhr.onload = function(){
//         if (this.status == 200 && number != '') {
//             fact.style.display = 'block';
//             factText.innerHTML = this.responseText;
//         }if(this.status == 200 && number == '') {
//             fact.style.display = 'none';
//         }

//     }
//     xhr.send();

   
// }

function getFactFetch(){
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number)
    .then(response => response.text())
    .then(data => {
        if (number !='') {
            fact.style.display = 'block';
            factText.innerHTML = data;
        }else {
            fact.style.display = 'none';
        }
        
    })
    .catch(err => console.log(err));
}
