    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário

            // Obtém os valores dos campos de entrada
            const nome = document.getElementById('name').value.trim();
            const comentario = document.getElementById('comentarios').value.trim();

            // Verifica se os campos estão vazios
            if (nome === '' || comentario === '') {
                alert('Por favor, preencha todos os campos.');
                return; // Impede o envio do formulário se houver campos vazios
            }
            // Se todos os campos estiverem preenchidos, envia o formulário
            form.submit();
        });
    });
