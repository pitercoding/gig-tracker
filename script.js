function carregarBandas() {
  fetch('bandas.json')
    .then(res => res.json())
    .then(bandas => {
      const container = document.getElementById('bandas-container');

      bandas.forEach(banda => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${banda.imagem}" alt="${banda.nome}" class="card-img" />
          <h2>${banda.nome}</h2>
          <p><strong>Ano de Formação:</strong> ${banda.ano_formacao}</p>
          <p><strong>Estilo:</strong> ${banda.estilo}</p>
          <p><strong>Local:</strong> ${banda.local}</p>
          <div class="links">
            <a href="${banda.youtube}" target="_blank">YouTube</a>
            <a href="${banda.spotify}" target="_blank">Spotify</a>
          </div>
        `;
        container.appendChild(card);
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-tema');
  const body = document.body;

  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo) {
    body.className = temaSalvo;
  } else {
    body.className = 'dark'; // padrão
  }

  toggleBtn.addEventListener('click', () => {
    const temaAtual = body.className;
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    body.className = novoTema;
    localStorage.setItem('tema', novoTema);
  });

  carregarBandas();
});

      