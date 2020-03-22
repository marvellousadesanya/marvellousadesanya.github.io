



console.log('Teens\' debate');
var averageOfDebater, checkScoreYet, group1AverageScore, group2AverageScore;

var yobo = {
    name: 'Yobo',
    dressing: 5,
    confidence: 5,
    bibleReferences: 2,
    timeManagement: 4,
    points: 4,
    calcAverageYobo: function() {
        averageYobo = this.dressing + this.confidence + this.bibleReferences + this.timeManagement + this.points;
        return averageYobo;
    }
};

var awele = {
    name: 'Awele',
    dressing: 8,
    confidence: 9,
    bibleReferences: 10,
    timeManagement: 10,
    points: 8,
    calcAverageAwele: function() {
        var averageAwele = this.dressing + this.confidence + this.bibleReferences + this.timeManagement + this.points;
        return averageAwele;
    }
};


var marvel = {
    name: 'Marvel',
    dressing: 6,
    confidence: 8,
    bibleReferences: 8,
    timeManagement: 7,
    points: 8,
    calcAverageMarvel: function() {
        var averageAwele = this.dressing + this.confidence + this.bibleReferences + this.timeManagement + this.points;
        return averageAwele;
    }
    
};

osaige = {
    name: 'Osaige',
    dressing: 5,
    confidence: 7,
    bibleReferences: 9,
    timeManagement: 7,
    points: 7,
    calcAverageOsaige: function() {
        var averageOsaige = this.dressing + this.confidence + this.bibleReferences + this.timeManagement + this.points;
        return averageOsaige;
    }
};

document.querySelector('.btn-3').disabled = true;

function group1finalScore() {
    group1AverageScore = yobo.calcAverageYobo() + marvel.calcAverageMarvel();
    document.querySelector('.answer-1').textContent = 'Group 1 had an average score of ' + group1AverageScore + '/100 points';
    return group1AverageScore;
};

function group2finalScore() {
    group2AverageScore = awele.calcAverageAwele() + osaige.calcAverageOsaige();
    document.querySelector('.answer-2').textContent = 'Group 2 had an average score of ' + group2AverageScore + '/100 points';
    return group2AverageScore;
};

function revealWinner() {
    
    if (group1AverageScore > group2AverageScore) {
        document.querySelector('.final-result').textContent = 'Therefore Group 1 wins the debate!';
    } else if (group1AverageScore < group2AverageScore) {
        document.querySelector('.final-result').textContent = 'Therefore Group 2 wins the debate!';
    } else if (group1AverageScore === group2AverageScore) {
        document.querySelector('.final-result').textContent = 'It\'s a tie!';
    } else {
        document.querySelector('.final-result').textContent = 'Click on the first 2 buttons first!';
    }
}



document.querySelector('.btn-1').addEventListener('click', group1finalScore);
document.querySelector('.btn-2').addEventListener('click', group2finalScore);

document.querySelector('.btn-3').addEventListener('click', revealWinner);
//(yobo.calcAverageYobo() + awele.calcAverageAwele() + marvel.calcAverageMarvel() + osaige.calcAverageOsaige());