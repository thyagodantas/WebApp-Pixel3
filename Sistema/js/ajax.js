$(function () {
  $("#formulario1").submit(function (event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    var formData = $(this).serialize(); // serializa os dados do formulário
    $.ajax({
      type: "POST",
      url: "/site-expresso",
      data: formData,
      success: function (response) {
        // exibe uma mensagem de sucesso
        $(".alert.success-message").html(response);
        $(".alert.success-message").show();
        setTimeout(function () {
          $(".alert.success-message").hide();
          location.reload();
        }, 5000); // esconde a mensagem após 5 segundos (5000 milissegundos)
      },
      error: function (response) {
        // exibe a mensagem de erro na div com classe "alert error-message"
        $(".alert.error-message").html(response.responseText);
        $(".alert.error-message").show();
        setTimeout(function () {
          $(".alert.error-message").hide();
        }, 5000); // esconde a mensagem após 5 segundos (5000 milissegundos)
      },
    });
  });

  $("#formulario2").submit(function (event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    var formData = $(this).serialize(); // serializa os dados do formulário
    $.ajax({
      type: "POST",
      url: "/",
      data: formData,
      success: function (response) {
        // exibe uma mensagem de sucesso
        $(".alert.success-message").html(response);
        $(".alert.success-message").show();
        setTimeout(function () {
          $(".alert.success-message").hide();
          location.reload();
        }, 5000); // esconde a mensagem após 5 segundos (5000 milissegundos)
      },
      error: function (response) {
        // exibe a mensagem de erro na div com classe "alert error-message"
        $(".alert.error-message").html(response.responseText);
        $(".alert.error-message").show();
        setTimeout(function () {
          $(".alert.error-message").hide();
        }, 5000); // esconde a mensagem após 5 segundos (5000 milissegundos)
      },
    });
  });
});
