'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Progress } from '@/app/components/ui/progress';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Earnings',
    value: '$2,847.65',
    change: '+12.5%',
    icon: DollarSign,
    color: 'text-green-500',
  },
  {
    title: 'Active Licenses',
    value: '127',
    change: '+8.2%',
    icon: BarChart3,
    color: 'text-blue-500',
  },
  {
    title: 'Remix Views',
    value: '45.2K',
    change: '+23.1%',
    icon: TrendingUp,
    color: 'text-purple-500',
  },
  {
    title: 'Collaborators',
    value: '18',
    change: '+4',
    icon: Users,
    color: 'text-orange-500',
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.color}`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
