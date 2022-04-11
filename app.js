let d = document
let w = window
let header = d.getElementById("header")
let firstCol = d.getElementById("firstCol")
let secondCol = d.getElementById("secondCol")
let thirdCol = d.getElementById("thirdCol")
let firstFooter = d.getElementById("firstFooter")
let secondFooter = d.getElementById("secondFooter")
widht = w.innerWidth
let s = 576
let md = 768
let lg = 992
let xl = 1200
let xxl = 1400
w.addEventListener("resize", e => {
    e.preventDefault()
    widht = w.innerWidth
    if (widht <= s) {
        sFunc()
    } else if (widht >= md && widht < xl) {
        mFunc()
    } else if (widht >= xl) {
        lgFunc()
    }
})


const sFunc = () => {
    //Header    
    header.classList.remove('bg-primary', 'bg-success', 'text-start')
    header.classList.add('bg-warning', 'text-center')
        //Primer Columna
    firstCol.classList.remove('col-6', 'col-4', 'text-center')
    firstCol.classList.add('text-start', 'col-12')
        //Segunda Columna
    secondCol.classList.remove('text-end', 'bg-danger', 'col-4')
    secondCol.classList.add('text-center', 'bg-primary', 'col-12')
        //Tercer Columna
    thirdCol.classList.remove('col-4', 'bg-success', 'text-center')
    thirdCol.classList.add("bg-danger", 'col-12', 'text-end')
        //Primer Footer
    firstFooter.classList.remove('col-6', 'text-start', 'text-end')
    firstFooter.classList.add('col-12', 'text-center')
        //Segundo Footer
    secondFooter.classList.remove('col-6', 'text-start', 'text-end')
    secondFooter.classList.add('col-12', 'text-center')
}

const mFunc = () => {
    //Header
    header.classList.remove('bg-warning', 'bg-success', 'text-center')
    header.classList.add('bg-primary', 'text-start')
        //Primer Columna
    firstCol.classList.remove('col-4', 'col-12', 'text-center')
    firstCol.classList.add('text-start', 'col-6')
        //Segunda Columna
    secondCol.classList.remove('text-center', 'col-12', 'col-4', 'bg-secondary')
    secondCol.classList.add('text-end', 'col-6', 'bg-danger')
        //Tercer Columna
    thirdCol.classList.remove('col-4', 'bg-danger', 'text-end')
    thirdCol.classList.add("bg-success", 'col-12', 'text-center')
        //Primer Footer
    firstFooter.classList.remove('col-6', 'text-start', 'text-end')
    firstFooter.classList.add('col-12', 'text-center')
        //Segundo Footer
    secondFooter.classList.remove('col-6', 'text-start', 'text-end')
    secondFooter.classList.add('col-12', 'text-center')
}

const lgFunc = () => {
    //Header
    header.classList.remove('bg-warning', 'bg-success', 'bg-primary', 'text-center', 'bg-primary')
    header.classList.add('bg-success', 'text-start')
        //Primer Columna
    firstCol.classList.remove('col-6', 'col-12', 'text-start')
    firstCol.classList.add('text-center', 'col-4')
        //Segunda Columna
    secondCol.classList.remove('col-12', 'col-6', 'bg-primary', 'text-end')
    secondCol.classList.add('text-center', 'col-4', 'bg-danger')
        //Tercer Columna
    thirdCol.classList.remove('col-6', 'col-12', 'bg-success', 'text-end')
    thirdCol.classList.add("bg-danger", 'col-4', 'text-center')
        //Primer Footer
    firstFooter.classList.remove('col-12', 'text-center', 'text-end')
    firstFooter.classList.add('col-6', 'text-end')
        //Segundo Footer
    secondFooter.classList.remove('col-12', 'text-center', 'text-end')
    secondFooter.classList.add('col-6', 'text-start')
}

seleccion()

function seleccion(rutaimg) {
    switch (rutaimg) {
        case '../helpers/img/img (1).jpg':
            var sel = document.getElementById('img1');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Aunque hay veces que creemos que perdemos... en realidad ganamos';
            break;
        case '../helpers/img/img (2).jpg':
            var sel = document.getElementById('img2');
            var contexto = metodoReutilizable();
            contexto.textContent = "Tipico entrenamiento para los hombros! Elevaciones Frontales";
            break;
        case '../helpers/img/img (3).jpg':
            var sel = document.getElementById('img3');
            var contexto = metodoReutilizable();
            contexto.textContent = "Tomar el tiempo y pulsaciones... Todo lo requerido para saber sobre tu progreso";
            break;
        case '../helpers/img/img (4).jpg':
            var sel = document.getElementById('img4');
            var contexto = metodoReutilizable();
            contexto.textContent = 'La importancia del cardio en la vida humana... es increible, hay que hacer cardio';
            break;
        case '../helpers/img/img (5).jpg':
            var sel = document.getElementById('img5');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Corre... señor... corree...';
            break;
        case '../helpers/img/img (6).jpg':
            var sel = document.getElementById('img6');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Tipico ejercicio que nos ayuda a trabajar cardio y abdomen';
            break;
        case '../helpers/img/img (7).jpg':
            var sel = document.getElementById('img7');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Ejercicio mata hombres';
            break;
        case '../helpers/img/img (8).jpg':
            var sel = document.getElementById('img8');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Momento exacto en el que replanteas si seguir o no... hay que seguir';
            break;
        case '../helpers/img/img (9).jpg':
            var sel = document.getElementById('img9');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Deadlift is the key';
            break;
        case '../helpers/img/img (10).jpg':
            var sel = document.getElementById('img10');
            var contexto = metodoReutilizable();
            contexto.textContent = 'La tecnica es lo mas importante a la hora de realizar cualquier actividad';
            break;
        case '../helpers/img/img (11).jpg':
            var sel = document.getElementById('img11');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Caerse por tener los cordones desatados?... no lo creo';
            break;
        case '../helpers/img/img (12).jpg':
            var sel = document.getElementById('img12');
            var contexto = metodoReutilizable();
            contexto.textContent = 'Las sesiones de estiramiento post entreno, claves para el desarrollo adecuado del musculo';
            break;
    }

    function metodoReutilizable() {
        desmarcar();
        //Cambia la clase de las tabs para activarlas
        sel.setAttribute(
            'class',
            'list-group-item list-group-item-action active'
        );
        //Muestra la imagen maximizada
        var imagen = document.getElementById('imagenMax');
        imagen.setAttribute('src', rutaimg);
        //Selecciona el elemento donde se va a imprimir el contexto o explicacion de la imagen a mostrar
        var contexto = document.getElementById('contexto');
        return contexto;
    }

    function desmarcar() {
        var arrayElementos = document.getElementsByClassName('list-group-item list-group-item-action active');
        for (let i = 0; i < arrayElementos.length; i++) {
            arrayElementos[i].setAttribute(
                'class',
                'list-group-item list-group-item-action'
            );
        }
    }
}