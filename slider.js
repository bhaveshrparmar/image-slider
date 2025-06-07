 const images = [
      "https://picsum.photos/id/1018/700/400",
      "https://picsum.photos/id/1015/700/400",
      "https://picsum.photos/id/1016/700/400",
      "https://picsum.photos/id/1020/700/400",
      "https://picsum.photos/id/1024/700/400",
      "https://picsum.photos/id/1027/700/400",
      "https://picsum.photos/id/1035/700/400"
    ];

    const carouselInner = document.getElementById('carouselInner');

    for (let i = 0; i < images.length; i++) {
      const item = document.createElement('div');
      item.className = 'carousel-item';
      if (i === 0) item.classList.add('active');

      const img = document.createElement('img');
      img.src = images[i];
      img.alt = 'Slide ' + (i + 1);
      img.className = 'd-block w-100';
      img.draggable = false;

      item.appendChild(img);
      carouselInner.appendChild(item);
    }