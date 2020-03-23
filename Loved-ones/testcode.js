var name = document.getElementById('inputfield').value;

function LovedOne(name, img, note) {
    this.name = name;
    this.img = img;
    this.note = note;
}

LovedOne.prototype.displayLovedOne = function() {
    document.querySelector('#findoutbtn').addEventListener('click', function() {
        showValue();
        kelechi.displayLovedOne();
        document.getElementById('name').appendChild = this.name;
        document.querySelector('img').appendChild = this.img;
        document.getElementById('mylovenote').textContent = this.note;
        
    });
};


LovedOne.prototype.displayLovedOne(); 
var kelechi = new LovedOne('Kelechi', 'images/Kelechi.jpg', 'You are just an idiot');

var funmi = new LovedOne('Funmilayo', 'images/Funmi.jpg', 'I love you.');

funmi.displayLovedOne();

var myLovedOnes = [kelechi, funmi];

function hideElement() {
    document.querySelector('.inner-container').style.display = 'none';
}
hideElement();

function showValue() {
    document.querySelector('.inner-container').style.display = '';
    
}
