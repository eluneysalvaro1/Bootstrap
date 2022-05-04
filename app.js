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
        var id = parseInt(rutaimg.slice(20, 22))
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

        for (let i = 0; i < array.length; i++) {
            $(imagen).removeClass()
        }
        $(imagen).addClass('img-fluid')
        $(imagen).addClass(`${id}`)
            //Selecciona el elemento donde se va a imprimir el contexto o explicacion de la imagen a mostrar
        var contexto = document.getElementById('contexto');
        return contexto;
    }


    $(document).ready(function() {
        $.ajax({
            url: '../helpers/data/informacionImagenes.json',
            type: 'GET',
            success: function procesaRespuesta(response) {
                let info
                let titulo

                document.addEventListener('click', e => {
                    let img = document.getElementById('imagenMax')
                    let id = img.classList[1]
                    $('#body_modal').text("")
                    $('#title_modal').text("")
                    response.forEach(el => {
                        if (el.id == id) {
                            info = `<div id="${el.id}" class="informacion">
                                        <p> ${el.data} </p>
                                    </div>`
                            titulo = `<h2> ${el.title} </h2>`
                        }
                    });
                    $('#body_modal').append(info)
                    $('#title_modal').append(titulo)

                })
            },
            error: function muestraError(err) {
                console.log(err)
            }
        });
    })






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