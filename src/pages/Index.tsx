
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, FileText } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-docker-primary text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">DockerLab</div>
            <Button 
              variant="outline" 
              className="bg-white text-black border-white" 
              onClick={() => navigate('/admin/login')}
            >
              Admin Portal
            </Button>
          </div>
        </div>
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Revolutionizing Lab Environments with One-Click Docker Execution</h1>
            <p className="text-xl mb-8">
              DockerLab is a web-based platform designed to streamline the management of Docker images and documentation for lab environments. Whether you're an administrator setting up Docker images for students or a student looking for the right commands to run your lab experiments, DockerLab makes the process seamless and efficient.
            </p>
            <Button 
              className="bg-docker-secondary hover:bg-docker-secondary/90 text-white"
              onClick={() => navigate('/student')}
              size="lg"
            >
              Explore More
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-docker-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-docker-primary">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-docker-primary">
                  <Database className="mr-2" /> Docker Images
                </CardTitle>
                <CardDescription>
                  Access Docker images for all your lab environments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Organized by semesters and subjects</li>
                  <li>Ready-to-use pull and run commands</li>
                  <li>Copy commands with a single click</li>
                  <li>Detailed instructions for each image</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-docker-secondary hover:bg-docker-secondary/90"
                  onClick={() => navigate('/student/labs')}
                >
                  Browse Docker Images
                </Button>
              </CardFooter>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-docker-primary">
                  <FileText className="mr-2" /> Documentation
                </CardTitle>
                <CardDescription>
                  Access comprehensive documentation and guides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Structured documentation with headings</li>
                  <li>Step-by-step instructions with images</li>
                  <li>Copyable commands and code snippets</li>
                  <li>Visual guides for complex procedures</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-docker-secondary hover:bg-docker-secondary/90"
                  onClick={() => navigate('/student/documents')}
                >
                  Browse Documentation
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-docker-primary text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">DockerLab</div>
            <div className="text-sm">© {new Date().getFullYear()} DockerLab. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
