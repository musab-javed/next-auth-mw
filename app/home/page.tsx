"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  async function onSubmit() {
    console.log("logout submit called");
    // event.preventDefault();
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (res.status == 200) router.replace("/login");
  }
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-tr from-[#F86CA7] to-[#F4D444] text-white">
      <h1 className="text-4xl ">HomePage visited</h1>
      <button
        className="mb-2 mt-4 block  p-8 rounded-2xl bg-orange-500 py-2 font-semibold text-white "
        onClick={() => onSubmit()}
      >
        Logout
      </button>
    </div>
  );
}
