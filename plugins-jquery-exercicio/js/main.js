$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true,
                minlength: 5
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo",
                minlength: "Seu nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone",
                minlength: "Seu telefone deve ter pelo menos 14 caracteres"
            },
            cpf: {
                required: "Por favor, insira seu CPF",
                minlength: "Seu CPF deve ter pelo menos 14 caracteres"
            },
            endereco: {
                required: "Por favor, insira seu endereço completo",
                minlength: "Seu endereço deve ter pelo menos 5 caracteres"
            },
            cep: {
                required: "Por favor, insira seu CEP",
                minlength: "Seu CEP deve ter pelo menos 9 caracteres"
            }
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.submit();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });
});
