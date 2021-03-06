window.onload=function(){
	
	var sweetWords=["Ela é tão linda!", "Algumas flores, andam e tem sorrisos lindos!", "Amor de uma vida e mais", "Acho que aquele espelho sempre diz teu nome","Ao te ver, minha cabeça dá mais voltas que seus belos cachos", "Nada é tão belo de comtemplar, quanto seus olhos","Um dia com ela é como viver mil vidas"];

	var containerI=document.querySelector(".icontainer");

	for(var i=0; i<=26;i++){
		var divF=document.createElement("div");
		var j=document.createElement("img");
		var p=document.createElement("p");

		divF.classList.add("divF");
		containerI.appendChild(divF);

		j.src="photos/"+i+".jpg";
		divF.appendChild(j);
		
		//Take a random phrase of the Arrya sweetWords
		p.innerText=sweetWords[Math.floor(Math.random()*sweetWords.length)];

		p.classList.add("phrases");
		divF.appendChild(p);
		if(window.innerWidth>800){
			if(i>=6){
				j.classList.add("is-hidden");
				p.classList.add("is-hidden");
			}	
			
			//Event to Appear the images by scrolling the screen
			window.addEventListener("scroll",function(){
				var theDivF=document.querySelectorAll(".divF");
				for(var i=6;i<theDivF.length;i++){
					if(window.scrollY>theDivF[i].offsetTop-680){
						for(var j=0; j<theDivF[i].children.length;j++){
							theDivF[i].children[j].classList.remove("is-hidden");
							theDivF[i].children[j].classList.add("show-images");
						}
					}
				}
			});
		}
		else{
			j.style.display="block !important";
			p.style.display="block !important";
		}

	}

	// The code below is to create the Model box by click in some image
	var allImages=document.querySelectorAll("img");

	for(var k=0; k<allImages.length;k++){
		allImages[k].addEventListener("click",function(){
			var modal=document.createElement("div");
			modal.classList.add("modal");
			
			var theImage=document.createElement("img");
			theImage.src=this.src;

			var fImage=document.createElement("div");
			fImage.classList.add("fImage");

			var fBtns=document.createElement("div");
			var theSpan=document.createElement("span");
			var btnBack=document.createElement("span");
			var btnForw=document.createElement("span");
			
			theSpan.innerText="x";
			btnBack.innerText="<";
			btnForw.innerText=">";

			btnBack.classList.add("theSpan");
			btnForw.classList.add("theSpan");
			theSpan.classList.add("theSpan");
			fBtns.classList.add("fBtns");

			theSpan.addEventListener("click",function(){
				document.querySelector("body").removeChild(modal);;
			});

			btnBack.addEventListener("click",function(){
				var aux=parseInt(theImage.src.split("/")[theImage.src.split("/").length-1].split(".")[0]);
				if(aux==0) aux=26;
				else aux-=1;

				theImage.src="photos/"+aux+".jpg";

					});

			btnForw.addEventListener("click",function(){
				var aux=parseInt(theImage.src.split("/")[theImage.src.split("/").length-1].split(".")[0]);
				if(aux==26) aux=0;
				else aux+=1;

				theImage.src="photos/"+aux+".jpg";

			
			});

			fBtns.appendChild(btnBack);
			fBtns.appendChild(theSpan);
			fBtns.appendChild(btnForw);

			fImage.appendChild(theImage);

			modal.appendChild(fBtns);
			modal.appendChild(fImage);


			document.querySelector("body").appendChild(modal);
		});
	}
	
	var asVezes=document.createElement("s");
	asVezes.innerText="só as vezes.";

	var finalDiv=document.createElement("div");
	finalDiv.classList.add("conclusion");

	var finalMessage=document.createElement("p");
	finalMessage.innerText="Impossível não se apaixonar por essa beleza, impossível deixar de ver essas imagens, após conhece-las, impossível, deixar de amar alguém tão doce, ";

	finalMessage.appendChild(asVezes);

	finalDiv.appendChild(finalMessage);

	document.querySelector(".icontainer").appendChild(finalDiv);
}

