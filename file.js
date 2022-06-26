/*Elaborar un programa que permita almacenar alumnos y su asistencia como:
    asistencia = a;
    falta = f;
    La situacion final de todos los alumnos(numero total de asistencia y faltas)
    Se permite el 10% de faltas a modo de acreditar, de ser mas mostrar que esta reprobado*/

    //Creacion de Soluciones
    //1.- crear una funcion para almacenar en un vector la cantidad de alumnos, como su nombre y asistencias
    //2.- crear funcion para mostrar la cantidad de alumnos, faltas y asistencias
    //3. Mostrar la situacion de cada alumno calculando el promedio de asistencia

    var listaAlumnos = [];

        let cantidad = parseInt(prompt("Ingrese la cantidad de alumnos a registrar: "));
    

    function registrarAlumnos(cantidad){
        for(let i=0; i<cantidad; i++){
            listaAlumnos[i] = [prompt("Ingrese el nombre del alumno:" + (i+1)),0]; //esto esta asi listaAlumnos = [nombre, asistencias]
        }
    }

    let pasarLista = ()=>{
       for(let i=0; i<10; i++){
        for(let k=0; k<cantidad; k++){
            let respuesta = prompt("Ingrese a para asistencia o f para falta del alumno: "+ (listaAlumnos[k][0]));
            if(respuesta == 'a'){
                listaAlumnos[k][1] += 1;
            }else if(respuesta == 'f'){
                alert(("tienes falta"));
            }else{
                alert("No es una opcion aceptable");
            }
        }
       }
    }

    function mostrarResultados(){
        for(let i= 0; i<cantidad; i++){
            document.write(`Nombre:  ${listaAlumnos[i][0]} <br>
                            Asistencias: ${listaAlumnos[i][1]} <br>`);
                            if((listaAlumnos[i][1])>=4){
                                document.write("El estudiante ha pasado");
                            } else{
                                document.write("El estudiante ha REPROBADO");
                            }
                            document.write("<br><br/>");
        }
    }


    registrarAlumnos(cantidad);
    pasarLista();
    mostrarResultados();