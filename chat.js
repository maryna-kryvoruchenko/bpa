// JS for Chat
function openChat() {
  document.querySelector('.chat-popup').style.opacity = "1";
  document.querySelector('.chat-popup').style.visibility = 'visible';
  document.querySelector('.chat-popup').style.zIndex = '11';
  document.querySelector('.open-button').style.visibility = 'hidden';
}

function closeChat() {
  document.querySelector('.chat-popup').style.opacity = "0";
  document.querySelector('.chat-popup').style.visibility = 'hidden';
  document.querySelector('.chat-popup').style.zIndex = '0';
  document.querySelector('.open-button').style.visibility = 'visible';
}