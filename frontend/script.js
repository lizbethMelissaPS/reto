const formGet = document.getElementById('getUsuario');
const formPost = document.getElementById('postUsuario');
const formPut = document.getElementById('putUsuario');
const formDelete = document.getElementById('deleteUsuario');

formGet.addEventListener('submit', async (e) => {
    e.preventDefault();
    let message = '';
    const id = e.target.id.value;

    await fetch(`http://localhost:3000/alumno/${id}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.message) {
                message = data.message;
            } else {
                message = `ID: ${data.nidAlumno} | Primer Nombre: ${data.nombre} `;
            }
            console.log(data);
        });

    document.getElementById('textoGet').innerHTML = message;
});

formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    let message = '';
    const nidAlumno = e.target.nidAlumno.value;
    const nombre = e.target.nombre.value;

    await fetch('http://localhost:3000/alumno/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nidAlumno: nidAlumno, nombre: nombre }),
    })
        .then((response) => response.json())
        .then((data) => {
            message = data.message;
        });

    document.getElementById('textoPost').innerHTML = message;
});

formPut.addEventListener('submit', async (e) => {
    e.preventDefault();
    let message = '';
    const id = e.target.id.value;
    const nidAlumno = e.target.firstName.value;
    const nombre = e.target.age.value;

    await fetch(`http://localhost:3000/alumno/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nidAlumno: nidAlumno, nombre: nombre }),
    })
        .then((response) => response.json())
        .then((data) => {
            message = data.message;
        });

    document.getElementById('textoPut').innerHTML = message;
});

formDelete.addEventListener('submit', async (e) => {
    e.preventDefault();
    let message = '';
    const id = e.target.id.value;

    await fetch(`http://localhost:3000/alumno/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.message) {
                message = data.message;
            } else {
                message = `ID: ${data.id} | Primer Nombre: ${data.first_name} | Edad: ${data.age}`;
            }
        });

    document.getElementById('textoDelete').innerHTML = message;
});