module.exports = function(req,res){
	
	req.assert('nome', 'informe seu nome').notEmpty();

	if(req.body.email != ''){
		req.assert('email', 'Email Invalido').isEmail();
	}

	validacoesErros = req.validationErrors() || []

	if(validacoesErros.length > 0){
		validacoesErros.forEach(function(e){
			req.flash('erro', e.msg);
		});
		return false;
	} 

	return true;
}	