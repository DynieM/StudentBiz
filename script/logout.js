document.addEventListener('DOMContentLoaded', function() {
    function handleHover() {
    const profilePicIcon = document.getElementById('profilepicicon');
    const logoutButton = document.getElementById('logoutButton');
    const logoutButtonLink = document.getElementById('logoutLink');
    let timeout;

    logoutButton.style.display = 'none';
    logoutButton.style.visibility = 'hidden';
    logoutButtonLink.href = '#';

    profilePicIcon.addEventListener('mouseenter', () => {
        logoutButton.style.display = 'block';
        logoutButton.style.visibility = 'visible';
        logoutButtonLink.href = '../html/login.html';
        clearTimeout(timeout);
    });

    profilePicIcon.addEventListener('mouseleave', () => {
         timeout = setTimeout(() => {
                logoutButton.style.display = 'none';
                logoutButton.style.visibility = 'hidden';
                logoutButtonLink.href = '#';
            }, 3000);
    });
    }

    handleHover();
});