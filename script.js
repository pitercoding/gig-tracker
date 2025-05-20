async function carregarBandas() {
  const resposta = await fetch('bandas.json');
  const bandas = await resposta.json();

  const container = document.getElementById('bandas-container');
  
  bandas.forEach(banda => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${banda.nome}</h2>
      <p><strong>Ano:</strong> ${banda.ano}</p>
      <p><strong>Estilo:</strong> ${banda.estilo}</p>
      <p><strong>Local:</strong> ${banda.local}</p>
      <div class="links">
        <a href="${banda.youtube}" target="_blank">YouTube</a>
        <a href="${banda.spotify}" target="_blank">Spotify</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarBandas);
