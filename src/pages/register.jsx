import Input from "../component/inputLogin";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function Register() {
  const schema = yup.object({
    email: yup.string().required("harus diisi"),
    password: yup
      .string()
      .required("harus diisi")
      .matches(/[0-9]/, "harus angka")
      .min(8, "minimal 8 character dan harus angka")
      .max(20, "Maksimal 20 karakter")
      .matches(/[A-Z]/, "Harus ada huruf besar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-[#E2E7F1] h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white h-auto w-[40%] rounded-[30px] shadow-2xl p-[70px] flex flex-col justify-center items-center gap-5"
      >
        <h1 className="font-bold text-4xl">Welcome</h1>

        <div className="w-full flex flex-col items-center gap-2">
          <Input {...register("email")} type="email" placeholder="email..." />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="w-full flex flex-col items-center gap-2">
          <Input
            {...register("password")}
            type="password"
            placeholder="password..."
            min={8}
          />
          {errors.password && (
            <span className="text-red-600 font-bold text-xl">
              {errors.password.message}
            </span>
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
