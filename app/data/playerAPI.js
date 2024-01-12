export const PlayerAPI = {
	players: [
		{ number: 1, name: 'Albert Einstein', position: 'AlbertEinstein@gmail.com', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg' }
		// { number: 2, name: 'Bart Simpson', position: 'Bsimpson@gmail.com', url: 'www.myspace.com/bsimpson'},
		// { number: 3, name: 'Brandon Rakowski', position: 'BrandonRakowski90@gmail.com', url: 'www.myspace.com/brakowski' },
		
	],
	all: function () {
		return this.players;
	},
	addPlayer: function ({ number, name, position, url }) {
		this.players.push({ number, name, position, url });
	},
	get: function (id) {
		const isPlayer = (p) => p.number === id;
		return this.players.find(isPlayer);
	},
};
// add Json.stringify to save data & delete contacts 