
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-moran-light-gray overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-moran-gray/90 to-moran-gray/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')" }}
          ></div>
          
          <div className="container-custom mx-auto py-20 lg:py-32 relative z-20 text-white">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Contact <span className="text-moran-red">Us</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                We're here to answer any questions you may have about our car rental services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16 bg-white">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-moran-gray mb-6">
                  Get in <span className="text-moran-red">Touch</span>
                </h2>
                <p className="text-moran-gray/80 mb-8">
                  Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-moran-red/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-moran-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-moran-gray">Visit Us</h3>
                      <p className="text-moran-gray/70">
                        Moran Car Hire<br />
                        Mombasa Road<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-moran-red/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-moran-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-moran-gray">Call Us</h3>
                      <p className="text-moran-gray/70">
                        +254 722 123 456<br />
                        +254 733 789 012
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-moran-red/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-moran-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-moran-gray">Email Us</h3>
                      <p className="text-moran-gray/70">
                        info@morancarhire.com<br />
                        support@morancarhire.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-moran-red/10 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-moran-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-moran-gray">Opening Hours</h3>
                      <p className="text-moran-gray/70">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="overflow-hidden shadow-lg border-none">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-moran-gray mb-6">
                      Send Us a <span className="text-moran-red">Message</span>
                    </h2>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this regarding?" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} />
                      </div>

                      <Button type="submit" className="w-full bg-moran-red hover:bg-moran-dark-red">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-moran-light-gray">
          <div className="container-custom mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-moran-gray mb-4">
                Our <span className="text-moran-red">Location</span>
              </h2>
              <p className="text-moran-gray/70 max-w-3xl mx-auto">
                Find us conveniently located on Mombasa Road, easily accessible from all major parts of Nairobi.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-300">
              {/* This is a placeholder for a map */}
              <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container-custom mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-moran-gray mb-4">
                Frequently Asked <span className="text-moran-red">Questions</span>
              </h2>
              <p className="text-moran-gray/70 max-w-3xl mx-auto">
                Find answers to the most common questions about our car rental services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  q: "What documents do I need to rent a car?",
                  a: "You'll need a valid driver's license, national ID/passport, and a credit card for the security deposit."
                },
                {
                  q: "Is there a minimum age requirement to rent a car?",
                  a: "Yes, drivers must be at least 21 years old and have held their license for at least one year."
                },
                {
                  q: "Can I return the car to a different location?",
                  a: "Yes, we offer one-way rentals for an additional fee. Please specify your drop-off location when booking."
                },
                {
                  q: "What is included in the rental price?",
                  a: "Our standard rental includes insurance, maintenance, and 24/7 roadside assistance."
                },
                {
                  q: "Do you offer long-term rental options?",
                  a: "Yes, we offer special rates for weekly and monthly rentals. Contact us for a custom quote."
                },
                {
                  q: "What happens if I return the car late?",
                  a: "Late returns are charged at an hourly rate. If more than 3 hours late, a full day's rental will be charged."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-moran-light-gray rounded-lg">
                  <h3 className="font-semibold text-lg text-moran-gray mb-2">{faq.q}</h3>
                  <p className="text-moran-gray/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
