// Minimal Kinopoisk Plugin
setTimeout(function() {
    if (window.Lampa && Lampa.Plugin) {
        console.log('Minimal Kinopoisk plugin loaded');
        
        // Просто добавляем кнопку в плеер
        Lampa.Plugin.add('kinopoisk-minimal', {
            component: {
                template: '<div class="selector__button" @click="openKinopoisk" style="background: #ff8c00; color: #000; font-weight: bold;"><div class="selector__button-text">Кинопоиск</div></div>',
                methods: {
                    openKinopoisk() {
                        alert('Кнопка Кинопоиск работает!');
                    }
                }
            },
            position: 'control'
        });
    }
}, 2000);
