# Obj javascript #
---

## Obj literales y prototipos ##
---
Primero **javascript** es un lenguaje orientado a **objetos** donde todo son objetos, los array, los objetos, los string.
Pero no esta basado en objetos, sino en prototipos 
¿y que es eso de prototipos?, ahora lo vamos a desmenusar.
Por dentro todos nuestros objetos estan contruidos por prototipos, un objeto en **javascript** es una instancia del prototipo madre ***Object*** que es creado de forma 'nativa' por Js.

Hay dos maneras de crear obj en **javascript** de forma literal o instancias

### literales ###

```js
    const natalia = {
        name: 'Natalia',
        lastName: 'Perez',
        age: 28
    };
```

### Instancias de prototipos ###

```js
    function alumno ({name, lasName, age}) {
        this.name = name;
        this.lasName = lasName;
        this.age = age
    };

    const miky = new alumno({
        name: 'Miky',
        lasName: 'Galeano',
        age : 29
    })

```

## Clases en javascript ##
---

Las clases no existen en javascript, esta solo es una sintaxis más amigable para crear prototipos, en el interior sigue funcionando como un prototipo

```js
    class student {
        constructor(name, age, cursosAprobados) {
            this.name = name;
            this.age = age;
            this.cursosAprobados = cursosAprobados
        }
        aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
        }
    };
    const miky = new student(
        'Miky',
        28,
        ['curso basico de obj en javascript']
    )

    miky.cursosAprobados('curso de instalación y mantenimiento de sistemas informaticos')

```

Ademas de haber obj literales, prototipos e instancias de prototipos, hay un patron que se llama **ror** imaginen que tenemos muchos parametros, email, diplomas, redes sociales, puntos, escuelas, etc.
Para eso podemos recibir un solo parametro que sea un objeto, entre llaves enviamos los parametros. Con esta nueva sintaxis podemos enviarles los argumentos de forma desordenada, no tenemos que aprendernos su orden en que lo establecimos, tambien podemos darles valores por defecto si lo deseamos.

```js
     class student {
        constructor({
            name,
            age, 
            cursosAprobados = ['curso basico de programación']
            }) {
            this.name = name;
            this.age = age;
            this.cursosAprobados = cursosAprobados
        }
        aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
        }
    };
    const miky = new student({
        cursosAprobados: 'curso de pensamiento computacional',
        age: 28,
        name: 'Miky'

    })

```

