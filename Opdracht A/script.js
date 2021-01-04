var container = document.getElementById('container')

var buttons = [{
    id:1,
    text: 'Button 1',
    'function': function(){
        chngeClr('green');
    },
    color: 'green', 
},
{
    id:2,
    text: 'Button 2',
    'function': function(){
        chngeClr('red');
    },
    color: 'red', 
},
{
    id:3,
    text: 'Button 3',
    'function': function(){
        console.log('oof')
        chngeClr('blue');
    },
    color: 'blue', 
},
]

for (i = 0; i < buttons.length; i++) {
    var createbtn = document.createElement('button');
    createbtn.innerText = buttons[i].text;
    createbtn.id = buttons[i].id
    createbtn.setAttribute('dataAtt', i);
    createbtn.onclick = buttons[i].function;
    createbtn.style.backgroundColor = buttons[i].color;
    container.appendChild(createbtn);
}

function chngeClr(color){
    let body = document.getElementsByTagName('BODY');
    console.log(body)
    body[0].style.backgroundColor = color;
}