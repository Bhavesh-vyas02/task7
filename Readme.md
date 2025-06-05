# 👥 User Directory - Fetch & Display API Data

A modern, responsive web application that fetches user data from a public API and displays it in an elegant, interactive interface.

🔗 **Repository:** [https://github.com/Bhavesh-vyas02/task7.git](https://github.com/Bhavesh-vyas02/task7.git)

## 🎯 Overview

This project demonstrates the use of JavaScript's Fetch API to retrieve user data from JSONPlaceholder API and display it in a visually appealing, card-based layout with modern design principles and comprehensive error handling.

## ✨ Features

- **Modern UI Design**: Glassmorphism effects with gradient animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Real-time Data Fetching**: Retrieves user data from public API
- **Interactive User Cards**: Display name, email, phone, website, and address
- **Error Handling**: Comprehensive error management with retry functionality
- **Loading States**: Smooth animations and loading indicators
- **Auto-generated Avatars**: User initials as profile pictures

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with animations and responsive design
- **JavaScript (ES6+)** - Fetch API, async/await, DOM manipulation
- **Font Awesome** - Icon library
- **JSONPlaceholder API** - Public testing API

## 📁 Project Structure

```
task7/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhavesh-vyas02/task7.git
   cd task7
   ```

2. **Open the application**
   - Double-click `index.html` to open in browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

## 💻 Usage

- **Automatic Loading**: App fetches and displays user data on page load
- **Reload Data**: Click "Reload Data" button to refresh user list
- **Error Recovery**: Use "Try Again" button if errors occur
- **Interactive Links**: Click email, phone, or website for direct actions

## 🔌 API Reference

**Endpoint:** `GET https://jsonplaceholder.typicode.com/users`

Returns array of user objects with name, email, phone, website, address, and company information.

## 🔧 Error Handling

- **Network Errors**: Offline detection and connection failures
- **HTTP Errors**: Server-side error handling with specific messages
- **Data Validation**: Handles empty responses and invalid data formats
- **User-Friendly Messages**: Clear error descriptions with retry options

## 🌐 Browser Support

- Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- Requires: Fetch API, CSS Grid/Flexbox, ES6+ features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Bhavesh Vyas**
- GitHub: [@Bhavesh-vyas02](https://github.com/Bhavesh-vyas02)
- Repository: [task7](https://github.com/Bhavesh-vyas02/task7.git)

## 📄 License

This project is licensed under the MIT License.

---

⭐ **If you found this project helpful, please give it a star!** ⭐