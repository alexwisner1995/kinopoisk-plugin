// FINAL Kinopoisk Plugin
console.log('=== KINOPOISK FINAL PLUGIN LOADED ===');

function initKinopoisk() {
    if (!window.Lampa) {
        setTimeout(initKinopoisk, 500);
        return;
    }

    console.log('Lampa found, adding Kinopoisk source...');

    Lampa.Source.add('kinopoisk', {
        name: 'Кинопоиск',
        source: function(item, callback) {
            console.log('Kinopoisk source called for:', item);
            
            if (item.kinopoisk_id) {
                callback({
                    title: 'Кинопоиск',
                    button: 'Смотреть',
                    list: [{
                        title: 'Кинопоиск HD',
                        file: 'https://sspoisk.ru/film/' + item.kinopoisk_id + '/',
                        type: 'iframe'
                    }]
                });
            } else {
                callback(false);
            }
        },
        file: function(item, callback) {
            if (item.type === 'iframe') {
                callback(item.file);
            } else {
                callback(false);
            }
        }
    });

    console.log('=== KINOPOISK PLUGIN READY ===');
}

setTimeout(initKinopoisk, 1000);
