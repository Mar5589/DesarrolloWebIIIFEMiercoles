let elemento = document.getElementById(`root`);

const nombreCompleto=(nombre=" ", apellido=" " )=>{
   let nc = `<h2>mi nombre es: ${nombre} ${apellido}</h2>`;
    return nc;
};
elemento.innerHTML+=nombreCompleto("marcos");
elemento.innerHTML+=nombreCompleto("marcos, chura");
elemento.innerHTML+=nombreCompleto("marco");
elemento.innerHTML+=nombreCompleto("marco,mena");