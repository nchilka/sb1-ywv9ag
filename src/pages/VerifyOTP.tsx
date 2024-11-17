import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { Shield, ArrowRight } from 'lucide-react';

export default function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/entity-registration');
  };

  return (
    <AuthLayout title="Enter verification code">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse-primary">
            <Shield className="w-8 h-8 text-primary" />
          </div>
        </div>

        <p className="text-center text-gray-600 mb-8">
          We've sent a verification code to your phone number
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-2xl font-bold rounded-lg border border-gray-300 
                  focus:border-primary focus:ring-primary transition-all duration-300
                  hover:shadow-md focus:shadow-lg focus:scale-105 dark:bg-gray-800 dark:border-gray-700
                  dark:text-white dark:focus:border-primary-light"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg px-4 py-3 hover:bg-primary-dark 
              transition-colors flex items-center justify-center gap-2 text-lg font-medium
              hover:shadow-lg active:scale-98 transform"
          >
            Verify code
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Didn't receive the code?{' '}
            <button className="text-primary hover:text-primary-dark font-medium">
              Resend code
            </button>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}