'use client';

import React, { useEffect, useRef } from 'react';

// Halftone Pattern Generator - TypeScript
// Generated from Figma Make Halftone Studio

interface HalftonePatternSettings {
  density: number;
  size: number;
  intensity: number;
  speed: number;
  dotShape: string;
  animationEffect: string;
  backgroundColor: string;
  foregroundColor: string;
  isAnimated: boolean;
  mouseInteractive: boolean;
  morphing: boolean;
}

class HalftonePattern {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouse: { x: number; y: number };
  animationId: number | null;
  startTime: number;
  settings: HalftonePatternSettings;

  constructor(canvasId: string, options: Partial<HalftonePatternSettings> = {}) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
      throw new Error(`Canvas with id ${canvasId} not found`);
    }
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d')!;
    this.mouse = { x: 0, y: 0 };
    this.animationId = null;
    this.startTime = Date.now();
    
    // Pattern settings (current configuration)
    this.settings = {
      density: 35,
      size: 35,
      intensity: 65,
      speed: 1.2,
      dotShape: 'circle',
      animationEffect: 'wave',
      backgroundColor: '#000000',
      foregroundColor: '#ffffff',
      isAnimated: true,
      mouseInteractive: true,
      morphing: false,
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
  
  drawShape(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, shape: string) {
    ctx.save();
    ctx.translate(x, y);
    
    switch (shape) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'square':
        ctx.fillRect(-size / 2, -size / 2, size, size);
        break;
        
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(-size / 2, size / 2);
        ctx.lineTo(size / 2, size / 2);
        ctx.closePath();
        ctx.fill();
        break;
        
      case 'diamond':
        ctx.beginPath();
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 2, 0);
        ctx.lineTo(0, size / 2);
        ctx.lineTo(-size / 2, 0);
        ctx.closePath();
        ctx.fill();
        break;
    }
    
    ctx.restore();
  }
  
  draw() {
    const { canvas, ctx, settings } = this;
    const time = Date.now() - this.startTime;
    
    // Clear canvas
    ctx.fillStyle = settings.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Make spacing and dot size responsive to canvas dimensions
    const minDimension = Math.min(canvas.width, canvas.height);
    const baseSpacing = minDimension / 20; // Base spacing relative to smallest dimension
    const spacing = Math.max(baseSpacing * (100 - settings.density) / 100, minDimension / 50);
    const baseDotSize = minDimension / 30; // Base dot size relative to smallest dimension
    const dotSize = Math.max(baseDotSize * settings.size / 100, minDimension / 100);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
    
    for (let x = 0; x < canvas.width + spacing; x += spacing) {
      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        
        // Mouse interaction - scale with canvas size
        let mouseInfluence = 1;
        if (settings.mouseInteractive) {
          const mouseDist = Math.sqrt((x - this.mouse.x) ** 2 + (y - this.mouse.y) ** 2);
          const mouseRadius = minDimension / 10; // Mouse influence radius scales with canvas
          mouseInfluence = 1 + Math.max(0, (mouseRadius - mouseDist) / mouseRadius) * 2;
        }
        
        // Animation - scale frequency with canvas size
        let animationFactor = 1;
        if (settings.isAnimated) {
          const animationScale = minDimension / 1000; // Scale animation frequency
          animationFactor = 0.5 + 0.5 * Math.sin(time * 0.003 * settings.speed + distance * 0.01 * animationScale);
        }
        
        // Calculate final size
        const intensity = settings.intensity / 100;
        const gradientFactor = 1 - (distance / maxDistance) * intensity;
        const finalSize = dotSize * gradientFactor * animationFactor * mouseInfluence;
        
        if (finalSize > 0.5) {
          ctx.fillStyle = settings.foregroundColor;
          this.drawShape(ctx, x, y, finalSize, settings.dotShape);
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
  
  updateSettings(newSettings: Partial<HalftonePatternSettings>) {
    this.settings = { ...this.settings, ...newSettings };
  }
}

interface HalftonePatternComponentProps {
  density?: number;
  size?: number;
  intensity?: number;
  speed?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  isAnimated?: boolean;
  dotShape?: 'circle' | 'triangle' | 'square' | 'diamond';
  animationEffect?: string;
  mouseInteractive?: boolean;
  morphing?: boolean;
}

const HalftoneBackground: React.FC<HalftonePatternComponentProps> = ({ 
  density = 35,
  size = 35,
  intensity = 65,
  speed = 1.2,
  backgroundColor = '#000000',
  foregroundColor = '#ffffff',
  isAnimated = true,
  dotShape = 'circle',
  animationEffect = 'wave',
  mouseInteractive = true,
  morphing = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const patternRef = useRef<HalftonePattern | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Create unique ID for canvas
      const canvasId = 'halftone-bg-' + Math.random().toString(36).substr(2, 9);
      canvasRef.current.id = canvasId;
      
      // Initialize pattern
      patternRef.current = new HalftonePattern(canvasId, {
        density,
        size,
        intensity,
        speed,
        backgroundColor,
        foregroundColor,
        isAnimated,
        dotShape,
        animationEffect,
        mouseInteractive,
        morphing
      });
    }

    return () => {
      if (patternRef.current) {
        patternRef.current.destroy();
      }
    };
  }, [density, size, intensity, speed, backgroundColor, foregroundColor, isAnimated, dotShape, animationEffect, mouseInteractive, morphing]);

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
        dotShape,
        animationEffect,
        mouseInteractive,
        morphing
      });
    }
  }, [density, size, intensity, speed, backgroundColor, foregroundColor, isAnimated, dotShape, animationEffect, mouseInteractive, morphing]);

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

  const handleAnimationEffect = (effect: string) => {
    if (patternRef.current) {
      patternRef.current.updateSettings({ animationEffect: effect });
    }
  };

  const handleDotShape = (shape: string) => {
    if (patternRef.current) {
      patternRef.current.updateSettings({ dotShape: shape });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative halftone-background"
      style={{
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        background: '#000000',
        fontFamily: "'Courier New', monospace"
      }}
    >
      <canvas
        ref={canvasRef}
        className="halftone-canvas w-full h-full block"
        style={{
          display: 'block',
          width: '100vw',
          height: '100vh'
        }}
      />
      
      {/* Controls Panel */}
      <div 
        className="controls"
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          background: 'rgba(0, 0, 0, 0.9)',
          padding: '15px',
          borderRadius: '10px',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          backdropFilter: 'blur(10px)',
          zIndex: 10
        }}
      >
        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Halftone Pattern</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#ccc' }}>Animation Effects:</h4>
          <button 
            onClick={() => handleAnimationEffect('wave')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Wave
          </button>
          <button 
            onClick={() => handleAnimationEffect('pulse')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Pulse
          </button>
          <button 
            onClick={() => handleAnimationEffect('spiral')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Spiral
          </button>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#ccc' }}>Dot Shapes:</h4>
          <button 
            onClick={() => handleDotShape('circle')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Circle
          </button>
          <button 
            onClick={() => handleDotShape('square')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Square
          </button>
          <button 
            onClick={() => handleDotShape('triangle')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Triangle
          </button>
          <button 
            onClick={() => handleDotShape('diamond')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              margin: '5px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0056b3'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#007bff'}
          >
            Diamond
          </button>
        </div>
      </div>
    </div>
  );
};

export default HalftoneBackground;