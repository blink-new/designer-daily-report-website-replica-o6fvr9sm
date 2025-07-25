import React from 'react';
import { Star, Download, Chrome, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Card, CardContent } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-gray-900">
                Designer Daily Report
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Library</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Reader</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Archive</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Feed</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything about design,<br />
            in just <span className="text-indigo-600">✋ minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the most important design news, resources, and inspiration delivered to your inbox every day.
          </p>
          
          {/* Chrome Extension CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg">
              <Chrome className="w-5 h-5 mr-2" />
              Add to Chrome - It's Free
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Extension
            </Button>
          </div>

          {/* Star Rating */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.8/5 from 2,847 users</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Navigation Tabs */}
            <Tabs defaultValue="home" className="mb-8">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="library">Library</TabsTrigger>
                <TabsTrigger value="reader">Reader</TabsTrigger>
                <TabsTrigger value="archive">Archive</TabsTrigger>
                <TabsTrigger value="feed">Feed</TabsTrigger>
              </TabsList>

              <TabsContent value="home" className="space-y-8">
                {/* Report Home Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Report</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <span className="text-indigo-600 font-bold">25</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Daily Design Digest - January 25, 2024
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Today's curated selection of design inspiration, tools, and resources from around the web.
                          </p>
                          <Button variant="outline" size="sm">
                            Read Full Report <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Curated Links Grid */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Curated Links</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "The Future of Design Systems",
                        description: "How design systems are evolving to meet the needs of modern product teams.",
                        category: "Design Systems",
                        url: "#"
                      },
                      {
                        title: "Color Psychology in UI Design",
                        description: "Understanding how colors affect user behavior and decision making.",
                        category: "UI Design",
                        url: "#"
                      },
                      {
                        title: "Accessibility Best Practices 2024",
                        description: "Essential guidelines for creating inclusive digital experiences.",
                        category: "Accessibility",
                        url: "#"
                      },
                      {
                        title: "Micro-interactions That Delight",
                        description: "Small details that make a big difference in user experience.",
                        category: "UX Design",
                        url: "#"
                      }
                    ].map((link, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-3">
                            {link.category}
                          </Badge>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {link.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {link.description}
                          </p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="px-3 py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-200 group"
                          >
                            Read More 
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Fresh Links Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Fresh Links</h2>
                  <div className="space-y-4">
                    {[
                      "New Figma Plugin: Auto Layout Helper",
                      "Adobe XD vs Figma: 2024 Comparison",
                      "Typography Trends for Modern Websites",
                      "Mobile-First Design Principles",
                      "Creating Effective Design Portfolios"
                    ].map((title, index) => (
                      <Card key={index} className="hover:shadow-sm transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-900">{title}</h3>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </TabsContent>

              {/* Other tab contents would be similar */}
              <TabsContent value="library">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Library</h3>
                  <p className="text-gray-600">Your saved design resources and bookmarks.</p>
                </div>
              </TabsContent>

              <TabsContent value="reader">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Reader</h3>
                  <p className="text-gray-600">Distraction-free reading experience.</p>
                </div>
              </TabsContent>

              <TabsContent value="archive">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Archive</h3>
                  <p className="text-gray-600">Browse past reports and articles.</p>
                </div>
              </TabsContent>

              <TabsContent value="feed">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Feed</h3>
                  <p className="text-gray-600">Real-time design news and updates.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Products Section */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Design System Kit",
                    description: "Complete design system templates",
                    price: "$49"
                  },
                  {
                    name: "UI Component Library",
                    description: "Ready-to-use React components",
                    price: "$29"
                  },
                  {
                    name: "Icon Pack Pro",
                    description: "1000+ premium icons",
                    price: "$19"
                  }
                ].map((product, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-indigo-600">{product.price}</span>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Jobs Section */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Jobs</h3>
              <div className="space-y-3">
                {[
                  { title: "Senior UI Designer", company: "Stripe", location: "Remote" },
                  { title: "Product Designer", company: "Figma", location: "San Francisco" },
                  { title: "UX Researcher", company: "Airbnb", location: "New York" }
                ].map((job, index) => (
                  <Card key={index}>
                    <CardContent className="p-3">
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{job.title}</h4>
                      <p className="text-xs text-gray-600">{job.company} • {job.location}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Designers Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Designer Daily Report has become an essential part of my morning routine. The curated content saves me hours of browsing.",
                author: "Sarah Chen",
                role: "Senior Product Designer at Spotify"
              },
              {
                quote: "The quality of resources and insights is unmatched. It's like having a design mentor in your inbox every day.",
                author: "Marcus Rodriguez",
                role: "Design Director at Uber"
              },
              {
                quote: "I've discovered so many amazing tools and techniques through DDR. It's elevated my design practice significantly.",
                author: "Emily Johnson",
                role: "UX Designer at Netflix"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Partner Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Principle",
              "Zeplin", "Abstract", "Maze", "Hotjar", "Miro", "Notion"
            ].map((tool, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Designer Daily Report</h3>
              <p className="text-gray-400">
                Your daily dose of design inspiration, resources, and industry insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Chrome Extension</a></li>
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
                <li><a href="#" className="hover:text-white">Archive</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Designer Daily Report. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;