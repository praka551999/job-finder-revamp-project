
import React from 'react';
import { MapPin, Clock, Building, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  logo: string;
  skills: string[];
  featured?: boolean;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:border-l-blue-500">
      <CardContent className="p-6">
        {job.featured && (
          <div className="flex items-center mb-3">
            <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
            <Badge variant="secondary" className="text-xs">Featured</Badge>
          </div>
        )}
        
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Building className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                {job.title}
              </h4>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{job.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{job.posted}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold text-green-600">{job.salary}</div>
          <Badge variant="outline">{job.type}</Badge>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-2">
          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Apply Now
          </Button>
          <Button variant="outline" size="sm">
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
