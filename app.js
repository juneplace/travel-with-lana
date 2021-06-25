const lineOne = document.getElementById('line1');
const lineTwo = document.getElementById('line2');
const link = document.querySelector('.working-link');
const linkDiv = document.querySelector('.working-div-link');

link.addEventListener('mouseover', function() {
    linkDiv.classList.add('moving-lines')
});
link.addEventListener('mouseout', function() {
    linkDiv.classList.remove('moving-lines');
});
