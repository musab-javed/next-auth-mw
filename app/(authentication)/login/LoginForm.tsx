"use client"
import Link from "next/link";
import InputField from "../InputField";
export default function LoginForm() {
  return (
    <div className="mx-auto flex w-1/2 items-center justify-center bg-white">
      <form className="bg-white">
        <h1 className="mb-1 text-2xl font-bold text-gray-800">Hello Again!</h1>
        <p className="mb-7 text-sm font-normal text-gray-600">Welcome Back</p>

        <InputField type="email" placeholder="Email Address" name="email" />
        <InputField type="password" placeholder="Password" name="password" />

        <button
          type="submit"
          className="mb-2 mt-4 block w-full rounded-2xl bg-orange-400 py-2 font-semibold text-white"
        >
          Login
        </button>
        <Link href="/register">
          <span className="ml-2 cursor-pointer text-sm text-orange-400 hover:text-orange-500">
            Dont have an account?
          </span>
        </Link>
      </form>
    </div>
  );
}
