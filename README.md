# 🎸 GigTracker 

Bem-vindo ao **GigTracker**, um catálogo interativo das bandas que eu já assisti e que ainda sonho em ver ao vivo! Este projeto pessoal permite explorar, pesquisar, filtrar cards de bandas, com acesso direto ao Spotify e YouTube de cada uma delas.

![Screenshot do projeto](imagens/gigtracker.jpg) 

Este projeto foi desenvolvido inteiramente por mim, **Piter Gomes**, como parte do meu portfólio pessoal para demonstrar habilidades em **JavaScript**, **HTML**, **CSS**, manipulação do **DOM**, uso de **JSON**, além de princípios de **UX/UI** responsivo e boas práticas de código.

---

## 📌 Acesse o projeto online

🔗 [Clique aqui para ver o projeto no GitHub Pages](https://pitercoding.github.io/gig-tracker/).

## 🚀 Funcionalidades

- 🎧 **Busca Dinâmica**: Filtre bandas por nome, estilo musical e local de origem.
- 🔃 **Ordenação Inteligente**: Organize por nome, estilo ou país, em ordem crescente ou decrescente.
- 🎛️ **Filtros Interativos**: Estilos e locais únicos são detectados automaticamente.
- 🌙 **Alternância de Tema**: Modo claro/escuro com preferência salva no navegador.
- 🔗 **Links Diretos**: Acesse YouTube e Spotify de cada banda.
- 📡 **Last.fm**: Integração para mostrar o que estou ouvindo agora.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** + **CSS3**  
- **JavaScript (Puro/Vanilla)**  
- **Font Awesome** (ícones sociais e musicais)  
- Integração com **Last.fm API Widget**  
- Estrutura de dados em **JSON** 
- **LocalStorage** para tema escuro/claro

## 📁 Organização do Projeto
``
gigtracker/
│
├── index.html            # Página principal
├── style.css             # Estilos visuais
├── script.js             # Lógica e interatividade do index.html
├── bandas.json           # Dados das bandas do index.html
├── wishlist.html         # Lista de bandas desejadas
├── wishlist.js           # Lógica e interatividade do wishlist.html
├── bandas-wishlist.json  # Dados das bandas do wishlist.html
├── imagens/              # Imagens e favicon
`` 

## 🔧 Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/pitercoding/gigtracker.git
   cd gigtracker
    ```
2. Abra o arquivo `wishlist.html` em seu navegador favorito (basta dar duplo clique ou usar um servidor local como Live Server no VSCode).

## 🧠 Possíveis melhorias futuras

Como projeto em constante evolução, há diversas ideias de melhorias para versões futuras, se você tiver alguma sinta-se a vontade em colaborar:

 * **Favoritar bandas** e salvar no `localStorage`
 * **Formulário de adição de bandas manualmente**
 * **Persistência local**: salvar bandas customizadas do usuário no `localStorage`
 * **Integração com APIs reais**, como:
    * [MusicBrainz](https://musicbrainz.org/)
    * [Spotify API](https://developer.spotify.com/)
 * Criar uma **Wishlist interativa** com sistema de curadoria
 * Página de detalhes com **biografia** automática da banda
 * Adição de **outros filtros**
 * Modo de exibição em **lista ou grade**
 * Internacionalização (i18n) com tradução para outros idiomas

## 👤 Autor
Desenvolvido com 🎸, ☕ e dedicação por Piter Gomes
📍 Estudante de Ciência da Computação – 4º período
📫 [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/) | [GitHub](https://github.com/pitercoding) | [Last.fm](https://www.last.fm/pt/user/Thisisdefeat)

## ⚖️ Licença
Este projeto está licenciado sob a licença MIT.
Sinta-se à vontade para estudar, adaptar ou usar como base para projetos educacionais.
