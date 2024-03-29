document.addEventListener('DOMContentLoaded', function() {
    function handleHover() {
    const profilePicIcon = document.getElementById('profilepicicon');
    const logoutButton = document.getElementById('logoutButton');
    let timeout;

    if (logoutButton.style.display === 'block') {
        
    }

    profilePicIcon.addEventListener('mouseenter', () => {
        logoutButton.style.display = 'block';
        clearTimeout(timeout);
    });

    profilePicIcon.addEventListener('mouseleave', () => {
         timeout = setTimeout(() => {
                logoutButton.style.display = 'none';
            }, 3000);
    });
    }

    handleHover();
});