let bandasData = [];

function carregarBandas() {
  fetch("bandas-wishlist.json")
    .then((res) => res.json())
    .then((bandas) => {
      bandasData = bandas;
      preencherFiltrosUnicos();
      atualizarInterface();
    });
}

function preencherFiltrosUnicos() {
  const estilos = [...new Set(bandasData.map((b) => b.estilo))].sort();
  const locais = [...new Set(bandasData.map((b) => b.local))].sort();

  const filtroEstilo = document.getElementById("filtro-estilo");
  const filtroLocal = document.getElementById("filtro-local");

  estilos.forEach((estilo) => {
    const opt = document.createElement("option");
    opt.value = estilo;
    opt.textContent = estilo;
    filtroEstilo.appendChild(opt);
  });

  locais.forEach((local) => {
    const opt = document.createElement("option");
    opt.value = local;
    opt.textContent = local;
    filtroLocal.appendChild(opt);
  });
}

function atualizarInterface() {
  const criterio = document.getElementById("ordenar").value;
  const direcao = document.getElementById("direcao").value;
  const busca = document.getElementById("busca").value.toLowerCase();
  const estiloSelecionado = document.getElementById("filtro-estilo").value;
  const localSelecionado = document.getElementById("filtro-local").value;

  let filtradas = bandasData.filter((banda) => {
    const correspondeBusca = banda.nome.toLowerCase().includes(busca);
    const correspondeEstilo = !estiloSelecionado || banda.estilo === estiloSelecionado;
    const correspondeLocal = !localSelecionado || banda.local === localSelecionado;
    return correspondeBusca && correspondeEstilo && correspondeLocal;
  });

  let ordenadas = filtradas.sort((a, b) => {
    let valA = a[criterio].toLowerCase();
    let valB = b[criterio].toLowerCase();
    return direcao === "asc"
      ? valA.localeCompare(valB, "pt-BR", { sensitivity: "base" })
      : valB.localeCompare(valA, "pt-BR", { sensitivity: "base" });
  });

  renderizarBandas(ordenadas);
}

function renderizarBandas(lista) {
  const container = document.getElementById("bandas-container");
  container.innerHTML = "";

  if (lista.length === 0) {
    const msg = document.createElement("p");
    msg.textContent =
      "Nenhuma banda encontrada para sua busca. Faça uma nova pesquisa ou volte aos cards.";
    msg.style.textAlign = "center";
    msg.style.fontSize = "1.2rem";
    msg.style.color = "gray";
    container.appendChild(msg);
    return;
  }

  lista.forEach((banda) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = banda.imagem;
    img.alt = banda.nome;
    img.className = "card-img";

    const title = document.createElement("h2");
    title.textContent = banda.nome;
    title.classList.add("card-title");

    const detalhes = document.createElement("div");
    detalhes.className = "card-details hidden";
    detalhes.innerHTML = `
      <p><strong>Ano de Formação:</strong> ${banda.ano_formacao}</p>
      <p><strong>Estilo:</strong> ${banda.estilo}</p>
      <p><strong>Local:</strong> ${banda.local}</p>
      <div class="links">
        <a href="${banda.youtube}" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube youtube-icon"></i></a>
        <a href="${banda.spotify}" target="_blank" aria-label="Spotify"><i class="fa-brands fa-spotify spotify-icon"></i></a>
      </div>
    `;

    card.addEventListener("click", (event) => {
      event.stopPropagation();

      const estaAberto = !detalhes.classList.contains("hidden");

      document.querySelectorAll(".card-details:not(.hidden)").forEach((el) => {
        el.classList.add("hidden");
      });

      if (!estaAberto) {
        detalhes.classList.remove("hidden");
      }
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(detalhes);

    if (lista.length === 1) {
      detalhes.classList.remove("hidden");
    }

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-tema");
  const body = document.body;

  const temaSalvo = localStorage.getItem("tema");
  body.className = temaSalvo || "dark";

  toggleBtn.addEventListener("click", () => {
    const novoTema = body.className === "dark" ? "light" : "dark";
    body.className = novoTema;
    localStorage.setItem("tema", novoTema);
  });

  document.getElementById("ordenar").addEventListener("change", atualizarInterface);
  document.getElementById("direcao").addEventListener("change", atualizarInterface);
  document.getElementById("busca").addEventListener("input", atualizarInterface);
  document.getElementById("filtro-estilo").addEventListener("change", atualizarInterface);
  document.getElementById("filtro-local").addEventListener("change", atualizarInterface);

  document.getElementById("limpar-busca").addEventListener("click", () => {
    document.getElementById("busca").value = "";
    atualizarInterface();
  });

  document.addEventListener("click", (event) => {
    const clicouDentroDeCard = event.target.closest(".card");
    if (!clicouDentroDeCard) {
      document.querySelectorAll(".card-details:not(.hidden)").forEach((el) => {
        el.classList.add("hidden");
      });
    }
  });

  carregarBandas();
});

