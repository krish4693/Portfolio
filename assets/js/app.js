const scrollUp=document.querySelector('#scroll-up')

scrollUp.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
})

const navigationHeight=document.querySelector('.primary-navigation').offsetHeight;
// console.log(navigationHeight);

document.documentElement.style.setProperty('--scroll-padding',navigationHeight+'px');    