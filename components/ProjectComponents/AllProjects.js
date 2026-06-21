"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { X } from "lucide-react";
import projectsService from "@/lib/api/services/projects";

/* ---------------------------------------------
   Backend → UI shape
---------------------------------------------- */
const HEIGHT_CYCLE = [400, 500, 350, 450, 380, 420];

function mapProject(p, idx = 0) {
  const category = Array.isArray(p.category)
    ? p.category
    : p.category
      ? [p.category]
      : [];

  return {
    id: p._id || p.id,
    thumbnail: p.thumbnail || p.image || "",
    image: p.image || p.thumbnail || "",
    video: p.video || "",
    title: p.title || "",
    subtitle: p.subtitle || "",
    description: p.description || "",
    link: p.link || "",
    year: p.year || "",
    clientName: p.clientName || "",
    category,
    tags: category,
    status: p.status || "completed",
    challenge: p.challenge || "",
    solution: p.solution || "",
    result: p.result || "",
    longDescription: p.longDescription || "",
    longDescription1: p.longDescription1 || "",
    longDescription2: p.longDescription2 || "",
    height: HEIGHT_CYCLE[idx % HEIGHT_CYCLE.length],
  };
}

function useProjects() {
  const [state, setState] = useState({
    projects: [],
    loading: true,
    error: null,
  });

  const load = useCallback(() => {
    let active = true;
    setState((s) => ({ ...s, loading: true, error: null }));

    projectsService
      .list()
      .then((data) => {
        if (!active) return;
        const list = Array.isArray(data)
          ? data
          : (data?.data ?? data?.projects ?? []);
        setState({
          projects: list.map((p, i) => mapProject(p, i)),
          loading: false,
          error: null,
        });
      })
      .catch((err) => {
        if (!active) return;
        setState((s) => ({
          ...s,
          loading: false,
          error: err?.message || "Failed to load projects",
        }));
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => load(), [load]);

  return { ...state, reload: load };
}

function Cursor({ isVisible, position, text }) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-30 bg-accent2 text-white px-4 py-2 text-sm font-medium rounded-xl"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      {text}
    </motion.div>
  );
}

function ProjectCard({ project, index, onHover, onLeave, onClick }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false); // lazy-load video on first hover
  const [videoReady, setVideoReady] = useState(false); // video has enough data to show

  const thumbnail = project.thumbnail || project.image;
  const hasVideo = Boolean(project.video);

  // The video only fades in once it's hovered AND has buffered enough to play.
  // Until then the thumbnail stays on screen, so there's never a blank flash.
  const showVideo = hasVideo && isHovered && videoReady;

  // Drive play/pause from the hover state so it stays in sync even if events
  // fire out of order.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !hasVideo) return;

    if (isHovered) {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } else {
      v.pause();
      // Reset to the first frame only after the fade-out has finished,
      // otherwise you'd see the video jump while it's still visible.
      const t = setTimeout(() => {
        if (videoRef.current) videoRef.current.currentTime = 0;
      }, 600);
      return () => clearTimeout(t);
    }
  }, [isHovered, hasVideo]);

  const handleEnter = () => {
    setIsHovered(true);
    if (hasVideo) setShouldLoad(true);
    onHover?.();
  };

  const handleLeave = () => {
    setIsHovered(false);
    onLeave?.();
  };

  return (
    <motion.div
      className="group relative flex flex-col break-inside-avoid mb-12"
      layoutId={`card-container-${project.title}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        className="relative overflow-hidden shadow-lg cursor-none rounded-xl"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={onClick}
        layoutId={`card-image-${project.title}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Thumbnail (always rendered, sits underneath the video) */}
        <motion.img
          src={thumbnail}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110`}
          style={{ height: project.height }}
          layoutId={`image-${project.title}`}
        />

        {/* Hover video — crossfades in over the thumbnail */}
        {hasVideo && (
          <video
            ref={videoRef}
            src={shouldLoad ? project.video : undefined}
            poster={thumbnail}
            muted
            loop
            playsInline
            preload="none"
            onCanPlay={() => setVideoReady(true)}
            onLoadedData={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-110 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
            style={{ height: project.height }}
          />
        )}

        {/* Darkening gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Tags + description overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-none">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-black/70 backdrop-blur-sm text-xs rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-white text-md font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>

      <div className="mt-4 px-2">
        <motion.h3
          className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2"
          layoutId={`title-${project.title}`}
        >
          {project.title}
        </motion.h3>
        <div className="w-8 h-1 bg-black/40 rounded-full mt-2 transition-all duration-500 ease-in-out group-hover:w-16 group-hover:bg-black"></div>
      </div>
    </motion.div>
  );
}

export function AllProjects() {
  const [cursorState, setCursorState] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    text: "View Project",
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const { projects, loading, error, reload } = useProjects();

  // Calculate categories with counts
  const categories = useMemo(() => {
    const categoryCount = projects.reduce((acc, project) => {
      const cats = Array.isArray(project.category)
        ? project.category
        : [project.category];

      cats.forEach((cat) => {
        if (!cat) return;
        acc[cat] = (acc[cat] || 0) + 1;
      });

      return acc;
    }, {});

    return [
      { name: "All", count: projects.length },
      ...Object.entries(categoryCount).map(([name, count]) => ({
        name,
        count,
      })),
    ];
  }, [projects]);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) => {
      const cats = Array.isArray(project.category)
        ? project.category
        : [project.category];
      return cats.includes(activeCategory);
    });
  }, [activeCategory, projects]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorState((prev) => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    if (cursorState.isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorState.isVisible]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleMouseEnter = () => {
    setCursorState((prev) => ({ ...prev, isVisible: true }));
    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setCursorState((prev) => ({ ...prev, isVisible: false }));
    document.body.style.cursor = "auto";
  };

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setSelectedIndex(index);
    document.body.style.cursor = "auto";
    setCursorState((prev) => ({ ...prev, isVisible: false }));
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setSelectedIndex(null);
  };

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen relative">
      <div className="mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="flex-1">
          <div className="text-4xl md:text-6xl text-gray-900 mb-4">
            Our{" "}
            <span className="logo bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent font-bold">
              Works
            </span>
          </div>
          <div className="max-w-2xl text-lg md:text-xl font-extralight text-gray-600">
            Showcasing our collection of ideas that we&apos;ve brought to life —
            crafted with strategy, creativity, and purpose.
          </div>
        </div>

        {/* Categories */}
        <div className="lg:ml-8">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`flex items-center justify-between w-full text-left transition-all duration-300 group ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">{category.name}</span>
                <motion.span
                  className={`ml-20 px-2 py-1 rounded-full text-md font-semibold min-w-[24px] text-center ${
                    activeCategory === category.name
                      ? "bg-white/20"
                      : "text-gray-600"
                  }`}
                  layout
                >
                  {category.count}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {windowWidth >= 768 && (
        <AnimatePresence>
          <Cursor
            isVisible={cursorState.isVisible}
            position={cursorState.position}
            text={cursorState.text}
          />
        </AnimatePresence>
      )}

      {/* Loading */}
      {loading && (
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="break-inside-avoid mb-12 animate-pulse">
              <div
                className="w-full rounded-xl bg-gray-100"
                style={{ height: HEIGHT_CYCLE[i % HEIGHT_CYCLE.length] }}
              />
              <div className="mt-4 h-5 w-2/3 bg-gray-100 rounded" />
              <div className="mt-2 h-1 w-8 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="max-w-md mx-auto text-center py-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-red-600 mb-3">
            Couldn&rsquo;t load projects
          </p>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={reload}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="text-center text-gray-400 py-16">
          No projects to show yet.
        </p>
      )}

      {/* Masonry Grid */}
      {!loading && !error && projects.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-0"
            style={{ columnFill: "balance" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id || project.title}-${activeCategory}`}
                project={project}
                index={index}
                onHover={handleMouseEnter}
                onLeave={handleMouseLeave}
                onClick={() => handleProjectClick(project, index)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-[9999] overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <motion.button
                className="fixed top-6 right-6 z-[10000] flex items-center gap-2 text-white hover:text-gray-300 transition-colors px-4 py-2 rounded-full bg-red-600 backdrop-blur-sm"
                onClick={handleCloseModal}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
                <span className="text-sm">Esc to close</span>
              </motion.button>

              <div className="min-h-screen flex flex-col">
                {/* Hero Section */}
                <div className="flex-1 flex items-center justify-center p-6 md:p-8">
                  <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      {/* Image */}
                      <motion.div
                        className="relative overflow-hidden rounded-2xl shadow-2xl"
                        layoutId={`card-image-${selectedProject.title}`}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <motion.img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                          layoutId={`image-${selectedProject.title}`}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </motion.div>

                      {/* Content */}
                      <div className="text-white space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <span className="bg-white/10 px-2 py-1 rounded">
                              {selectedProject.year}
                            </span>
                            <span>•</span>
                            <span>{selectedProject.title}</span>
                          </div>

                          <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                            layoutId={`title-${selectedProject.title}`}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          >
                            {selectedProject.title}
                          </motion.h1>

                          <motion.p
                            className="text-lg md:text-xl font-extralight text-gray-300 mb-6"
                            layoutId={`subtitle-${selectedProject.title}`}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          >
                            {selectedProject.subtitle}
                          </motion.p>
                          {selectedProject.link && (
                            <p className="text-lg md:text-xl font-extralight flex items-center gap-2 text-gray-300 mb-6">
                              <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                              >
                                <Globe size={20} />
                                {selectedProject.title}
                              </a>
                            </p>
                          )}
                        </motion.div>

                        {/* Short Description */}
                        <motion.p
                          className="text-base md:text-lg text-gray-200 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          {selectedProject.description}
                        </motion.p>

                        {/* Tags */}
                        <motion.div
                          className="flex flex-col"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                        >
                          <div className="flex items-center gap-2 flex-wrap">
                            {selectedProject.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tagIndex}
                                className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm border border-white/20"
                                whileHover={{
                                  scale: 1.05,
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge / Solution / Result */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm p-6 md:p-8 border-t border-white/10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-white">
                      {["challenge", "solution", "result"].map(
                        (key, i) =>
                          selectedProject[key] && (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 1.3 + i * 0.1,
                                duration: 0.6,
                              }}
                            >
                              <h3
                                className={`text-lg font-semibold mb-3 ${
                                  key === "challenge"
                                    ? "text-purple-400"
                                    : key === "solution"
                                      ? "text-blue-400"
                                      : "text-green-400"
                                }`}
                              >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </h3>
                              <p className="text-gray-300 text-sm md:text-base">
                                {selectedProject[key]}
                              </p>
                            </motion.div>
                          ),
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Showcase image (between challenge and what-we-did) */}
                {selectedProject.image && (
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm py-10 px-6 md:px-10 border-t border-white/10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                  >
                    <div className="max-w-7xl mx-auto">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                        Project showcase
                      </h3>
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/40">
                        <img
                          src={selectedProject.image}
                          alt={`${selectedProject.title} showcase`}
                          loading="lazy"
                          className="w-full h-auto max-h-[600px] object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className="bg-white/5 backdrop-blur-sm py-10 px-6 md:px-10 border-t border-white/10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                >
                  <motion.div
                    className="container mx-auto flex flex-col gap-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                  >
                    <motion.div
                      className="flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <div className="mb-3 text-lg md:text-xl mt-4 font-bold text-white">
                        What we did:
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {selectedProject.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm border border-white/20"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(255,255,255,0.2)",
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                    {selectedProject.longDescription && (
                      <motion.div
                        className="space-y-6 container mx-auto px-4 md:px-6 py-8 bg-black/40 backdrop-blur rounded-2xl shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <motion.h2
                          className="text-2xl md:text-3xl font-bold text-white"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          About {selectedProject.title}
                        </motion.h2>

                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <h3 className="text-lg md:text-xl font-extrabold text-gray-300">
                            {selectedProject.title}
                          </h3>
                          <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
                            {selectedProject.longDescription}
                          </p>
                        </motion.div>

                        {selectedProject.longDescription1 && (
                          <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                          >
                            <h3 className="text-lg md:text-xl font-extrabold text-gray-300">
                              Our Approach & Solution
                            </h3>
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
                              {selectedProject.longDescription1}
                            </p>
                          </motion.div>
                        )}

                        {selectedProject.longDescription2 && (
                          <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                          >
                            <h3 className="text-lg md:text-xl font-extrabold text-gray-300">
                              Results & Impact
                            </h3>
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
                              {selectedProject.longDescription2}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
