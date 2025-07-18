const pupil = document.querySelector('.pupil');
const eye = document.querySelector('.eye');

document.addEventListener('mousemove', (e) => {
  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  const deltaX = e.clientX - eyeCenterX;
  const deltaY = e.clientY - eyeCenterY;
  const angle = Math.atan2(deltaY, deltaX);

  const radius = 12; // distancia máxima que puede moverse la pupila
  const pupilX = Math.cos(angle) * radius;
  const pupilY = Math.sin(angle) * radius;

  pupil.style.left = 15 + pupilX + 'px';
  pupil.style.top = 15 + pupilY + 'px';
});
