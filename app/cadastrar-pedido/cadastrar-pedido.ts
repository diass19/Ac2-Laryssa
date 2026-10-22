import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PedidosService } from '../pedidos-service';  
import { Pedido } from '../pedido'; 

@Component({
  imports: [FormsModule],
  selector: 'app-cadastrar-pedido',
  styleUrl: './cadastrar-pedido.css',
  templateUrl: './cadastrar-pedido.html',
})
export class CadastrarPedido {
  pedido: Pedido = {} as Pedido;

  constructor(private pedidosService: PedidosService) {}

  cadastrar() {
    this.pedidosService.adicionar(this.pedido);
    this.pedido = {} as Pedido;
    
    alert('Pedido cadastrado.');
  }
}


