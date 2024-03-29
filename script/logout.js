document.addEventListener('DOMContentLoaded', function() {
    function handleHover() {
    const profilePicIcon = document.getElementById('profilepicicon');
    const logoutButton = document.getElementById('logoutButton');
    let logoutButtonLink = document.getElementById('logoutLink');
    let timeout;

    if (logoutButton.style.display === 'block') {
        logoutButtonLink.href = '../html/login.html';
    } else {
        logoutButtonLink.href = '#';
    }

    profilePicIcon.addEventListener('mouseenter', () => {
        logoutButton.style.display = 'block';
        logoutButtonLink.href = '../html/login.html';
        clearTimeout(timeout);
    });

    profilePicIcon.addEventListener('mouseleave', () => {
        logoutButtonLink.href = '#';
         timeout = setTimeout(() => {
                logoutButton.style.display = 'none';
            }, 3000);
    });
    }

    handleHover();
});