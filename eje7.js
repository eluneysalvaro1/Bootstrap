let d = document,
    selectOpcion1 = d.getElementById('selectOpcion1'),
    selectOpcion2 = d.getElementById('selectOpcion2'),
    selectOpcion3 = d.getElementById('selectOpcion3'),
    selectOpcion4 = d.getElementById('selectOpcion4'),
    selectOpcion5 = d.getElementById('selectOpcion5'),
    opcion1 = d.getElementById('opcion1'),
    opcion2 = d.getElementById('opcion2'),
    opcion3 = d.getElementById('opcion3'),
    opcion4 = d.getElementById('opcion4'),
    opcion5 = d.getElementById('opcion5')

const opciones = [opcion1, opcion2, opcion3, opcion4, opcion5]
const selectOpcion = [selectOpcion1, selectOpcion2, selectOpcion3, selectOpcion4, selectOpcion5]
const main = d.getElementById('main')
main.addEventListener('click', e => {
    e.preventDefault()
    target = e.target
    if (target == selectOpcion1) {
        deseleccionarSelectOpcion(selectOpcion, target)
        seleccionarSelectOpcion(selectOpcion, target)
        deseleccionarOpcion(opciones, opcion1)
        seleccionarOpcion(opciones, opcion1)
    } else if (target == selectOpcion2) {
        deseleccionarSelectOpcion(selectOpcion, target)
        seleccionarSelectOpcion(selectOpcion, target)
        deseleccionarOpcion(opciones, opcion2)
        seleccionarOpcion(opciones, opcion2)
    } else if (target == selectOpcion3) {
        deseleccionarSelectOpcion(selectOpcion, target)
        seleccionarSelectOpcion(selectOpcion, target)
        deseleccionarOpcion(opciones, opcion3)
        seleccionarOpcion(opciones, opcion3)
    } else if (target == selectOpcion4) {
        deseleccionarSelectOpcion(selectOpcion, target)
        seleccionarSelectOpcion(selectOpcion, target)
        deseleccionarOpcion(opciones, opcion4)
        seleccionarOpcion(opciones, opcion4)
    } else if (target == selectOpcion5) {
        deseleccionarSelectOpcion(selectOpcion, target)
        seleccionarSelectOpcion(selectOpcion, target)
        deseleccionarOpcion(opciones, opcion5)
        seleccionarOpcion(opciones, opcion5)
    }
})

function deseleccionarSelectOpcion(arreglo, elementoIgnorado) {
    for (let index = 0; index < arreglo.length; index++) {
        const el = arreglo[index]
        if (el == elementoIgnorado) {
            continue
        }
        el.classList.remove('active')
    };
}

function seleccionarSelectOpcion(arreglo, elementoSeleccionado) {
    for (let index = 0; index < arreglo.length; index++) {
        const el = arreglo[index]
        if (el == elementoSeleccionado) {
            el.classList.add('active')
        }
    };
}


function deseleccionarOpcion(arreglo, elementoIgnorado) {
    for (let index = 0; index < arreglo.length; index++) {
        const el = arreglo[index]
        if (el == elementoIgnorado) {
            continue
        }
        el.classList.remove('active', 'show', 'fade')
    };
}

function seleccionarOpcion(arreglo, elementoSeleccionado) {
    for (let index = 0; index < arreglo.length; index++) {
        const el = arreglo[index]
        if (el == elementoSeleccionado) {
            el.classList.add('active', 'show')
            break
        }
        el.classList.remove('active', 'show', 'fade')
    };
}