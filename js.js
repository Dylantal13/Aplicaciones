console.log(scrollY);
const d = document;

const configurarClase = (elemento, clase, opt) =>{
   const lista = d.querySelectorAll(elemento);
    lista.forEach(submenu => submenu.classList.toggle(clase, opt));
}
d.addEventListener("scroll", ()=>{
	if(scrollY >= 192)  {
		d.querySelector(".Navegacion").classList.add("blanco");
        configurarClase(".Navegacion .menu a", "negro", true);
       configurarClase(".btn-menu label", "negro", true);
        
	}
	else{
		d.querySelector(".Navegacion").classList.remove("blanco");
        configurarClase(".Navegacion .menu a", "negro", false);
        configurarClase(".btn-menu label", "negro", false);
       

	}
    
});