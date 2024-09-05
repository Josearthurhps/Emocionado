document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obtém os valores dos campos de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se as credenciais estão corretas
    if (username === 'Maria_Careca' && password === '21082024') {
        // Redireciona para index.html se as credenciais estiverem corretas
        window.location.href = 'index.html';
    } else {
        // Exibe uma mensagem de erro se as credenciais estiverem incorretas
        alert('Usuário ou senha incorretos.');
    }
});




