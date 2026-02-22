/**
 * Motion Components
 *
 * Enterprise-grade animation primitives using Motion library.
 * All animations use React 19's concurrent features for smooth 60fps rendering.
 *
 * Usage:
 *   <FadeIn>Content</FadeIn>
 *   <SlideIn direction="up">Content</SlideIn>
 *   <ScaleIn>Content</ScaleIn>
 *   <StaggerContainer><StaggerItem>...</StaggerItem></StaggerContainer>
 */

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode, type ComponentPropsWithoutRef } from "react";

// ============================================
// ANIMATION PRESETS
// ============================================

/**
 * Easing curves - matches CSS variables in index.css
 * Use consistent easing across all animations
 */
export const easings = {
  // Smooth deceleration - great for entrances
  easeOut: [0.16, 1, 0.3, 1] as const,
  // Natural spring-like motion
  spring: { type: "spring", stiffness: 400, damping: 30 } as const,
  // Bouncy for playful elements
  bounce: { type: "spring", stiffness: 500, damping: 15 } as const,
} as const;

/**
 * Duration presets (in seconds)
 */
export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const;

// ============================================
// FADE IN COMPONENT
// ============================================

interface FadeInProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = durations.normal,
  once = true,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easings.easeOut,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SLIDE IN COMPONENT
// ============================================

interface SlideInProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  duration = durations.normal,
  distance = 30,
  once = true,
  ...props
}: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionValues = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionValues[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easings.easeOut,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SCALE IN COMPONENT
// ============================================

interface ScaleInProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = durations.normal,
  once = true,
  ...props
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easings.easeOut,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER CONTAINER + ITEM
// ============================================

interface StaggerContainerProps extends ComponentPropsWithoutRef<
  typeof motion.div
> {
  children: ReactNode;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  once = true,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: durations.normal,
            ease: easings.easeOut,
          },
        },
      };

  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}

// ============================================
// HOVER LIFT COMPONENT
// ============================================

interface HoverLiftProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  lift?: number;
}

export function HoverLift({ children, lift = 4, ...props }: HoverLiftProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -lift }}
      transition={easings.spring}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// PRESS SCALE COMPONENT
// ============================================

interface PressScaleProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  scale?: number;
}

export function PressScale({
  children,
  scale = 0.98,
  ...props
}: PressScaleProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileTap={shouldReduceMotion ? {} : { scale }}
      transition={easings.spring}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// PARALLAX COMPONENT
// ============================================

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: false, margin: "0px 0px -200px 0px" }}
      transition={{
        duration: durations.slower,
        ease: easings.easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// RE-EXPORTS
// ============================================

export { motion, useReducedMotion };
