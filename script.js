// script.js

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');

  for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    div.className = 'img';

    const link = document.createElement('a');
    link.href = `dog-gallery/${i}.jpeg`;
    link.target = '_blank';

    const img = document.createElement('img');
    img.src = `dog-gallery/${i}.jpeg`;
    img.alt = `Dog ${i}`;

    link.appendChild(img);
    div.appendChild(link);
    gallery.appendChild(div);
  }
});
