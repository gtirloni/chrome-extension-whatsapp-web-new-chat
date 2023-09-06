document.addEventListener('DOMContentLoaded', function() {
  const goButton = document.getElementById('goButton');
  const urlInput = document.getElementById('urlInput');

  const openTab = function() {
    const userInput = urlInput.value;
    const predefinedURL = "https://web.whatsapp.com/send/?phone=";

    // Validate that input is numeric or contains the plus sign
    const isNumericOrPlus = /^[\d+]+$/.test(userInput);

    if (isNumericOrPlus) {
      const finalURL = predefinedURL + encodeURIComponent(userInput);
      chrome.tabs.create({ url: finalURL });
    } else {
      alert("Please enter only numbers or the plus sign.");
    }
  };

  goButton.addEventListener('click', openTab);

  urlInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      openTab();
    }
  });
});
