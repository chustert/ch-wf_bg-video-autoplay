// Script by Ezra Siton from: https://discourse.webflow.com/t/background-videos-not-playing-on-mobile-2020/119646/3

/* mute and add playsinline to first DOM video on the page */
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  $("video").get(0).volume=0;
  $('video').attr('playsinline',true);
  $('video').attr('muted',"muted");
  $('video').get(0).play()
});
