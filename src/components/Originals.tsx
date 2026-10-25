import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';

/**
 * ORIGINALS — on desktop the section pins and scrolls sideways like a title sequence.
 * On touch / small screens / reduced motion it becomes a native swipe rail.
 */
export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();
  return desktop && !reduced ? <PinnedOriginals onOpen={onOpen} /> : <RailOriginals onOpen={onOpen} />;
}

function Intro() {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
      <p className="mb-2 sm:mb-3 flex items-center gap-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
        <span className="h-px w-8 bg-crimson-2" /> {projects.length} Originals · {projects[0].year}
      </p>
      <RevealText as="h2" text="ORIGINALS" className="font-display text-[clamp(2.8rem,8vw,8rem)] leading-[0.85] text-bone" />
      <p className="mt-3 sm:mt-4 max-w-sm text-sm sm:text-[15px] leading-relaxed text-mist">
        Three productions from the resume — high-throughput lending LMS, UPI/NACH settlement engine and BikeDone platform. Open any title for the full story.
      </p>
      <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">SCROLL TO BROWSE →</p>
    </div>
  );
}

function Outro() {
  return (
    <a
      href={profile.links.github}
      target="_blank"
      rel="noreferrer"
      data-cursor="link"
      className="group flex min-h-[460px] w-[70vw] max-w-[340px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 p-6 text-center transition hover:border-crimson-2/60 sm:min-h-0 sm:aspect-[3/4] sm:w-[44vw] sm:max-w-none lg:aspect-auto lg:h-[66vh] lg:w-[24vw]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-2xl text-bone transition group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2">↗</span>
      <span className="font-display text-3xl tracking-wide text-bone">More on GitHub</span>
      <span className="break-all text-xs text-mist">{profile.links.github.replace('https://', '')}</span>
    </a>
  );
}

function PinnedOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const distMV = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const d = Math.max(0, track.current.scrollWidth - window.innerWidth);
      setDist(d);
      distMV.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener('resize', measure);
    document.fonts?.ready?.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distMV]);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });

  // Map scroll progress directly without laggy spring: cards reach their final position at p = 0.88,
  // giving the user a resting pause to view the outro before unpinning.
  const x = useTransform([scrollYProgress, distMV], ([p, d]: number[]) => {
    const progress = Math.min(1, Math.max(0, p / 0.88));
    return -progress * d;
  });
  const bar = useTransform(scrollYProgress, (p) => Math.min(1, Math.max(0, p / 0.88)));

  return (
    <div ref={wrap} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]" />
        <motion.div ref={track} style={{ x }} className="gutter relative flex items-center gap-8 pr-[12vw]" data-cursor="drag">
          <Intro />
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
          ))}
          <Outro />
        </motion.div>
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">ORIGINALS</span>
          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div className="h-full origin-left bg-crimson" style={{ scaleX: bar }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RailOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <div className="py-6">
      <div className="gutter mb-6">
        <Intro />
      </div>
      <motion.div
        className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
        ))}
        <Outro />
      </motion.div>
    </div>
  );
}
