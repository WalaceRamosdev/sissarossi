# 📄 Manual do Projeto: Ateliê das Unhas - Sissa Rossi

Este manual foi criado para fornecer à você, Sissa Rossi, total autonomia sobre o seu novo site. Aqui você encontrará informações sobre como ele foi construído, onde encontrar o código-fonte e como realizar futuras atualizações.

---

## 🚀 1. Visão Geral do Projeto
O site **Sissa Rossi | Estética Premium** é uma plataforma moderna, rápida e visualmente impactante, desenvolvida para refletir a sofisticação e a qualidade dos seus serviços.

### Principais Diferenciais:
*   **Velocidade Extrema:** O site carrega quase instantaneamente, garantindo uma ótima experiência para suas clientes.
*   **Design Premium:** Uso de animações suaves, tipografia elegante e elementos visuais de alta qualidade.
*   **Totalmente Responsivo:** Funciona perfeitamente em celulares, tablets e computadores.

---

## 🛠 2. Tecnologias Utilizadas
Para garantir o melhor desempenho e modernidade, utilizamos as seguintes ferramentas:

1.  **Astro (v5):** O "coração" do site. Ele permite que o site seja extremamente rápido ao carregar apenas o código necessário.
2.  **React:** Usado para criar componentes interativos, como botões atraentes e formulários.
3.  **Tailwind CSS:** Ferramenta de estilização que permite criar um design personalizado com rapidez e precisão.
4.  **Framer Motion & GSAP:** Responsáveis pelas animações fluidas e elegantes que "dão vida" ao site.
5.  **Lucide React:** Biblioteca de ícones modernos e minimalistas.
6.  **Lenis:** Para um efeito de rolagem (scroll) suave e profissional.

---

## 📂 3. Estrutura do Código-Fonte
Se no futuro houver necessidade de uma manutenção técnica profunda, o desenvolvedor encontrará os arquivos organizados da seguinte forma:

*   `src/pages/`: Contém as páginas principais (como a página inicial).
*   `src/components/`: Aqui estão as "peças" do site (Cabeçalho, Serviços, Preços, Galeria, etc.).
*   `src/assets/`: Onde ficam armazenadas as imagens e fotos do seu portfólio.
*   `src/styles/`: Configurações visuais globais (cores, fontes).

---

## 🔗 4. Onde Encontrar o Código (GitHub)
O código-fonte completo está armazenado com segurança no **GitHub**, que funciona como um "cofre" para o seu site.

*   **Link do Repositório:** [https://github.com/WalaceRamosdev/sissarossi.git](https://github.com/WalaceRamosdev/sissarossi.git)

### Como acessar:
1.  Acesse o link acima.
2.  Lá você verá todos os arquivos que compõem o seu site.
3.  Qualquer desenvolvedor futuro poderá fazer o download (clonagem) do projeto para trabalhar em melhorias.

---

## 💻 5. Como Rodar o Projeto Localmente
Caso um desenvolvedor precise fazer testes no computador dele antes de enviar para a internet:

1.  **Pré-requisito:** Ter o [Node.js](https://nodejs.org/) instalado.
2.  **Instalação de Dependências:** No terminal, dentro da pasta do projeto, rodar:
    ```bash
    npm install
    ```
3.  **Ambiente de Desenvolvimento:** Iniciar o site localmente:
    ```bash
    npm run dev
    ```
    O site estará disponível no endereço `http://localhost:4321`.

---

## ☁ 6. Hospedagem e Atualização (Vercel)
Seu site está configurado para ser hospedado via **Vercel**, uma das melhores plataformas do mundo para sites de alta performance.

### Como funciona a atualização:
O processo é automático. Sempre que o código no GitHub é atualizado (através de um comando "push"), a Vercel percebe a mudança, reconstrói o site e o publica online em poucos minutos. **Você não precisa se preocupar com servidores manuais.**

---

## ✍ 7. Dicas para Manutenção Simples
Se você quiser alterar textos ou preços, aqui está um guia rápido:

1.  Os textos de serviços e preços geralmente estão localizados em arquivos dentro de `src/components/sections/`.
2.  Procure pelos arquivos `Services.astro` ou `Pricing.astro`.
3.  Basta abrir o arquivo, localizar o texto ou valor e editá-lo.
4.  Após a edição, salve o arquivo e faça o envio (commit/push) para o GitHub. O site será atualizado sozinho!

---

## 📞 Suporte
Este site foi entregue com o máximo de carinho e técnica pela **Alpha Code**. Caso surja qualquer dúvida técnica extraordinária, estou à disposição para ajudar.

**Sissa, seu site agora é seu maior cartão de visitas digital. Use-o para brilhar ainda mais!** ✨
