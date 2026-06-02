import { Producto } from "./producto.js"

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio;
    }

    tarjeta() {
        return `
        ${this.nombre} - Digital (${this.licencia})
        Precio: ${this.calcularTotal()}
        `;
    }
}

let digital = new ProductoDigital("Curso JavaScript", 100, "mensual");

console.log(digital.tarjeta());
console.log(digital.calcularTotal());
console.log(digital.aplicarDescuento(20));