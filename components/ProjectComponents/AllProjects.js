"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  CheckCircle2,
  Clock,
  LayoutGrid,
  X,
  Image as ImageIcon,
  Video,
  Monitor,
} from "lucide-react";
import projectsService from "@/lib/api/services/projects";

/* -------------------------------------------------------------------------- */
/*                              Media utilities                               */
/* -------------------------------------------------------------------------- */

function getMediaUrl(media) {
  if (!media) return "";

  if (typeof media === "string") {
    return media;
  }

  return media.url || media.secure_url || media.src || "";
}

function formatVideoDuration(seconds) {
  if (!Number.isFinite(seconds)) return null;

  const totalSeconds = Math.floor(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  }

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function getAspectRatio(width, height) {
  if (!width || !height) return null;

  const ratio = width / height;

  if (Math.abs(ratio - 16 / 9) < 0.03) return "16:9";
  if (Math.abs(ratio - 4 / 3) < 0.03) return "4:3";
  if (Math.abs(ratio - 3 / 2) < 0.03) return "3:2";
  if (Math.abs(ratio - 1) < 0.03) return "1:1";
  if (Math.abs(ratio - 4 / 5) < 0.03) return "4:5";
  if (Math.abs(ratio - 9 / 16) < 0.03) return "9:16";

  return `${ratio.toFixed(2)}:1`;
}

function useMediaDimensions(imageSrc, videoSrc) {
  const [imageSize, setImageSize] = useState({
    width: null,
    height: null,
    loading: false,
    error: false,
  });

  const [videoSize, setVideoSize] = useState({
    width: null,
    height: null,
    duration: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (!imageSrc) {
      setImageSize({
        width: null,
        height: null,
        loading: false,
        error: false,
      });

      return;
    }

    let active = true;

    setImageSize({
      width: null,
      height: null,
      loading: true,
      error: false,
    });

    const image = new window.Image();

    image.onload = () => {
      if (!active) return;

      setImageSize({
        width: image.naturalWidth,
        height: image.naturalHeight,
        loading: false,
        error: false,
      });
    };

    image.onerror = () => {
      if (!active) return;

      setImageSize({
        width: null,
        height: null,
        loading: false,
        error: true,
      });
    };

    image.src = imageSrc;

    return () => {
      active = false;
      image.onload = null;
      image.onerror = null;
    };
  }, [imageSrc]);

  useEffect(() => {
    if (!videoSrc) {
      setVideoSize({
        width: null,
        height: null,
        duration: null,
        loading: false,
        error: false,
      });

      return;
    }

    let active = true;

    setVideoSize({
      width: null,
      height: null,
      duration: null,
      loading: true,
      error: false,
    });

    const video = document.createElement("video");

    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;

    video.onloadedmetadata = () => {
      if (!active) return;

      setVideoSize({
        width: video.videoWidth,
        height: video.videoHeight,
        duration: Number.isFinite(video.duration) ? video.duration : null,
        loading: false,
        error: false,
      });
    };

    video.onerror = () => {
      if (!active) return;

      setVideoSize({
        width: null,
        height: null,
        duration: null,
        loading: false,
        error: true,
      });
    };

    video.src = videoSrc;
    video.load();

    return () => {
      active = false;

      video.onloadedmetadata = null;
      video.onerror = null;

      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [videoSrc]);

  return {
    imageSize,
    videoSize,
  };
}

/* -------------------------------------------------------------------------- */
/*                             Project utilities                              */
/* -------------------------------------------------------------------------- */

function normalizeStatus(status) {
  const value = String(status || "")
    .trim()
    .toLowerCase();

  if (value === "completed" || value === "complete") {
    return "completed";
  }

  if (
    value === "running" ||
    value === "in-progress" ||
    value === "in progress" ||
    value === "ongoing"
  ) {
    return "in-progress";
  }

  if (value === "upcoming" || value === "pending") {
    return "upcoming";
  }

  return "completed";
}

function isRunningProject(project) {
  return (
    project.status === "in-progress" ||
    project.status === "upcoming" ||
    project.status === "running"
  );
}

function mapProject(project) {
  const category = Array.isArray(project.category)
    ? project.category
    : project.category
      ? [project.category]
      : [];

  const thumbnail = getMediaUrl(project.thumbnail);
  const image = getMediaUrl(project.image);
  const video = getMediaUrl(project.video);

  return {
    id: project._id || project.id,

    thumbnail: thumbnail || image,
    image: image || thumbnail,
    video,

    title: project.title || "",
    subtitle: project.subtitle || "",
    description: project.description || "",
    link: project.link || "",
    year: project.year || "",
    clientName: project.clientName || "",

    category,
    tags: category,

    status: normalizeStatus(project.status),

    challenge: project.challenge || "",
    solution: project.solution || "",
    result: project.result || "",

    longDescription: project.longDescription || "",
    longDescription1: project.longDescription1 || "",
    longDescription2: project.longDescription2 || "",
  };
}

/* -------------------------------------------------------------------------- */
/*                              Projects request                              */
/* -------------------------------------------------------------------------- */

function useProjects() {
  const [state, setState] = useState({
    projects: [],
    loading: true,
    error: null,
  });

  const load = useCallback(() => {
    let active = true;

    setState((previous) => ({
      ...previous,
      loading: true,
      error: null,
    }));

    projectsService
      .list()
      .then((data) => {
        if (!active) return;

        const list = Array.isArray(data)
          ? data
          : (data?.data ?? data?.projects ?? []);

        setState({
          projects: list.map((project) => mapProject(project)),
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        if (!active) return;

        setState((previous) => ({
          ...previous,
          loading: false,
          error: error?.message || "Failed to load projects",
        }));
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    return load();
  }, [load]);

  return {
    ...state,
    reload: load,
  };
}

/* -------------------------------------------------------------------------- */
/*                                Cursor                                      */
/* -------------------------------------------------------------------------- */

function Cursor({ isVisible, position, text }) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-30 rounded-xl bg-accent2 px-4 py-2 text-sm font-medium text-white"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      {text}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Status filter                                 */
/* -------------------------------------------------------------------------- */

const STATUS_FILTERS = [
  {
    key: "all",
    label: "All",
    icon: <LayoutGrid size={13} />,
    activeClass: "bg-white text-gray-900 shadow-md",
  },
  {
    key: "completed",
    label: "Completed",
    icon: <CheckCircle2 size={13} />,
    activeClass: "bg-green-400 text-white shadow-md",
  },
  {
    key: "running",
    label: "Running",
    icon: <Clock size={13} />,
    activeClass: "bg-yellow-400 text-gray-900 shadow-md",
  },
];

function StatusFilterBar({ active, counts, onChange }) {
  return (
    <motion.div
      className="inline-flex items-center gap-1 rounded-2xl bg-gray-100/80 p-1.5 backdrop-blur-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {STATUS_FILTERS.map((filter) => {
        const isActive = active === filter.key;

        return (
          <motion.button
            key={filter.key}
            type="button"
            onClick={() => onChange(filter.key)}
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? filter.activeClass
                : "text-gray-500 hover:bg-white/60 hover:text-gray-800"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {filter.key !== "all" && isActive && (
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                    filter.key === "running" ? "bg-gray-700" : "bg-white"
                  }`}
                />

                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    filter.key === "running" ? "bg-gray-800" : "bg-white"
                  }`}
                />
              </span>
            )}

            {filter.icon}

            {filter.label}

            <span
              className={`min-w-[20px] rounded-full px-1.5 py-0.5 text-center text-xs font-semibold ${
                isActive
                  ? filter.key === "all"
                    ? "bg-gray-100 text-gray-700"
                    : "bg-black/15 text-inherit"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {counts[filter.key]}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Project card                                  */
/* -------------------------------------------------------------------------- */

function ProjectCard({ project, index, onHover, onLeave, onClick }) {
  const videoRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  /*
   * This is the same image source used in the modal.
   */
  const projectImage = project.image || project.thumbnail;

  const hasVideo = Boolean(project.video);
  const showVideo = hasVideo && isHovered && videoReady;

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !hasVideo) return;

    if (isHovered) {
      const playPromise = video.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();

      const resetTimer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
      }, 600);

      return () => clearTimeout(resetTimer);
    }
  }, [isHovered, hasVideo]);

  const handleEnter = () => {
    setIsHovered(true);

    if (hasVideo) {
      setShouldLoadVideo(true);
    }

    onHover?.();
  };

  const handleLeave = () => {
    setIsHovered(false);
    onLeave?.();
  };

  const statusConfig =
    project.status === "completed"
      ? {
          label: "Completed",
          icon: <CheckCircle2 size={11} />,
          className: "bg-green-400 text-white",
        }
      : project.status === "in-progress"
        ? {
            label: "In Progress",
            icon: <Clock size={11} />,
            className: "bg-yellow-400/90 text-gray-900",
          }
        : {
            label: "Upcoming",
            icon: <Clock size={11} />,
            className: "bg-blue-500/90 text-white",
          };

  return (
    <motion.article
      className="group relative mb-12 flex break-inside-avoid flex-col"
      layout
      layoutId={`card-container-${project.id || project.title}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        delay: Math.min(index * 0.08, 0.5),
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        className="
          relative
          h-[300px]
          w-full
          cursor-none
          overflow-hidden
          rounded-xl
          bg-gray-100
          shadow-lg
          md:h-[400px]
          lg:h-[500px]
        "
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={onClick}
        layoutId={`card-image-${project.id || project.title}`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`
            absolute left-3 top-3 z-20
            flex items-center gap-1
            rounded-full px-2.5 py-1
            text-xs font-semibold
            shadow-sm backdrop-blur-sm
            ${statusConfig.className}
          `}
        >
          {statusConfig.icon}
          {statusConfig.label}
        </div>

        {projectImage ? (
          <motion.img
            src={projectImage}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-110
            "
            layoutId={`image-${project.id || project.title}`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
            No image available
          </div>
        )}

        {hasVideo && (
          <video
            ref={videoRef}
            src={shouldLoadVideo ? project.video : undefined}
            poster={projectImage}
            muted
            loop
            playsInline
            preload="none"
            onCanPlay={() => setVideoReady(true)}
            onLoadedData={() => setVideoReady(true)}
            onError={() => setVideoReady(false)}
            className={`
              absolute inset-0 z-[5]
              h-full w-full
              object-cover
              transition-[opacity,transform]
              duration-700
              ease-out
              group-hover:scale-110
              ${showVideo ? "opacity-100" : "opacity-0"}
            `}
          />
        )}

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20 translate-y-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {project.tags?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                <span
                  key={`${tag}-${tagIndex}`}
                  className="rounded-full bg-black/70 px-2 py-1 text-xs text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {project.description && (
            <p className="line-clamp-2 text-base font-light leading-relaxed text-white">
              {project.description}
            </p>
          )}
        </div>
      </motion.div>

      <div className="mt-4 px-2">
        <motion.h3
          className="line-clamp-2 text-lg font-semibold text-gray-900 md:text-xl"
          layoutId={`title-${project.id || project.title}`}
        >
          {project.title}
        </motion.h3>

        <div className="mt-2 h-1 w-8 rounded-full bg-black/40 transition-all duration-500 ease-in-out group-hover:w-16 group-hover:bg-black" />
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                              All projects                                  */
/* -------------------------------------------------------------------------- */

export function AllProjects() {
  const [cursorState, setCursorState] = useState({
    isVisible: false,
    position: {
      x: 0,
      y: 0,
    },
    text: "View Project",
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [activeCategory, setActiveCategory] = useState("All");
  const [statusFilter, setStatusFilter] = useState("all");

  const { projects, loading, error, reload } = useProjects();

  /*
   * The same source is used by both ProjectCard and the modal hero.
   */
  const selectedImageSource =
    selectedProject?.image || selectedProject?.thumbnail || "";

  const { imageSize, videoSize } = useMediaDimensions(
    selectedImageSource,
    selectedProject?.video || "",
  );

  const statusCounts = useMemo(() => {
    const categoryFiltered =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => {
            const categories = Array.isArray(project.category)
              ? project.category
              : [project.category];

            return categories.includes(activeCategory);
          });

    return {
      all: categoryFiltered.length,

      completed: categoryFiltered.filter(
        (project) => project.status === "completed",
      ).length,

      running: categoryFiltered.filter((project) => isRunningProject(project))
        .length,
    };
  }, [projects, activeCategory]);

  const categories = useMemo(() => {
    const categoryCount = projects.reduce((accumulator, project) => {
      const projectCategories = Array.isArray(project.category)
        ? project.category
        : [project.category];

      projectCategories.forEach((category) => {
        if (!category) return;

        accumulator[category] = (accumulator[category] || 0) + 1;
      });

      return accumulator;
    }, {});

    return [
      {
        name: "All",
        count: projects.length,
      },

      ...Object.entries(categoryCount).map(([name, count]) => ({
        name,
        count,
      })),
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let list = projects;

    if (activeCategory !== "All") {
      list = list.filter((project) => {
        const projectCategories = Array.isArray(project.category)
          ? project.category
          : [project.category];

        return projectCategories.includes(activeCategory);
      });
    }

    if (statusFilter === "completed") {
      list = list.filter((project) => project.status === "completed");
    }

    if (statusFilter === "running") {
      list = list.filter((project) => isRunningProject(project));
    }

    return list;
  }, [activeCategory, statusFilter, projects]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorState((previous) => ({
        ...previous,
        position: {
          x: event.clientX,
          y: event.clientY,
        },
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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const handleMouseEnter = () => {
    setCursorState((previous) => ({
      ...previous,
      isVisible: true,
    }));

    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setCursorState((previous) => ({
      ...previous,
      isVisible: false,
    }));

    document.body.style.cursor = "auto";
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);

    document.body.style.cursor = "auto";

    setCursorState((previous) => ({
      ...previous,
      isVisible: false,
    }));
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.cursor = "auto";
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject, handleCloseModal]);

  return (
    <div className="container relative mx-auto min-h-screen px-6 py-20">
      {/* Header */}
      <div className="mb-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="flex-1">
          <div className="mb-4 text-4xl text-gray-900 md:text-6xl">
            Our{" "}
            <span className="logo bg-gradient-to-r from-red-600 to-black bg-clip-text font-bold text-transparent">
              Works
            </span>
          </div>

          <div className="max-w-2xl text-lg font-extralight text-gray-600 md:text-xl">
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
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`group flex w-full items-center justify-between text-left transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">{category.name}</span>

                <motion.span
                  className={`ml-20 min-w-[24px] rounded-full px-2 py-1 text-center text-base font-semibold ${
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

      {/* Status filter */}
      {!loading && !error && projects.length > 0 && (
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <StatusFilterBar
            active={statusFilter}
            counts={statusCounts}
            onChange={setStatusFilter}
          />

          {statusFilter !== "all" && (
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Showing{" "}
              <span className="font-medium text-gray-700">
                {filteredProjects.length}
              </span>{" "}
              {statusFilter === "completed" ? "completed" : "in-progress"}{" "}
              project
              {filteredProjects.length !== 1 ? "s" : ""}
            </motion.p>
          )}
        </div>
      )}

      {/* Custom cursor */}
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
        <div className="columns-1 gap-6 space-y-0 md:columns-2 xl:columns-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="mb-12 break-inside-avoid animate-pulse">
              <div className="h-[300px] w-full rounded-xl bg-gray-100 md:h-[400px] lg:h-[500px]" />

              <div className="mt-4 h-5 w-2/3 rounded bg-gray-100" />

              <div className="mt-2 h-1 w-8 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="mx-auto max-w-md py-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            Couldn&apos;t load projects
          </p>

          <p className="mb-6 text-gray-600">{error}</p>

          <button
            type="button"
            onClick={reload}
            className="inline-flex items-center rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      )}

      {/* No projects */}
      {!loading && !error && projects.length === 0 && (
        <p className="py-16 text-center text-gray-400">
          No projects to show yet.
        </p>
      )}

      {/* Empty filtered state */}
      {!loading &&
        !error &&
        projects.length > 0 &&
        filteredProjects.length === 0 && (
          <motion.div
            className="py-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {statusFilter === "completed" ? (
              <CheckCircle2 size={40} className="mx-auto mb-4 text-gray-200" />
            ) : (
              <Clock size={40} className="mx-auto mb-4 text-gray-200" />
            )}

            <p className="text-gray-400">
              No {statusFilter === "completed" ? "completed" : "in-progress"}{" "}
              projects in this category.
            </p>
          </motion.div>
        )}

      {/* Project grid */}
      {!loading && !error && filteredProjects.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${statusFilter}`}
            className="columns-1 gap-6 space-y-0 md:columns-2 xl:columns-3"
            style={{
              columnFill: "balance",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id || project.title}-${activeCategory}-${statusFilter}`}
                project={project}
                index={index}
                onHover={handleMouseEnter}
                onLeave={handleMouseLeave}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 z-[9998] bg-black/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="fixed inset-0 z-[9999] overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <motion.button
                type="button"
                aria-label="Close project modal"
                className="fixed right-4 top-4 z-[10000] flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700 hover:text-white md:right-6 md:top-6"
                onClick={handleCloseModal}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={20} />

                <span className="hidden text-sm sm:inline">Esc to close</span>
              </motion.button>

              <div className="flex min-h-screen flex-col">
                {/* Hero */}
                <div className="flex flex-1 items-center justify-center p-6 pt-24 md:p-8 md:pt-24">
                  <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
                      {/* Same image size as outer card */}
                      <motion.div
                        className="
                          relative
                          h-[300px]
                          w-full
                          overflow-hidden
                          rounded-2xl
                          bg-black/40
                          shadow-2xl
                          md:h-[400px]
                          lg:h-[500px]
                        "
                        layoutId={`card-image-${
                          selectedProject.id || selectedProject.title
                        }`}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                      >
                        {selectedImageSource ? (
                          <motion.img
                            src={selectedImageSource}
                            alt={selectedProject.title}
                            className="absolute inset-0 h-full w-full object-cover"
                            layoutId={`image-${
                              selectedProject.id || selectedProject.title
                            }`}
                            transition={{
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            No image available
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </motion.div>

                      {/* Project content */}
                      <div className="space-y-6 text-white">
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.3,
                            duration: 0.6,
                          }}
                        >
                          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                            {selectedProject.year && (
                              <span className="rounded bg-white/10 px-2 py-1">
                                {selectedProject.year}
                              </span>
                            )}

                            {selectedProject.year && <span>•</span>}

                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                                selectedProject.status === "completed"
                                  ? "border-green-500/30 bg-green-500/20 text-green-200"
                                  : selectedProject.status === "in-progress"
                                    ? "border-yellow-400/30 bg-yellow-400/20 text-yellow-300"
                                    : "border-blue-400/30 bg-blue-400/20 text-blue-300"
                              }`}
                            >
                              {selectedProject.status === "completed" ? (
                                <CheckCircle2 size={11} />
                              ) : (
                                <Clock size={11} />
                              )}

                              {selectedProject.status === "completed"
                                ? "Completed"
                                : selectedProject.status === "in-progress"
                                  ? "In Progress"
                                  : "Upcoming"}
                            </span>
                          </div>

                          <motion.h1
                            className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
                            layoutId={`title-${
                              selectedProject.id || selectedProject.title
                            }`}
                            transition={{
                              duration: 0.6,
                              ease: "easeInOut",
                            }}
                          >
                            {selectedProject.title}
                          </motion.h1>

                          {selectedProject.subtitle && (
                            <motion.p
                              className="mb-6 mt-3 text-lg font-extralight text-gray-300 md:text-xl"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.4,
                                duration: 0.5,
                              }}
                            >
                              {selectedProject.subtitle}
                            </motion.p>
                          )}

                          {selectedProject.link && (
                            <p className="mb-6 text-lg font-extralight text-gray-300 md:text-xl">
                              <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 transition-colors hover:text-white"
                              >
                                <Globe size={20} />

                                {selectedProject.title}
                              </a>
                            </p>
                          )}
                        </motion.div>

                        {selectedProject.description && (
                          <motion.p
                            className="text-base leading-relaxed text-gray-200 md:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.5,
                              duration: 0.6,
                            }}
                          >
                            {selectedProject.description}
                          </motion.p>
                        )}

                        {selectedProject.tags?.length > 0 && (
                          <motion.div
                            className="flex flex-wrap items-center gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.7,
                              duration: 0.6,
                            }}
                          >
                            {selectedProject.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={`${tag}-${tagIndex}`}
                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
                                whileHover={{
                                  scale: 1.05,
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                }}
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge, solution and result */}
                {(selectedProject.challenge ||
                  selectedProject.solution ||
                  selectedProject.result) && (
                  <motion.div
                    className="border-t border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.6,
                    }}
                  >
                    <div className="mx-auto max-w-7xl">
                      <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-3 md:gap-8">
                        {["challenge", "solution", "result"].map(
                          (key, index) => {
                            if (!selectedProject[key]) return null;

                            return (
                              <motion.div
                                key={key}
                                initial={{
                                  opacity: 0,
                                  y: 20,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  delay: 1.3 + index * 0.1,
                                  duration: 0.6,
                                }}
                              >
                                <h3
                                  className={`mb-3 text-lg font-semibold ${
                                    key === "challenge"
                                      ? "text-purple-400"
                                      : key === "solution"
                                        ? "text-blue-400"
                                        : "text-green-400"
                                  }`}
                                >
                                  {key.charAt(0).toUpperCase() + key.slice(1)}
                                </h3>

                                <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                                  {selectedProject[key]}
                                </p>
                              </motion.div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Showcase image */}
                {selectedImageSource && (
                  <motion.div
                    className="border-t border-white/10 bg-white/5 px-6 py-10 backdrop-blur-sm md:px-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.5,
                      duration: 0.6,
                    }}
                  >
                    <div className="mx-auto max-w-7xl">
                      <h3 className="mb-4 text-lg font-bold text-white md:text-xl">
                        Project showcase
                      </h3>

                      <div className="relative overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
                        <img
                          src={selectedImageSource}
                          alt={`${selectedProject.title} showcase`}
                          loading="lazy"
                          className="max-h-[600px] w-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Long descriptions */}
                <motion.div
                  className="border-t border-white/10 bg-white/5 px-6 py-10 backdrop-blur-sm md:px-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.7,
                    duration: 0.6,
                  }}
                >
                  <motion.div
                    className="container mx-auto mb-12 flex flex-col gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.55,
                      duration: 0.6,
                    }}
                  >
                    {selectedProject.tags?.length > 0 && (
                      <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.7,
                          duration: 0.6,
                        }}
                      >
                        <div className="mb-3 mt-4 text-lg font-bold text-white md:text-xl">
                          What we did:
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          {selectedProject.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={`${tag}-${tagIndex}`}
                              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
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
                    )}

                    {selectedProject.longDescription && (
                      <motion.div
                        className="container mx-auto space-y-6 rounded-2xl bg-black/40 px-4 py-8 shadow-lg backdrop-blur md:px-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3,
                          duration: 0.6,
                        }}
                      >
                        <motion.h2
                          className="text-2xl font-bold text-white md:text-3xl"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.4,
                            duration: 0.5,
                          }}
                        >
                          About {selectedProject.title}
                        </motion.h2>

                        <motion.div
                          className="space-y-2"
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.5,
                            duration: 0.5,
                          }}
                        >
                          <h3 className="text-lg font-extrabold text-gray-300 md:text-xl">
                            {selectedProject.title}
                          </h3>

                          <p className="text-justify text-base leading-relaxed text-gray-200 md:text-lg">
                            {selectedProject.longDescription}
                          </p>
                        </motion.div>

                        {selectedProject.longDescription1 && (
                          <motion.div
                            className="space-y-2"
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.6,
                              duration: 0.5,
                            }}
                          >
                            <h3 className="text-lg font-extrabold text-gray-300 md:text-xl">
                              Our Approach &amp; Solution
                            </h3>

                            <p className="text-justify text-base leading-relaxed text-gray-200 md:text-lg">
                              {selectedProject.longDescription1}
                            </p>
                          </motion.div>
                        )}

                        {selectedProject.longDescription2 && (
                          <motion.div
                            className="space-y-2"
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.7,
                              duration: 0.5,
                            }}
                          >
                            <h3 className="text-lg font-extrabold text-gray-300 md:text-xl">
                              Results &amp; Impact
                            </h3>

                            <p className="text-justify text-base leading-relaxed text-gray-200 md:text-lg">
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
