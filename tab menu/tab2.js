
const targetLink = document.querySelectorAll('.tab-menu a');
const tabContent = document.querySelectorAll('.tab-content > div');

for (var i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        e.preventDefault();
        const orgTarget = e.target.getAttribute('href');
        var tabTarget = orgTarget.replace('#','');  

        for(var x = 0; x < tabContent.length; x++){
            tabContent[x].style.display='none';
        }
        document.getElementById(tabTarget).style.display='block';

        for(var j=0; j<targetLink.length; j++){
            targetLink[j].classList.remove('active');
            e.target.classList.add('active');
        }
    })
}
document.getElementById('tabs-1').style.display = 'block';
