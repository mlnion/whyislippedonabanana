particlesJS('particles-js', {
  particles: {
    color: '#F1512B',
    color_random: true,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 0.2,
      anim: {
        enable: true,
        speed: 0.4,
        opacity_min: 0.7,
        sync: false
      }
    },
    size: 15,
    size_random: true,
    nb: 20,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#F1512B',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 0.25
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 700
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
