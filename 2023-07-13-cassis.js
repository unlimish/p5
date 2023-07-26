// カシスの日
let particles = [];
      const CANVAS_SIZE = 400;

      function setup() {
        frameRate(120);
        createCanvas(CANVAS_SIZE, CANVAS_SIZE);
        background(218,59,95);
      }

      function draw() {
        background(218, 50, 90);

        // 初期位置を変更
        particles.push(
          createParticle(random(CANVAS_SIZE), random(CANVAS_SIZE))
        );
        particles = particles.filter(particleIsAlive);
        for (let particle of particles) {
          updatePosition(particle);
          decreaseLife(particle);
          drawParticle(particle);
        }
      }

      function createParticle(x, y) {
        let direction = sin(180);
        let speed = 1;

        return {
          x,
          y,
          vx: speed * random(0.01, 1.5) * cos(direction),
          vy: speed * random(0.01, 1.5) * sin(direction),
          life: 1, // = 100%
          color: [225,255, 120],
        };
      }

      function particleIsAlive(particle) {
        return particle.life > 0;
      }

      function updatePosition(particle) {
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      function decreaseLife(particle) {
        particle.life -= 0.004;
      }

      function drawParticle(particle) {
        push();
        noStroke();
        fill(...particle.color, (particle.life / 1.5) * 255);
        ellipse(particle.x, particle.y, particle.life * 8);
        pop();
      }
