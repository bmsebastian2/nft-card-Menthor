
const imagen = document.querySelector('.imgQua')

imagen.addEventListener('mouseenter',()=>{
     imagen.src = './images/image-equilibrium-2.gif';    
})

imagen.addEventListener('mouseout',()=>{
     imagen.src = '/images/image-equilibrium.jpg';   
})

