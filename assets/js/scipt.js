function handleFormSubmission(response) {
    if (response.success) {
        // Se o envio for bem-sucedido, exibe um alerta personalizado
        var alertDiv = document.createElement("div");
        alertDiv.className = "custom-alert";
        alertDiv.textContent = "Sua mensagem foi enviada com sucesso!";
        document.body.appendChild(alertDiv);

        // Remove o alerta após alguns segundos (opcional)
        setTimeout(function () {
            alertDiv.parentNode.removeChild(alertDiv);
        }, 3000); // Remove após 3 segundos
    } else {
        // Se houver um erro no envio, exibe um alerta de erro
        var alertDiv = document.createElement("div");
        alertDiv.className = "custom-alert";
        alertDiv.style.backgroundColor = "#ffcccc"; // Cor de fundo vermelha
        alertDiv.textContent = "Erro ao enviar mensagem. Por favor, tente novamente mais tarde.";
        document.body.appendChild(alertDiv);

        // Remove o alerta após alguns segundos (opcional)
        setTimeout(function () {
            alertDiv.parentNode.removeChild(alertDiv);
        }, 5000); // Remove após 5 segundos
    }
}
// Evento de carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Seu código personalizado aqui
        // Cria um elemento de alerta
        var alertDiv = document.createElement("div");
        alertDiv.className = "custom-alert";
        alertDiv.textContent = "Sua mensagem foi enviada com sucesso!";
        document.body.appendChild(alertDiv);

        // Remove o alerta após alguns segundos e envia o formulário
        setTimeout(function () {
            alertDiv.parentNode.removeChild(alertDiv);
            document.getElementById("contact-form").submit();
        }, 3000); // 3000 milissegundos = 3 segundos
    });
});