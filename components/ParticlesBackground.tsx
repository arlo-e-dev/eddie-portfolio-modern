'use client'

import { useEffect, useRef } from 'react'

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      x: number
      y: number
      z: number
      size: number
      speedX: number
      speedY: number
      speedZ: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.z = Math.random() * 1000
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.speedZ = Math.random() * 2 + 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.z -= this.speedZ

        if (this.z <= 0) {
          this.z = 1000
          this.x = Math.random() * (canvas?.width || 0)
          this.y = Math.random() * (canvas?.height || 0)
        }

        if (this.x < 0 || this.x > (canvas?.width || 0)) this.speedX *= -1
        if (this.y < 0 || this.y > (canvas?.height || 0)) this.speedY *= -1
      }

      draw() {
        if (!ctx || !canvas) return

        const scale = 1000 / (1000 + this.z)
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2
        const size = this.size * scale

        const opacity = 1 - this.z / 1000
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.forEach((particle) => {
          const dx = particle.x - this.x
          const dy = particle.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const px2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2
            const py2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2

            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - distance / 150) * opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(x2d, y2d)
            ctx.lineTo(px2d, py2d)
            ctx.stroke()
          }
        })
      }
    }

    const init = () => {
      resize()
      particles = []
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}
