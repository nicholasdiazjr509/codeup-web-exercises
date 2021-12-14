"use strict";

(function() {
    var moonText = document.querySelector('#moon-travel');
    var mainContent = document.querySelector('#main-content');

    moonText.addEventListener('click', function() {
        mainContent.style.backgroundImage = 'url(assets/images/OIP.Z8Ut_eua585KYdI9DGIvtwHaEo.jpg)' ;
        this.innerHTML = 'Do I have to wear a mask on the moon?';
    });

//git push was a problem
    //MOUSE EVENT
    var goku = document.querySelector('#goku');

    var gokuListener = function() {
        //goku.setAttribute(src, 'img/goku-mad.png')
        this.src = 'assets/images/goku-mad.png';
        this.addEventListener('mouseout', function() {
            this.src = 'assets/images/goku-normal.png';
        })

    }
    
    goku.addEventListener('mouseenter', gokuListener);
    
    var gokuChill = function() {
        goku.removeEventListener('mouseenter', gokuListener);
    }
    document.querySelector('.goku-chill').addEventListener('click', gokuChill);

    //KEYBOARD EVENTS: keyup, keydown, keypress
    mainContent.addEventListener('keydown', function() {
        console.log(event.keyCode);
        if(event.key === " "){
            document.querySelector('.space-bar').style.display = 'inline';

        }
    });

    // CHANGE EVENT
    var dropDown = document.querySelector('#travel-items');

    dropDown.addEventListener('change', function(event) {
        console.log(event.target);
        //template string syntax ${javascript code goes in here}
        document.querySelector('.result').innerHTML = 'I agree that ${event.target.value} is Important!'
    })
    // MINI EXERCISE
    // When the user clicks on the Change Font Color button, the font of the entire webpage should change to the users input.

    var colorBtn = document.querySelector('#color-btn');

    colorBtn.addEventListener('click', function() {

        mainContent.style.color = document.querySelector('#text-color').value;
    })
})();