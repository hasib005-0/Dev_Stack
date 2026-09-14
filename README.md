# 🧱 Dev Stack Builder

Dev Stack Builder is a simple and responsive web application that helps developers explore different technologies and build their own development stack.

Users can browse technologies by category, check their difficulty and rating, and add their favorite technologies to a personal stack. The project is designed with a clean and modern interface and works smoothly on mobile, tablet, and desktop devices.

## 🚀 Live Website

https://dev-stack5.netlify.app/

## 📂 GitHub Repository

https://github.com/hasib005-0/Dev_Stack

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite
- React Icons

## ✨ Features

### 1. Explore Technologies
Browse different frontend, backend, database, language, styling, and DevOps technologies with their descriptions, ratings, difficulty levels, and badges.

### 2. Build Your Own Stack
Add technologies to your personal stack and easily see which technologies you have selected.

### 3. Responsive & Interactive UI
The website is fully responsive and includes interactive features such as toast notifications, duplicate prevention, remove options, and a mobile-friendly navigation menu.

## 📦 Technology Data

The technology information is stored in a separate JSON file. The application fetches the data dynamically instead of keeping the technology list directly inside the component.

## 🔔 Notifications

React-Toastify is used to show notifications when:

- A technology is added to the stack
- A duplicate technology is added
- A technology is removed
- All technologies are removed

## ⏳ Loading State

A loading spinner is displayed while the technology data is being fetched from the JSON file.

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and helps us describe what the UI should look like.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data that belongs to a component and can change over time.

In simple words, props come from outside the component, while state is managed inside the component.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows us to store and update data inside a React component.

In this project, I used `useState` to store the technology data, loading state, and the technologies selected in the user's stack.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run some code after a component renders.

I used it to fetch the technology data from the JSON file when the Card component loads. After the data is fetched, the technology cards are displayed on the page.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which item was changed, added, or removed and update the UI efficiently.

For example:

technologies.map((technology) => (
    <div key={technology.id}>
        {technology.name}
    </div>
))