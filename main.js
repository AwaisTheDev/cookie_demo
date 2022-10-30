jQuery(document).ready(function($){
	setCookie = (cName, cValue, expDays) => {
		let date =  new Date();
		date.setTime(date.getTime() + (expDays * 24 * 60 *60 * 1000 ));
		
		const expires = "expires=" + date.toUTCString();
		
		document.cookie = cName + "=" + cValue +  ";" + expires +  "; path=/";
		
	}
	
	getCookie = (cName) => {
		const name = cName + "=";
		const cDecoded = decodeURIComponent(document.cookie);
		const cArr = cDecoded.split("; ");
		let value; 
		
		cArr.forEach(val=>{
			if(val.indexOf(name) === 0) value = val.substring(name.length);
		})
		
		return value;
	}
	
	cookieMessage = () => {
		if(!getCookie('cookie')){
			$('#topbar-offer').css('display', 'flex');
		}
	}
	
	cookieMessage();
	
	$('#close-topbar-offer').click(function(){
		$('#topbar-offer').slideUp();
		setCookie('cookie', true, 1);
	})
	
	
	
})
