function joinDiscordChannel(url) {
    window.open(url, '_blank');
    console.log('Пользователь перешел в Discord канал:', url);
}

function contactUser(username) {
    copyToClipboard(username);
    alert(`Вы можете написать пользователю ${username} в Discord!\nНикнейм скопирован в буффер обмена.`);
    console.log('Пользователь хочет связаться с:', username);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Текст скопирован в буфер обмена:', text);
    }, function(err) {
        console.error('Ошибка копирования: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.channel-card, .contact-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});