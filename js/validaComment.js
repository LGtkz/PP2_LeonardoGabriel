    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário
            const nome = document.getElementById('name').value.trim();
            const comentario = document.getElementById('comentarios').value.trim();
            if (nome === '' || comentario === '') {
                alert('Por favor, preencha todos os campos.');
                return; // Impede o envio do formulário se houver campos vazios
            }
            form.submit();
        });
    });
