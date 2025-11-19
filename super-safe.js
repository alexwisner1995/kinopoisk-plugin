// Super Safe Kinopoisk Plugin
(function() {
    var maxAttempts = 20;
    var attempts = 0;
    
    function tryInit() {
        attempts++;
        
        if (typeof window.Lampa !== 'undefined' && 
            window.Lampa.Plugin && 
            typeof window.Lampa.Plugin.add === 'function') {
            
            console.log('Lampa.Plugin found, adding Kinopoisk plugin');
            
            Lampa.Plugin.add('kinopoisk-super', {
                component: {
                    template: '<div class="selector__button" @click="test"><div class="selector__button-text">Кинопоиск TEST</div></div>',
                    methods: {
                        test: function() {
                            alert('Тестовая кнопка работает!');
                        }
                    }
                },
                position: 'control'
            });
            
            console.log('Kinopoisk plugin added successfully');
            
        } else if (attempts < maxAttempts) {
            console.log('Waiting for Lampa.Plugin... attempt ' + attempts);
            setTimeout(tryInit, 1000);
        } else {
            console.log('Failed to load Kinopoisk plugin');
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(tryInit, 2000);
        });
    } else {
        setTimeout(tryInit, 2000);
    }
})();
