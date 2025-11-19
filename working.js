// Working Kinopoisk Plugin
console.log('Kinopoisk plugin loading...');

function waitForLampa() {
    if (typeof window.Lampa !== 'undefined' && window.Lampa.Plugin) {
        console.log('Lampa found, initializing plugin...');
        
        // Добавляем кнопку в плеер
        Lampa.Plugin.add('kinopoisk-working', {
            component: {
                template: `
                    <div class="selector__button" @click="openKinopoisk">
                        <div class="selector__button-icon" style="color: #ff8c00;">K</div>
                        <div class="selector__button-text">Кинопоиск</div>
                    </div>
                `,
                methods: {
                    openKinopoisk: function() {
                        console.log('Kinopoisk button clicked');
                        // Простая проверка - покажем уведомление
                        if (Lampa.Noty) {
                            Lampa.Noty.show('Кинопоиск работает!');
                        }
                    }
                }
            },
            position: 'control'
        });
        
        console.log('Kinopoisk plugin initialized successfully');
    } else {
        console.log('Lampa not ready, waiting...');
        setTimeout(waitForLampa, 500);
    }
}

// Запускаем ожидание
setTimeout(waitForLampa, 1000);
