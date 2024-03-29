document.addEventListener('DOMContentLoaded', function() {
    function handleHover() {
    const profilePicIcon = document.getElementById('profilepicicon');
    const logoutButton = document.getElementById('logoutButton');
    const logoutButtonLink = document.getElementById('logoutLink');
    let timeout;

    profilePicIcon.addEventListener('mouseenter', () => {
        logoutButton.style.display = 'block';
        logoutButtonLink.href = '../html/login.html';
        clearTimeout(timeout);
    });

    profilePicIcon.addEventListener('mouseleave', () => {
         timeout = setTimeout(() => {
                logoutButton.style.display = 'none';
                logoutButtonLink.href = '#';
            }, 3000);
    });
    }

    handleHover();
});