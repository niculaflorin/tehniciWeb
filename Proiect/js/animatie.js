var wall = new Image(); //imaginea de background
		var background = 1; //variabila cu care fac animatia backgroud-ului
		var man = 1; //variabila pentru miscarea pe orizontal a omuletilui
		var randomVal = 0; //valoare random care hotaraste directia omuletului
		
		function init(){ //initializarea 
		  wall.src = 'https://i.stack.imgur.com/H9kT6.jpg';
		  window.requestAnimationFrame(draw);
		}
		function drawCover(){ //un dreptunghi ce acopera o parte din animatie pentru a da efectul dorit
			var ctx = document.getElementById('canvasCover').getContext('2d');
				ctx.fillRect(0, 0, 550, 200);
		}
		function draw2(){ //miscarile man-ului
			var ctx = document.getElementById('canvas2').getContext('2d');			
			var img = document.getElementById("man");
			var imghelp = document.getElementById("help");
			var leftBorder = -100;
			var rightBorder = 100;
			 ctx.clearRect(0,0,800,900); 


    		ctx.drawImage(img, 180, 10);
    		if(man > leftBorder && man < rightBorder)
    		{
    			randomVal = Math.floor(Math.random() * 10);
    			if( randomVal %2 == 0){
    				man -= randomVal;
    				ctx.translate(-randomVal, 0);
    			}else{
    				man += randomVal;
    				ctx.translate(randomVal, 0);	
    			}    				
    		}else if(man <= leftBorder){
    			randomVal = Math.floor(Math.random() * 10);
    			ctx.translate(randomVal, 0); 
    			man += randomVal;
    		}else if(man >= rightBorder){
    			randomVal = Math.floor(Math.random() * 10);
    			ctx.translate(-randomVal, 0); 
    			man -= randomVal;
    		}			
		}
		function draw() { //animam background-ul si apelam celelate functii de desenare
		  var ctx = document.getElementById('canvas').getContext('2d');
		 
		  
		  ctx.globalCompositeOperation = 'destination-over';
		  ctx.clearRect(0,0,800,900); 


		  ctx.drawImage(wall,0,0,500,500);
		  	if(background == 12 ){
				  	ctx.translate(0, 120);
					background = 0;
			}else {
					ctx.translate(0, -10);
					background += 1;
				}
		  	
			window.requestAnimationFrame(drawCover);
			window.requestAnimationFrame(draw2);
			window.requestAnimationFrame(draw);
		}

		init();