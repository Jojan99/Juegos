
    var baseDeDatos = [
        {
            id: 1,
            nombre: 'Chery Tiggo 2.0cc Mt Aa 4x2',
            precio: 30500000,
            descripcion: '2008 | 134.000 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_698865-MCO51719733508_092022-W.webp'
        },
        {
            id: 2,
            nombre: 'Great Wall Wingle 5 2.4 Std 4x2',
            precio: 38500000,
            descripcion: '2011 | 142.442 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_820556-MCO70889234321_082023-W.webp'
        },
        {
            id: 3,
            nombre: 'Toyota Prado 2.7 Select',
            precio: 54000000,
            descripcion: '1999 | 168.000 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_840585-MCO69220412622_052023-W.webp'
        },
        {
            id: 4,
            nombre: 'MG 1.5 Comfort',
            precio: 2900000,
            descripcion: '2005 | 171.000 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_868530-MCO72179931033_102023-O.webp'
        },
        {
            id: 5,
            nombre: 'Geely MK 1.5 Gl 4 p',
            precio: 15000000,
            descripcion: '2013 | 130.000 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_868530-MCO72179931033_102023-O.webp'
        },
        {
            id: 6,
            nombre: 'BYD F0 1.0 Full',
            precio: 30466773,
            descripcion: '2010 | 140.000 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_866892-MLU72365020938_102023-W.webp'
        },
        {
            id: 7,
            nombre: 'Mitsubishi Montero 3.5 V75 Wagon',
            precio: 59900000,
            descripcion: '2004 | 159.660 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_636608-MCO71042846278_082023-W.webp'
        },
        {
            id: 8,
            nombre: 'BYD F3 Gls 2013 Permuto',
            precio: 34575110,
            descripcion: '2009 | 160.000 km',
            imagen: 'https://http2.mlstatic.com/D_985328-MLU69803178470_062023-O.jpg',
        },
        {
            id: 9,
            nombre: 'Geely LC 1.3 Gl',
            precio: 31600000,
            descripcion: '2011 | 107.800 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_875732-MLU69681553259_052023-W.webp'
        },

        {
            id: 11,
            nombre: 'Chery Tiggo 2.0 Automática Full',
            precio: 34575110,
            descripcion: '2009 | 215.013 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_937646-MLU71903268281_092023-W.webp'
        },
        {
            id: 12,
            nombre: 'Toyota Hilux Doble Cabina',
            precio: 42500000,
            descripcion: '2001 | 250.000 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_765145-MCO70178911875_062023-W.webp'
        },
        {
            id: 12,
            nombre: 'BYD F0 1.0 Full',
            precio: 42500000,
            descripcion: '2001 | 250.000 km',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_765145-MCO70178911875_062023-W.webp'
        },
    ];


// Aquí integra el código JavaScript que mencionaste.
document.addEventListener('DOMContentLoaded', () => {

    var divisa = '$';
    const DOMitems = document.querySelector('#items');
    const productosPorPagina = 6;
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    function renderizarProductos(paginaActual) {
        const startIndex = (paginaActual - 1) * productosPorPagina;
        const endIndex = startIndex + productosPorPagina;

        DOMitems.innerHTML = '';

        baseDeDatos.slice(startIndex, endIndex).forEach((info) => {
            const miNodo = document.createElement('a'); // Cambia el div a un enlace <a>
            miNodo.classList.add('card', 'col-12', 'col-sm-6', 'col-md-6', 'col-lg-6', 'col-xl-4');
            miNodo.setAttribute('data-aos', 'fade-right');

            // Configura el enlace para redirigir a la página de detalles con el ID del vehículo
            miNodo.href = 'detalles.html?id=' + info.id;

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h4');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;

            const miNodoDescripcion = document.createElement('p');
            miNodoDescripcion.classList.add('card-text');
            miNodoDescripcion.textContent = info.descripcion;

            const miNodoPrecio = document.createElement('h5');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa}${info.precio.toLocaleString()}`;

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            miNodoImagen.style.width = '100%';

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);

            // Comprobar si la imagen es más pequeña que el tamaño fijo
            miNodoImagen.addEventListener('load', () => {
                const imageAspectRatio = miNodoImagen.naturalWidth / miNodoImagen.naturalHeight;
                if (imageAspectRatio < 1) {
                    miNodoImagen.style.width = 'auto';
                    miNodoImagen.style.height = '100%';
                }
            });
        });

        renderizarPaginacion(paginaActual);
    }

    function renderizarPaginacion(paginaActual) {
        const totalPaginas = Math.ceil(baseDeDatos.length / productosPorPagina);
        const DOMpagination = document.querySelector('#pagination');
        DOMpagination.innerHTML = '';

    }

    let currentPage = 1;

    prevPageButton.addEventListener('click', () => {
        const miNodo = document.createElement('a'); // Cambia el div a un enlace <a>
        miNodo.classList.add('card', 'col-12', 'col-sm-6', 'col-md-6', 'col-lg-6', 'col-xl-4');
        miNodo.setAttribute('data-aos', 'fade-right');
        if (currentPage > 1) {
            currentPage--;
            console.log(currentPage)
            miNodo.href = 'index.html?id=' + currentPage;
            renderizarProductos(currentPage);
        }
    });

    nextPageButton.addEventListener('click', () => {
        const miNodo = document.createElement('a'); // Cambia el div a un enlace <a>
        miNodo.classList.add('card', 'col-12', 'col-sm-6', 'col-md-6', 'col-lg-6', 'col-xl-4');
        miNodo.setAttribute('data-aos', 'fade-right');
        const totalPaginas = Math.ceil(baseDeDatos.length / productosPorPagina);
        if (currentPage < totalPaginas) {
            currentPage++;
            console.log(currentPage)
            miNodo.href = 'index.html?id=' + currentPage;
            renderizarProductos(currentPage);
        }
    });

    renderizarProductos(currentPage);
});