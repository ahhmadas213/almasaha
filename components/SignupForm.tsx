// components/SignupForm.tsx
'use client'

import type { FormEvent } from 'react';

export default function SignupForm(): JSX.Element {
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    alert("تم إرسال طلبك بنجاح!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-right" dir="rtl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف (اختياري)</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="pt-4">
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          إرسال الطلب
        </button>
      </div>
    </form>
  )
}