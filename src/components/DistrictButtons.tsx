
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DistrictButtons = () => {
  const tamilNaduDistricts = [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
    'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram',
    'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai',
    'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai',
    'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi',
    'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli',
    'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur',
    'Vellore', 'Viluppuram', 'Virudhunagar'
  ];

  const handleDistrictClick = () => {
    window.open('https://trendingjobsindia.com/', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold mb-4">
              Jobs by Districts in Tamil Nadu
            </CardTitle>
            <p className="text-xl text-gray-600">
              Find jobs in your district - All 38 districts of Tamil Nadu
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {tamilNaduDistricts.map((district) => (
                <Button
                  key={district}
                  variant="outline"
                  className="h-12 text-sm font-medium hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                  onClick={handleDistrictClick}
                >
                  {district}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DistrictButtons;
