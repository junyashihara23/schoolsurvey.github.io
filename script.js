


const comeback = document.getElementById("btn2");
const yes = document.getElementById("btn1");

//group 1 of btts

const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt2');
const btt3 = document.getElementById('btt3');
const btt4 = document.getElementById('btt4');
const btt5 = document.getElementById('btt5');
const btt6 = document.getElementById('btt6');
const btt7 = document.getElementById('btt7');
const btt8 = document.getElementById('btt8');
const btt9 = document.getElementById('btt9');
const btt10 = document.getElementById('btt10');
const btt11 = document.getElementById('btt11');
const btt12 = document.getElementById('btt12'); 

//second group of btts

const bbtt1 = document.getElementById('bbtt1');
const bbtt2 = document.getElementById('bbtt2');
const bbtt3 = document.getElementById('bbtt3');
const bbtt4 = document.getElementById('bbtt4');
const bbtt5 = document.getElementById('bbtt5');
const bbtt6 = document.getElementById('bbtt6');
const bbtt7 = document.getElementById('bbtt7');
const bbtt8 = document.getElementById('bbtt8');
const bbtt9 = document.getElementById('bbtt9');
const bbtt10 = document.getElementById('bbtt10');
const bbtt11 = document.getElementById('bbtt11');
const bbtt12 = document.getElementById('bbtt12'); 


//IMAGESSSSSS///////

const hands = document.getElementById('hands');
const sadcat = document.getElementById('why');
const cryingbaby = document.getElementById('cryingbaby');
const ok = document.getElementById('ok');
const sosad  = document.getElementById('sosad');
const nowhy = document.getElementById('nowhy');
const tog = document.getElementById('tog');
const cry = document.getElementById('cry');



comeback.addEventListener("click", function (){
			btt12.style.opacity= "1";
			comeback.style.opacity= "0";
									
});

btt12.addEventListener("click", function (){
			btt12.style.opacity= "0";
			bbtt3.style.opacity= "1";
			hands.style.opacity= "1";
									
});

bbtt3.addEventListener("click", function (){
			btt1.style.opacity= "1";
			bbtt3.style.opacity= "0";
			why.style.opacity= "1";
									
});

btt1.addEventListener("click", function (){
			btt1.style.opacity= "0";
			btt4.style.opacity= "1";
			cryingbaby.style.opacity= "1";
									
});

btt4.addEventListener("click", function (){
			btt2.style.opacity= "1";
			btt4.style.opacity= "0";
			ok.style.opacity= "1";					
});

btt2.addEventListener("click", function (){
			btt2.style.opacity= "0";
			bbtt1.style.opacity= "1";
			tog.style.opacity= "1";				
			yes.style.padding= "50px";
				
});

bbtt1.addEventListener("click", function (){
			bbtt8.style.opacity= "1";
			bbtt1.style.opacity= "0";
			cry.style.opacity= "1";					
});

bbtt8.addEventListener("click", function (){
			bbtt8.style.opacity= "0";
			btt6.style.opacity= "1";
			nowhy.style.opacity= "1";			
			
					
			
});

btt6.addEventListener("click", function (){
			bbtt6.style.opacity= "0";
			btt4.style.opacity= "0";	 
		 btt3.style.opacity= "1";
							
});

btt3.addEventListener("click", function (){
			bbtt6.style.opacity= "1";
			btt1.style.opacity= "1";
			btt4.style.opacity= "1";	 
		 btt3.style.opacity= "1";
		 btt2.style.opacity= "1";
		 btt5.style.opacity= "1";
		 btt6.style.opacity= "1";
		 btt9.style.opacity= "1";
		 btt11.style.opacity= "1";
		 btt10.style.opacity= "1";
		 bbtt1.style.opacity= "1";
		 bbtt2.style.opacity= "1";
		 bbtt3.style.opacity= "1";
		 bbtt4.style.opacity= "1";
		 bbtt5.style.opacity= "1";
		 
		 bbtt7.style.opacity= "1";
		 
		 bbtt9.style.opacity= "1";
		 
		 
							
});
