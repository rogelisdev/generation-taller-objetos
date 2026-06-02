class Usuario {
    constructor(nombre, email, rol = "cliente", activo = true) {
        this.nombre = nombre
        this.email = email
        this.rol = rol
        this.activo = activo
    }

    saludo() {
        return `Hola soy ${this.nombre} mi rol es de: ${this.rol}`
    }

    desactivar() {
        this.activo = false;
        return `La cuenta de ${this.nombre} ha sido desactivada`;
    }

     resumen() {
        let estado = this.activo ? "activa" : "inactiva";

        return `
        NOMBRE: ${this.nombre}
        EMAIL: ${this.email}
        ROL: ${this.rol}
        CUENTA: ${estado}
        `;
    }
}

let user1 = new Usuario("Ana", "ana@email.com");
let user2 = new Usuario("Carlos", "carlos@email.com", "admin");

console.log(user1.saludo());
console.log(user2.saludo());

console.log(user1.desactivar());

console.log(user1.resumen());
console.log(user2.resumen());