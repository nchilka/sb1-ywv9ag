import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { Phone, ArrowRight } from 'lucide-react';

export default function VerifyPhone() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify-otp');
  };

  return (
    <AuthLayout title="Verify your phone number">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Phone className="w-8 h-8 text-primary" />
          </div>
        </div>

        <p className="text-center text-gray-600 mb-8">
          We'll send you a verification code to ensure the security of your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone number
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="block w-full rounded-lg border border-gray-300 pl-4 pr-10 py-3 focus:border-primary focus:ring-primary text-lg"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg px-4 py-3 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 text-lg font-medium"
          >
            Send verification code
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          By continuing, you agree to receive SMS messages and accept our Terms of Service and Privacy Policy
        </p>
      </div>
    </AuthLayout>
  );
}