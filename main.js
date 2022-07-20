let usernameMenu = document.getElementsByClassName('usernameMenu')[0];
let username = document.getElementsByClassName('username')[0];
let usernameLi = document.getElementsByClassName('usernameLi')

// username.addEventListener('click',displayUsernameMenu());   //======= not working 
function displayUsernameMenu() {
    // console.log('wwww');
    if (usernameMenu.style.opacity !='1'){
        
        // username.style.background='#7ecccc';     // username on click background color--------------------------

        // console.log('hello');
        usernameMenu.style.animation = ' usernameMenu .3s ease 0s 1 normal none';
        
        usernameLi[0].style.opacity='0';
        usernameLi[1].style.opacity='0';
        usernameLi[2].style.opacity='0';
        
        usernameLi[0].style.right='-20';
        usernameLi[1].style.right='-20';
        usernameLi[2].style.right='-20';
        
        usernameLi[0].style.animation = ' usernameLi .5s ease .1s 1 normal none';
        usernameLi[1].style.animation = ' usernameLi .5s ease .2s 1 normal none';
        usernameLi[2].style.animation = ' usernameLi .5s ease .3s 1 normal none';
        if (usernameLi[0].style.opacity='1') {
            usernameLi[0].style.opacity='1';
            usernameLi[0].style.right='0px';
        }
        if (usernameLi[1].style.opacity='1') {
            usernameLi[1].style.opacity='1';
            usernameLi[1].style.right='0px';
        }
        if (usernameLi[2].style.opacity='1') {
            usernameLi[2].style.opacity='1';
            usernameLi[2].style.right='0px';
        }
        
        
        // usernameLi[0].style.right ='0px';
        // usernameLi[0].style.opacity ='1';
        // if (usernameLi[0].style.opacity ='1') {
            //     usernameLi[0].style.animation = 'usernameLi .3s ease 0s 1 normal none';
        // }
        
        // usernameLi[1].style.right ='0px';
        // usernameLi[1].style.opacity ='1';
        // usernameLi[1].style.transitionDelay='0.4s';
        
        // usernameLi[2].style.right ='0px';
        // usernameLi[2].style.opacity ='1';
        // usernameLi[2].style.transitionDelay = '.5s';
        
        if (usernameMenu.style.opacity = '1') {
            usernameMenu.style.opacity = '1';
            usernameMenu.style.display = 'unset';
            usernameMenu.style.right = '8px';
            //*********usernameLi************//
            // usernameLi[0].style.animation = ' usernameLi 1.3s ease 0s 1 normal none';
            // if (usernameLi[0].style.opacity='1') {
                //     usernameLi[0].style.opacity='1';
                //     usernameLi[0].style.right='0px';
            //     console.log('yess');
            // }
        }
    }
    
    else {
        // username.style.background='unset';         // username after click background colour-------------------
        
        usernameLi[0].style.animation = ' usernameLi .5s ease .1s 1 reverse none';
        usernameLi[1].style.animation = ' usernameLi .5s ease .2s 1 reverse none';
        usernameLi[2].style.animation = ' usernameLi .5s ease .3s 1 reverse none';
        
        if (usernameLi[0].style.opacity='0') {
            usernameLi[0].style.opacity='0';
            usernameLi[0].style.right='-20px';
        }
        if (usernameLi[1].style.opacity='0') {
            usernameLi[1].style.opacity='0';
            usernameLi[1].style.right='-20px';
        }
        if (usernameLi[2].style.opacity='0') {
            usernameLi[2].style.opacity='0';
            usernameLi[2].style.right='-20px';
        }
        
        if (usernameLi[2].style.opacity='0') {
            usernameMenu.style.animation = ' usernameMenu .5s ease 1s 1 reverse none';
            // console.log('ooo')
            if (usernameMenu.style.opacity = '0') {
                usernameMenu.style.opacity = '0';
                usernameMenu.style.right = '-120px';
                setTimeout(() => {
                    usernameMenu.style.display = 'none';
                    
                }, 200);               
            }
        }
        
        
    }
}    

// ==============================  photoSlider  ==============================
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let img5 = document.getElementById('img5')
let img6 = document.getElementById('img6')





// if (img1.style.display != 'none') {
    //     img1.style.animation = ' photoSlider 1s ease 5s 1 normal none ';
//     if (img1.style.opacity='0') {
//         img1.style.display='none';
//         img2.style.display='unset';
//     }
// }
// else if (img2.style.display != 'none') {
//     img2.style.animation = ' photoSlider 1s ease 5s 1 normal none ';
//     if (img2.style.opacity='0') {
//         img2.style.display='none';
//         img3.style.display='unset';
//     }
    
// }

let img = document.querySelectorAll('.imgg')
// console.log(img);

