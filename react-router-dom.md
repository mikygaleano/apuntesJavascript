# React Router Dom #
___

## BrowserRouter vs. HashRouter ##

### React Router Dom 6 tiene 3 tipos de Routers: ###

- Browser Router: Su navegación funciona por medio de los Slash / que indican en que página de la aplicación estamos. Este lo usamos si tenemos una ubicación de otro HTML cargado en el backend, si no lo encuentra retorna un Error 404.

- Hast Router: Su navegación funciona por medio de los Slash Hashes y Slash /#/, esto nos puede servir para renderizar contenido guiándonos con los hash gracias a JavaScript. Este no nos saca del index.html, esto nos sirve para crear páginas SPA.

- Memory Router: Funciona por medio de un Array de rutas que nos indica en que ruta estamos y renderizar ese contenido. Se suele usar para aplicaciones móviles para cambiar de vistas.


Para empezar a utilizar React Router Dom hay que instalarlo, con el siguiente comando: 

```Bash
$ npm install react-router-dom
```
Posterior a la instalación cada vez que se use react router dom hay a que importarlo en el archivo donde lo vamos a usar

```js
import { HashRouter, Routes, Route } from 'react-router-dom'

export default function App (){

    return (
        <>
            <HashRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}>
                    <Route path="*" element={<p>Not found<p/>}>
                </Routes>
            </HashRouter>
        </>
    );
}
```


