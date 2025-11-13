"use client";

import { LineLoginButtonEx } from "@/components/atoms/LineLoginButtonEx";
import { LineLoginButton } from "@/components/atoms/LineLoginButton";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-2">
        <LineLoginButtonEx
          onClick={() => console.log("LINEログイン押された")}
        />
      </div>
      <div className="mt-2">
        <LineLoginButton onClick={() => console.log("LINEログイン押された")} />
      </div>
    </div>
  );
}
