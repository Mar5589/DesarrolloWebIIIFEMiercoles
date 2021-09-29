
let alumnos = {
    nombre : "maria",
    edad:18,
    mostrar:()=>{
        return `hola soy ${alumnos.nombre} y tengo ${alumnos.edad}`
    }
};
let saludo = `saludo32, ${alumnos.nombre} `
ReactDOM.render(
    <div className="row"> 
        <div className="col-6 bg-primary text-white text-center p-4">
            Aquí estamos dentro de react {alumnos.mostrar()}
        </div>
    </div>,
    document.getElementById('root')
);