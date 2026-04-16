"use client";

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes zoom {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }

      .animate-slide-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }

      .animate-slide-right {
        animation: slideInRight 0.8s ease-out forwards;
      }

      .animate-pulse {
        animation: pulse 2s ease-in-out infinite;
      }

      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 5s ease infinite;
      }

      .animate-zoom {
        animation: zoom 20s ease-in-out infinite;
      }

      .reveal {
        opacity: 0;
      }

      .container-app {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .shimmer-effect {
        position: relative;
        overflow: hidden;
      }

      .shimmer-effect::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.3),
          transparent
        );
        animation: shimmer 3s infinite;
      }

      .stat-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
        opacity: 0;
      }

      .hero-bg-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: zoom 20s ease-in-out infinite;
      }

      .stuck-logo {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
        transition: all 0.3s ease;
      }

      .stuck-logo img {
        height: 60px;
        width: auto;
        filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
        transition: transform 0.3s ease;
        border-radius: 12px;
      }

      .stuck-logo:hover img {
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        .stuck-logo img {
          height: 50px;
        }
      }
    `}</style>
  );
}
