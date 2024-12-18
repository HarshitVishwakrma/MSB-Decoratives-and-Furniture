import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'

const ImageCardGrid = () => {
  // Sample card data
  const cards = [
    { id: 1, title: "Card 1", image: card1 },
    { id: 2, title: "Card 2", image: card2 },
    { id: 3, title: "Card 3", image: card3 },
    { id: 4, title: "Card 4", image: card1 }
  ];

  return (
    <div className="p-4 grid md:flex md:items-center">
      <div className="w-full flex md:justify-center gap-6 p-6 overflow-x-auto no-scrollbar ">
        {cards.map(card => (
          <Card key={card.id} className="flex-shrink-0 w-64">
            <CardContent className="p-4">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full  object-fill rounded-lg"
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