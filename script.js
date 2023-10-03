const streamers = ['vtuber_amiru','failverde','kspksp','nemesisxdfp','hennie2001','earendelxdfp','shygolone','cygxdfp','iitifox','qttsix','homete416','kannazukilubee','seki_meridian','jongie','ren0809k','listeno_o','v4181','restiafps'];

function main() {
    searchStreams();
}

function searchStreams() {
    streamers.forEach((streamerName) => {
        new Twitch.Player('twitch-embed', {
            width: 560,
            height: 315,
            channel: streamerName.trim(),
            muted: true,
        });
    });
    
    const iframes = document.querySelectorAll('iframe');
    for (const iframe of iframes) {
        iframe.style.margin = '10px';
        iframe.style.border = 'none';
    }
}
