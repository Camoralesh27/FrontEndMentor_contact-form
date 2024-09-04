document.addEventListener('DOMContentLoaded', function() { 
    const email = {
        firstName: '',
        lastName: '',
        email: '',
        mensaje: '' 
    }

    //Seleccionar los elementos de la interfaz
    const form = document.querySelector('#form');
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const emailInput = document.querySelector('#email');
    const message = document.querySelector('#message');
    const btnSubmit = document.querySelector('#btnSubmit');

    const query =document.querySelector('#query');

    console.log(query.children[0].childNodes[1].checked);
    console.log(query.children[0]);
    console.log(query.querySelector('input'));
    


    //* Funciones

    // Change Radio Background
    const changeRadioBg = () => {
        const radio = query.querySelectorAll('input');

        if (radio.checked) {
            query.children[0].classList.add('radio-selected');
        } else {
            query.children.classList.remove('radio-selected');
        }
    }

    changeRadioBg();

    //! Algo no funciona 


});