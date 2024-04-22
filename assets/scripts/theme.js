function updateTheme() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const bodyClass = document.body.classList;

    // Define transition times
    const dayStartHour = 5;
    const dayStartMinute = 59;
    const nightStartHour = 18;
    const nightStartMinute = 59;

    // Determine if current time is during the day or night
    const isDayTime = (hour > dayStartHour || (hour === dayStartHour && minute >= dayStartMinute)) &&
                      (hour < nightStartHour || (hour === nightStartHour && minute < nightStartMinute));

    if (isDayTime) {
        if (!bodyClass.contains('day')) {
            bodyClass.add('day');
            bodyClass.remove('night');
        }
    } else {
        if (!bodyClass.contains('night')) {
            bodyClass.add('night');
            bodyClass.remove('day');
        }
    }
}

// Call updateTheme initially and then every minute to ensure the theme updates promptly.
updateTheme();
setInterval(updateTheme, 60000); // Checks every minute

function preloadImages() {
  const images = ['../jsite/assets/images/logo-dark.png', '../jsite/assets/images/logo-light.png'];
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
}

preloadImages(); // Preload images to avoid flickering during the first switch
