
const nombre = document.querySelector('#nombreInput');
const email = document.querySelector('#emailInput');
const clave =document.querySelector('#claveInput');
const confirmarclave =document.querySelector('#confirmeclaveInput');

const nombreError = document.querySelector('#nombreError');
const emailError = document.querySelector('#emailError');
const claveError = document.querySelector('#claveError');
const confirmarclaveError = document.querySelector('#confirmeclaveError');

const button = document.querySelector('#boton');

const formulario = document.getElementById("formulario");


button.addEventListener('click', (event)=>{
    event.preventDefault();


    validateEmpty(email.value, email, emailError, 'Rellene este campo');

    validateNombre(nombre.value, nombre, nombreError, 'Rellene este campo')
    validateComprobarClave(confirmarclave.value, confirmarclave, confirmarclaveError, 'Rellene este campo');
    validateClave(clave.value, clave, claveError, 'Rellene este campo');
    validateEmail(email.value, email, emailError, 'Email inválido');
    validateForm();

  

});




function validateEmpty(valueInput, divInput, divError, nameInput)
{
    hideErrorEmpty = false;
    
    if(valueInput.length == 0)
    {
        showError(divInput, divError, nameInput);

    }
    else
    {
        hideError(divInput, divError);
        hideErrorEmpty = true;

    }

}

function validateNombre(valueInput, divInput, divError,nameInput)
{
    hideErrorNombre = false;
    
    let regExp = /^([A-Za-z]){1,20}$/

    if(regExp.test(valueInput))
    {
        hideError(divInput, divError);
        hideErrorNombre = true;
    }
    else
    {
        showError(divInput, divError, nameInput);
    }
}

function validateEmail(valueInput, divInput, divError, nameInput)
{
    hideErrorEmail = false;

    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if(regExp.test(valueInput))
    {
        hideError(divInput, divError);
        hideErrorEmail = true;
 
    }

    else if(email.value.length >= 1)
    {
    
        showError(divInput, divError, nameInput);

    }


}

function validateClave(valueInput, divInput, divError, nameInput)
{
    hideErrorClave = false;

    if(valueInput.length == 0   )
    {
        showError(divInput, divError, nameInput);

    }

    else if (valueInput.length > 8 )
    {
       showError(divInput, divError, 'No debe tener más de 8 caracteres');   

    }

    else
    {
        hideError(divInput, divError);
        hideErrorClave = true;
    }

}

function validateComprobarClave(valueInput, divInput, divError, nameInput)
{
    hideErrorComprobarClave = false;

    if(valueInput.length == 0 )
    {
        showError(divInput, divError, nameInput);

    }
    else if(confirmarclave.value != clave.value)
    {
        showError(divInput, divError,'Las contraseñas no coinciden');

    }
    else
    {
        hideError(divInput, divError);
        hideErrorComprobarClave = true;
    }


}

function showError(divInput, divError, nameInput)
{
    divInput.style.border='6px solid rgb(183, 72, 72)';
    divError.innerHTML = `<img class="icon-error" src="./images/error-icon.svg" alt="">
    <p class="error"> ${nameInput}</p>`

}

function hideError(divInput, divError)
{
    divInput.style.border='6px solid rgba(95, 212, 52, 0.719)';
    divError.innerHTML = `<img class="icon-success" src="./images/success-icon.svg" alt="">`


}

function validateForm()
{
    if (hideErrorEmpty == true && hideErrorNombre == true && hideErrorEmail == true && hideErrorClave == true && hideErrorComprobarClave == true)
    {

        alert("La inscripción se ha realizado correctamente");

    }
    
}











