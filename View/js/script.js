const formulario = document.getElementById('meuFormulario');
const mensagemSucesso = document.getElementById('mensagemSucesso');
const btnEnviar = document.getElementById('btnEnviar');

formulario.addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o redirecionamento para o Formspree

    // Substitua pelo seu código do Formspree
    const urlFormspree = "https://formspree.io/f/mpqyjbaa";

    const dados = new FormData(this);

    btnEnviar.innerText = "Enviando...";
    btnEnviar.disabled = true;

    try {
        const resposta = await fetch(urlFormspree, {
            method: 'POST',
            body: dados,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (resposta.ok) {
            
            formulario.reset();
            
            
            formulario.style.display = 'none';
            mensagemSucesso.style.display = 'block';
            
            
            setTimeout(() => {
                mensagemSucesso.style.display = 'none';
                formulario.style.display = 'block';
                btnEnviar.innerText = "Enviar Solicitação";
                btnEnviar.disabled = false;
            }, 5000);

        } else {
            alert("Ops! Houve um problema ao enviar. Tente novamente.");
            btnEnviar.disabled = false;
            btnEnviar.innerText = "Enviar Solicitação";
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua internet.");
        btnEnviar.disabled = false;
        btnEnviar.innerText = "Enviar Solicitação";
    }
});