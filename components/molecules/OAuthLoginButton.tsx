"use client";

import { supabase } from "@/lib/supabase";
import BaseButton from "@/components/atoms/BaseButton";

export default function OAuthLoginButton() {
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Login Error:", error);
  };

  return <BaseButton onClick={handleLogin}>Googleでログイン</BaseButton>;
}
