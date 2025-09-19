import { createContext, useContext, useState, useEffect } from "react";
import { loginUsuario } from "../services/usuarioServico";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar usuário salvo no localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Função de login
  const login = async (email, senha) => {
    try {
      const usuario = await loginUsuario({ email, senha });

      // Salva no localStorage
      localStorage.setItem("usuario", JSON.stringify(usuario));

      setUser(usuario);
      return usuario;
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem("usuario");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
