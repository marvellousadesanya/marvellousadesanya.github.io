document.querySelector('#findoutbtn').addEventListener('click', function() {
    
    var inputVal = document.getElementById('inputfield').value;
        showValue();
    if(inputVal === 'Marv') {
        showValue();
}   else if (inputVal === 'Akin' || inputVal === 'Akinwunmi') {
        
        document.querySelector('img').src = 'images/Akin.png';
        document.getElementById('mylovenote').textContent = 'Just keep doing you, you are awesome, weird and that\'s what makes you stand out. I pray for you from the bottom of my heart you achieve your dreams. I pray God himself shocks you with blessings.';  
}   else if (inputVal === 'Kelechi') {
        
        document.querySelector('img').src = 'images/Kelechi.jpg';
        document.getElementById('mylovenote').textContent = 'Glad to have you as a friend, you are someone with huge potential and I believe you will achieve all. Just try to work on your flaws, you are to be the standard of a Premium man, you are just a few brush ups from getting there.';
}   else if (inputVal === 'Funmi' || inputVal === 'Funmilayo') {
        
        document.querySelector('img').src = 'images/Funmi.jpg';
        document.getElementById('mylovenote').textContent = 'Funmilayo is the Loml 💕. Sturbborn though, sometimes I wonder what goes through your mind when you misbehave. Nonetheless, you\'re adorable, you\'re loving, you\'re beautiful with nice nyansh.';
}   else if (inputVal === 'Onyinye') {
        document.querySelector('img').src = 'images/Onyinye.jpg';
        document.getElementById('mylovenote').textContent = 'You are funny af. Didn\'t know I could be excited talking to someone else the way I enjoy talking to you. Minus your shakara, you are a very good friend and happy to have you in my circle.';
}   else if (inputVal === 'Joseph') {
        document.querySelector('img').src = 'images/Joseph.jpg';
        document.getElementById('mylovenote').textContent = 'Just hold on to your hustle bro, big things are coming through';
}   else if (inputVal === 'Yemisi') {
        document.querySelector('img').src = 'images/Yemisi.jpg';
        document.getElementById('mylovenote').textContent = 'You are a strong woman, I know life has taught you many lessons and I know deep down you will get happiness';
}   else if (inputVal === 'Blossom') {
        document.querySelector('img').src = 'images/Blossom.jpg';
        document.getElementById('mylovenote').textContent = 'Sturbborn but still my cheeksy little sister';
}   else if (inputVal === 'Tobiloba' || inputVal === 'Tobi' || inputVal === 'Bro Tobi') {
        document.querySelector('img').src = 'images/Tobi.jpg';
        document.getElementById('mylovenote').textContent = 'Hey bro, what\'s up? You are stingy though. But really, thanks for being a good brother. You voluntarily and involuntarily put me on the right path.';
}   else if (inputVal === 'Chinanu') {
        document.querySelector('img').src = 'images/Chinanu.jpg';
        document.getElementById('mylovenote').textContent = 'You seem like a smart little girl. Althtough we are just getting to know each other but I must say I\'m impressed by your intelligence and maturity. Quite commendable.';
}   else if (inputVal === 'Angel') {
        document.querySelector('img').src = 'images/Angel.jpg';
        document.getElementById('mylovenote').textContent = 'Truly an Angel, you\'ve always been special to me and you always will. You are smart, goal-oriented and you are someone who I can always discuss a lot of things with. Something I find it to do with other girls.';
}   else if (inputVal === 'Toyin' || inputVal === 'Mummy') {
        document.querySelector('img').src = 'images/Mum.png';
        document.getElementById('mylovenote').textContent = 'Hi mum, thanks for being a strong woman and please stop being partial.';
}   else if (inputVal === 'Kemi') {
        document.querySelector('img').src = 'images/Kemi.jpg';
        document.getElementById('mylovenote').textContent = "Hi Kemi, I want to commend you for being a good person, for having a pure heart, I know for sure God will reward you for that. You are unique, remember that always and don\'t let anyone treat you less than you deserve.";
}   else if (inputVal === 'Samuel') {
        document.querySelector('img').src = 'images/Samuel.jpg';
        document.getElementById('mylovenote').textContent = "Just keep praying and working hard bro. God's got you.";
}   else {
        document.querySelector('img').src = '';
        document.getElementById('mylovenote').textContent = 'Guess we still need to know each other more.';
}
    document.getElementById('name').textContent = inputVal;
})

function hideElement() {
    document.querySelector('.inner-container').style.display = 'none';
}
hideElement();

function showValue() {
    document.querySelector('.inner-container').style.display = '';
}












