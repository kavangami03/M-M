"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Copyright, Cpu, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

const CERTIFICATES = [
  {
    icon: Cpu,
    title: "MySTI Certified",
    desc: "Malaysia Scientific & Technology Innovation",
    file: "/mysti-certificate.png",
    badge: "Official Certificate"
  },
  {
    icon: Copyright,
    title: "Copyright Registered",
    desc: "Voluntary Copyright Notification (CRLY2023W00694)",
    file: "/copyright-certificate-full.jpg",
    badge: "Voluntary Notification"
  },
];

export default function Certificates() {
  const [active, setActive] = useState<(typeof CERTIFICATES)[number] | null>(null);
  const [zoom, setZoom] = useState(1);

  const close = () => setActive(null);
  const clampZoom = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
  const resetZoom = () => setZoom(1);

  // Reset zoom each time a new certificate is opened
  useEffect(() => {
    setZoom(1);
  }, [active]);

  // Lock body scroll + keyboard shortcuts while the lightbox is open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "+" || e.key === "=") setZoom((z) => clampZoom(z + ZOOM_STEP));
      if (e.key === "-") setZoom((z) => clampZoom(z - ZOOM_STEP));
      if (e.key === "0") resetZoom();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-[1520px]">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2">
            Recognized & Certified
          </h3>
          <h2 className="text-3xl font-bold font-heading text-foreground">
            Built to Government Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATES.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative h-full"
              >
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  className="w-full h-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-between text-center group hover:shadow-premium hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 cursor-pointer relative min-h-[220px]"
                >
                  {cert.badge && (
                    <div className="absolute top-3 right-3 text-[9px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{cert.badge}</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center w-full">
                    <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-primary/5 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary/90 transition-colors" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors text-lg">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground mb-4 max-w-[280px]">{cert.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-primary group-hover:underline flex items-center gap-1">
                    View Certificate →
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Zoom controls */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm p-1"
            >
              <button
                type="button"
                onClick={() => setZoom((z) => clampZoom(z - ZOOM_STEP))}
                disabled={zoom <= MIN_ZOOM}
                aria-label="Zoom out"
                className="w-9 h-9 rounded-full text-white flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="min-w-[3rem] text-center text-xs font-semibold text-white tabular-nums select-none">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => clampZoom(z + ZOOM_STEP))}
                disabled={zoom >= MAX_ZOOM}
                aria-label="Zoom in"
                className="w-9 h-9 rounded-full text-white flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={resetZoom}
                disabled={zoom === MIN_ZOOM}
                aria-label="Reset zoom"
                className="w-9 h-9 rounded-full text-white flex items-center justify-center hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <motion.figure
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                setZoom((z) => clampZoom(z + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP)));
              }}
              className="relative max-w-4xl w-full flex flex-col items-center"
            >
              <div className="overflow-hidden rounded-lg max-h-[80vh] w-full flex items-center justify-center">
                <motion.img
                  src={active.file}
                  alt={active.title}
                  draggable={false}
                  drag={zoom > 1}
                  dragConstraints={{
                    left: -((zoom - 1) * 400),
                    right: (zoom - 1) * 400,
                    top: -((zoom - 1) * 300),
                    bottom: (zoom - 1) * 300,
                  }}
                  dragElastic={0.05}
                  onDoubleClick={() =>
                    setZoom((z) => (z > 1 ? 1 : 2))
                  }
                  animate={{ scale: zoom }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  style={{ cursor: zoom > 1 ? "grab" : "zoom-in" }}
                  className="max-h-[80vh] w-auto max-w-full select-none rounded-lg shadow-2xl object-contain bg-white"
                />
              </div>
              <figcaption className="mt-4 text-center text-white">
                <p className="font-bold text-base">{active.title}</p>
                <p className="text-xs text-white/70">{active.desc}</p>
                <p className="mt-1 text-[11px] text-white/40">
                  Scroll or use + / − to zoom · double-click to toggle · drag to pan
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
