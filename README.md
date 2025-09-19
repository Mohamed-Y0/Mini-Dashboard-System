# Mini Dashboard System

## About Me:

My Name Is Mohamed Ahmed From Egypt, Giza - Management Information Systems Student - I'm Front-end Developer With React.js with 0 experience.

Technical Skills: HTML5, CSS3, JavaScript (ES6+), Tailwind, React.js, Redux, React Router, Zustand.

Version Control & Tools: Git, GitHub, Chrome DevTools, VSCode

---

## ✨ Features

- **C**reate new user in form with react-hook-form in modal.
- **R**ead all users in a paginated table.
- **U**pdate existing user details in a modal.
- **D**elete user from the list.
- Search users by name, email, Role.
- Loading spinner and error handling.

---

## 🌐 API Endpoints Used

Data is fetched from [DummyJSON](https://dummyjson.com/):

- `GET https://dummyjson.com/users` → fetch all users (there a limit by default and it's 30 user)
- `POST https://dummyjson.com/users` → add new user.
- `PUT https://dummyjson.com/users/{id}` → update user.
- `delete https://dummyjson.com/users/{id}` → update user.

---

## 🗂️ Project Structure

```
src/
│── components/
│   ├── layout/         # main layout
│   │   ├── AppLayout.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── users/          # for users page
│   │   ├── Table.jsx
│   │   ├── DisplayUsers.jsx
│   │   ├── EditForm.jsx
│   │   ├── NewUserForm.jsx
│   │   └── ProfileForm.jsx
│   │
│   └── common/
│       ├── Modal.jsx
│
│── context/               # context api
│   ├── Data.jsx
│
│── pages/                 # main pages
│   ├── UsersPage.jsx
│   └── NotFound.jsx
│
│── ui/                    # ui reusable components
│   ├── Button.jsx
│   ├── ButtonLink.jsx
│   ├── Input.jsx
│   ├── Spinner.jsx
│   └── Error.jsx
│   └── Search.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🛠️ Tech Stack

- **React 18** of course.
- **Context API** for state management.
- **TailwindCSS** for styling.
- **React Hook Form** for better form handling.
- **React Router**
- **React Icons** for UI icons

---

## 🚀 Setup Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/username/users-management-app.git
    cd users-management-app
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open in browser:

        http://localhost:5173
