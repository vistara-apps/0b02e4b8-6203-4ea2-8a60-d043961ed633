'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', royalties: 400, remixes: 240 },
  { name: 'Feb', royalties: 300, remixes: 139 },
  { name: 'Mar', royalties: 200, remixes: 980 },
  { name: 'Apr', royalties: 278, remixes: 390 },
  { name: 'May', royalties: 189, remixes: 480 },
  { name: 'Jun', royalties: 239, remixes: 380 },
];

export function RoyaltyChart() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Royalty Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="royalties" fill="hsl(var(--primary))" />
            <Bar dataKey="remixes" fill="hsl(var(--accent))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
