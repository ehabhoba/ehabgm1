import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const schema = yup.object().shape({
  name: yup.string().required('الاسم مطلوب'),
  email: yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
  message: yup.string().min(10, 'الرسالة يجب أن تكون 10 أحرف على الأقل').required('الرسالة مطلوبة'),
});

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // هنا يمكنك ربط النموذج مع خدمة خارجية أو بريدك الإلكتروني
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2 text-blue-800">تواصل معنا</h2>
      {success && <div className="bg-green-100 text-green-700 rounded p-2 text-center">تم إرسال رسالتك بنجاح! سنرد عليك قريبًا.</div>}
      <div>
        <label className="block mb-1 font-bold">الاسم</label>
        <input type="text" {...register('name')} className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
      </div>
      <div>
        <label className="block mb-1 font-bold">البريد الإلكتروني</label>
        <input type="email" {...register('email')} className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
      </div>
      <div>
        <label className="block mb-1 font-bold">الرسالة</label>
        <textarea {...register('message')} rows={4} className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        {errors.message && <span className="text-red-600 text-sm">{errors.message.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary mt-2 disabled:opacity-60">
        {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
      </button>
    </form>
  );
} 