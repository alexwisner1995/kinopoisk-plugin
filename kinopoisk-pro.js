Lampa.Plugin.add('kinopoisk', {
    component: {
        template: '<div class="selector__button" @click="openKinopoisk"><div class="selector__button-icon" style="color: #ff8c00;">K</div><div class="selector__button-text">Кинопоиск</div></div>',
        methods: {
            openKinopoisk: function() {
                var card = this.$parent.card;
                if (card && card.kinopoisk_id) {
                    Lampa.Player.play({
                        title: card.title,
                        kinopoisk_id: card.kinopoisk_id
                    }, 'kinopoisk');
                }
            }
        }
    },
    position: 'control'
});

Lampa.Source.add('kinopoisk', {
    name: 'Кинопоиск',
    source: function(item, callback) {
        if (item.kinopoisk_id) {
            callback({
                title: 'Кинопоиск',
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
