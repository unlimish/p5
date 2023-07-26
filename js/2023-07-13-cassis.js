let cassisSketch = function (p) {
  let particles = [];
  const CANVAS_SIZE = 1800;

  p.setup = function () {
    p.frameRate(120);
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(218, 59, 95);
    canvas.parent('bdy');
  }

  p.draw = function () {
    p.background(218, 50, 90);

    // 初期位置を変更
    particles.push(
      createParticle(p.random(CANVAS_SIZE), p.random(CANVAS_SIZE))
    );
    particles = particles.filter(particleIsAlive);
    for (let particle of particles) {
      updatePosition(particle);
      decreaseLife(particle);
      drawParticle(particle);
    }
  }

  function createParticle(x, y) {
    let direction = p.sin(180);
    let speed = 1;

    return {
      x,
      y,
      vx: speed * p.random(0.01, 1.5) * p.cos(direction),
      vy: speed * p.random(0.01, 1.5) * p.sin(direction),
      life: 1, // = 100%
      color: [225, 255, 120],
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
    p.push();
    p.noStroke();
    p.fill(...particle.color, (particle.life / 1.5) * 255);
    p.ellipse(particle.x, particle.y, particle.life * 8);
    p.pop();
  }
}
