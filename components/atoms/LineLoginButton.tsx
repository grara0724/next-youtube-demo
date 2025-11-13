"use client";

import Image from "next/image"; // Next.js の画像最適化コンポーネント

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LineLoginButton = ({ ...props }: BaseButtonProps) => {
  return (
    //ボタンの大枠
    <button
      {...props}
      className="group relative z-0 flex h-10 w-60 cursor-pointer justify-start overflow-hidden rounded-lg bg-[#06C755] select-none"
    >
      <div className="flex w-15 justify-end">
        <div className="flex w-full justify-center">
          {/* LINEアイコン */}
          <Image
            className="z-10"
            src="line-icon.svg"
            alt="LINEロゴ"
            width={25}
            height={25}
          ></Image>
        </div>
        {/* 縦線 */}
        <div className="z-10 flex h-full w-[1px] justify-center bg-black/8" />
      </div>

      {/* ボタンのテキスト*/}
      <div className="flex w-full items-center justify-center">
        <span className="z-10 text-white">LINEでログイン</span>
      </div>

      {/* ホバー時の透明レイヤー */}
      <span
        className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0 transition-opacity group-hover:opacity-10 active:opacity-30"
        data-overlay="true"
      />
    </button>
  );
};
