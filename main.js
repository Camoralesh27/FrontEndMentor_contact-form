document.addEventListener('DOMContentLoaded', function() { 
    const email = {
        firstName: '',
        lastName: '',
        email: '',
        message: '' 
    }

    //Select the items from the DOM
    const form = document.querySelector('#form');
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const emailInput = document.querySelector('#email');
    const message = document.querySelector('#message');
    const btnSubmit = document.querySelector('#submit');
    const query = document.querySelector('#query');
    const toast = document.querySelector('#toast');

    //* --> Change Radio Background
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

    //* Events 
    query.querySelectorAll('input').forEach((button) => {
        button.addEventListener('click', changeRadioBg);
    });

    firstName.addEventListener('input', validar);
    lastName.addEventListener('input', validar);
    emailInput.addEventListener('input', validar);
    message.addEventListener('input', validar);

    //* --> Validation
    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`The field ${e.target.id} is required`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        } 

        if((e.target.id === 'email' || e.target.id === 'cc') && !validarEmail(e.target.value)) {
            mostrarAlerta('Please enter a valid email address', e.target.parentElement)
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };


        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto de email
        comprobarEmail();

    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        //Generar 'alerta' en HTML 
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('form__error');

        //Inyectar 'error' a formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.form__error');
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        //'expresion regular' para email en JS
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email)
        return resultado;
    }

    const checkbox = document.querySelector('#consent');


    function comprobarEmail() {
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true;
            return;
        } 
        
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;
    }



//* --> Display toast 
function enviarEmail(e) {
    e.preventDefault();

    setTimeout(() => {
        toast.classList.remove('hidden');
        
        resetFormulario();

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }, 10)
}

function resetFormulario() {
    email.email = '';
    email.asunto = '';
    email.mensaje = '';
    
    form.reset();
    comprobarEmail();
}

form.addEventListener('submit', enviarEmail);


});





