const display = document.querySelector('#display');
const res = document.querySelector('#result');
let char = display.innerHTML.split('');

upch = () => {
    char = display.innerHTML.split('');
    
}


//clear the display div
clearDisplay = () => {
    display.innerHTML = '';
    res.innerHTML = '';
}

//delete te last char
backspace = () => {
    upch()
    char.pop();
    display.innerHTML = char.join('');
    if (char <= 0) {
        res.innerHTML = '';
    }
}

//add the numbers and the operators to the display
append = (ch) =>  {
    display.innerHTML += ch;
    res.innerHTML = '';
}


//show the result 
calculate = () => {
    try {
        if (/^0+/.test(display.innerHTML)) {
            display.innerHTML = display.innerHTML.replace(/^0+/,"")
        }
        res.innerHTML = eval(display.innerHTML);
    } catch (er) {
        res.innerHTML = 'Error';
        console.log(er);
    }
}


//set the event of the keybord

//some additional tools for the events of the backspace key
let enct = 0;
setInterval(() => {
    enct = 0;
}, 1000);

keyev = (evn, ev) => {

    //event of the numbers and operators
    if (evn == 0 || evn == 1|| evn == 2|| evn == 3|| evn == 4|| evn == 5|| evn == 6|| evn == 7|| evn == 8|| evn == 9|| evn == '/'|| evn == '*'|| evn == '-' || evn == '+') {
        append(evn);
        const ke = document.getElementsByClassName(evn);
        console.log(ke);
    }

    //event of th enter 
    if (evn == 'Enter'){
        calculate();
    }

    //two event of the backspace
    if (evn == 'Backspace'){
        backspace();
        enct += 1;
        if (enct === 2) {
            clearDisplay();
        }
    }
    console.log(evn);
    console.log(ev);
}