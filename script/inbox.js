document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("openInbox").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("inbox-container").style.display = "block";
  });

  document.getElementById("closeInbox").addEventListener("click", function () {
    document.getElementById("inbox-container").style.display = "none";
  });
});

function showInbox() {
  if (document.getElementById('inboxMessages').style.display == 'block') {
    document.getElementById('inboxMessages').style.display = 'none';
    document.getElementById('newMessageForm').style.display = 'none';
    document.getElementById('sendMsg').style.display = 'none';
  } else {
    document.getElementById('inboxMessages').style.display = 'block';
    document.getElementById('sendMsg').style.display = 'block';
    document.getElementById('newMessageForm').style.display = 'none';
  }
}

function showNewMessageForm() {
  document.getElementById('inboxMessages').style.display = 'none';
  document.getElementById('sendMsg').style.display = 'none';
  document.getElementById('newMessageForm').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('searchServiceInputBox').addEventListener('input', searchMessages);
  document.getElementById('searchServiceInputBox').addEventListener('keydown', searchMessages);
});
function searchMessages() {
  let searchServiceInputText = document.getElementById('searchServiceInputBox').value.toLowerCase();
  let messageSenders = ["Mie Hair Salon", "LM Tree Services", "Tutor Wise"];
  const results = messageSenders.filter(item => item.toLowerCase().includes(searchServiceInputText));
  changeMessageVisibility(results);
}

function changeMessageVisibility(results) {
  console.log("i'm here");
  let showAll = true;
  if (!Array.isArray(results) || results.length !== 3) {
    showAll = false;
  }

  const messages = document.querySelectorAll('.message');

  messages.forEach(message => {
    const searchServiceMessageSender = message.querySelector('strong');

    if (!searchServiceMessageSender) return;

    const searchServiceMessageSenderContent = searchServiceMessageSender.textContent.trim();

    if (showAll || results.includes(searchServiceMessageSenderContent)) {
      message.style.display = 'flex';
    } else {
      message.style.display = 'none';
    }
  });
}