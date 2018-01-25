import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public carros;

	constructor(public navCtrl: NavController) {
		this.carros = [
			{ nome: 'Creta', preco: 50000 },
			{ nome: 'HB20', preco: 25000 },
			{ nome: 'HB20S', preco: 60000 },
			{ nome: 'HB20X', preco: 40000 },
			{ nome: 'ix35', preco: 27000 },
			{ nome: 'Caravan', preco: 76000 },
			{ nome: 'Celta', preco: 100000 },
			{ nome: 'Chevette Hatch', preco: 55000 },
			{ nome: 'Chevette', preco: 30000 },
			{ nome: 'Chevy', preco: 60000 },
			{ nome: 'Cobalt', preco: 30000 },
			{ nome: 'Corisco', preco: 67000 },
			{ nome: 'Corsa', preco: 250000 },
			{ nome: 'Corsa Sedan', preco: 420000 },
			{ nome: 'Corsa Pick-up', preco: 490000 },
			{ nome: 'Corsa Wagon', preco: 60000 }
		]
	}

}
