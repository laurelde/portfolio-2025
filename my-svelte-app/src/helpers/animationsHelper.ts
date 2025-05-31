export function typeWriter(elementId: string, text: string, typingSpeed: number = 1000) {
  var i = 0;
  while (i < text.length) {
    document.getElementById(elementId).innerHTML += text.charAt(i);
    i++;
    // Use setTimeout to create a delay for the typing effect
    setTimeout(() => {
    }, typingSpeed);
  }
}

