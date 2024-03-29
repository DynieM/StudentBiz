document.addEventListener('DOMContentLoaded', function() {
    function handleHover() {
    const profilePicIcon = document.getElementById('profilepicicon');
    const logoutButton = document.getElementById('logoutButton');
    const logoutButtonLink = document.getElementById('logoutLink');
    let timeout;

    logoutButton.style.position = 'absolute';
    logoutButton.style.left = '-9999px';
    logoutButtonLink.href = '#';

    profilePicIcon.addEventListener('mouseenter', () => {
        logoutButton.style.position = 'static'; // Reset position
        logoutButton.style.left = 'auto'; // Reset left
        logoutButtonLink.href = '../html/login.html';
        clearTimeout(timeout);
    });

    profilePicIcon.addEventListener('mouseleave', () => {
         timeout = setTimeout(() => {
                logoutButton.style.position = 'absolute';
                logoutButton.style.left = '-9999px';
                logoutButton.style.visibility = 'hidden';
                logoutButtonLink.href = '#';
            }, 3000);
    });
    }

    handleHover();
});