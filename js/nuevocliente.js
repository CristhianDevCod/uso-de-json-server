// IIFE (Immediately Invoked Function Expression)
import { mostrarAlerta, validarObjeto } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(function(){


	// referencias
	const formulario = document.querySelector('#formulario')
	formulario.addEventListener('submit', validarCliente);

	// funciones
	function validarCliente(e){
		e.preventDefault();

		// Referencias a los campos
		const nombre = document.querySelector('#nombre').value;
		const email = document.querySelector('#email').value;
		const telefono = document.querySelector('#telefono').value;
		const empresa = document.querySelector('#empresa').value;

		// objeto
		const cliente = { // método abreviado
			nombre, 
			email,
			telefono,
			empresa
		}

		if(validarObjeto(cliente)){
			mostrarAlerta('Debes llenar todos los campos');
			return;
		}

		nuevoCliente(cliente)
	}
})();