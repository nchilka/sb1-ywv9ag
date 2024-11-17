import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { ArrowRight } from 'lucide-react';

interface CompanyAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface EntityFormData {
  company_name: string;
  address: CompanyAddress;
  tax_number: string;
}

export default function EntityRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<EntityFormData>({
    company_name: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    tax_number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof EntityFormData],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    navigate('/subscription');
  };

  const handleSkip = () => {
    navigate('/subscription');
  };

  return (
    <AuthLayout title="Complete your business profile">
      <div className="relative">
        <p className="text-sm text-gray-500 mb-6">Fill in your business details or continue as an individual</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              id="company_name"
              name="company_name"
              type="text"
              required
              value={formData.company_name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Company Address</h3>
            
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                id="street"
                name="address.street"
                type="text"
                required
                value={formData.address.street}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  id="city"
                  name="address.city"
                  type="text"
                  required
                  value={formData.address.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  id="state"
                  name="address.state"
                  type="text"
                  required
                  value={formData.address.state}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  id="zip"
                  name="address.zip"
                  type="text"
                  required
                  value={formData.address.zip}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  id="country"
                  name="address.country"
                  type="text"
                  required
                  value={formData.address.country}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="tax_number" className="block text-sm font-medium text-gray-700">
              Tax Number
            </label>
            <input
              id="tax_number"
              name="tax_number"
              type="text"
              required
              value={formData.tax_number}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              type="submit"
              className="w-full sm:w-2/3 bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-dark transition-colors"
            >
              Complete Registration
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="w-full sm:w-1/3 flex items-center justify-center gap-2 text-primary hover:text-primary-dark transition-colors border border-primary hover:border-primary-dark rounded-lg px-4 py-2"
            >
              Skip for now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}