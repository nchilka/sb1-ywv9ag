import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  description: string;
  price: string | 'Free' | 'Custom';
  features: string[];
  buttonText: string;
  highlight?: boolean;
}

const formatNumber = (value: number): string => {
  if (value >= 1000) {
    return `${value/1000}K`;
  }
  return value.toString();
};

export default function Subscription() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(5000);
  const [conversations, setConversations] = useState(5000);

  const plans: Plan[] = [
    {
      name: 'Free trial',
      description: 'Experiment with chat',
      price: 'Free',
      features: [
        'All pro features',
        'No credit card required',
        'Community support'
      ],
      buttonText: 'Start free trial'
    },
    {
      name: 'Starter 5K',
      description: 'Get started with chat',
      price: '$399',
      features: [
        'Messaging essentials',
        'Basic moderation',
        'Ticketed support'
      ],
      buttonText: 'Start free trial',
      highlight: true
    },
    {
      name: 'Pro 5K',
      description: 'Grow your business',
      price: '$599',
      features: [
        'All Starter features',
        'Translation',
        'Image moderation',
        'Supergroup channel'
      ],
      buttonText: 'Start free trial'
    },
    {
      name: 'Enterprise',
      description: 'Full powered platform',
      price: 'Custom',
      features: [
        'All Pro features',
        'Data export',
        'Dedicated servers',
        'Priority support',
        'Advanced moderation'
      ],
      buttonText: 'Talk to sales'
    }
  ];

  const handlePlanSelect = (plan: Plan) => {
    navigate('/dashboard');
  };

  return (
    <AuthLayout title="Choose your plan">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Campaign Messages: {formatNumber(messages)}
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={messages}
              onChange={(e) => setMessages(Number(e.target.value))}
              className="w-full transition-all duration-300 hover:scale-[1.01]"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>1K</span>
              <span>5K</span>
              <span>10K</span>
              <span>25K</span>
              <span>50K</span>
              <span>100K+</span>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Conversations: {formatNumber(conversations)}
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={conversations}
              onChange={(e) => setConversations(Number(e.target.value))}
              className="w-full transition-all duration-300 hover:scale-[1.01]"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>1K</span>
              <span>5K</span>
              <span>10K</span>
              <span>25K</span>
              <span>50K</span>
              <span>100K+</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-primary/10 
                p-6 space-y-4 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 
                transition-all duration-500 ease-out hover:bg-white/95 animate-scaleIn"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="flex items-baseline">
                {plan.price === 'Custom' ? (
                  <span className="text-lg font-semibold text-primary">Custom pricing with millions of MAU</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== 'Free' && (
                      <span className="text-sm text-gray-500 ml-1">/month</span>
                    )}
                  </>
                )}
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan)}
                className={`w-full py-2 px-4 rounded-lg transition-all duration-300 
                  ${plan.highlight 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
              >
                {plan.buttonText}
              </button>

              {plan.highlight && (
                <div className="text-xs text-center text-primary mt-2">
                  Recommended for your usage
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}