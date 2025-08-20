# E-Commerce Application

A full-stack e-commerce application built with Spring Boot backend and React frontend, featuring product management, shopping cart functionality, and a modern responsive UI.

## 🚀 Features

- **Product Management**: Add, view, update, and delete products
- **Shopping Cart**: Add products to cart, update quantities, and remove items
- **Checkout System**: Complete purchase flow with order summary
- **Responsive Design**: Modern UI that works on all devices
- **Image Upload**: Support for product image uploads
- **Search & Filter**: Browse products efficiently
- **Admin Panel**: Administrative functions for product management

## 🛠️ Tech Stack

### Backend
- **Java 17+**
- **Spring Boot 3.x**
- **Spring Data JPA**
- **H2 Database** (Development)
- **Maven** (Build tool)
- **RESTful API**

### Frontend
- **React 18**
- **Vite** (Build tool)
- **Axios** (HTTP client)
- **React Context API** (State management)
- **CSS3** (Styling)
- **React Router** (Navigation)

## 📁 Project Structure

```
e-commerce/
├── backend/                 # Spring Boot application
│   ├── src/main/java/
│   │   └── com/sohan/ecom_proj/
│   │       ├── EcomProjApplication.java
│   │       ├── controller/
│   │       │   └── ProductController.java
│   │       ├── model/
│   │       │   └── Product.java
│   │       ├── repo/
│   │       │   └── ProductRep.java
│   │       └── service/
│   │           └── ProductService.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data1.sql
│   └── pom.xml
│
└── frontend/                # React application
    ├── src/
    │   ├── components/
    │   │   ├── AddProduct.jsx
    │   │   ├── Cart.jsx
    │   │   ├── CheckoutPopup.jsx
    │   │   ├── Home.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Product.jsx
    │   │   └── UpdateProduct.jsx
    │   ├── Context/
    │   │   └── Context.jsx
    │   ├── assets/
    │   ├── App.jsx
    │   ├── axios.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🚦 Getting Started

### Prerequisites
- **Java 17 or higher**
- **Node.js 16 or higher**
- **npm or yarn**
- **Maven 3.6+**

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies and run the application:
```bash
./mvnw clean install
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📚 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/product/{id}` - Get product by ID
- `POST /api/product` - Create new product
- `PUT /api/product/{id}` - Update product
- `DELETE /api/product/{id}` - Delete product
- `GET /api/products/search` - Search products by keyword

## 🗄️ Database

The application uses H2 in-memory database for development. The database is automatically initialized with sample data from `data1.sql`.

### Database Configuration
```properties
# application.properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
spring.jpa.show-sql=true
```

Access H2 Console: `http://localhost:8080/h2-console`

## 🎨 Frontend Features

### Components Overview
- **Home**: Product listing and search functionality
- **Product**: Individual product details and actions
- **Cart**: Shopping cart management
- **AddProduct**: Form to add new products (Admin)
- **UpdateProduct**: Form to edit existing products (Admin)
- **CheckoutPopup**: Order completion interface
- **Navbar**: Navigation and cart summary

### State Management
Uses React Context API for global state management:
- Cart items
- Product data
- User preferences

## 🔧 Configuration

### Backend Configuration
```properties
# Server port
server.port=8080

# Database
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.hibernate.ddl-auto=update

# File upload
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB
```

### Frontend Configuration
```javascript
// axios.jsx - API base URL
const BASE_URL = 'http://localhost:8080'
```

## 🚀 Deployment

### Backend Deployment
```bash
# Build JAR file
./mvnw clean package

# Run JAR file
java -jar target/ecom-proj-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

### Backend
- `./mvnw spring-boot:run` - Start development server
- `./mvnw test` - Run tests
- `./mvnw clean package` - Build JAR file

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👤 Author

**Sohan**

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the powerful frontend library
- Vite for fast development experience
- All open source contributors

---

⭐ If you found this project helpful, please give it a star!