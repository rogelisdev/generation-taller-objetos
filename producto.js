export class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    // 💰 IVA 19%
    calcularTotal() {
        return this.precio * 1.19;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100);
    }

    resumen() {
        return `
        PRODUCTO: ${this.nombre}
        CATEGORIA: ${this.categoria}
        PRECIO BASE: ${this.precio}
        `;
    }

    tarjeta() {
        return `
        ${this.nombre} - ${this.categoria}
        Precio con IVA: ${this.calcularTotal()}
        `;
    }
}