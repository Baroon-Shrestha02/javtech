import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample gallery data - replace with your actual images
const galleryData = [
  {
    id: 1,
    title: "Web Development Project",
    category: "web",
    img: "/gallery/web1.jpg",
    description: "Modern responsive website design"
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "mobile",
    img: "/gallery/mobile1.jpg",
    description: "User-friendly mobile application"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "web",
    img: "/gallery/web2.jpg",
    description: "Full-featured online store"
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "design",
    img: "/gallery/design1.jpg",
    description: "Complete branding solution"
  },
  {
    id: 5,
    title: "Dashboard UI",
    category: "web",
    img: "/gallery/web3.jpg",
    description: "Analytics dashboard interface"
  },
  {
    id: 6,
    title: "iOS Application",
    category: "mobile",
    img: "/gallery/mobile2.jpg",
    description: "Native iOS app development"
  },
  {
    id: 7,
    title: "Logo Design",
    category: "design",
    img: "/gallery/design2.jpg",
    description: "Creative logo concepts"
  },
  {
    id: 8,
    title: "CRM System",
    category: "web",
    img: "/gallery/web4.jpg",
    description: "Customer relationship management"
  },
  {
    id: 9,
    title: "Social Media App",
    category: "mobile",
    img: "/gallery/mobile3.jpg",
    description: "Social networking platform"
  },
  {
    id: 10,
    title: "UI/UX Design",
    category: "design",
    img: "/gallery/design3.jpg",
    description: "User experience optimization"
  },
  {
    id: 11,
    title: "Portfolio Website",
    category: "web",
    img: "/gallery/web5.jpg",
    description: "Creative portfolio showcase"
  },
  {
    id: 12,
    title: "Fitness App",
    category: "mobile",
    img: "/gallery/mobile4.jpg",
    description: "Health and fitness tracker"
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: '🎨' },
  { id: 'web', name: 'Web Development', icon: '💻' },
  { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
  { id: 'design', name: 'Design', icon: '✨' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredGallery = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredGallery[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning projects and creative work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/ef4444/ffffff?text=${item.title}`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <ZoomIn size={20} />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {categories.find(cat => cat.id === item.category)?.icon} {item.category}
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 + 0.3 }}
                  className="h-1 bg-gradient-to-r from-red-600 to-red-400 origin-left"
                ></motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredGallery.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-xl">No projects found in this category</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors z-50 shadow-lg"
            >
              <X size={24} />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.1, x: -5 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-6 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all z-50"
            >
              <ChevronLeft size={32} />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.1, x: 5 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all z-50"
            >
              <ChevronRight size={32} />
            </motion.button>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/ef4444/ffffff?text=${selectedImage.title}`;
                }}
              />
              
              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
                <p className="text-gray-400 text-sm mt-2">
                  {currentIndex + 1} / {filteredGallery.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}