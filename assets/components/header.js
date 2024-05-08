class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Crie uma instância do template
    const headerTemplate = document.createElement('template');

    headerTemplate.innerHTML = `
      <style>
        .close-menu {
          display: none;
        }
        .menu{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1;
          width: 100%;
          background-color: var(--color-nav);
          border-bottom:0.1rem solid var(--ligth-gray-color);
        }
        .menu-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0;
          padding-bottom: 0;
        }
        .menu h1{
          font-size: 2.3rem;
          color: var(--primary-color);
        }
        .menu h1 a {
          color: inherit;
        }
        .menu ul {
          list-style: none;
          display: flex;
        }
        .menu ul li a {
          display: block;
          text-decoration: none;
          padding: 2rem;
          font-size: 1.8rem;
          color: var(--black-color);
          position: relative;
        }

        .menu ul li a::after {
          content: '';
          position: absolute;
          bottom: 1rem;
          left: 50%; 
          width: 0;
          height: 0.2rem;
          background: var(--secondary-color);
          transition: all 300ms ease-in-out;
        }
        .menu ul li a:hover::after{
          width: 50%;
          left: 25%;
        }
        .image_logo {
          max-width: 22vh;
        }
        .main-content {
          max-width: 120rem;
          margin: 0 auto;
          height: 5vh;
          padding: var(--gap);
        }
        @media (hover: none) {
          a {
              -webkit-tap-highlight-color: transparent; /* Define a cor de destaque ao tocar como transparente */
          }
        }
        @media (max-width: 800px) {
          .menu {
            bottom: 0;
            width:100%;
            text-align: center;            
          }
          .menu-content, .menu-content ul{
              padding: 0;
              flex-direction: column;
              justify-content: center;
          }
          .image_logo {
            max-width: 15vh;
          }
          .menu-content{
            min-height: 70%;
            display: flex;
            justify-content: center;
          }
          .menu{
              display: none;
          }
      
          .close-menu-label::after {
              content: '☰';
              position: fixed;
              z-index: 2;
              top: 1.5rem;
              right: 1.5rem;
              border: 1px solid var(--primary-color);
              color: var(--primary-color);
              font-size: 2.5rem;
              line-height: 2.5rem;
              width: 2.5rem;
              height: 2.5rem;
              text-align: center;
              padding: 0.8rem;
              cursor: pointer;
          }
          .close-menu:checked~.menu {
              display: block;
          }
          .close-menu:checked~.close-menu-label::after {
              content: '×';
          }
          .menu-spacing {
              display: none;
          }
        }
      </style>
      <header>
      <input id="close-menu" class="close-menu" type="checkbox" aria-label="Fechar menu" role="button">
      <label class="close-menu-label" for="close-menu" title="Close menu"></label>
      <aside class="menu">
          <div class="main-content menu-content">
          <div class= "logo-padding">
          <h1 onclick="getElementById('close-menu').checked = false;">
          <a href="index.html"><img class="image_logo" src="assets/img/Logotipo-Way-Final.png" alt=""></a>
          </h1>
          </div>
  
              <nav>
                <ul onclick="getElementById('close-menu').checked = false;">
                  <li><a href="index.html">Início</a></li>
                  <li><a href="Sobre.html">Sobre</a></li>
                  <li><a href="servicos.html">Serviços</a></li>
                  <li><a href="localização.html">Localização</a></li>
                  <li><a href="contato.html">Contato</a></li>
                </ul>
              </nav>
          </div>
      </aside>
      </header>
    `;

    // Clone o conteúdo do template e adicione ao elemento
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

customElements.define('header-component', Header);
