(function(Plugin) {
    "use strict";

    function KinopoiskPlugin() {
        this.name = "Кинопоиск";
        this.version = "2.0";
        this.logo = "https://www.kinopoisk.ru/favicon.ico";
        this.supported_types = ["movie", "tv"];
    }

    KinopoiskPlugin.prototype.init = function() {
        console.log("Kinopoisk plugin initialized");
    };

    KinopoiskPlugin.prototype.search = function(query, type) {
        return new Promise(function(resolve, reject) {
            resolve([]);
        });
    };

    KinopoiskPlugin.prototype.source = function(source, callback) {
        var kinopoisk_id = source.kinopoisk_id || source.kp_id;
        
        if (!kinopoisk_id) {
            callback(false);
            return;
        }

        var result = {
            title: this.name,
            button: "Смотреть",
            list: []
        };

        // Основные ссылки для просмотра
        result.list.push({
            title: "Кинопоиск HD (1080p)",
            file: "https://sspoisk.ru/film/" + kinopoisk_id + "/",
            type: "iframe"
        });

        result.list.push({
            title: "Кинопоиск (720p)", 
            file: "https://sspoisk.ru/film/" + kinopoisk_id + "/watch/",
            type: "iframe"
        });

        callback(result);
    };

    KinopoiskPlugin.prototype.file = function(item, callback) {
        if (item.type === "iframe") {
            callback(item.file);
        } else {
            callback(false);
        }
    };

    if (typeof Lampa !== "undefined") {
        Lampa.Plugin.register(new KinopoiskPlugin());
    }

    return KinopoiskPlugin;
})(Plugin);
