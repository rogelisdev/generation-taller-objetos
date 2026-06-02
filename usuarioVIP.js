import { Usuario } from "./usuario.js";
class UsuarioVIP extends Usuario{
    constructor(nombre, email, membresia){
        super(nombre, email, "CLIENTE VIP")
        this.membresia = membresia;
    }

    saludo(){
         return `Hola, soy ${this.nombre}, soy cliente VIP ${this.membresia}`; 
    }

    beneficios(){
        if(this.membresia === "Gold"){
            return "Acceso exclusivo"
        } else if(this.membresia === "Platinum"){
            return "Acceso Platinum"
        } else {
            return "Acceso regular"
        }
    }
}

let usuario1 = new Usuario("Ana", "ana@email.com");
let vip1 = new UsuarioVIP("Carlos", "carlos@email.com", "Gold");
let vip2 = new UsuarioVIP("Laura", "laura@email.com", "Platinum");

console.log(usuario1.saludo());
console.log(vip1.saludo());
console.log(vip2.saludo());

console.log(vip1.beneficios());
console.log(vip2.beneficios());