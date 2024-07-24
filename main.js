const box = document.querySelectorAll('.content')
 window.addEventListener('scroll' , checkBox)

 checkBox()
 function checkBox(){
    const bottom = window.innerHeight / 5 * 4;

    box.forEach(box => {
        const top = box.getBoundingClientRect().top
        console.log(bottom +' > '+ top);
        if(bottom > top){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
 }