let f = 1
setInterval(() => {
   
    // alert('hhhhhhhh');
    let slide = 759;
    // let ing1 = img[0].style.bottom ;
    img[0].style.bottom = f*slide+'px';
    img[1].style.bottom = f*slide+'px';
    img[2].style.bottom = f*slide+'px';
    img[3].style.bottom = f*slide+'px';
    img[4].style.bottom = f*slide+'px';
    img[5].style.bottom = f*slide+'px';
    f += 1;
    // console.log(f);
    if (f==7) {
        f = 1;
        // img.style.transitionDuration = '0s'
        img[0].style.bottom = '0px';
        img[1].style.bottom = '0px';
        img[2].style.bottom = '0px';
        img[3].style.bottom = '0px';
        img[4].style.bottom = '0px';
        img[5].style.bottom = '0px';
        // img.style.transitionDuration = '1.5s'
        
    }    

}, 5000);

//*******************************  photo slider ends  **********************************//



// username.style.background='#7ecccc';
// neon gray color is #7ecccc  #7ecccc  #7ecccc  #7ecccc  #7ecccc  
// back drop color is #776c6cb8  #776c6cb8  #776c6cb8  #776c6cb8  



    
// console.log(username);
// console.log(usernameMenu);
// console.log(usernameLi);
// console.log(ing1);






// ****************************************  date time  ****************************************//
const timeAm = document.getElementById('timeAm');
const timePm = document.getElementById('timePm');
const hoursDisplay = document.getElementsByClassName('hours')[0];
const minutesDisplay = document.getElementsByClassName('minutes')[0];
// console.log(minutesDisplay);

setInterval( ()=>{
    
    let date =new Date();
    // console.log(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    
    if (hours>=12 && hours<24) {
        timeAm.style.opacity='50%';
        timeAm.style.boxShadow='none';
        // console.log('pm');
    }
    else{
        timePm.style.opacity='50%';
        timePm.style.boxShadow='none';
        // console.log('am');
    }
    if (hours>12) {
        hours = hours - 12;
        // console.log('pm');
    }
    // minutes = 0;
    
    switch (hours) {
        case  1:
            hours = '01';
            break;
    
        case  2:
            hours ='02';
            break;
    
        case  3:
            hours = '03';
            break;
    
        case  4:
            hours = '04';
            break;
    
        case  5:
            hours = '05';
            break;
    
        case  6:
            hours = '06';
            break;
    
        case  7:
            hours = '07';
            break;
    
        case  8:
            hours = '08';
            break;
    
        case  9:
            hours = '09';
            break;
    
        default:
            break;
    }
    switch (minutes) {
        case  0:
            minutes = '00';
            break;
    
        case  1:
            minutes = '01';
            break;
    
        case  2:
            minutes ='02';
            break;
    
        case  3:
            minutes = '03';
            break;
    
        case  4:
            minutes = '04';
            break;
    
        case  5:
            minutes = '05';
            break;
    
        case  6:
            minutes = '06';
            break;
    
        case  7:
            minutes = '07';
            break;
    
        case  8:
            minutes = '08';
            break;
    
        case  9:
            minutes = '09';
            break;
    
        default:
            break;
    }
    
    hoursDisplay.innerHTML = hours;
    minutesDisplay.innerHTML = minutes;
}, 500 )


// console.log(date.getUTCMinutes);
// console.log(hours);
// console.log(minutes);
// console.log(date.getHours());
const dayDiaplay = document.getElementById('day');
const fullDateDisplay = document.getElementById('fullDate');
let date = new Date();

switch (date.getDay()) {
    case 0:
        dayDiaplay.innerText = 'sunday';
        break;
    case 1:
        dayDiaplay.innerText = 'monday';         
        break;
    case 2:
        dayDiaplay.innerText = 'tuesday';
        break;
    case 3:
        dayDiaplay.innerText = 'wednesday';
        break;
    case 4:
        dayDiaplay.innerText = 'thusday ';
        break;
    case 5:
        dayDiaplay.innerText = 'friday ';
        break;
    case 6:
        dayDiaplay.innerText = 'saturday ';
        break;

    default:
        alert('day is not working');
        break;
}

let month = date.getMonth();
month++;                              // adding one to month
switch (month) {
    case 1:
        month = 'january';
        break;

    case 2:
        month = 'february';
        break;

    case 3:
        month = 'march';
        break;

    case 4:
        month = 'april';
        break;

    case 5:
        month = 'may';
        break;

    case 6:
        month = 'june';
        break;

    case 7:
        month = 'july';
        break;

    case 8:
        month = 'august';
        break;

    case 9:
        month = 'september';
        break;

    case 10:
        month = 'october';
        break;

    case 11:
        month = 'november';
        break;

    case 12:
        month = 'december';
        break;

    default:
        alert('full date error');
        break;
}


