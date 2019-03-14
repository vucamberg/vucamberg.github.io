/* PortFolio; Vucamberg Santos
 *  vuca.net@gmail.com
 */

window.addEventListener("scroll", function(){
    ghostText();
});

window.onload=function(){
    randomColor();
    createTabList();
    ballsCreate();
    menuMobile();
    window.addEventListener("resize", menuMobile);
}
// Function to scroll the page
const scrollMenu=(targetId)=>{
    let position=document.querySelector(targetId).offsetTop;
    window.scrollTo(0, position);

    //OK it is a wrong, but I cannot find other way
    //this function below try to close the menu-mobile
    try{
	let ulBurguer=document.querySelector(".c-burguer");
	document.querySelector(".mobile-menu").classList.toggle("animation-menu-mobile");
	ulBurguer.firstChild.classList.toggle("c-first-bread");
	ulBurguer.children[1].classList.toggle("c-middle-meat");
	ulBurguer.lastChild.classList.toggle("c-last-bread");	
    }catch(e){}
}


// Function to animation ghost-text

const ghostText=()=>{
    let allText=document.querySelectorAll(".c-ghost-text");
    allText.forEach((a,b,c)=>{
	if(window.scrollY > a.offsetTop+400){
	    a.classList.remove("c-ghost-text");
	    a.classList.add("ghost-text");
	}
    });
}

// Function random colors in Portfolio section

const randomColor=()=>{
    let allTarget=document.querySelectorAll(".port-item");
    allTarget.forEach((a,b,c)=>{
	let i=Math.floor((Math.random()*5)+1);
	a.classList.add(`color-${i}`);
    });
}


// Function to Create the TabList in Technologies

const createTabList=()=>{

    let div=document.createElement("div");
    let divFP=document.createElement("div");
    let ul=document.createElement("ul");
    let allItens=document.querySelectorAll(".tech-item");
    let cont1=0, cont2=0;

    ul.classList.add("tab-list");

    allItens.forEach((a,b,c)=>{
	var li=document.createElement("li");
	var divItem=document.createElement("div");

	li.appendChild(a.children[0]);
	li.dataset.indtab=cont1++;
	li.classList.add("tab-header");
	li.addEventListener("click",function(){
	    // Hidden and visibleb the body
	    let k=document.querySelectorAll(".tab-body");
	    k.forEach((a,b,c)=>{
		a.classList.add("hidden-tab-body");
	    });
	    k.forEach((a,b,c)=>{
		if(a.dataset.bodtab==this.dataset.indtab){
		    a.classList.remove("hidden-tab-body");
		}
	    });

	    //Change my color
	    let n=document.querySelectorAll(".tab-header");
	    n.forEach((a,b,c)=>{
		for(let m=1;m<=7;m++){
		    a.classList.remove("color-"+m);
		}
	    });
	    this.classList.add("color-"+Math.floor((Math.random()*7)+1));
	});
	ul.appendChild(li);

	divItem.appendChild(a.children[0]);
	divItem.dataset.bodtab=cont2++;
	divItem.classList.add("tab-body");
	divItem.classList.add("hidden-tab-body");
	divFP.appendChild(divItem);
	
    });

    div.appendChild(ul);
    div.appendChild(divFP);
    divFP.firstChild.classList.remove("hidden-tab-body");

    document.querySelector(".tech-container").innerHTML="";
    document.querySelector(".tech-container").appendChild(div);
    
}



//function to create balls list

const ballsCreate=()=>{
    let allBalls=document.querySelectorAll(".c-balls");
    allBalls.forEach((a,b,c)=>{
	let ul=document.createElement("ul");
	let n=a.dataset.balls;

	ul.classList.add("f-balls");
	for(let i=0;i<n;i++){
	    var li=document.createElement("li");

	    if(i<a.dataset.ballsf){
		if(i==0){
		    li.classList.add("balls-bigger");
		}
		li.classList.add("balls-colored");
	    }else{
		li.classList.add("balls-gray");
		li.classList.add("balls-smaller");
	    }

	    ul.appendChild(li);
	}

	a.appendChild(ul);
    });
}


// Menu Mobile

const menuMobile=()=>{

    if(window.innerWidth <= 950){
	const itens=3;
	let ul=document.querySelector("nav ul");
	let header=document.querySelector("header");
	header.classList.add("c-header-2");
	header.classList.remove("c-header");
	if(!ul.classList.contains("c-burguer")){
	    ul.classList.add("mobile-menu");
	}

	let div= document.querySelector(".c-f-burguer") || document.createElement("div");
	div.classList.add("c-f-burguer");
	let ulBurguer=document.querySelector(".c-burguer") || document.createElement("ul");
	ulBurguer.classList.add("c-burguer");
	ulBurguer.addEventListener("click",function(){
	    ul.classList.toggle("animation-menu-mobile");
	    this.firstChild.classList.toggle("c-first-bread");
	    this.children[1].classList.toggle("c-middle-meat");
	    this.lastChild.classList.toggle("c-last-bread");
	    
	});

	if(ulBurguer.children.length==0){
	    div.appendChild(ulBurguer);
	    for(let i=0;i<itens;i++){
		var li=document.createElement("li");
		ulBurguer.appendChild(li);
	    }

	    ul.parentNode.insertBefore(div,ul);
	}
    }else if(window.innerWidth > 950){
	try{
	    let nav=document.querySelector("nav");
	    nav.removeChild(document.querySelector(".c-f-burguer"));
	    let headerScre=document.querySelector("header");
	    
	    headerScre.classList.add("c-header");
	    headerScre.classList.remove("c-header-2");

	    let ulScre=document.querySelector("nav ul");
	    ulScre.classList.remove("mobile-menu");
	    
	}catch(e){}
    }
}
