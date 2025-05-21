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

  lista.forEach(banda => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${banda.imagem}" alt="${banda.nome}" class="card-img" />
      <h2>${banda.nome}</h2>
      <p><strong>Ano de Formação:</strong> ${banda.ano_formacao}</p>
      <p><strong>Estilo:</strong> ${banda.estilo}</p>
      <p><strong>Local:</strong> ${banda.local}</p>
      <div class="links">
          <a href="${banda.youtube}" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube youtube-icon"></i></a>
          <a href="${banda.spotify}" target="_blank" aria-label="Spotify"><i class="fa-brands fa-spotify spotify-icon"></i></a>
      </div>
    `;
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
});

      