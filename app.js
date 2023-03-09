/* console.log(parseInt(process.argv[2])+
parseInt(process.argv[3])+
parseInt(process.argv[4])) */
//console.log(process.argv)

let preguntas =["Dime tu nombre \n", "Dime tu apellido \n"];
let respuestas =[];

function preguntar(indice){
    process.stdout.write(preguntas[indice])
}

process.stdin.on('data', (data)=>{
    respuestas.push(data.toString().trim()) 
    if(respuestas.length < preguntas.length){
        preguntar(respuestas.length);
    }else{
        process.stdout.write(respuestas.toString())
        process.exit()
    }
  
})

preguntar(0);
