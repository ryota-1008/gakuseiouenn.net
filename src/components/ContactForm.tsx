"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success";

const inputClass =
  "w-full px-4 py-3 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition-colors bg-white placeholder:text-neutral-300";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
    setForm({ name: "", email: "", category: "", message: "" });
  };

  if (state === "success") {
    return (
      <div className="border border-neutral-200 p-8 text-center">
        <p className="text-lg font-bold text-neutral-900 mb-2">
          送信しました
        </p>
        <p className="text-sm text-neutral-500 leading-relaxed">
          お問い合わせありがとうございます。
          <br />
          内容を確認し、必要に応じて返信します。
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors underline"
        >
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
          お名前 <span className="text-neutral-300">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="山田 太郎"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          メールアドレス <span className="text-neutral-300">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="taro@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1.5">
          お問い合わせの種類
        </label>
        <select id="category" name="category" value={form.category} onChange={handleChange} className={inputClass}>
          <option value="">選択してください</option>
          <option value="article">記事内容について</option>
          <option value="request">記事リクエスト</option>
          <option value="error">誤字・誤情報の報告</option>
          <option value="collaboration">掲載・コラボ相談</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          メッセージ <span className="text-neutral-300">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="お問い合わせ内容をご記入ください"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-neutral-900 hover:bg-neutral-700 disabled:bg-neutral-300 text-white font-semibold py-3 px-6 transition-colors text-sm"
      >
        {state === "loading" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
