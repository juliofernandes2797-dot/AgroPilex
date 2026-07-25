import { useState } from "react";
import { supabase } from "../services/supabase";

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function entrar() {

    setErro("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha
    });

    if (error) {
      setErro("E-mail ou senha inválidos");
      return;
    }

    console.log("Usuário conectado:", data);

  }


  return (
    <div>

      <h1>AgroPilex ERP</h1>

      <input
        placeholder="E-mail"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e)=>setSenha(e.target.value)}
      />

      <button onClick={entrar}>
        Entrar
      </button>

      {erro && (
        <p>{erro}</p>
      )}

    </div>
  );
}