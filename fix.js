document.addEventListener('DOMContentLoaded', () => {
  // Check if the user's color scheme preference is 'dark'
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode) {
    // Select all elements that display the demo screens
    const screenElements = document.querySelectorAll('[class*="screen-"]');

    screenElements.forEach(element => {
      // Get the current background image path
      const currentBg = getComputedStyle(element).getPropertyValue('background-image');

      // Check if the image path is for the light theme
      if (currentBg.includes('screens/')) {
        // Extract the image name and add the '-d' suffix for dark mode
        const newBg = currentBg.replace('.webp', '-d.webp');

        // Set the new background image
        element.style.backgroundImage = newBg;
      }
    });
  }
});