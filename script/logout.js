document.addEventListener('DOMContentLoaded', function() {
    function handleHover() {
    const profilePicIcon = document.getElementById('profilepicicon');
    const logoutButton = document.getElementById('logoutButton');
    let timeout;

    profilePicIcon.addEventListener('mouseenter', () => {
        logoutButton.style.display = 'block';
        logoutButton.style.pointerEvents = auto;
        clearTimeout(timeout);
    });

    profilePicIcon.addEventListener('mouseleave', () => {
         timeout = setTimeout(() => {
                logoutButton.style.display = 'none';
                logoutButton.style.pointerEvents = none;
            }, 3000);
    });
    }

    handleHover();
});