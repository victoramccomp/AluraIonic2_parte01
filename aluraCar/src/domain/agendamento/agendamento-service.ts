import { Http } from '@angular/http';
import { Agendamento } from './agendamento';
import { Injectable } from '@angular/core';

@Injectable()
export class AgendamentoService {

    constructor(private _http: Http) {

    }

    agendar(agendamento: Agendamento) {
        
        return this._http
			.get(`https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`)
			.toPromise();
    }
}