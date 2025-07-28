# Axios 📦

Axios is a **promise-based HTTP client** for the browser and Node.js. It is used to make HTTP requests (GET, POST, PUT, DELETE, etc.) and handle responses with ease.

## 📌 Installation

### Using npm:
```bash
npm install axios
```

1. GET Request
```js
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```
2. POST Request
```js
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
.then(response => console.log(response.data))
.catch(error => console.error(error));

```



# 📂 Dynamic Accordion in React

A **Dynamic Accordion** is a UI component that expands/collapses content sections on user interaction. It is useful for FAQs, collapsible menus, and content-heavy interfaces.

This README explains how to build a **Dynamic Accordion in React** using functional components, props, and state management.

---

## ⚙️ Features

- ✅ Dynamically render accordion items from an array
- ✅ Open/close behavior for each item
- ✅ One or multiple items expandable
- ✅ Simple and clean design
- ✅ Fully customizable

---