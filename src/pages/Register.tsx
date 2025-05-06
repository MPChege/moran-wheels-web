
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Logo from '@/components/ui/Logo';
import { Check } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-moran-light-gray">
        <div className="container-custom max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Panel with Information */}
            <div className="md:w-2/5 animate-fade-in">
              <div className="sticky top-24">
                <div className="flex justify-center md:justify-start mb-6">
                  <Logo size="lg" />
                </div>
                <h1 className="text-3xl font-bold text-moran-gray mb-4">Join the Moran Community</h1>
                <p className="text-moran-gray/70 mb-6">Create your account and gain access to:</p>
                
                <div className="space-y-4">
                  {[
                    'Fast car rental bookings',
                    'Exclusive promotions and discounts',
                    'Easy management of your reservations',
                    'Loyalty rewards with every rental'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-moran-red/10 rounded-full p-1">
                        <Check size={16} className="text-moran-red" />
                      </div>
                      <span className="text-moran-gray">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-moran-red/10 p-5 rounded-lg border border-moran-red/20">
                  <h3 className="font-semibold text-moran-gray mb-2">Already have an account?</h3>
                  <p className="text-sm text-moran-gray/70 mb-4">
                    Sign in to access your account and manage your bookings.
                  </p>
                  <Button variant="outline" asChild className="w-full border-moran-red text-moran-red hover:bg-moran-red hover:text-white">
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Panel with Form */}
            <Card className="md:w-3/5 border-none shadow-lg bg-white animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-moran-gray">Create Your Account</CardTitle>
                <CardDescription className="text-center">
                  Enter your details to register for a Moran account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Create Password</Label>
                    <Input id="password" type="password" placeholder="Create a strong password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                  </div>

                  <div className="space-y-2">
                    <Label>User Type</Label>
                    <RadioGroup defaultValue="personal" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="personal" id="personal" />
                        <Label htmlFor="personal">Personal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business">Business</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-moran-red focus:ring-moran-red border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-moran-gray">
                      I agree to the{' '}
                      <Link to="/terms" className="text-moran-red hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-moran-red hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button type="submit" className="w-full bg-moran-red hover:bg-moran-dark-red">
                  Create Account
                </Button>
                
                <div className="relative w-full text-center">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-moran-gray/70">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 w-full">
                  <Button variant="outline" className="w-full">
                    <svg className="h-5 w-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="h-5 w-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.35c0 .732.593 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
