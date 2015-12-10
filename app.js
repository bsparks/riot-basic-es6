import riot from 'riot';

class App {
    constructor(opts) {
        this.name = 'Riot JSPM Example';
        this.body = 'Hey, this is pretty cool!';

        this.opts = opts;

        this.init();
    }

    init() {
        let app = this;
        
        this.tag = riot.tag('app', `
            <h1>{ this.name }</h1>
            <div><p>{ this.body }</p></div>
        `, function(opts) {
            this.name = app.name;
            this.body = app.body;
        });

        riot.mount('app', this.opts);
    }
}

window.app = new App({'a': 1});