
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      position: 'Bank PO',
      company: 'State Bank of India',
      image: '/placeholder.svg',
      story: 'Thanks to TrendingJobsIndia, I got selected as a Bank PO in SBI. The job alerts were timely and the application process guidance was excellent!',
      rating: 5,
      location: 'Chennai'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      position: 'Software Engineer',
      company: 'Tech Startup',
      image: '/placeholder.svg',
      story: 'Found my dream work-from-home job through this platform. The remote job listings were comprehensive and up-to-date.',
      rating: 5,
      location: 'Coimbatore'
    },
    {
      id: 3,
      name: 'Meera Lakshmi',
      position: 'Government Officer',
      company: 'Tamil Nadu Government',
      image: '/placeholder.svg',
      story: 'Successfully cleared TNPSC exam with the help of job notifications from TrendingJobsIndia. Highly recommended!',
      rating: 5,
      location: 'Madurai'
    },
    {
      id: 4,
      name: 'Arjun Patel',
      position: 'Marketing Manager',
      company: 'Private Firm',
      image: '/placeholder.svg',
      story: 'Got placement in a top company within 2 weeks of applying through TrendingJobsIndia. Great platform for job seekers!',
      rating: 5,
      location: 'Salem'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">Success Stories</h3>
          <p className="text-xl text-gray-600">Real people, real success stories from our platform</p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {stories.map((story) => (
              <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-lg">{story.name}</h4>
                        <p className="text-sm text-gray-600">{story.position}</p>
                        <p className="text-sm text-blue-600">{story.company}</p>
                        <p className="text-xs text-gray-500">{story.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="flex-1 relative">
                      <Quote className="h-6 w-6 text-gray-300 mb-2" />
                      <p className="text-gray-700 italic">{story.story}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStories;
