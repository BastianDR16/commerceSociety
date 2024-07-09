//ejercicio 1 
function randomParImpar(){
    for (let i = 0; i < 5; i++) {
      let numeroGenerado = Math.floor(Math.random() * 100); 
      if (numeroGenerado % 2 === 0) {
        console.log(numeroGenerado,' es par') 
      } else {
        console.log(numeroGenerado, " es impar");
      }
    }
  }
  randomParImpar()
  //ejercicio 2
  function mostrarMultiplos(numero) {
      for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) {
          console.log(i,'multiplo'); 
        }
      }
  }
  mostrarMultiplos(9)

  //ejercicio 3

  function contarCaracter(texto, caracter) {
      let contador = 0;
      for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
          contador++;
        }
      }
      console.log('se repite: ', contador,' veces');
  }
  contarCaracter('anita lava la tina','a');

  //ejercicio 4
  function invertirArreglo(arreglo) {
      console.log("Arreglo original:", arreglo);
      console.log("Arreglo invertido:", arreglo.slice().reverse());
  }
  
  invertirArreglo([23, 5, 34, 56, 98]); 
  
  //ejercicio 5
  class Persona {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    getDetalles() {
      console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
    }
  }
  
  class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
      super(nombre, apellido, edad);
      this.posicion = posicion;
    }
  
    getDetalles() {
      super.getDetalles();
      console.log(`Posición: ${this.posicion}`);
    }
  }
  
  class Entrenador extends Persona {
    constructor(nombre, apellido, edad, anosExperiencia, idFederacion = Math.floor(Math.random() * 100000)) {
      super(nombre, apellido, edad);
      this.anosExperiencia = anosExperiencia;
      this.idFederacion = idFederacion;
    }
  
    getDetalles() {
      super.getDetalles();
      console.log(`Años de Experiencia: ${this.anosExperiencia}, ID de Federación: ${this.idFederacion}`);
    }
  }
  
  // Uso de las clases
  let jugador1 = new Jugador("Juan", "Pérez", 25, "Delantero");
  jugador1.getDetalles();
  
  let entrenador = new Entrenador("Carlos", "Sánchez", 45, 20);
  entrenador.getDetalles();
  

  //bonus

  function bonusMayusculas(texto) {
    let resultado = '';
    let encontradoPunto = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '.') {
            encontradoPunto = true;
        }

        if (!encontradoPunto) {
            resultado += texto[i].toUpperCase();
        } else {
            resultado += texto[i];
        }
    }

    return resultado;
}

const textoOriginal = "este es un ejemplo. despues del punto todo queda igual.";
const textoConvertido = bonusMayusculas(textoOriginal);
console.log("Antes: ", textoOriginal);
console.log("Después: ", textoConvertido);
