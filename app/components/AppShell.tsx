'use client';

import { useState } from 'react';
import { 
  Home, 
  Store, 
  Upload, 
  BarChart3, 
  Menu, 
  Search,
  Bell,
  User,
  Settings
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { UserAvatar } from '@/app/components/UserAvatar';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { cn } from '@/lib/utils';

interface AppShellProps {
  children: React.ReactNode;
  currentPage?: string;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Marketplace', href: '/marketplace', icon: Store },
  { name: 'Upload', href: '/upload', icon: Upload },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
];

export function AppShell({ children, currentPage = 'Dashboard' }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 transform bg-card/50 backdrop-blur-xl transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 shrink-0 items-center px-6">
            <h1 className="text-xl font-bold text-primary">RemixSplit</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <Icon className="mr-3 h-5 w-5 shrink-0" />
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4">
            <div className="flex items-center space-x-3 rounded-lg bg-accent/10 p-3">
              <UserAvatar 
                src="https://via.placeholder.com/32" 
                name="DerobOnchain" 
                size="sm" 
              />
              <div className="flex-1 truncate">
                <p className="text-sm font-medium">DerobOnchain</p>
                <p className="text-xs text-muted-foreground">0x1234...5678</p>
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-0">
        {/* Top bar */}
        <header className="flex h-16 shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex w-full items-center px-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Search */}
            <div className="flex flex-1 items-center justify-center px-6 lg:justify-start">
              <div className="relative max-w-lg">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search content, creators..."
                  className="w-full pl-10 lg:w-[400px]"
                />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <ConnectWallet />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
