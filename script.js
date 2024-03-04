function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

function encodeMessage(message) {
  let encodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const charCode = message.toUpperCase().charCodeAt(i) - 64;
    encodedMessage += charCode.toString().padStart(2, '0');
  }
  return encodedMessage;
}

function decodeMessage(code) {
  let decodedMessage = "";
  for (let i = 0; i < code.length; i += 2) {
    const chunk = code.substring(i, i + 2);
    const charCode = parseInt(chunk, 10) + 64;
    decodedMessage += String.fromCharCode(charCode);
  }
  return decodedMessage;
}

document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);

document.getElementById('sendMessageBtn').addEventListener('click', function () {
  const inputMessage = document.getElementById('messageInput').value;
  const encodedMessage = encodeMessage(inputMessage);
  alert("Encoded Message: " + encodedMessage);
});

document.getElementById('readMessageBtn').addEventListener('click', function () {
  const inputCode = document.getElementById('codeInput').value;
  const decodedMessage = decodeMessage(inputCode);
  alert("Decoded Message: " + decodedMessage);
});
