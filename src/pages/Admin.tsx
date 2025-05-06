
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  User,
  Car,
  Calendar,
  DollarSign,
  Settings,
  LogOut,
  ChevronRight,
  Users,
  BarChart,
  Bell,
  Search,
} from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-moran-gray text-white hidden md:block">
        <div className="p-4 flex items-center space-x-2">
          <Logo withText={false} />
          <span className="text-lg font-bold">Moran Admin</span>
        </div>
        
        <nav className="mt-8 px-2">
          <div className="space-y-1">
            <Link
              to="/admin"
              className="flex items-center px-4 py-2 bg-moran-red rounded-md text-white font-medium group"
            >
              <BarChart className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="/admin/cars"
              className="flex items-center px-4 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white group"
            >
              <Car className="mr-3 h-5 w-5" />
              Vehicles
            </Link>
            <Link
              to="/admin/bookings"
              className="flex items-center px-4 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white group"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Bookings
            </Link>
            <Link
              to="/admin/users"
              className="flex items-center px-4 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white group"
            >
              <Users className="mr-3 h-5 w-5" />
              Users
            </Link>
            <Link
              to="/admin/payments"
              className="flex items-center px-4 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white group"
            >
              <DollarSign className="mr-3 h-5 w-5" />
              Payments
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center px-4 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white group"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </div>
        </nav>
        
        <div className="absolute bottom-0 w-64 p-4">
          <Button
            variant="ghost"
            className="flex items-center justify-center w-full text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <button className="md:hidden p-2 mr-2 text-moran-gray">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-moran-gray">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-1 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-moran-red"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-moran-red rounded-full"></span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-moran-red text-white flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-moran-gray">Admin User</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-moran-gray/70">Total Bookings</p>
                  <h3 className="text-2xl font-bold text-moran-gray mt-1">1,248</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-moran-red" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  12.5%
                </span>
                <span className="text-moran-gray/60 ml-2">from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-moran-gray/70">Total Revenue</p>
                  <h3 className="text-2xl font-bold text-moran-gray mt-1">$24,458</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-moran-red" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  8.2%
                </span>
                <span className="text-moran-gray/60 ml-2">from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-moran-gray/70">Total Vehicles</p>
                  <h3 className="text-2xl font-bold text-moran-gray mt-1">48</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center">
                  <Car className="h-6 w-6 text-moran-red" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  4.1%
                </span>
                <span className="text-moran-gray/60 ml-2">from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-moran-gray/70">Total Users</p>
                  <h3 className="text-2xl font-bold text-moran-gray mt-1">2,453</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-moran-red/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-moran-red" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  6.8%
                </span>
                <span className="text-moran-gray/60 ml-2">from last month</span>
              </div>
            </div>
          </div>
          
          {/* Recent Bookings */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-moran-gray">Recent Bookings</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-moran-gray border-gray-300"
                >
                  View All
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-moran-gray/70 uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-moran-gray/70 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-moran-gray/70 uppercase tracking-wider">
                      Vehicle
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-moran-gray/70 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-moran-gray/70 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-moran-gray/70 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-moran-gray/70 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      #BK7829
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-moran-gray/10 flex items-center justify-center">
                          <User className="h-4 w-4 text-moran-gray" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-moran-gray">John Doe</div>
                          <div className="text-sm text-moran-gray/70">john.doe@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      Toyota RAV4
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      May 4, 2025 - May 10, 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      $300.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-moran-red hover:bg-moran-red/10">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      #BK7828
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-moran-gray/10 flex items-center justify-center">
                          <User className="h-4 w-4 text-moran-gray" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-moran-gray">Jane Smith</div>
                          <div className="text-sm text-moran-gray/70">jane.smith@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      Mercedes E-Class
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      May 3, 2025 - May 6, 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      $360.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-moran-red hover:bg-moran-red/10">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      #BK7827
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-moran-gray/10 flex items-center justify-center">
                          <User className="h-4 w-4 text-moran-gray" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-moran-gray">Robert Johnson</div>
                          <div className="text-sm text-moran-gray/70">robert.johnson@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      Honda Civic
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      May 2, 2025 - May 8, 2025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-moran-gray">
                      $210.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" className="text-moran-red hover:bg-moran-red/10">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-moran-gray">Vehicle Statistics</h3>
                  <div className="text-sm text-moran-gray/70">Last 30 days</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-moran-gray">SUVs</span>
                      <span className="text-sm text-moran-gray/70">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-moran-red h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-moran-gray">Sedans</span>
                      <span className="text-sm text-moran-gray/70">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-moran-red h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-moran-gray">Luxury</span>
                      <span className="text-sm text-moran-gray/70">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-moran-red h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-moran-gray">Hatchbacks</span>
                      <span className="text-sm text-moran-gray/70">18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-moran-red h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-moran-gray">Recent Activities</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-moran-gray">
                        New booking received for <span className="font-medium">Toyota RAV4</span>
                      </p>
                      <p className="text-xs text-moran-gray/70">2 hours ago</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-moran-gray">
                        New user registered: <span className="font-medium">Sarah Wilson</span>
                      </p>
                      <p className="text-xs text-moran-gray/70">5 hours ago</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-moran-gray">
                        Payment received: <span className="font-medium">$250.00</span>
                      </p>
                      <p className="text-xs text-moran-gray/70">Yesterday</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-moran-gray">
                        Booking <span className="font-medium">#BK7820</span> was cancelled
                      </p>
                      <p className="text-xs text-moran-gray/70">Yesterday</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
