
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  name: string;
  count: string;
  icon: string;
  color: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4">{category.icon}</div>
        <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h4>
        <p className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
          {category.count} jobs
        </p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
