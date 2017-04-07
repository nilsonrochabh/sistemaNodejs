module.exports =function(app){
	var home=app.controllers.home

	var autenticar = require('../middleware/autenticar');

	app.route('/')
		.get(home.login)
		.post(home.autenticacao);
	
	app.route('/home').get(autenticar,home.index);

	//saindo do sistema
	app.route('/logout').get(autenticar,home.logout);

	//indo para view email
	app.route('/email')
		.get(autenticar,home.email)
		.post(home.enviar);
}