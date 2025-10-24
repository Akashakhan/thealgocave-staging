import React, { useEffect, useRef } from 'react';

// Dither Pattern Generator - Vanilla JavaScript
// Generated from Figma Make Halftone Studio

interface DitherSettings {
  density: number;
  size: number;
  intensity: number;
  speed: number;
  algorithm: string;
  pattern: string;
  threshold: number;
  animationSpeed: number;
  backgroundColor: string;
  foregroundColor: string;
  isAnimated: boolean;
  mouseInteractive?: boolean;
}

class DitherPattern {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    animationId: number | null;
    startTime: number;
    settings: DitherSettings;
    mouse: { x: number; y: number };

    constructor(canvasId: string, options: Partial<DitherSettings> = {}) {
      this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d')!;
      this.animationId = null;
      this.startTime = Date.now();
      this.mouse = { x: 0, y: 0 };
      
      // Pattern settings (current configuration)
      this.settings = {
        density: 50,
        size: 32,
        intensity: 80,
        speed: 2.8,
        algorithm: 'ordered',
        pattern: 'fractal',
        threshold: 0.35,
        animationSpeed: 1,
        backgroundColor: '#000000',
        foregroundColor: '#ffffff',
        isAnimated: true,
        ...options
      };
      
      this.init();
    }
    
    init() {
      this.resizeCanvas();
      this.bindEvents();
      this.animate();
    }
    
    resizeCanvas() {
      const rect = this.canvas.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }
    
    bindEvents() {
      window.addEventListener('resize', () => this.resizeCanvas());
      
      if (this.settings.mouseInteractive) {
        this.canvas.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = this.canvas.getBoundingClientRect();
          this.mouse.x = e.clientX - rect.left;
          this.mouse.y = e.clientY - rect.top;
        });
      }
    }
    
    generatePattern(x: number, y: number, time: number) {
      const { settings } = this;
      const normalizedX = x / this.canvas.width;
      const normalizedY = y / this.canvas.height;
      
      let patternValue = 0;
      
      switch (settings.pattern) {
        case 'gradient':
          patternValue = normalizedX;
          break;
        case 'radial':
          const centerX = 0.5;
          const centerY = 0.5;
          const distance = Math.sqrt((normalizedX - centerX) ** 2 + (normalizedY - centerY) ** 2);
          patternValue = 1 - Math.min(distance * 2, 1);
          break;
        case 'noise':
          patternValue = Math.random();
          break;
        case 'spiral':
          const angle = Math.atan2(normalizedY - 0.5, normalizedX - 0.5);
          const radius = Math.sqrt((normalizedX - 0.5) ** 2 + (normalizedY - 0.5) ** 2);
          patternValue = (Math.sin(angle * 3 + radius * 10) + 1) / 2;
          break;
        case 'waves':
          patternValue = (Math.sin(normalizedX * Math.PI * 4) + Math.sin(normalizedY * Math.PI * 4) + 2) / 4;
          break;
        case 'fractal':
          // Create a fractal-like pattern using multiple sine waves
          const fractal1 = Math.sin(normalizedX * Math.PI * 8) * Math.sin(normalizedY * Math.PI * 8);
          const fractal2 = Math.sin(normalizedX * Math.PI * 16) * Math.sin(normalizedY * Math.PI * 16) * 0.5;
          const fractal3 = Math.sin(normalizedX * Math.PI * 32) * Math.sin(normalizedY * Math.PI * 32) * 0.25;
          patternValue = (fractal1 + fractal2 + fractal3 + 2) / 4;
          break;
        default:
          patternValue = normalizedX;
      }
      
      // Add animation
      if (settings.isAnimated) {
        const animationOffset = Math.sin(time * 0.001 * settings.animationSpeed) * 0.2;
        patternValue = Math.max(0, Math.min(1, patternValue + animationOffset));
      }
      
      return patternValue;
    }
    
    applyDithering(patternValue: number) {
      const { threshold } = this.settings;
      return patternValue > threshold ? 1 : 0;
    }
    
    draw() {
      const { canvas, ctx, settings } = this;
      const time = Date.now() - this.startTime;
      
      // Clear canvas
      ctx.fillStyle = settings.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Make pixel size and step responsive to canvas dimensions
      const minDimension = Math.min(canvas.width, canvas.height);
      const basePixelSize = Math.max(1, minDimension / 200); // Much smaller base pixel size
      const pixelSize = Math.max(basePixelSize * settings.size / 100, 1);
      const step = Math.max(1, pixelSize);
      
      ctx.fillStyle = settings.foregroundColor;
      
      for (let x = 0; x < canvas.width; x += step) {
        for (let y = 0; y < canvas.height; y += step) {
          const patternValue = this.generatePattern(x, y, time);
          const shouldDraw = this.applyDithering(patternValue);
          
          if (shouldDraw) {
            ctx.fillRect(x, y, pixelSize, pixelSize);
          }
        }
      }
    }
    
    animate() {
      this.draw();
      this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
    }
    
    updateSettings(newSettings: Partial<DitherSettings>) {
      this.settings = { ...this.settings, ...newSettings };
    }
  }

interface DitherPatternComponentProps {
  density?: number;
  size?: number;
  intensity?: number;
  speed?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  isAnimated?: boolean;
  algorithm?: string;
  pattern?: string;
  threshold?: number;
  animationSpeed?: number;
  mouseInteractive?: boolean;
}

const DitherPatternComponent: React.FC<DitherPatternComponentProps> = ({ 
  density = 50,
  size = 32,
  intensity = 80,
  speed = 2.8,
  backgroundColor = '#000000',
  foregroundColor = '#ffffff',
  isAnimated = true,
  algorithm = 'ordered',
  pattern = 'fractal',
  threshold = 0.35,
  animationSpeed = 1,
  mouseInteractive = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const patternRef = useRef<DitherPattern | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Create unique ID for canvas
      const canvasId = 'dither-' + Math.random().toString(36).substr(2, 9);
      canvasRef.current.id = canvasId;
      
      // Initialize pattern
      patternRef.current = new DitherPattern(canvasId, {
        density,
        size,
        intensity,
        speed,
        backgroundColor,
        foregroundColor,
        isAnimated,
        algorithm,
        pattern,
        threshold,
        animationSpeed
      });
    }

    return () => {
      if (patternRef.current) {
        patternRef.current.destroy();
      }
    };
  }, [density, size, intensity, speed, backgroundColor, foregroundColor, isAnimated, algorithm, pattern, threshold, animationSpeed]);

  useEffect(() => {
    if (patternRef.current) {
      patternRef.current.updateSettings({
        density,
        size,
        intensity,
        speed,
        backgroundColor,
        foregroundColor,
        isAnimated,
        algorithm,
        pattern,
        threshold,
        animationSpeed,
        mouseInteractive
      });
    }
  }, [density, size, intensity, speed, backgroundColor, foregroundColor, isAnimated, algorithm, pattern, threshold, animationSpeed, mouseInteractive]);

  // Add resize observer for better responsiveness
  useEffect(() => {
    if (!containerRef.current || !patternRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (patternRef.current) {
        patternRef.current.resizeCanvas();
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative dither-container"
    >
      <canvas
        ref={canvasRef}
        className="dither-canvas w-full h-full block"
      />
    </div>
  );
};

export default DitherPatternComponent;

// Usage:
// <DitherPatternComponent 
//   density={60} 
//   pattern="radial"
// />