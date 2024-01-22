const credentials = [

    {
        id: 1,
        name: 'salvo',
        email: 'salvo@gmail.com',
        password: 'salvo'
    }, {
        id: 2,
        name: 'riccardo',
        email: 'riccardo@gmail.com',
        password: 'riccardo'
    }, {
        id: 3,
        name: 'silvia',
        email: 'silvia@gmail.com',
        password: 'silvia'
    }

];

/* console.table(credentials); */

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const check = document.getElementById('check').checked;
    const ok = document.getElementById('ok');
    const negato = document.getElementById('negato');
    const error = document.getElementById('error');

    //RITORNO UN BOOLEANO SE I CAMPI SONO CORRETTI
    const autorizzato = credentials.filter(user => {
        return user.email === emailInput && user.password === passwordInput && check == true
    }).length > 0;

    /* const autorizzato = credentials.some(user => {
      return  user.email === emailInput && user.password === passwordInput && check == true
    }); */

    /* LOGICA MESSAGGIO CAMPI OBBLIGATORI */
    if (emailInput === '' && passwordInput === '') {
        return error.innerText = '* I campi sotto stanti sono obbligatori';
    }

    /* LOGICA MESSAGGIO CHECK */
    if (check == false) {
        return error.innerText = '* Devi accettare i termini di utilizzo'
    }

    for (let i = 0; i < credentials.length; i++) {
        const user = credentials[i];

        /* LOGICA MESSAGGIO AUTORIZZATO/NON AUTORIZZATO */
        if (autorizzato) {
            form.classList.add('d-none');
            negato.innerText = '';

            //mostro il nome a schermo dell'utente loggato
            if (user.email === emailInput) {
                ok.innerText = 'Benvenuto ' + user.name;
            }
        } else {
            form.classList.add('d-none');
            negato.innerText = 'Accesso negato!';
            ok.innerText = '';

            //faccio in modo che la scritta duri 2 secondi e ritorni po il form
            setTimeout(() => {
                form.classList.remove('d-none');
                negato.innerText = '';
            }, 2000)
        }
    }
})