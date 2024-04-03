// Former hover functionality with profile icon

/*
document.addEventListener('DOMContentLoaded', function() {
    function handleHover() {
    const profilePicIcon = document.getElementById('profilepicicon');
    const logoutButton = document.getElementById('logoutButton');
    const logoutButtonLink = document.getElementById('logoutLink');
    let timeout;

    logoutButton.style.display = 'none';
    logoutButtonLink.href = '#';

    profilePicIcon.addEventListener('mouseenter', () => {
        logoutButton.style.display = 'block';
        logoutButtonLink.href = '../html/login.html';
        clearTimeout(timeout);
    });

    profilePicIcon.addEventListener('mouseleave', () => {
         timeout = setTimeout(() => {
                logoutButton.style.display = 'none';
                logoutButtonLink.href = '#';
            }, 2000);
    });
    }

    handleHover();
});
*/