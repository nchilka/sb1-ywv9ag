import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { 
  BarChart3, Users, MessageSquare, Zap, Database,
  Bell, Workflow, Plugin, Function as FunctionIcon,
  HardDrive, ArrowUpRight
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';

// Mock data for messages and conversations trends
const messageData = [
  { date: '2024-03-01', value: 1200 },
  { date: '2024-03-02', value: 1800 },
  { date: '2024-03-03', value: 2400 },
  { date: '2024-03-04', value: 2100 },
  { date: '2024-03-05', value: 2800 },
  { date: '2024-03-06', value: 3200 },
  { date: '2024-03-07', value: 2900 },
];

const conversationData = [
  { date: '2024-03-01', value: 800 },
  { date: '2024-03-02', value: 1200 },
  { date: '2024-03-03', value: 1600 },
  { date: '2024-03-04', value: 1400 },
  { date: '2024-03-05', value: 1900 },
  { date: '2024-03-06', value: 2200 },
  { date: '2024-03-07', value: 2000 },
];

// ... (keep other mock data as is)

const ProgressBar = ({ used, max, label }: { used: number; max: number; label: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-gray-600 dark:text-gray-300">{label}</span>
      <span className="text-gray-700 dark:text-gray-200 font-medium">
        {used.toLocaleString()} / {max.toLocaleString()}
      </span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-primary-darker/30 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary dark:bg-primary-light rounded-full transition-all duration-1000"
        style={{ width: `${Math.min((used / max) * 100, 100)}%` }}
      />
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6 animate-fadeIn">
        {/* Subscription Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gradient-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Subscription Details
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Plan</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">Pro 5K</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">End Date</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">Mar 31, 2024</p>
                  </div>
                </div>
                <ProgressBar used={3750} max={5000} label="Messages Used" />
                <ProgressBar used={2100} max={5000} label="Conversations Used" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="bg-white dark:bg-gradient-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                Usage Details
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                <ProgressBar used={3750} max={5000} label="Messages" />
                <ProgressBar used={2100} max={5000} label="Conversations" />
                <ProgressBar used={15} max={50} label="Functions" />
                <ProgressBar used={8} max={20} label="Plugins" />
                <ProgressBar used={12} max={30} label="Workflows" />
                <ProgressBar used={5} max={10} label="Database Tables" />
              </div>
            </div>
          </div>
        </div>

        {/* Message and Conversation Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gradient-card rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Total Messages
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={messageData}>
                  <defs>
                    <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A3926E" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#A3926E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#A3926E20" />
                  <XAxis dataKey="date" stroke="#A3926E80" tick={{ fill: '#A3926E' }} />
                  <YAxis stroke="#A3926E80" tick={{ fill: '#A3926E' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(42, 35, 24, 0.95)',
                      border: '1px solid rgba(163, 146, 110, 0.4)',
                      borderRadius: '8px',
                      color: '#C3B9A6'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#A3926E" 
                    fillOpacity={1}
                    fill="url(#colorMessages)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gradient-card rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Total Conversations
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={conversationData}>
                  <defs>
                    <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C3B9A6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#C3B9A6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#A3926E20" />
                  <XAxis dataKey="date" stroke="#A3926E80" tick={{ fill: '#A3926E' }} />
                  <YAxis stroke="#A3926E80" tick={{ fill: '#A3926E' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(42, 35, 24, 0.95)',
                      border: '1px solid rgba(163, 146, 110, 0.4)',
                      borderRadius: '8px',
                      color: '#C3B9A6'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#C3B9A6" 
                    fillOpacity={1}
                    fill="url(#colorConversations)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Keep the rest of the components (Peak Connections, Active Workflows, Notifications) as is */}
        {/* ... */}
      </div>
    </DashboardLayout>
  );
}