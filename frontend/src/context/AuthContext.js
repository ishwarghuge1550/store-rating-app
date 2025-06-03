import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      setUser(response.data.user);
      localStorage.setItem("token", response.data.access_token);
      return response.data.user; // Return user data instead of navigating
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

const signup = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3001/auth/signup', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw new Error(error.response?.data?.message || 'Signup failed. Please try again.');
  }
};
}

export function useAuth() {
  return useContext(AuthContext);
}
