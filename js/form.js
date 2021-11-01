		function mascara(telefone){ 
			if(telefone.value.length == 0)
				telefone.value = '(' + telefone.value;
				
			if(telefone.value.length == 3)
				telefone.value = telefone.value + ') '; 
	
			if(telefone.value.length == 10)
				telefone.value = telefone.value + '-';
        }
