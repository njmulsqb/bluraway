// BlurAway: hides or blurs profile images on LinkedIn

function blurProfileImages() {
  const selectors = [
    "img.update-components-actor__avatar-image", // Profile picture in feed
    'img.ivm-view-attr__img--centered[class*="EntityPhoto-circle-"]', // Small icon-based profile pictures as in "Someone commented on.."
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((img) => {
      // Apply blur or hide
      img.style.filter = "blur(8px)";
      img.style.transition = "filter 0.2s ease";
    });
  });
}

// Run on initial load
blurProfileImages();

// Keep watching for dynamically added content
const observer = new MutationObserver(() => blurProfileImages());
observer.observe(document.body, { childList: true, subtree: true });
