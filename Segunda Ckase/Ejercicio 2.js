class  TicketManager{
    #precioBaseDeGanancia

    constructor(precioBaseDeGanancia){
        this.#precioBaseDeGanancia = precioBaseDeGanancia;
        this.contador = 0;
        this.eventos = [];

    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()){
        let evento = {
            id: this.contador++,
            nombre: nombre,
            lugar: lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        }

        this.eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario){
        let evento = this.eventos.find((e) => e.id === idEvento);
        if(!evento){
            throw new Error("there's no event")
        }

        if(evento.participantes.includes(idUsuario)){
            throw new Error("this user already exists")
        }

        evento.participantes.push(idUsuario);
    }

    ponerEventoEngira(idEvento, nuevaLocalidad, nuevaFecha){
        let evento = this.eventos.find((e) => e.id === idEvento)
        
        let nuevoEvento = {
            ...evento,
            id: this.contador++,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha

        }
        this.eventos.push(nuevoEvento);
    }
}

let test = new TicketManager();

test.agregarEvento("Gabriela", "buenos aires", "10");

console.log(test)