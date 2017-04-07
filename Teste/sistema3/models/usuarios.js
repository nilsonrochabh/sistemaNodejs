var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


module.exports = function(){
	var usuarioSchema = mongoose.Schema({
		nome    : {type:String,trim:true},
		email   : {type:String,trim:true, unique:true,index:true},
		img 	: {data: Buffer, contentType:String},
		site    : {type:String,trim:true},
		password: {type:String},
		data_cad: {type:Date, default:Date.now}

	});
		//criptogrando a senha com 8 caracteres
		usuarioSchema.methods.generateHash = function(password){
		return bcrypt.hashSync(password, 
			bcrypt.genSaltSync(8), null);
	};
		//verificando se a senha digitada e a mesma do banco
		usuarioSchema.methods.validPassword = function(password, old_password){
		return bcrypt.compareSync(password, old_password, null);
	}

	return mongoose.model('Usuarios', usuarioSchema)
}