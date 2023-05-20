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
___

## Link vs. NavLink ##

### Link ###

- Estas nos ayudan a evitar el uso de las etiquetas ``` <a> ``` en caso de que deseemos pasar a otro contenido por medio de los NavHashes evitándonos el tener que volver a descargar el HTML nuevamente ya que cambia la URL manualmente.

```js

// Importamos la etiqueta link
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        
        <li>
          {/* Si lo comparamos con las etiquetas <a> su href="" 
          vendría siendo su parámetro to="", para estas no hay 
          necesidad de colocar los hash */}
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

      </ul>
    </nav>
  );
}

```

## NavLink ##

- Este funciona exactamente igual que Link, incluso la propiedad ```to="/"``` también se usa en este componente, pero nos permite cierta flexibilidad, por ejemplo, cuando queramos darle una clase a nuestros componentes o estilos manuales nos permite que en nuestras propiedades ```className={} o style={}``` nos permite devolver una función.

```js

    // Importamos la etiqueta NavLink
import { Link, NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>

        <li>
          <NavLink 
			to="/"
            className={() => ''}
            style={() => ({background: '#fff'})}
					>Home</NavLink>
        </li>

        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>

        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>

      </ul>
    </nav>
  );
}

```

Estas mismas funciones nos permite enviar un parámetro llamado isActive, el cual nos permite saber si la ruta en la que se envía este componente es en la que estamos actualmente, y dependiendo de eso podemos darle una nueva clase o cambiar los estilos.

Para que esto funcione debemos pasarle a nuestro componente la propiedad end, si no, este siempre permanecerá activo.

```js

    <NavLink
        to="/"
        end // <--
        style={({isActive }) => ({
                    color: isActive ? 'green' : 'red'
                })
            }
        >
        Home
    </NavLink>

```

___

## useParams: rutas dinámicas ##

### ¿Qué son las rutas dinámicas? ###

Digamos que tenemos una aplicación la cual nos envía a cierto contenido, ejemplo aplicación/blog/como-aprender-react, esta ultima parte en negro se llama slug, lo que nos permite es tener una base en la que exponer cierto contenido, pero intercalando la información en caso de que el slug cambie también.

Por ejemplo, en caso de que cambiemos el enlace pero la base sea la misma ejemplo: aplicación/blog/como-aprender-svelte, nos daríamos cuenta de que la maquetación sigue siendo la misma, solo que tiene diferente información, ya que si el slug cambia, el contenido cambia, pero como parte de una sola base, tiene la misma composición pero diferente contenido.

Un ejemplo rápido de las rutas dinámicas son los perfiles en Facebook, tienen la misma composición, tienen una foto de perfil, de portada, un nombre, información del usuario, estados y publicaciones; pero el perfil de Juanita no es el mismo que el de Pepe, ya que cada uno tiene información diferente porque son personas diferentes y publican diferente contenido.

Creemos nuestras rutas dinámicas
Vamos a hacer nuestras rutas dinámicas en nuestro componente de BlogPage:

```js
import React from 'react';
import { Link } from 'react-router-dom';
import { blogdata } from '../Data/blogdata'

/* Como en nuestro anterior componente, aquí cargarémos la 
información de manera dinámica por medio de un arreglo, para que 
nuestro código sea más mantenible a futuro y evitar duplicidad y 
crear verdaderos componentes */
function BlogPage() {
  return (
    <>
      <h1>Blog Page</h1>

      <ul>
        {blogdata.map( post => (
          <BlogLink post={post} />
        ))}
      </ul>
    </>
  );
}

/* Este BlogLink srá el que contenga los datos que nos crearan 
nuestro slug y nos redireccionen al contenido que deseamos ver */
function BlogLink({ post }) {
  return (
    <li>
      <Link
        to={`/blog/${post.slug}`}
      >{post.title}</Link>
    </li>
  );
}

export { BlogPage }

```

