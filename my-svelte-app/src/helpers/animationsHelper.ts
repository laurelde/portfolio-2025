export function typeWriter(elementId: string, text: string, typingSpeed: number = 100) {
  var i = 0;
  while (i < text.length) {
    document.getElementById(elementId).innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter);
  }
}