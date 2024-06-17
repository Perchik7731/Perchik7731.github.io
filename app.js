let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

// Ensure tg.initDataUnsafe.user is defined and not null
if (tg.initDataUnsafe.user) {
    let userFullName = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
    let userId = `ID: ${tg.initDataUnsafe.user.id}`;

    let userinfo = document.getElementById("userinfo");
    userinfo.innerHTML = `
        <p>${userFullName}</p>
        <p>${userId}</p>
    `;
} else {
    // Fallback if user information is not available
    let userinfo = document.getElementById("userinfo");
    userinfo.textContent = "User information not available";
}