```js

/* Este Array simula una API que contenga nuestros datos, estos 
cargarán dinámicamente el contenido a los fake blogs */ 
const blogdata = [];

blogdata.push({
  title: '¿Que es React?',
  slug: 'que-es-react',
  content: 'React es el mejor Framework de JavaScript, que lindo React',
  author: 'Andrés Rodríguez'
});

blogdata.push({
  title: '¿Que es Vue?',
  slug: 'que-es-vue',
  content: 'Vue es el mejor Framework de JavaScript, que lindo Vue',
  author: 'Andrés Rodríguez'
});

blogdata.push({
  title: '¿Que es Angular?',
  slug: 'que-es-angular',
  content: 'Angular esta bien, que lindo React XD',
  author: 'Andrés Rodríguez'
});

blogdata.push({
  title: '¿Que es Svelte?',
  slug: 'que-es-svelte',
  content: 'Svelte es el mejor Framework de JavaScript, que lindo Svelte',
  author: 'Andrés Rodríguez'
});

```

Una vez tenemos esto, debemos hacer que nuestros componentes se traqueen en la aplicación. Para esto debemos ir a App.js e ir a nuestro componente correspondiente y a continuación en su path después de su ruta debemos indicarle seguido de dos puntos, cual es el nombre de la variable en la cual tenemos nuestra nueva ruta. Veamos como:

```js

// Importamos el componente de una vez
...
import { BlogPost } from './Components/Routes/BlogPost/BlogPost';

function App() {
  return (
    <>
      <HashRouter>
        ...
        <Routes>
          ...
					{/* En este caso la ruta dinámica se almacena en "slug" */}
          <Route path='/blog/:slug' element={<BlogPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

```

Ahora todos esos cambios dinámicos se van a poder detectar y renderizar. Aún así debemos crear el componente que se renderice, entonces hagámoslo, este será el BlogPost.js.

```js

import React from 'react';

// Importamos el useParams
import { Link, useParams } from 'react-router-dom';
// También necesitamos los datos aquí
import { blogdata } from '../Data/blogdata'

function BlogPost() {
  /* Para cargar la información dinámicamente en la página debemos 
  hacer uso del "useParams", este por medio de un objeto que debemos 
  destructurar nos traerá el slug */
  const { slug } = useParams();

  /* Lo que hacemos por acá es encontrar la información que 
  necesitamos mediante una confición en un fin que nos envíe y 
  guarde en esta variable los datos del post cuyo slug coincida con 
  el que estamos solicitando por un compoente para que se renderice */
  const blogpost = blogdata.find( post => post.slug == slug );

  /* Ahora si, después de que encontremos la información que 
  necesitamos podemos cargarla en nuestro componente y renderizarla */
  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export { BlogPost }

```

Y si probamos veremos que ya está cargando nuestro contenido, hemos aprendido a crear rutas dinámicas con React 😀.

___

## useNavigate: historial de navegación ##

useNavigate es un React Hook que es similar a los componentes de Link o NavLink, per en vez de llevarnos a una ruta automáticamente por medio de un click, nos permite que con JavaScript cambiemos esta URL y nos movamos a una nueva ruta, podemos hacerlo con un evento clic o el evento que deseemos. Veamos como hacerlo!

Recordatorio
Recordemos que cada componente que use los slugs debe tener un identificador propio, este se guardará en la propiedad key={} y el identificador será la propia ruta a la que accede el componente.

BlogPage.js

```js

function BlogPage() {
  return (
    <>
      <ul>
        {blogdata.map( post => (
          <BlogLink 
						key={post.slug} // <--
						post={post} />
        ))}
      </ul>
    </>
  );
}

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.to}> // <--
            ...
          </li>
        ))}
      </ul>
    </nav>
  );
}

```

Usar el historial de navegación
Vamos a crear un botón que nos permita retroceder a la sección de blog al momento que nosotros le demos a uno de los artículos, ósea pasaremos de la vista de BlogPost a la vista de BlogPage .

Para esto vamos a hacer parte de la maquetación del componente BlogPost un botón que se llame “Volver al blog”.

```js
// Importamos el useNavigate
import { useNavigate, useParams } from 'react-router-dom';
...

function BlogPost() {
  // Creamos una variable que nos permita usar este Hook
  const navigate = useNavigate();
	...

  /* En esta función haremos uso del useNavigate para volver al 
	BlogPage */
  const returnToBlog = () => {
    /* Aquí la utilizamos como una función y le indicamos la ruta 
		hacia donde queremos navegar */ 
    navigate('/blog');
  }
  
  return (
    <>
      ...
      <button
        // Llamamos a una función que nos permita usar el Hook 
        onClick={returnToBlog}
      >Volver al blog</button>
      ...
    </>
  );
}

```

