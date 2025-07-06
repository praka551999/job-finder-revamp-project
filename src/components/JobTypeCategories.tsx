
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, Briefcase, Landmark, GraduationCap, MapPin, Users, Monitor } from 'lucide-react';

const JobTypeCategories = () => {
  const jobTypes = [
    {
      name: 'Work From Home Jobs',
      icon: <Home className="h-12 w-12" />,
      count: '5,234',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      url: 'https://trendingjobsindia.com/category/work-from-home-jobs/'
    },
    {
      name: 'State Government Jobs',
      icon: <Building className="h-12 w-12" />,
      count: '2,567',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      url: 'https://trendingjobsindia.com/category/state-government-jobs/'
    },
    {
      name: 'Central Government Jobs',
      icon: <Briefcase className="h-12 w-12" />,
      count: '1,890',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      url: 'https://trendingjobsindia.com/category/central-government-jobs/'
    },
    {
      name: 'Bank Jobs',
      icon: <Landmark className="h-12 w-12" />,
      count: '3,456',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      url: 'https://trendingjobsindia.com/category/bank-jobs/'
    },
    {
      name: 'Free Internships',
      icon: <GraduationCap className="h-12 w-12" />,
      count: '4,123',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700',
      url: 'https://trendingjobsindia.com/category/internships/'
    },
    {
      name: 'Your Districts Job',
      icon: <MapPin className="h-12 w-12" />,
      count: '8,765',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
      url: 'https://trendingjobsindia.com/'
    },
    {
      name: 'Private Jobs',
      icon: <Users className="h-12 w-12" />,
      count: '12,345',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      url: 'https://trendingjobsindia.com/'
    },
    {
      name: 'Work From Office Jobs',
      icon: <Monitor className="h-12 w-12" />,
      count: '9,876',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700',
      url: 'https://trendingjobsindia.com/'
    }
  ];

  const handleCategoryClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Browse Jobs by Category</h3>
          <p className="text-xl text-gray-600">Find the perfect job type that matches your career goals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobTypes.map((jobType, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
              onClick={() => handleCategoryClick(jobType.url)}
            >
              <CardContent className="p-6 text-center">
                <div className={`${jobType.color} ${jobType.hoverColor} text-white rounded-2xl p-6 mb-4 mx-auto w-fit transition-all duration-300 group-hover:scale-110`}>
                  {jobType.icon}
                </div>
                <h4 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors">
                  {jobType.name}
                </h4>
                <p className="text-gray-600 mb-4">{jobType.count} jobs available</p>
                <Button 
                  className={`w-full ${jobType.color} ${jobType.hoverColor} text-white border-0`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(jobType.url);
                  }}
                >
                  View Jobs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobTypeCategories;
