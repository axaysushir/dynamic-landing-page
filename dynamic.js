//DOm element
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//set am pm 
const showAmPm = true;
//show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set Am Pm
 const amPm = hour >= 12 ? "PM" : "AM";

    //12 hour format 
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);
}

// add zero
function addZero(n) {
    return(parseInt(n,10) < 10 ? '0' : '') + n;
}

//set background anad greet
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        //morning
        document.body.style.backgroundImage = "url('/student.jpg')";
        greeting.textContent = 'GooD Morning, ';
    } else if (hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('/home-office.jpg')";
        greeting.textContent = 'GooD Afternoon, '; 
    } else {
        //evening
        document.body.style.backgroundImage = "url('/hong-kong-cityscape1.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}

//Get Name
function getName(){
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if(e.type = 'keypress') {
    //make sure Enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        } 
    } else {
        localStorage.setItem('name', e.target.innerText)
    }

    //get focus
    function getFocus() {
        if (localStorage.getItem('focus') === null) {
            focus.textContent = '[Enter Focus]';
        } else {
            focus.textContent = localStorage.getItem('focus');
        }
    }

// set focus
function setFocus(e) {
    if (e.type = 'keypress'){
        // make sure enter si pressed
        if(e.which ==13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}
name.addEventListner('keypress', setName);
name.addEventListner('blur', setName);
focus.addEventListner('focus', setFocus);
focus.addEventListner('blur', setFocus);

}


showTime();
setBgGreet();
getName();
getFocus();