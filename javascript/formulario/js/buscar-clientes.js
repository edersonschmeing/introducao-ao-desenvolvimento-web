var botaoAdicionar = document.querySelector("#buscar-clientes");

botaoAdicionar.addEventListener("click", function() {
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-clientes.herokuapp.com/clientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var clientes = JSON.parse(resposta);

            clientes.forEach(function(cliente) {
                adicionaClienteNaTabela(cliente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
