"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success";

const inputClass =
  "w-full px-4 py-3.5 rounded-md border-2 border-blue-100 text-sm focus:outline-none focus:border-blue-400 transition bg-white placeholder:text-gray-300";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", category: "", message: "" });

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
      <div className="bg-blue-50 border-2 border-blue-200 rounded-md p-8 text-center">
        <div className="text-5xl mb-3">🎉</div>
        <h3 className="text-lg font-black text-blue-800 mb-2">送信完了！</h3>
        <p className="text-blue-600 text-sm leading-relaxed">
          お問い合わせありがとうございます。<br />
          3営業日以内にご返信しますね！
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-5 text-sm font-bold text-blue-500 underline hover:no-underline"
        >
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5">
          お名前 <span className="text-red-400">*</span>
        </label>
        <input
          id="name" name="name" type="text" required
          value={form.name} onChange={handleChange}
          placeholder="山田 太郎"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          id="email" name="email" type="email" required
          value={form.email} onChange={handleChange}
          placeholder="taro@university.ac.jp"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-1.5">
          お問い合わせの種類
        </label>
        <select
          id="category" name="category"
          value={form.category} onChange={handleChange}
          className={inputClass}
        >
          <option value="">選択してください</option>
          <option value="article">📝 記事内容について</option>
          <option value="request">✏️ 記事リクエスト</option>
          <option value="error">🔍 誤字・誤情報の報告</option>
          <option value="other">💬 その他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">
          メッセージ <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          value={form.message} onChange={handleChange}
          placeholder="お気軽に書いてください！"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-black py-4 px-6 rounded-md transition-colors text-sm shadow-sm"
      >
        {state === "loading" ? "送信中... ⏳" : "✉️ 送信する"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        送信した情報はプライバシーポリシーに基づいて管理されます
      </p>
    </form>
  );
}
