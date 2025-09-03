'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { UserAvatar } from '@/app/components/UserAvatar';
import { ContentMedia } from '@/app/components/ContentMedia';
import { Play, Heart, Share, Download } from 'lucide-react';

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  creator: {
    name: string;
    avatar: string;
  };
  price: string;
  type: 'image' | 'video' | 'audio';
  mediaUrl: string;
  likes: number;
  category: string;
}

const marketplaceItems: MarketplaceItem[] = [
  {
    id: '1',
    title: 'Beat Drop 2024',
    description: 'High-energy electronic beat perfect for remixing',
    creator: { name: 'DJ Alex', avatar: 'https://via.placeholder.com/32' },
    price: '0.05 ETH',
    type: 'audio',
    mediaUrl: 'https://example.com/beat.mp3',
    likes: 142,
    category: 'Electronic',
  },
  {
    id: '2',
    title: 'Neon Cityscape',
    description: 'Futuristic city artwork for visual remixes',
    creator: { name: 'Sarah Art', avatar: 'https://via.placeholder.com/32' },
    price: '0.03 ETH',
    type: 'image',
    mediaUrl: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Neon+City',
    likes: 89,
    category: 'Digital Art',
  },
  {
    id: '3',
    title: 'Summer Groove',
    description: 'Chill hip-hop instrumental with licensing rights',
    creator: { name: 'Mike Beats', avatar: 'https://via.placeholder.com/32' },
    price: '0.02 ETH',
    type: 'audio',
    mediaUrl: 'https://example.com/groove.mp3',
    likes: 203,
    category: 'Hip-Hop',
  },
  {
    id: '4',
    title: 'Abstract Motion',
    description: 'Dynamic video loops for creative projects',
    creator: { name: 'Emma Visual', avatar: 'https://via.placeholder.com/32' },
    price: '0.08 ETH',
    type: 'video',
    mediaUrl: 'https://example.com/motion.mp4',
    likes: 67,
    category: 'Motion Graphics',
  },
];

export function MarketplaceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {marketplaceItems.map((item) => (
        <Card key={item.id} variant="elevated" className="group overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative aspect-square">
              <ContentMedia
                type={item.type}
                src={item.mediaUrl}
                title={item.title}
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button size="icon" variant="outline" className="bg-white/20 backdrop-blur-sm">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
              <Badge className="absolute top-2 right-2">{item.category}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <UserAvatar
                  src={item.creator.avatar}
                  name={item.creator.name}
                  size="sm"
                />
                <span className="text-sm font-medium">{item.creator.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">{item.price}</span>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>{item.likes}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1" size="sm">
                  License
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
