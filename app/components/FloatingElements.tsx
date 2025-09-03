'use client';

import { useEffect, useState } from 'react';
import { Disc3, Music, Headphones, Radio } from 'lucide-react';

const icons = [Disc3, Music, Headphones, Radio];

interface FloatingIcon {
  id: string;
  Icon: typeof Disc3;
  x: number;
  y: number;
  delay: number;
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const newElements: FloatingIcon[] = [];
    for (let i = 0; i < 6; i++) {
      newElements.push({
        id: `element-${i}`,
        Icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      });
    }
    setElements(newElements);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {elements.map((element) => {
        const Icon = element.Icon;
        return (
          <div
            key={element.id}
            className="absolute opacity-10 floating-element"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <Icon className="h-8 w-8 text-primary" />
          </div>
        );
      })}
    </div>
  );
}