¿Fue demasiado sencillo verdad? Seguro te preguntarás que diferencia tiene un un Link o un NavLink. Veámoslas:

Se puede establecer con rutas dinámicas como NavLink
Se pueden usar valores especiales como -1 o -2 o -n, que nos devolvería una página hacia atrás o demás valores para retroceder incluso más o ir hacia delante si es que esta guardado en el historial
Gracias a esto no vamos a depender de enlaces en HTML sino que tendremos nuestra propia navegación optimizada y personalizada.

Si deseas que el usuario no pueda volver a la pantalla anterior, usas replace true para crear un nuevo historial de navegación a partir de la nueva ruta.

```js
navigate('/', { replace: true });

```
Esto me parece útil para el registro, login y logout. Imagina que estás en los 2000, en un cybercafé, cierras tu sesión y te vas, luego llega otra persona le da “atrás” y tenga acceso a tu cuenta !

___

## Outlet: nested routes ##

Outlet es el componente que nos permite trabajar con nested routes. Nested es como se define a las cosas que están dentro de otras, por ejemplo, en CSS cuando creamos selectores y propiedades dentro de otros selectores y propiedades.

Lo mismo pasa con las nested routes, son rutas dentro de otras rutas hijas de una ruta madre.

Esto nos sirve para que React nos permita renderizar más de una ruta a la vez, teniendo una ruta dentro de otra ruta madre, y esto se puede hacer varias veces.

Para hacer estos nested routes debemos crear un componente que contenga otro, de hecho haciendo esto nos podemos evitar tener que poner toda la ruta sino que se concatenan:

```js
// ❌
<Route path='/blog' element={<BlogPage />}>
  <Route path='/blog/:slug' element={<BlogPost />} />
</Route>

// ✔️
<Route path='/blog' element={<BlogPage />}>
  <Route path=':slug' element={<BlogPost />} />
</Route>

```

Aquí es cuando entra nuestro Outlet, lo debemos importar y usarlo en nuestra ruta.

Si probamos el código cambiará el hash pero no el contenido, entonces lo que debemos hacer es insertar la etiqueta Outlet dentro del componente madre ya que dentro de este se renderizará la información que tenga el componente hijo:

```js
import { Link, Outlet } from 'react-router-dom';
...

function BlogPage() {
  return (
    <>
      <h1>Blog</h1>

            {
                /* Esta etiqueta es donde aparecerá renderizado el componente 
                hijo */
            }
      <Outlet /> // <--

      <ul>
        {blogdata.map( post => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
}

```
En este momento si usamos la aplicación veremos que tenemos el contenido deBlogPost dentro del contenido de BlogPage dependiendo de donde coloquemos la etiqueta de Outlet.

Así usamos rutas dentro de otras rutas sin perder el contenido de la ruta principal.

___

## useAuth: login y logout ##

Ahora vamos a aprender como desplegar contenido en base a la Autenticación de usuarios, ósea que no todo el contenido de una aplicación va a ser público pata todos los usuarios, sino que tengamos algunas rutas privadas para personas que no se hayan autenticado, ósea hecho login y así mismo no mostrar contenido que es innecesario para personas que ya están registradas, como el mismo registro de usuario o contenido introductorio.

Vamos a hacer contenido que dependiendo el usuario se muestre o no se muestre, y también permitir tener privilegios o permisos dependiendo del rol que tengas.

Vamos entonces a crear nuevas rutas que nos permitan hacer todo esto:

```js
import { LoginPage } from './Components/Routes/LoginPage/LoginPage';
import { LogoutPage } from './Components/Routes/LogoutPage/LogoutPage';

function App() {
  return (
    <>
      <HashRouter>
				<Routes>
	        ...
          
          <Route path='/login' element={<LoginPage />} /> 
          <Route path='/logout' element={<LogoutPage />} />
          <Route path='/profile' element={<ProfilePage />} />

        </Routes>
      </HashRouter>
    </>
  )
}

```

