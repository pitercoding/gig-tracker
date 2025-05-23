let bandasData = [];

function carregarBandas() {
  fetch('bandas.json')
    .then(res => res.json())
    .then(bandas => {
      bandasData = bandas;
      atualizarInterface();
    });
}

function atualizarInterface() {
  const criterio = document.getElementById('ordenar').value;
  const direcao = document.getElementById('direcao').value;
  const busca = document.getElementById('busca').value.toLowerCase();

  let filtradas = bandasData.filter(banda =>
    banda.nome.toLowerCase().includes(busca)
  );

  let ordenadas = filtradas.sort((a, b) => {
    let valA = a[criterio].toLowerCase();
    let valB = b[criterio].toLowerCase();
    return direcao === 'asc'
      ? valA.localeCompare(valB, 'pt-BR', { sensitivity: 'base' })
      : valB.localeCompare(valA, 'pt-BR', { sensitivity: 'base' });
  });

  renderizarBandas(ordenadas);
}

function renderizarBandas(lista) {
  const container = document.getElementById('bandas-container');
  container.innerHTML = "";

  if (lista.length === 0) {
    const msg = document.createElement('p');
    msg.textContent = "Nenhuma banda encontrada para sua busca. Faça uma nova pesquisa ou volte aos cards.";
    msg.style.textAlign = "center";
    msg.style.fontSize = "1.2rem";
    msg.style.color = "gray";
    container.appendChild(msg);
    return;
  }

  lista.forEach(banda => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-header">
        <img src="${banda.imagem}" alt="${banda.nome}" class="card-img" />
        <h2 class="card-title">${banda.nome}</h2>
      </div>
      <div class="card-details hidden">
        <p><strong>Ano de Formação:</strong> ${banda.ano_formacao}</p>
        <p><strong>Estilo:</strong> ${banda.estilo}</p>
        <p><strong>Local:</strong> ${banda.local}</p>
        <div class="links">
          <a href="${banda.youtube}" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube youtube-icon"></i></a>
          <a href="${banda.spotify}" target="_blank" aria-label="Spotify"><i class="fa-brands fa-spotify spotify-icon"></i></a>
        </div>
      </div>
    `;

    // Aplica cursor pointer no card inteiro e no título
    card.style.cursor = 'pointer';
    card.querySelector('.card-title').style.cursor = 'pointer';

    // Clique no card abre/fecha (toggle) e fecha os outros
    card.addEventListener('click', (event) => {
      event.stopPropagation(); // Impede que o clique propague para o listener global

      const detalhes = card.querySelector('.card-details');
      const estaAberto = !detalhes.classList.contains('hidden');

    // Fecha todos os detalhes abertos
    document.querySelectorAll('.card-details:not(.hidden)').forEach(el => {
    el.classList.add('hidden');
    });

    // Se o clicado estava fechado, abrimos (toggle)
    if (!estaAberto) {
      detalhes.classList.remove('hidden');
    }
});
    // Se houver apenas uma banda na lista, abre os detalhes automaticamente
    if (lista.length === 1) {
      card.querySelector('.card-details').classList.remove('hidden');
    }

    container.appendChild(card);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-tema');
  const body = document.body;

  const temaSalvo = localStorage.getItem('tema');
  body.className = temaSalvo || 'dark';

  toggleBtn.addEventListener('click', () => {
    const novoTema = body.className === 'dark' ? 'light' : 'dark';
    body.className = novoTema;
    localStorage.setItem('tema', novoTema);
  });

  // Eventos de filtros
  document.getElementById('ordenar').addEventListener('change', atualizarInterface);
  document.getElementById('direcao').addEventListener('change', atualizarInterface);
  document.getElementById('busca').addEventListener('input', atualizarInterface);

  carregarBandas();

  document.addEventListener('click', (event) => {
  const clicouDentroDeCard = event.target.closest('.card');
  if (!clicouDentroDeCard) {
    // Fecha todos os detalhes abertos
    document.querySelectorAll('.card-details:not(.hidden)').forEach(el => {
      el.classList.add('hidden');
    });

  document.getElementById('limpar-busca').addEventListener('click', () => {
  document.getElementById('busca').value = '';
  atualizarInterface();
});

  }
});

});

      