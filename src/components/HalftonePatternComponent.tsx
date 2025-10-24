"use client";
import React, { useEffect, useRef } from 'react';

// Halftone Pattern Generator - Vanilla JavaScript
// Generated from Figma Make Halftone Studio

interface HalftonePatternSettings {
  density: number;
  size: number;
  intensity: number;
  speed: number;
  dotShape: 'circle' | 'triangle' | 'square' | 'diamond' | 'ordered';
  animationEffect: string;
  backgroundColor: string;
  foregroundColor: string;
  threshold: number;
  isAnimated: boolean;
  mouseInteractive: boolean;
  morphing: boolean;
}

interface MousePosition {
  x: number;
  y: number;
}

class HalftonePattern {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private mouse: MousePosition;
  private animationId: number | null;
  private startTime: number;
  private settings: HalftonePatternSettings;

  constructor(canvasId: string, options: Partial<HalftonePatternSettings> = {}) {
    const canvasElement = document.getElementById(canvasId);
    if (!canvasElement || !(canvasElement instanceof HTMLCanvasElement)) {
      throw new Error(`Canvas element with id "${canvasId}" not found`);
    }
    this.canvas = canvasElement;
    
    const context = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get 2D rendering context');
    }
    this.ctx = context;
    this.mouse = { x: 0, y: 0 };
    this.animationId = null;
    this.startTime = Date.now();
    
    // Pattern settings (current configuration)
    this.settings = {
      density: 50,
      size: 32,
      intensity: 80,
      speed: 2.8,
      dotShape: 'ordered',
      animationEffect: 'fractal',
      backgroundColor: '#000000',
      foregroundColor: '#ffffff',
      threshold: 0.36,
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
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
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
    
    const spacing = Math.max(10, 100 - settings.density);
    const dotSize = Math.max(1, settings.size * 0.3);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
    
    for (let x = 0; x < canvas.width + spacing; x += spacing) {
      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        
        // Mouse interaction
        let mouseInfluence = 1;
        if (settings.mouseInteractive) {
          const mouseDist = Math.sqrt((x - this.mouse.x) ** 2 + (y - this.mouse.y) ** 2);
          mouseInfluence = 1 + Math.max(0, (100 - mouseDist) / 100) * 2;
        }
        
        // Animation
        let animationFactor = 1;
        if (settings.isAnimated) {
          animationFactor = 0.5 + 0.5 * Math.sin(time * 0.003 * settings.speed + distance * 0.01);
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
  dotShape?: 'circle' | 'triangle' | 'square' | 'diamond' | 'ordered';
  animationEffect?: string;
  mouseInteractive?: boolean;
  morphing?: boolean;
}

const HalftonePatternComponent: React.FC<HalftonePatternComponentProps> = ({ 
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

  useEffect(() => {
    if (canvasRef.current) {
      // Create unique ID for canvas
      const canvasId = 'halftone-' + Math.random().toString(36).substr(2, 9);
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

  return (
    <canvas
      ref={canvasRef}
      className="halftone-canvas"
    />
  );
};

export default HalftonePatternComponent;
