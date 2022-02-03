
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
close.addEventListener('click', function(){
    nav.classList.remove('active')
})

const bigImage =document.getElementById('main-img')
const smallImage = document.getElementsByClassName('small-img')

smallImage[0].onclick = ()=>{
    bigImage.src = smallImage[0].src;
}

smallImage[1].onclick = ()=>{
    bigImage.src = smallImage[1].src;
}

 smallImage[2].onclick = ()=>{
    bigImage.src = smallImage[2].src;
}

 smallImage[3].onclick = ()=>{
    bigImage.src = smallImage[3].src; 
}

// for (i=0 ; i < smallImage.length; i++){
//     smallImage[i].onclick = ()=>{
//         bigImage.src = smallImage[i].src;
//     }
// }
 