fullDateDisplay.innerText = date.getDate() + ' ' +  month + ' ' + date.getFullYear();



//****************************** calendar ***************************/
// let fullYear = 2000;          // this is leap year for debug
let fullYear = date.getFullYear();
let year1 = fullYear/4;
let year2 = fullYear/100;
let year3 = fullYear/400;
let yearConditon1 = year1 - Math.trunc(year1);
let yearConditon2 = year2 - Math.trunc(year2);
let yearConditon3 = year3 - Math.trunc(year3);
let leapYear;  // leap year true or false
if ( yearConditon1 == 0  ||  (yearConditon2 == 0  &&  yearConditon3 == 0) ) {
    // console.log('leap year');
    leapYear = 1;
}
else{
    // console.log('not a leap year');
    leapYear = 0;
}


// let monthNo = 2;   // feb month for debuging
let monthNo = date.getMonth() + 1;
// console.log(monthNo);
let noOfDays;
switch (monthNo) {
    case 1:
        noOfDays = 31;
        break;

    case 2:
        if (leapYear==1) {
            noOfDays = 29;
        }
        else{
            noOfDays = 28;
        }
        break;

    case 3:
        noOfDays = 31;
        break;

    case 4:
        noOfDays = 30;
        break;

    case 5:
        noOfDays = 31;
        break;

    case 6:
        noOfDays = 30;
        break;

    case 7:
        noOfDays = 31;
        break;

    case 8:
        noOfDays = 31;
        break;

    case 9:
        noOfDays = 30;
        break;

    case 10:
        noOfDays = 31;
        break;

    case 11:
        noOfDays = 30;
        break;

    case 12:
        noOfDays = 31;
        break;

    default:
        break;
}


let prevMonth = monthNo - 1;
if (prevMonth == 0) {
    prevMonth = 12;
}
let prevDays;  // prev month days
switch (prevMonth) {
    case 1:
        prevDays = 31;
        break;

    case 2:
        if (leapYear==1) {
            prevDays = 29;
        }
        else{
            prevDays = 28;
        }
        break;

    case 3:
        prevDays = 31;
        break;

    case 4:
        prevDays = 30;
        break;

    case 5:
        prevDays = 31;
        break;

    case 6:
        prevDays = 30;
        break;

    case 7:
        prevDays = 31;
        break;

    case 8:
        prevDays = 31;
        break;

    case 9:
        prevDays = 30;
        break;

    case 10:
        prevDays = 31;
        break;

    case 11:
        prevDays = 30;
        break;

    case 12:
        prevDays = 31;
        break;

    default:
        break;
}
// console.log(prevDays);

const monthDay1 = new Date( fullYear, monthNo - 1, 1);
// console.log(monthDay1.getDay());       // day is used to store no of days in prev month


const calendar = document.getElementsByClassName('calendar')[0];  //  ****** targeted calender********


let prevDateStart = prevDays - monthDay1.getDay() + 1;
// console.log(prevDateStart);
while (prevDateStart <= prevDays) {
    let prevCalDate = document.createElement('p');
    prevCalDate.innerText = prevDateStart;
    prevCalDate.id = 'prevDateNo' + prevDateStart;
    prevCalDate.className = 'prevCalDates';
    calendar.appendChild(prevCalDate);
    prevDateStart = prevDateStart + 1;
}


        // just trying append child        // const mainInfo = document.getElementsByClassName('mainInfo')[0];
        // just trying append child        // let newElem = document.createElement('p');
        // just trying append child        // newElem.className = 'wow';
        // just trying append child        // newElem.innerText = 'wooooooowo';
        // just trying append child        // mainInfo.appendChild(newElem);
        // just trying append child        // console.log(mainInfo);

let dateStart = 1;
while (dateStart <= noOfDays) {
    let calDate = document.createElement('p');
    calDate.innerText = dateStart;
    calDate.id = 'dateNo' + dateStart;
    calDate.className = 'calDates';
    calendar.appendChild(calDate);
    dateStart = dateStart + 1;
}


let nextDate = 1;
let calFix = calendar.childElementCount/7;
console.log(calFix - Math.trunc(calFix));
while ( calFix - Math.trunc(calFix) != 0 ) {
    let nextDays = document.createElement('p');
    nextDays.className = 'nextCalDates';
    nextDays.innerText = nextDate;
    calendar.appendChild(nextDays);
    nextDate = nextDate + 1;
    calFix = calendar.childElementCount/7;
}


// console.log(yearConditon1);
// console.log(yearConditon2);
// console.log(yearConditon3);

// console.log(date.getDate()+' ' + date.getMonth());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getDay());
