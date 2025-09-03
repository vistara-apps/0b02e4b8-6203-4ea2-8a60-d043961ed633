'use client';

import { AppShell } from '@/app/components/AppShell';
import { DashboardStats } from '@/app/components/DashboardStats';
import { RoyaltyChart } from '@/app/components/RoyaltyChart';
import { RecentActivity } from '@/app/components/RecentActivity';
import { MarketplaceGrid } from '@/app/components/MarketplaceGrid';
import { FloatingElements } from '@/app/components/FloatingElements';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Progress } from '@/app/components/ui/progress';
import { TrendingUp, Users, Zap, Star } from 'lucide-react';

const topCreators = [
  { name: 'DJ Eclipse', earnings: '$1,247.32', avatar: 'https://via.placeholder.com/32' },
  { name: 'Beat Master', earnings: '$892.15', avatar: 'https://via.placeholder.com/32' },
  { name: 'Remix Queen', earnings: '$743.89', avatar: 'https://via.placeholder.com/32' },
];

const featuredContent = [
  {
    title: 'Midnight Pulse',
    creator: 'SynthWave',
    price: '0.045 ETH',
    royalty: '15%',
    image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Midnight+Pulse',
  },
  {
    title: 'Neon Dreams',
    creator: 'CyberArt',
    price: '0.032 ETH', 
    royalty: '12%',
    image: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=Neon+Dreams',
  },
];

export default function Dashboard() {
  return (
    <AppShell currentPage="Dashboard">
      <FloatingElements />
      
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Derobløchain Royalts</h1>
            <p className="text-muted-foreground mt-2">
              License to monetizing from PGKN × Zeitgeist and 
              licensing, your artisanal rewards are{' '}
              <span className="text-primary">19.5% Goodmove</span> and instead of{' '}
              <span className="text-primary">registered tax hybrid</span>.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button>
              <Zap className="mr-2 h-4 w-4" />
              $4.99M
            </Button>
            <Button variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <DashboardStats />

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Royalty Chart */}
            <RoyaltyChart />

            {/* Featured Marketplace Items */}
            <Card variant="elevated">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Marketplace</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {featuredContent.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-32 w-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-white">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm opacity-90">by {item.creator}</p>
                        <div className="mt-1 flex items-center space-x-2">
                          <Badge variant="secondary">{item.price}</Badge>
                          <Badge variant="outline">{item.royalty} royalty</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - 1/3 */}
          <div className="space-y-8">
            {/* Top Creators */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-500" />
                  Top Creators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCreators.map((creator, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{creator.name}</p>
                        <p className="text-sm text-muted-foreground">{creator.earnings}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Follow</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Progress Cards */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Artist-manager</span>
                    <span>$12,847</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AI-Famours</span>
                    <span>$6,243</span>
                  </div>
                  <Progress value={45} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Asia Kat Shanna Gloris</span>
                    <span>$3,891</span>
                  </div>
                  <Progress value={30} />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <RecentActivity />
          </div>
        </div>

        {/* Latest Remixes Section */}
        <Card variant="elevated">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Latest Remixes</CardTitle>
            <Button variant="outline" size="sm">Browse All</Button>
          </CardHeader>
          <CardContent>
            <MarketplaceGrid />
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
