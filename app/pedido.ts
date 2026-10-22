export interface Pedido {
    id: number;
    pedidoEmPreparo: boolean;
    pedidoPronto: boolean;
    pedidoEmEntrega: boolean;
    pedidoSaiuParaEntrega: boolean;
    pedidoEntregue: boolean;
}
