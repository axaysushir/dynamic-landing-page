//Dom element
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//option
const showAmPm = true;

//show time
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //Set AM or PM
 const amPm = hour >= 12 ? 'PM' : 'AM';

   //12 hour format
   hour = hour % 12 || 12; 

   //output time
   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

   setTimeout(showTime, 1000);

}
   //add zero
    function addZero(n) {
        return(parseInt(n, 10) < 10 ? '0' : '') + n;
    } 

    //set background and greeting
    function setBgGreet() {
        let today = new Date(),
        hour = today.getHours();

        if(hour < 12){
            //morning
            doucument.body.style.backgroundImage = "url('../home-office.jpg')"; //https://i.ibb.co/7vDLJFb/morning.jpg
             greeting.textContent = 'Good Morning, ';
        } else if (hour < 18) {
            // Afternoon
            document.body.style.backgroundImage = "url('../student.jpg')"; //https://i.ibb.co/3mThcXc/afternoon.jpg
            greeting.textContent = 'Good Afternoon, ';
        } else {
            //Evening
            document.body.style.backgroundImage = "url('../web.jpg')"; //https://i.ibb.co/924T2Wv/night.jpg
            greeting.textContent = 'Good Evening, ';
            document.body.style.color = 'white';
        }
    }

        //get name
    function getName() {
        if (localStorage.getItem('name') === null) {
            name.textContent = '[Enter Name]';
        } else {
            name.textContent = localStorage.getItem('name');
        }
    }
//set Name
function setName(e){
    if(e.type = 'keypress') {
        // Make sure enter is pressed
        if(e.which = 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else{
        localStorage.setName('name', e.target.innerText)
    }
}



    //get focus
    function getFocus() {
        if (localStorage.getItem('focus') === null) {
            focus.textContent = '[Enter Focus]';
        } else {
            focus.textContent = localStorage.getItem('focus');
        }
    }

    function setFocus(e){
        if(e.type = 'keypress') {
            // Make sure enter is pressed
            if(e.which = 13 || e.keyCode == 13){
                localStorage.setItem('focus', e.target.innerText);
                name.blur();
            }
        } else{
            localStorage.setName('focus', e.target.innerText)
        }
    }

name.addEventListner('keypress', setName);
name.addEventListner('blur', setName);
focus.addEventListner('keypress', setFocus);
focus.addEventListner('blur', setFocus);

    //run
   showTime();
   setBgGreet();
   getFocus();
