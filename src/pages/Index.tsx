
import React, { useState } from 'react';
import { Search, MapPin, Building, Users, TrendingUp, Clock, Star, MessageCircle, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdPlaceholder from '@/components/AdPlaceholder';
import JobCard from '@/components/JobCard';
import CategoryCard from '@/components/CategoryCard';
import DistrictButtons from '@/components/DistrictButtons';
import JobTypeCategories from '@/components/JobTypeCategories';
import SuccessStories from '@/components/SuccessStories';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const featuredArticles = [
    {
      id: 1,
      title: 'Latest Government Job Notifications - December 2024',
      excerpt: 'Stay updated with the newest government job openings across Tamil Nadu...',
      date: '2 days ago',
      category: 'Government Jobs',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Banking Sector Recruitment Drive - Apply Now',
      excerpt: 'Major banks are hiring for various positions including clerk, PO, and specialist officers...',
      date: '1 day ago',
      category: 'Bank Jobs',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Work From Home Opportunities in IT Sector',
      excerpt: 'Explore remote job opportunities in software development, digital marketing...',
      date: '3 days ago',
      category: 'Remote Jobs',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TrendingJobsIndia
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Work From Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">State Government</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Central Government</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Bank Jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact Us</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
            
            {/* Social Media Links */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
                <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-wrap gap-2">
              <a href="#" className="text-sm px-3 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">Home</a>
              <a href="#" className="text-sm px-3 py-2 hover:bg-gray-100 rounded-lg">Work From Home</a>
              <a href="#" className="text-sm px-3 py-2 hover:bg-gray-100 rounded-lg">State Govt</a>
              <a href="#" className="text-sm px-3 py-2 hover:bg-gray-100 rounded-lg">Central Govt</a>
              <a href="#" className="text-sm px-3 py-2 hover:bg-gray-100 rounded-lg">Bank Jobs</a>
              <a href="#" className="text-sm px-3 py-2 hover:bg-gray-100 rounded-lg">Contact Us</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Find Your Dream Job in Tamil Nadu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Discover trending opportunities from top companies across Tamil Nadu. Your next career move starts here.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6 md:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base md:text-lg border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="District or city"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 text-base md:text-lg border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button 
                size="lg" 
                className="h-12 text-base md:text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-sm md:text-base text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">15K+</div>
              <div className="text-sm md:text-base text-gray-600">Companies</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-green-600">2M+</div>
              <div className="text-sm md:text-base text-gray-600">Job Seekers</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl md:text-3xl font-bold text-orange-600">95%</div>
              <div className="text-sm md:text-base text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement 1 */}
      <AdPlaceholder type="banner" className="my-6 md:my-8" />

      {/* Job Categories */}
      <JobTypeCategories />

      {/* Ad Placement 2 */}
      <AdPlaceholder type="square" className="my-6 md:my-8" />

      {/* Latest Articles Section - Moved before Success Stories */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Latest Job Updates & Articles</h3>
            <p className="text-lg md:text-xl text-gray-600 px-4">Stay informed with the newest job opportunities and career insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4 md:p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-600 text-xs md:text-sm">{article.category}</Badge>
                  <h4 className="font-bold text-base md:text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Ad Placement 3 */}
      <AdPlaceholder type="banner" className="my-6 md:my-8" />

      {/* Success Stories Slideshow - Moved after Latest Articles */}
      <SuccessStories />

      {/* Ad Placement 4 */}
      <AdPlaceholder type="banner" className="my-6 md:my-8" />

      {/* Tamil Nadu Districts */}
      <DistrictButtons />

      {/* Ad Placement 5 */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 my-6 md:my-8 px-4">
        <AdPlaceholder type="square" />
        <AdPlaceholder type="square" className="hidden md:block" />
      </div>

      {/* Ad Placement 6 */}
      <AdPlaceholder type="banner" className="my-6 md:my-8" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <TrendingUp className="h-6 w-6" />
                <span className="text-lg md:text-xl font-bold">TrendingJobsIndia</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                Tamil Nadu's fastest growing job portal connecting talent with opportunity.
              </p>
              {/* Social Media in Footer */}
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-base md:text-lg">Job Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Government Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bank Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Work From Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Private Jobs</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-base md:text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Latest Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Job Alerts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-base md:text-lg">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>Email: info@trendingjobsindia.com</li>
                <li>Phone: +91 9876543210</li>
                <li>Address: Chennai, Tamil Nadu</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2024 TrendingJobsIndia.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
