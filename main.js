const questions = document.querySelectorAll('.faq-q');
const elements = document.querySelectorAll('.faq-a');

function collapse(){
    for(let element of elements){
        element.style.display = 'none';
    }
    for(let q of questions){
        q.querySelector('.arrow-top').style.display = 'none';
        q.querySelector('.arrow-down').style.display = 'block';
    }
}

function accordion(ele){
    const nextElement = ele.nextElementSibling;
    const eleStyle = getComputedStyle(nextElement);
    
    const grand_arrow_top = ele.querySelector('.arrow-top');
    const grand_arrow_down = ele.querySelector('.arrow-down');
    
    if(eleStyle.display === 'none'){
        collapse();
        nextElement.style.display = 'block';
        grand_arrow_down.style.display = 'none';
        grand_arrow_top.style.display = 'block';
    }
    else{
        nextElement.style.display = 'none';
        grand_arrow_down.style.display = 'block';
        grand_arrow_top.style.display = 'none';
    }
}