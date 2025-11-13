"use client";

import { LineLoginButton } from "@/components/atoms/LineLoginButtonEx";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-2">
        <LineLoginButton onClick={() => console.log("LINEログイン押された")} />
      </div>
    </div>
  );
}
