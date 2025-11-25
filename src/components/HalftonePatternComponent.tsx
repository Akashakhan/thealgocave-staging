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
  animationEffect: 'fractal' | 'noise' | 'waves' | 'pulse' | 'flow' | 'sparkle' | 'ripple' | 'swirl' | 'spin' | 'twinkle' | 'flicker' | 'orbit' | 'tornado' | 'quantum_entanglement';
  backgroundColor: string;
  foregroundColor: string;
  threshold: number;
  isAnimated: boolean;
  mouseInteractive: boolean;
  morphing: boolean;
  strokeOnly?: boolean;
  strokeWidth?: number;
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
  
  drawShape(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, shape: string, strokeOnly: boolean = false, strokeWidth: number = 1, strokeColor?: string) {
    ctx.save();
    ctx.translate(x, y);
    
    if (strokeOnly && strokeColor) {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
    }
    
    switch (shape) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        if (strokeOnly) {
          ctx.stroke();
        } else {
          ctx.fill();
        }
        break;
        
      case 'square':
        if (strokeOnly) {
          ctx.strokeRect(-size / 2, -size / 2, size, size);
        } else {
          ctx.fillRect(-size / 2, -size / 2, size, size);
        }
        break;
        
      case 'triangle':
        ctx.beginPath();
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(-size / 2, size / 2);
        ctx.lineTo(size / 2, size / 2);
        ctx.closePath();
        if (strokeOnly) {
          ctx.stroke();
        } else {
          ctx.fill();
        }
        break;
        
      case 'diamond':
        ctx.beginPath();
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 2, 0);
        ctx.lineTo(0, size / 2);
        ctx.lineTo(-size / 2, 0);
        ctx.closePath();
        if (strokeOnly) {
          ctx.stroke();
        } else {
          ctx.fill();
        }
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
        const angle = Math.atan2(y - centerY, x - centerX);
        
        // Mouse interaction
        let mouseInfluence = 1;
        if (settings.mouseInteractive) {
          const mouseDist = Math.sqrt((x - this.mouse.x) ** 2 + (y - this.mouse.y) ** 2);
          mouseInfluence = 1 + Math.max(0, (100 - mouseDist) / 100) * 2;
        }
        
        // Animation based on effect type
        let animationFactor = 1;
        if (settings.isAnimated) {
          animationFactor = this.getAnimationFactor(time, distance, angle, x, y, centerX, centerY);
        }
        
        // Calculate final size
        const intensity = settings.intensity / 100;
        const gradientFactor = 1 - (distance / maxDistance) * intensity;
        const finalSize = dotSize * gradientFactor * animationFactor * mouseInfluence;
        
        if (finalSize > 0.5) {
          if (settings.strokeOnly) {
            ctx.strokeStyle = settings.foregroundColor;
          } else {
            ctx.fillStyle = settings.foregroundColor;
          }
          this.drawShape(
            ctx, 
            x, 
            y, 
            finalSize, 
            settings.dotShape,
            settings.strokeOnly || false,
            settings.strokeWidth || 1,
            settings.foregroundColor
          );
        }
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAnimationFactor(time: number, distance: number, angle: number, x: number, y: number, _centerX: number, _centerY: number): number {
    const speed = this.settings.speed;
    const timeFactor = time * 0.003 * speed;
    
    switch (this.settings.animationEffect) {
      case 'orbit':
        // Orbital motion - dots move in circular patterns
        return 0.5 + 0.5 * Math.sin(timeFactor + angle * 2);
        
      case 'pulse':
        // Pulsing effect - all dots pulse together
        return 0.3 + 0.7 * Math.sin(timeFactor * 2);
        
      case 'ripple':
        // Ripple effect - concentric waves
        return 0.5 + 0.5 * Math.sin(timeFactor * 3 - distance * 0.02);
        
      case 'swirl':
        // Swirling effect - spiral motion
        return 0.5 + 0.5 * Math.sin(timeFactor + angle + distance * 0.01);
        
      case 'waves':
        // Wave effect - horizontal waves
        return 0.5 + 0.5 * Math.sin(timeFactor + x * 0.02);
        
      case 'noise':
        // Noise effect - random-like but deterministic
        return 0.3 + 0.7 * Math.sin(timeFactor * 5 + x * 0.1 + y * 0.1);
        
      case 'sparkle':
        // Sparkle effect - twinkling dots
        return 0.2 + 0.8 * Math.sin(timeFactor * 4 + distance * 0.03) * Math.sin(timeFactor * 7);
        
      case 'fractal':
        // Fractal-like recursive pattern
        return 0.4 + 0.6 * Math.sin(timeFactor + Math.sin(distance * 0.01) * 3);
        
      case 'spin':
        // Spinning effect - rotation around center
        return 0.5 + 0.5 * Math.sin(timeFactor * 2 + angle * 3);
        
      case 'twinkle':
        // Twinkling stars effect
        return 0.1 + 0.9 * Math.sin(timeFactor * 6 + distance * 0.05) * Math.sin(timeFactor * 8 + angle);
        
      case 'flicker':
        // Flickering effect
        return 0.2 + 0.8 * Math.sin(timeFactor * 10 + x * 0.05 + y * 0.05);
        
      case 'flow':
        // Flowing effect - directional movement
        return 0.5 + 0.5 * Math.sin(timeFactor + x * 0.01 + y * 0.01);
        
      case 'tornado':
        // Tornado effect - spiral motion with vertical component
        const spiralFactor = Math.sin(timeFactor + angle * 3 + distance * 0.02);
        const verticalFactor = Math.sin(timeFactor * 2 + distance * 0.01);
        return 0.3 + 0.7 * spiralFactor * verticalFactor;
        
      case 'quantum_entanglement':
        // Quantum entanglement effect - complex interconnected wave patterns
        const quantum1 = Math.sin(timeFactor * 0.5 + angle * 2 + distance * 0.015);
        const quantum2 = Math.sin(timeFactor * 0.3 + angle * 3 - distance * 0.02);
        const quantum3 = Math.cos(timeFactor * 0.7 + angle * 4 + distance * 0.01);
        return 0.4 + 0.6 * (quantum1 * quantum2 + quantum3 * 0.5);
        
      default:
        // Default wave effect
        return 0.5 + 0.5 * Math.sin(timeFactor + distance * 0.01);
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
  strokeOnly?: boolean;
  strokeWidth?: number;
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
  morphing = false,
  strokeOnly = false,
  strokeWidth = 1
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
        animationEffect: animationEffect as 'fractal' | 'noise' | 'waves' | 'pulse' | 'flow' | 'sparkle' | 'ripple' | 'swirl' | 'spin' | 'twinkle' | 'flicker' | 'orbit' | 'tornado' | 'quantum_entanglement',
        mouseInteractive,
        morphing,
        strokeOnly,
        strokeWidth
      });
    }

    return () => {
      if (patternRef.current) {
        patternRef.current.destroy();
      }
    };
  }, [density, size, intensity, speed, backgroundColor, foregroundColor, isAnimated, dotShape, animationEffect, mouseInteractive, morphing, strokeOnly, strokeWidth]);

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
        animationEffect: animationEffect as 'fractal' | 'noise' | 'waves' | 'pulse' | 'flow' | 'sparkle' | 'ripple' | 'swirl' | 'spin' | 'twinkle' | 'flicker' | 'orbit' | 'tornado' | 'quantum_entanglement',
        mouseInteractive,
        morphing,
        strokeOnly,
        strokeWidth
      });
    }
  }, [density, size, intensity, speed, backgroundColor, foregroundColor, isAnimated, dotShape, animationEffect, mouseInteractive, morphing, strokeOnly, strokeWidth]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    />
  );
};

export default HalftonePatternComponent;
