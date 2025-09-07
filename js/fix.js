document.addEventListener('DOMContentLoaded', () => {
  // Find all elements with the class 'mxd-demo-list__screen'
  const screenElements = document.querySelectorAll('.mxd-demo-list__screen');

  // Apply the correct styles to each element
  screenElements.forEach(element => {
    element.style.opacity = '1';
    element.style.visibility = 'visible';
    element.style.transform = 'scale(1)';
  });

  // Find all elements with the class 'mxd-demo-list__title'
  const titleElements = document.querySelectorAll('.mxd-demo-list__title');

  // Hide the titles by applying styles directly
  titleElements.forEach(element => {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
  });
});