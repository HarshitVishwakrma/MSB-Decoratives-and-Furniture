import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ImageCardGrid = () => {
  // Sample card data
  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" }
  ];

  return (
    <div className=" flex items-center">
      <div className="w-full flex justify-center gap-6 p-6 overflow-x-auto">
        {cards.map(card => (
          <Card key={card.id} className="flex-shrink-0 w-64">
            <CardContent className="p-4">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4">
                <img
                  src={`/api/placeholder/256/160`}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;