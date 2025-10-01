import Input from "../component/inputLogin";
import { useState } from "react";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!email.endsWith("@gmail.com")) {
      emailError = "Email harus menggunakan @gmail.com";
    }

    if (password.length < 8) {
      passwordError = "Password minimal 8 huruf";
    }

    setError({ email: emailError, password: passwordError });

    return emailError === "" && passwordError === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Register berhasil");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="bg-[#E2E7F1] h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white h-auto w-[40%] rounded-[30px] shadow-2xl p-[70px] flex flex-col justify-center items-center gap-5"
      >
        <h1 className="font-bold text-4xl">Welcome</h1>

        <div className="w-full flex flex-col items-center gap-2">
          <Input
            type="email"
            placeholder="email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>

        <div className="w-full flex flex-col items-center gap-2">
          <Input
            type="password"
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="border rounded-[10px] py-3 text-white bg-blue-600 font-bold w-[200px] disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Register
        </button>
      </form>
    </div>
  );
}
