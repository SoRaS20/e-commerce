import "./App.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/Context";
import UpdateProduct from "./components/UpdateProduct";
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
      dark: "#1d4ed8",
      light: "#3b82f6",
    },
    secondary: {
      main: "#f59e0b",
      dark: "#d97706",
      light: "#fbbf24",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
          "&:hover": {
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
          },
        },
      },
    },
  },
});


function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
          <BrowserRouter>
            <Navbar onSelectCategory={handleCategorySelect} />
            <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home addToCart={addToCart} selectedCategory={selectedCategory} />
                  }
                />
                <Route path="/add_product" element={<AddProduct />} />
                <Route path="/product" element={<Product />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/update/:id" element={<UpdateProduct />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
