const ano = new Date().getFullYear();

const elementoAno = document.getElementById("ano");

if (elementoAno) {
    elementoAno.textContent = `© ${ano} - Charlie Brown Jr.`;
}



const fotos = document.querySelectorAll(".foto-galeria");

const lightbox = document.getElementById("lightbox");

const imagemAmpliada = document.getElementById("imagem-ampliada");

const fechar = document.querySelector(".fechar");

if (fotos.length > 0 && lightbox && imagemAmpliada) {

    fotos.forEach(function(foto) {

        foto.addEventListener("click", function() {

            lightbox.style.display = "flex";

            imagemAmpliada.src = foto.src;

        });

    });

}

if (fechar) {

    fechar.addEventListener("click", function() {

        lightbox.style.display = "none";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", function(evento) {

        if (evento.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}



const form = document.getElementById("formContato");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;

        const erro = document.getElementById("erro");

        if (nome === "" || cpf === "" || telefone === "" || email === "") {

            erro.style.color = "red";
            erro.textContent = "Preencha todos os campos obrigatórios.";

            return;
        }

        if (!email.includes("@")) {

            erro.style.color = "red";
            erro.textContent = "E-mail inválido.";

            return;
        }

        if (telefone.length < 10) {

            erro.style.color = "red";
            erro.textContent = "Telefone inválido.";

            return;
        }

        erro.style.color = "lightgreen";
        erro.textContent = "Formulário enviado com sucesso!";

    });

}



const banners = [
    "foto3.jpg",
    "baner.png",
    "baner1.jpg"
];

const banner = document.getElementById("banner-img");
let bannerAtual = 0;

if (banner) {

    // Mostra a primeira imagem imediatamente
    banner.src = banners[bannerAtual];

    function trocarBanner() {
        banner.src = banners[bannerAtual];
    }

    // Troca automática
    setInterval(function() {

        bannerAtual++;

        if (bannerAtual >= banners.length) {
            bannerAtual = 0;
        }

        trocarBanner();

    }, 3000);

    const btnAnterior = document.getElementById("anterior");
    const btnProximo = document.getElementById("proximo");

    // Próximo
    if (btnProximo) {

        btnProximo.addEventListener("click", function() {

            bannerAtual++;

            if (bannerAtual >= banners.length) {
                bannerAtual = 0;
            }

            trocarBanner();

        });

    }

    // Anterior
    if (btnAnterior) {

        btnAnterior.addEventListener("click", function() {

            bannerAtual--;

            if (bannerAtual < 0) {
                bannerAtual = banners.length - 1;
            }

            trocarBanner();

        });

    }

}

