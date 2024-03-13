document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("openInbox").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("inbox-container").style.display = "block";
  });

  document.getElementById("closeInbox").addEventListener("click", function() {
    document.getElementById("inbox-container").style.display = "none";
  });
});

function showInbox() {
        if(document.getElementById('inboxMessages').style.display == 'block'){
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