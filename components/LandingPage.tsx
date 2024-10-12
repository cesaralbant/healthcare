"use client"

import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ecuadorGeoJSON from '@/data/ecuador.json';
import Ripple from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button"

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">Ecuador Healthcare Platform</h1>
      </header>
      
      <main className="container mx-auto mt-8 p-4">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementing Healthcare Solutions Across Ecuador</h2>
          <p className="text-lg">
            Discover where our healthcare products can make the most impact. Use the interactive map below to explore priority areas.
          </p>
        </section>
        
        <section className="mb-12">
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background shadow-xl">
            <MapContainer center={[-1.8312, -78.1834]} zoom={7} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <GeoJSON data={ecuadorGeoJSON as any} />
            </MapContainer>
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <p className="text-4xl font-bold text-white text-shadow">Ecuador Healthcare Map</p>
            </div>
            <Ripple />
          </div>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p>
              We're dedicated to improving healthcare access and quality across Ecuador. 
              Our platform identifies high-priority areas for implementing innovative healthcare solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Get Involved</h3>
            <p className="mb-4">
              Join us in our mission to enhance healthcare in Ecuador. Whether you're a healthcare provider, 
              investor, or community leader, your involvement can make a difference.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
          </div>
        </section>
      </main>
      
      <footer className="mt-12 bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 Ecuador Healthcare Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;