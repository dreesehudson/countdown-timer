
// let countdownDate = new Date('Feb 13, 2021 12:00:00 AM').getTime();


//PRESS GO BUTTON, SUBMITS EVENT INFO

// let goButton = document.querySelector('button')
// goButton.onclick = () => {
//     //let input = ;
//     let countdownDate = new Date('Feb 13, 2021 12:00 AM'); //new Date(input);   

//     console.log(countdownDate);

//     setCountdownTimer(countdownDate);
// };

let countdownDate = new Date('Sep 21, 2020 8:00 AM');
setCountdownTimer(countdownDate);

//use JS Date object to get current data points
function setCountdownTimer(countdownDate) {

        //declaring current time variable and fetching value
        let currentTime = new Date();

        //calculations between current time and occurance time
        let gapTime = countdownDate - currentTime;

        let days = Math.floor(gapTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((gapTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((gapTime % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((gapTime % (1000 * 60)) / 1000);


        //padding variables if necessary
        days = padSingleDigit(days);
        hours = padSingleDigit(hours);
        mins = padSingleDigit(mins);
        secs = padSingleDigit(secs);

        //checks if countdown has reached 0.
        if (secs < 0) {
            document.getElementById('timer').innerHTML = 'happy birthday!';
        }
        //send current date/time to divs
        else { document.getElementById('timer').innerHTML = `${days}d ${hours}h ${mins}m and ${secs}s until bootcamp starts!`; }

        let t = setTimeout(function () { setCountdownTimer(countdownDate) }, 1000);
    }

//pad minutes and seconds if single digit
function padSingleDigit(n) {
        if (n < 10) {
            return `0${n}`;
        } else {
            return n;
        };
    }



