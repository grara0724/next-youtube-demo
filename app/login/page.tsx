"use client";
import { supabase } from "@/lib/supabase"; //supabaseのインスタンスをインポート

export default function LoginPage() {
  const handleLogin = async () => {
    //Googleへのログイン処理
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Redirecting...", data);
    }
  };
  return (
    <div className="p-4">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Googleでログイン
      </button>
    </div>
  );
}
