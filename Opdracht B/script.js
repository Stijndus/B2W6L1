var container = document.getElementById('container')


for (i = 1; i <= 25; i++) {
    var createbtn = document.createElement('button');
    let ids = i;
    createbtn.innerText = i;
    createbtn.id = i;
    createbtn.setAttribute('dataAtt', i);
    createbtn.onclick = function(){
        chngeClr(ids);
    }
    createbtn.style.backgroundColor = 'green';
    container.appendChild(createbtn);
}

function chngeClr(id){
    let button = document.getElementById(id);
    button.style.backgroundColor = 'red';
}
