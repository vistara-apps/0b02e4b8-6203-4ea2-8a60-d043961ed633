'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { UserAvatar } from '@/app/components/UserAvatar';
import { Badge } from '@/app/components/ui/badge';

interface ActivityItem {
  id: string;
  type: 'license' | 'remix' | 'royalty';
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  amount?: string;
  time: string;
}

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'license',
    user: { name: 'Alex Chen', avatar: 'https://via.placeholder.com/32' },
    content: 'Licensed "Beat Drop 2024"',
    amount: '$45.00',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'remix',
    user: { name: 'Sarah Wilson', avatar: 'https://via.placeholder.com/32' },
    content: 'Created remix of "Midnight Vibes"',
    time: '4 hours ago',
  },
  {
    id: '3',
    type: 'royalty',
    user: { name: 'Mike Johnson', avatar: 'https://via.placeholder.com/32' },
    content: 'Royalty payment received',
    amount: '$12.50',
    time: '1 day ago',
  },
  {
    id: '4',
    type: 'license',
    user: { name: 'Emma Davis', avatar: 'https://via.placeholder.com/32' },
    content: 'Licensed "Summer Groove"',
    amount: '$30.00',
    time: '2 days ago',
  },
];

export function RecentActivity() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4">
            <UserAvatar
              src={activity.user.avatar}
              name={activity.user.name}
              size="sm"
            />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {activity.user.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {activity.content}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {activity.amount && (
                <Badge variant="secondary">{activity.amount}</Badge>
              )}
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
