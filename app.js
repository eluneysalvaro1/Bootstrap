	d = document;
	w = window;

	header = d.getElementById('header');
	firstCol = d.getElementById('firstCol');
	secondCol = d.getElementById('secondCol');
	thirdCol = d.getElementById('thirdCol');
	firstFooter = d.getElementById('firstFooter');
	secondFooter = d.getElementById('secondFooter');

	widht = w.innerWidth;
	console.log(widht);

	w.addEventListener('resize', (e) => {
		e.preventDefault();
		widht = w.innerWidth;
		if (widht <= 768) {
			header.classList.replace('bg-success', 'bg-primary');
			firstCol.classList.add('text-start');
			secondCol.classList.add('text-end');
			firstCol.classList.replace('col-4', 'col-6');
			secondCol.classList.replace('col-4', 'col-6');
			thirdCol.classList.replace('col-4', 'row');
			thirdCol.classList.replace('bg-danger', 'bg-success');
		}
	});

	scroll = d.scroll;
	console.log(scroll);

	// d.addEventListener("scroll", e => {
	//             scroll = d.scroll
	//             console.log(scroll)
	//         }

    seleccion()
    function seleccion(rutaimg){
        switch (rutaimg) {
			case '../helpers/img/img (1).jpg':
                var sel = document.getElementById('img1');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 1';
				break;
			case '../helpers/img/img (2).jpg':
                var sel = document.getElementById('img2');
                var contexto = metodoReutilizable();
                contexto.textContent = "Descripcion 2";
				break;
			case '../helpers/img/img (3).jpg':
                var sel = document.getElementById('img3');
                var contexto = metodoReutilizable();
                contexto.textContent = "Descripcion 3";
				break;
			case '../helpers/img/img (4).jpg':
                var sel = document.getElementById('img4');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 4';
				break;
			case '../helpers/img/img (5).jpg':
                var sel = document.getElementById('img5');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 5';
				break;
			case '../helpers/img/img (6).jpg':
                var sel = document.getElementById('img6');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 6';
				break;
			case '../helpers/img/img (7).jpg':
                var sel = document.getElementById('img7');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 7';
				break;
			case '../helpers/img/img (8).jpg':
                var sel = document.getElementById('img8');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 8';
				break;
			case '../helpers/img/img (9).jpg':
                var sel = document.getElementById('img9');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 9';
				break;
			case '../helpers/img/img (10).jpg':
                var sel = document.getElementById('img10');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 10';
				break;
			case '../helpers/img/img (11).jpg':
                var sel = document.getElementById('img11');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 11';
				break;
			case '../helpers/img/img (12).jpg':
                var sel = document.getElementById('img12');
                var contexto = metodoReutilizable();
				contexto.textContent = 'Descripcion 12';
				break;
		}

        function metodoReutilizable(){
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

        function desmarcar(){
            var arrayElementos = document.getElementsByClassName('list-group-item list-group-item-action active');
            for (let i = 0; i < arrayElementos.length; i++) {
				arrayElementos[i].setAttribute(
				    'class',
				    'list-group-item list-group-item-action'
				);
			}
        }
    }
