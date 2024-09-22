const count = document.getElementById('count');

document.getElementById('count+').addEventListener('click', function(){
        counts = parseFloat(count.innerText);
        counts ++;
        count.innerText = counts;
});


document.getElementById('count-').addEventListener('click', function(){
        counts = parseFloat(count.innerText);
        counts --;
        count.innerText = counts;
});