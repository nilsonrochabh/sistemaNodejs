var mongoose = require('mongoose');


module.exports = function(){
	var produtoSchema = mongoose.Schema({

		cod				 : {type:Number,integer:true},
		descricao  		 : {type:String,trim:true},
		valor_unidade    : {type:String,trim:true},
		quantidade 		 : {type:String,trim:true,},
		data_validade	 : {type:Date},
		data_cad		 : {type:Date, default:Date.now}

	});

		return mongoose.model('Produtos', produtoSchema)
}