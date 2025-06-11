# 📰 Dev.to Clone with AI Assistant – Next.js Project

This project is a functional clone of the [Dev.to](https://dev.to/) platform, built with Next.js 15+ (App Router) and powered by artificial intelligence to improve the article search experience.

## 🚀 Main features

- ✅ List recent articles using the [Dev.to. public API](https://developers.forem.com/api)

- ✅ Dynamic pagination to explore multiple pages of content.

- ✅ View details of each item with fluid navigation.

- ✅ Smart chatbot using the OpenAI API for:

  - Understand user queries.

  - Search for related articles on Dev.to.

  - Return the 5 most relevant results.

## 🧠 Technologies used

- Framework: [Next.js 15+](https://nextjs.org/)

- Language: [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

- Styles: [Tailwind CSS](https://tailwindcss.com/)

- External API:

  - [Dev.to Public API](https://developers.forem.com/api)

  - [OpenAI Chat API](https://platform.openai.com/docs/overview)

  - [AI SDK](https://www.npmjs.com/package/@ai-sdk/openai): Vercel ai for chatbot management ([useChat](https://www.npmjs.com/package/ai))

## 📦 Installation

```
git clone https://github.com/JordanRondon/devNewsClone.git
cd devto-clone
npm install
npm run dev
```

## 🔑 Necessary environment variables

Create a `.env.local` file

```
OPENAI_API_KEY=your_openai_key
```

## 📚 Main structure

```
|-/app
   |-/api/chat/route.js   # Endpoint for searches with OpenAI
   |-/article
   |  |-/[id]
   |     |-loading.jsx
   |     |-page.jsx       # Article Details
   |-/search/page.jsx     # Page to chat with the AI
   |-error.jsx
   |-layour.jsx
   |-loading.jsx
   |-not-found.jsx
   |-page.jsx             # Home page with articles
|-/components
   |-ArticleCard.jsx
   |-MessageContent.jsx
   |-MessageLine.jsx
   |-Navbar.jsx
   |-Pagination.jsx
   |-SearchResult.jsx
```

## 💬 ChatBot Functionality

The chat component allows users to type questions such as:

```
“Do you have any articles on testing in React?”
```

Internally, the bot processes the user's intent with the OpenAI API, searches Dev.to, and responds with the 5 most relevant articles.
