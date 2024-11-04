document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpiar mensajes de error previos
    document.getElementById('nameError').textContent = '';
    document.getElementById('lastnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Obtener valores de los campos
    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let valid = true;

    // Validación de nombre (solo letras, mínimo 3 y máximo 10 caracteres)
    const namePattern = /^[A-Za-z]{3,10}$/;
    if (!namePattern.test(name)) {
        document.getElementById('nameError').textContent = 'El nombre debe contener entre 3 y 10 letras y solo letras';
        valid = false;
    }

    // Validación de apellido (solo letras, mínimo 3 y máximo 10 caracteres)
    const lastnamePattern = /^[A-Za-z]{3,10}$/;
    if (!lastnamePattern.test(lastname)) {
        document.getElementById('lastnameError').textContent = 'El apellido debe contener entre 3 y 10 letras y solo letras';
        valid = false;
    }

    // Validación de correo electrónico (debe contener "@" y ".com")
    if (!email.includes('@') || !email.endsWith('.com')) {
        document.getElementById('emailError').textContent = 'Ingrese una dirección de correo válida';
        valid = false;
    }

    // Validación de teléfono (solo dígitos, mínimo 9 y máximo 13 caracteres)
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone) || phone.length < 9 || phone.length > 13) {
        document.getElementById('phoneError').textContent = 'El teléfono solo debe contener números y debe tener entre 9 y 13 dígitos';
        valid = false;
    }

    // Si todos los campos son válidos, mostrar los datos enviados
    if (valid) {
        document.getElementById('submittedData').style.display = 'block';
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayLastname').textContent = lastname;
        document.getElementById('displayEmail').textContent = email;
        document.getElementById('displayPhone').textContent = phone;

        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    }
});
