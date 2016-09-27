function rysujChoinke (wiersze) {
	
	for (var i=1; i<=wiersze; i++) {
		var star = '';
    		
    	for (var k=1; k<=(i*2)-1; k++) {
      	star += '*';
    	}
    
    console.log(star);
				
  	}
}

rysujChoinke(5)