Y debemos crear nuestros respectivos componentes:

LoginPage.js

```js
import React from 'react';

function LoginPage() {
  /* Para manejar el registro de usuario con el formilario haremos 
  uso del estado de React */
  const [username, setUsername] = React.useState('');

  /* Esta es la función que se ejecutará cuando ocurra el evento de 
  Submit */
  const login = (e) => {
    e.preventDefault();
  }

  // Aquí creamos un formulario para poder auteticarnos
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario</label>
        <input
          value={username}
          onChange={ e => setUsername(e.target.value)}
        />

        <button type="submit">Entrar</button>

      </form>
    </>
  );
}

export { LoginPage }

```

LogoutPage.js

```js
import React from 'react';

function LogoutPage() {
  const logout = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿Segurx de que quieres salir?</label>

        <button type="submit">Salir</button>

      </form>
    </>
  );
}

export { LogoutPage }

```

En nuestro Menu.js vamos a crear dos nuevas rutas en nuestro Array routes:

```js
...
const routes = [];

...
routes.push({
  to: '/login',
  text: 'Logout'
});
routes.push({
  to: '/logout',
  text: 'Login'
});

```

Si lo pensamos bien, no nos debería salir el componente Profile y Logout sin antes haber hecho un Login, vamos a trabajar entonces en esa lógica creando un archivo de autenticación:

auth.js

```js
import React from 'react';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const auth = {
    user,
    login,
    logout,
  }

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

export {
  AuthProvider,
  useAuth,
}

```

Vamos a importar esta lógica al App.js:

```js
...
import { AuthProvider, useAuth } from './Components/auth/auth'

function App() {
  return (
    <>
      {/* En este caso AuthProvider tiene que ir dentro de 
      HastRouter en caso de que AuthProvider necesite de algún 
      método o contenido que pueda proveer HashRouter */}
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>
            
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} />

            <Route path='/*' element={<p>Not Found</p>} />

          </Routes>
        </AuthProvider>

      </HashRouter>
    </>
  )
}

...

```

En este punto, en LoginPage.js ya podemos empezar a utilizar nuestro useAuth:

```js
import { useAuth } from '../../auth/auth';
...

function LoginPage() {
  const auth = useAuth();
	...
}

```

Vamos de nuevo auth.js y seguimos con la lógica:

```js
...
function AuthProvider({ children }) {
  /* Siguiendo la lógica, si user es null significa que no estamos 
  autenticados */
  const [user, setUser] = React.useState(null);

  // Ahora necesitamos darle un valor a nuestro usuario
  const login = ({ username }) => {
    setUser({ username });
  }

  // De la misma forma, debemos poder cerrar la sesión
  const logout = () => {
    setUser(null);
  }
	...
}

```

Ahora en LoginPage.js nuestro useAuth nos debe dar acceso al usuario y sus métodos:

```js
function LoginPage() {
  const login = (e) => {
    e.preventDefault();
    auth.login({ username })
  }
}

```

Vamos de nuevo a auth.js y vamos a complementar la lógica:

```js
function AuthProvider({ children }) {
  const navigate = useNavigate();

  const login = ({ username }) => {
    setUser({ username });
		/* Ahora cada vez que hagamos login nos redireccionará a la 
		página de profile */
    navigate('/profile');
  }

  const logout = () => {
		setUser(null);
    /* Aquí haremos redirect a la página principal */
    navigate('/');
  }

```

Pero para esto debemos añadir el contexto de autentificación a LogoutPage.js:

```js
function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }
}

```

Ahora en nuestra ProfilePage.js debemos completar esta lógica:

```js
import { useAuth } from '../../auth/auth';

function ProfilePage() {
  const auth = useAuth();

  return (
    /* Ahora si nosotros nos registramos deberíamos poder ver 
		nuestro nombre de usuario en nuestra página de perfil */
    <>
      <h1>Perfil</h1>
      <h1>Welcome {auth.user.username}</h1>
    </>
  );
}

```

Y listo, ahora solo nos queda el que no podamos entrar a profile sino hasta que hayamos hecho login, lo cual haremos a continuación.

___