import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  //iniciamos una const useState con el ancho de la pantalla como default

  React.useEffect(() => {
    //useEffect
    function miramosElAncho() {
      //2 . funcion que cambia el valor de la const windowWidth por el del ancho de la pantalla
      console.log("Preparamos");
      setWindowWidth((prevWindowWidth) => window.innerWidth);
    }

    window.addEventListener("resize", miramosElAncho);
    //1 .agregamos un event listener que cuando se cambia el tamaño de la ventana corremos la funcion miramos el ancho
    //3. al no renderizar el componente cuando apretamos el boton , pero el eventListener que agregamos en el paso 1 , sigue
    // atado al DOM , genera un memory leak , para esto podemos devolver una funcion de limpieza
    return function () {
      //4. funcion de limpieza , sirve para que  podamos limpiar los efectos innecesarios generados en useEffect
      console.log("Limpiando");
      window.removeEventListener("resize", miramosElAncho); // 5. retiramos el event listener, tenemos que pasarle la funcion a eliminar tambien
    };
  }, []);
  return <h1>Window width: {windowWidth}</h1>; // 6. mostramos la constante useState
}
