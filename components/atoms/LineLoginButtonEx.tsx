"use client"; // クライアントコーポ―ネントとして扱う。つまりブラウザ上でレンダリングされる。

import clsx from "clsx"; // className を条件付きで結合するためのユーティリティ
import Image from "next/image"; // Next.js の画像最適化コンポーネント

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
//React.BuuttonHTMLAttributes<HTMLButtonElement>は、HTMLのbutton要素に適用できるすべての属性を含む型を定義している。これにより、カスタムボタンコンポーネントが標準的なbutton属性（例：onClick、disabled、typeなど）を受け入れることができるようになる。

// componentsは export default ではなく export const を使うことで、名前付きエクスポートを行っている。
export const LineLoginButtonEx = ({ disabled, ...props }: BaseButtonProps) => {
  //children はコンポーネントの開始タグと終了タグの間に挟まれた内容を表す特別なプロパティ。ここではデフォルト値として "LINEでログイン" が設定されている。
  // disabled はボタンが無効化されているかどうかを示すブール値。
  //  ...props は残りのすべてのプロパティをまとめて受け取るための構文。これにより、他の任意の button 属性をコンポーネントに渡すことができる。
  return (
    <button
      disabled={disabled}
      className={clsx(
        "relative flex items-center justify-center px-4 py-2 rounded-lg font-medium overflow-hidden select-none gap-2 w-80 cursor-pointer",
        disabled
          ? "bg-white text-[#1E1E1E]/20 border border-[#E5E5E5]/60"
          : "bg-[#06C755] text-white"
      )}
      //relative: 親要素に対して相対位置を指定するためのクラス
      //select-none: ユーザーがテキストを選択できないようにするクラス
      //overflow-hidden: 子要素が親要素の範囲を超えた場合に表示されないようにするクラス
      //transition-all: すべてのプロパティの変化にアニメーションを適用するクラス
      {...props}
    >
      {/* 背景レイヤー（hover/active用の透明黒） */}
      {/* &&は論理AND演算子で、左側の条件が真のときのみ右側を評価する */}
      {!disabled && (
        <span
          className="absolute inset-0 bg-black opacity-0 transition-opacity z-20 pointer-events-none"
          data-overlay="true"
          aria-hidden="true"
        />
        //absolute: 親要素に対して絶対位置を指定するためのクラス
        //inset-0: 親要素全てに広がる
        //opacity-0: 完全に透明にするクラス
        //transition-opacity: 不透明度の変化にアニメーションを適用するクラス
        //z-20: z-indexを20に設定するクラス
        //pointer-events-none: この要素がマウスイベントを受け取らないようにするクラス
        //data-overlay="true": カスタムデータ属性で、JavaScriptやCSSで特定の要素を識別するために使用される
        //aria-hidden="true": スクリーンリーダーなどの支援技術にこの要素を無視させるための属性
      )}

      {/* 縦線 */}
      <span
        className={clsx(
          "absolute left-12 top-1/2 -translate-y-1/2 h-[100%] w-px",
          disabled ? "bg-[#E5E5E5]/60" : "bg-black/8",
          "z-0"
        )}
        aria-hidden="true"
      />

      {/* アイコン（文字と同じ z-index） */}
      <Image
        src="/line-icon.svg"
        alt="LINE ロゴ"
        width={25}
        height={25}
        className="absolute z-10 left-3"
      />

      {/* 文字 */}
      <span className="z-10">LINEでログイン</span>

      {/* hover/active の透明レイヤー制御 */}
      <style jsx>{`
        /* overlay のみを対象にする（縦線などは影響を受けない） */
        button:hover span[data-overlay="true"] {
          opacity: 0.1;
        }
        button:active span[data-overlay="true"] {
          opacity: 0.3;
        }
      `}</style>
    </button>
  );
};
