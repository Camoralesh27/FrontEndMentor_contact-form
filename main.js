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

    const query = document.querySelector('#query');
    

    //* Functions

    // Change Radio Background
    const changeRadioBg = () => {
        const radio = query.querySelectorAll('input');
        
        radio.forEach((button) => {
            if (button.checked) {
                button.parentNode.classList.add('radio-selected');
            } else {
                button.parentNode.classList.remove('radio-selected');
            }
        });
    }


    //* Eventos
    // Add an event listener to the radio buttons
    query.querySelectorAll('input').forEach((button) => {
        button.addEventListener('click', changeRadioBg);
    });
});

