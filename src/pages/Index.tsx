
import React, { useState } from 'react';
import { Search, MapPin, Building, Users, TrendingUp, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdPlaceholder from '@/components/AdPlaceholder';
import JobCard from '@/components/JobCard';
import CategoryCard from '@/components/CategoryCard';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp India',
      location: 'Bangalore',
      salary: '₹15-25 LPA',
      type: 'Full-time',
      posted: '2 days ago',
      logo: '/placeholder.svg',
      skills: ['React', 'Node.js', 'Python'],
      featured: true
    },
    {
      id: 2,
      title: 'Digital Marketing Manager',
      company: 'GrowthLabs',
      location: 'Mumbai',
      salary: '₹8-15 LPA',
      type: 'Full-time',
      posted: '1 day ago',
      logo: '/placeholder.svg',
      skills: ['SEO', 'SEM', 'Analytics'],
      featured: true
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataMinds',
      location: 'Hyderabad',
      salary: '₹12-20 LPA',
      type: 'Full-time',
      posted: '3 days ago',
      logo: '/placeholder.svg',
      skills: ['Python', 'ML', 'SQL'],
      featured: true
    }
  ];

  const jobCategories = [
    { name: 'IT & Software', count: '15,234', icon: '💻', color: 'bg-blue-100 text-blue-800' },
    { name: 'Finance', count: '8,456', icon: '💰', color: 'bg-green-100 text-green-800' },
    { name: 'Marketing', count: '6,789', icon: '📢', color: 'bg-purple-100 text-purple-800' },
    { name: 'Sales', count: '9,123', icon: '📊', color: 'bg-orange-100 text-orange-800' },
    { name: 'Healthcare', count: '4,567', icon: '🏥', color: 'bg-red-100 text-red-800' },
    { name: 'Education', count: '3,890', icon: '📚', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Design', count: '2,345', icon: '🎨', color: 'bg-pink-100 text-pink-800' },
    { name: 'Engineering', count: '7,890', icon: '⚙️', color: 'bg-gray-100 text-gray-800' }
  ];

  const topCities = [
    { name: 'Bangalore', count: '25,678 jobs' },
    { name: 'Mumbai', count: '22,345 jobs' },
    { name: 'Delhi NCR', count: '28,901 jobs' },
    { name: 'Hyderabad', count: '18,456 jobs' },
    { name: 'Chennai', count: '16,789 jobs' },
    { name: 'Pune', count: '14,567 jobs' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TrendingJobsIndia
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Find Jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Companies</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Career Tips</a>
              <Button variant="outline" className="ml-4">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Post a Job</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Find Your Dream Job
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover trending opportunities from top companies across India. Your next career move starts here.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 text-lg border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button 
                size="lg" 
                className="h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15K+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2M+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement 1 */}
      <AdPlaceholder type="banner" className="my-8" />

      {/* Featured Jobs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Featured Jobs</h3>
            <p className="text-xl text-gray-600">Hand-picked opportunities from top employers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View All Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Browse by Category</h3>
            <p className="text-xl text-gray-600">Explore opportunities in your field</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placement 2 */}
      <AdPlaceholder type="square" className="my-8" />

      {/* Top Cities */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Top Hiring Cities</h3>
            <p className="text-xl text-gray-600">Discover jobs in India's major tech hubs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {topCities.map((city, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {city.name}
                  </h4>
                  <p className="text-gray-600">{city.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Take the Next Step?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of job seekers who trust TrendingJobsIndia to find their perfect career match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Create Your Profile
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Upload Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6" />
                <span className="text-xl font-bold">TrendingJobsIndia</span>
              </div>
              <p className="text-gray-400">
                India's fastest growing job portal connecting talent with opportunity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Salary Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Search Resumes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recruitment Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TrendingJobsIndia.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
