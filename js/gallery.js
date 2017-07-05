'use strict';

window.gallery = (function () {
  var galleryDesc = document.querySelector('.gallery-description');
  var sizeBtns = galleryDesc.querySelectorAll('.btn-size');
  var gallery = document.querySelector('.gallery-wrapper');
  var previews = gallery.querySelectorAll('.preview-item');
  
  for (var i = 0; i < sizeBtns.length; i++) {
    if (!sizeBtns[i].classList.contains('active')) {
      previews[i].classList.add('hide');
    } 
  }
  
  function choosePreview(size) {
    for (var i = 0; i < previews.length; i++) {
      if (previews[i].classList.contains(size)) {
        return previews[i];
      }
    }
  };
  
  for (var i = 0; i < sizeBtns.length; i++) {
    sizeBtns[i].addEventListener('click', function (evt) {
      var currentBtn = evt.currentTarget;
      if (currentBtn.classList.contains('active')) {
        return;
      } else {
        for (i = 0; i < sizeBtns.length; i++) {
          sizeBtns[i].classList.remove('active');
        }
        for (var i = 0; i < previews.length; i++) {
          previews[i].classList.add('hide');
        }
      }
      currentBtn.classList.add('active');
      var currentPreview;
      switch (currentBtn.getAttribute('data-size')) {
        case 'M':
          currentPreview = choosePreview('preview-m');
          currentPreview.classList.remove('hide');
          break;
        case 'L':
          currentPreview = choosePreview('preview-l');
          currentPreview.classList.remove('hide');
          break;
        case 'XL':
          currentPreview = choosePreview('preview-xl');
          currentPreview.classList.remove('hide');
          break;
        case 'XXL':
          currentPreview = choosePreview('preview-xxl');
          currentPreview.classList.remove('hide');
          break;
      }
    });
  }
})();
