"use client";
import Link from "next/link";
import InputField from "../InputField";
import { FormEvent, useState } from "react";
import Loader from "../Loader";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLButtonElement>) {
    console.log("login submit called");
    // event.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    setLoading(false);
    if (res.status == 201) router.replace("/home");
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div className="mx-auto flex w-1/2 items-center justify-center bg-white">
      <form className="bg-white">
        <h1 className="mb-1 text-2xl font-bold text-gray-800">Hello Again!</h1>
        <p className="mb-7 text-sm font-normal text-gray-600">Welcome Back</p>

        <InputField
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
        <InputField
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
        />
        {!loading ? (
          <button
            className="mb-2 mt-4 block w-full rounded-2xl bg-orange-400 py-2 font-semibold text-white"
            onClick={onSubmit}
          >
            Login
          </button>
        ) : (
          <div className="flex items-center justify-center mb-2">
            <Loader />
          </div>
        )}

        <Link href="/register">
          <span className="ml-2 cursor-pointer text-sm text-orange-400 hover:text-orange-500">
            Dont have an account?
          </span>
        </Link>
      </form>
    </div>
  );
}
