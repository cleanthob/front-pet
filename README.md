# FrontPet

FrontPet é uma aplicação de e-commerce desenvolvida com React, TypeScript e Tailwind CSS. O projeto permite visualizar produtos, consultar seus detalhes e gerenciar um carrinho de compras com persistência em `localStorage`.

---

## Funcionalidades

- Listagem de produtos
- Visualização dos detalhes de cada produto
- Adição de produtos ao carrinho
- Incremento e decremento da quantidade de itens
- Remoção de produtos do carrinho
- Limpeza completa do carrinho
- Cálculo automático do valor total da compra
- Persistência dos dados do carrinho com `localStorage`
- Notificações de ações utilizando React Hot Toast
- Interface responsiva

---

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- React Hot Toast

---

## Estrutura do projeto

```text
src
├── assets
├── components
│   └── Header
├── contexts
│   └── CartContext
├── pages
│   ├── Home
│   ├── Detail
│   ├── Cart
│   └── NotFound
├── routes
├── services
│   └── api.ts
└── App.tsx
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/cleanthob/frontpet.git
```

Acesse a pasta do projeto:

```bash
cd frontpet
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

---

## Aprendizados

Este projeto foi desenvolvido com o objetivo de praticar conceitos importantes do ecossistema React, incluindo:

- Componentização
- Context API
- Hooks (`useState`, `useEffect` e `useContext`)
- Gerenciamento de estado global
- Tipagem com TypeScript
- Consumo de APIs com Axios
- Persistência de dados com `localStorage`
- Navegação com React Router
- Estilização com Tailwind CSS
- Responsividade

---

## Melhorias futuras

- Sistema de autenticação de usuários
- Busca e filtro de produtos
- Favoritos
- Integração com API de pagamento
- Histórico de pedidos
- Testes automatizados

---

## Licença

Este projeto foi desenvolvido para fins de estudo e composição de portfólio.

---

## Autor

**Cleantho Beltrão**

- GitHub: https://github.com/cleanthob
- LinkedIn: https://www.linkedin.com/in/cleanthob/