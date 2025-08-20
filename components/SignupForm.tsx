// components/SignupForm.tsx
'use client'

import type { FormEvent } from 'react';

export default function SignupForm(): JSX.Element {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    alert("تم إرسال طلبك بنجاح!");
  };

  // --- Reusable style for input fields ---
  const inputStyles = "w-full px-5 py-3 h-12 bg-gray-100 border border-gray-200 rounded-full text-almost_black placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-right" dir="rtl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
          الاسم الكامل *
        </label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required
          placeholder="ادخل اسمك هنا"
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
          البريد الإلكتروني *
        </label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          placeholder="example@email.com"
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
          رقم الهاتف (اختياري)
        </label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          placeholder="05xxxxxxxxx"
          className={inputStyles}
        />
      </div>
      <div className="pt-4">
        <button 
          type="submit"
          className="w-full bg-almost_black text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]"
        >
          إرسال الطلب
        </button>
      </div>
    </form>
  )
}