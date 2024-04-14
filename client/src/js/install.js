const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store triggered events
  window.deferredPrompt = event;
  // Remove hidden class from the button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
      return;
    }
  
    // Display prompt
    promptEvent.prompt();
  
    // Reset deferredPrompt var, do not allow multiple usage 
    window.deferredPrompt = null;
  
    butInstall.classList.toggle("hidden", true);
  });
  
// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    // Clear defferedPrompt
    window.deferredPrompt = null;
  });
  
