import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

import { PedidosService } from '../pedidos-service';
import { Pedido } from '../pedido';

@Component({
  imports: [CommonModule],
  selector: 'app-lista-pedidos',
  styleUrl: './lista-pedidos.css',
  templateUrl: './lista-pedidos.html',
})
export class ListaPedidos {

  pedidos: Pedido[] = [];
  constructor(private pedidosService: PedidosService) {}
    ngOnInit(): void {
      this.pedidos = this.pedidosService.listar();
    }

    remover(id: number): void {
      this.pedidosService.remover(id);
      this.pedidos = this.pedidosService.listar();

    }

    pedidoEntregue(id: number): void {
      this.pedidosService.pedidoEntregue(id);
      this.pedidos = this.pedidosService.listar();
    }

    pedidoSaiuParaEntrega(id: number): void {
      this.pedidosService.pedidoSaiuParaEntrega(id);
      this.pedidos = this.pedidosService.listar();
    }

    pedidoEmEntrega(id: number): void {
      this.pedidosService.pedidoEmEntrega(id);
      this.pedidos = this.pedidosService.listar();
    }

    pedidoEmPreparo(id: number): void {
      this.pedidosService.pedidoEmPreparo(id);
      this.pedidos = this.pedidosService.listar();
    }

    pedidoPronto(id: number): void {
      this.pedidosService.pedidoPronto(id);
      this.pedidos = this.pedidosService.listar();
    }
    








}
