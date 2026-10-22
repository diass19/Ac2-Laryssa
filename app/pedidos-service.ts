import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
    providedIn: 'root'
})
export class PedidosService {
    pedidos: Pedido[] = [];

    listar(): Pedido[] {
        return this.pedidos;
    }

    adicionar(pedido: Pedido): void {
        this.pedidos.push(pedido);
    }


    remover(id: number): void {
        this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
    }


    pedidoPronto(id: number): void {
        const pedido = this.pedidos.find(pedido => pedido.id === id);

        if (pedido) {
            pedido.pedidoPronto = true;
        }
    }

    pedidoEntregue(id: number): void {
        const pedido = this.pedidos.find(pedido => pedido.id === id);

        if (pedido) {
            pedido.pedidoEntregue = true;
        }
    }

    pedidoSaiuParaEntrega(id: number): void {
        const pedido = this.pedidos.find(pedido => pedido.id === id);

        if (pedido) {
            pedido.pedidoSaiuParaEntrega = true;
        }
    }

    pedidoEmEntrega(id: number): void {
        const pedido = this.pedidos.find(pedido => pedido.id === id);

        if (pedido) {
            pedido.pedidoEmEntrega = true;
        }
    }


    pedidoEmPreparo(id: number): void {
        const pedido = this.pedidos.find(pedido => pedido.id === id);
        if (pedido ) {
            pedido.pedidoEmPreparo = true;
        }
    }


}

