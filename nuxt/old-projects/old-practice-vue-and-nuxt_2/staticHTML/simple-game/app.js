new Vue({
	el:'#app',
	data: {
		gameOn: false,
		healthPlayer: 80,
		healthMonster: 40,
		results: [],
		playerTestText: null,
		monsterTestText: null,
	},
	methods: {
		start: function () {
			this.healthPlayer = 100;
			this.healthMonster = 100;
			this.results = [];
			this.gameOn = true;
		},
		attack: function (type) {
		// type: string -> "special" or "hitMonsterOnly" or "null" when normal
			this.youText = null;
			if (this.checkResult()) {
				var playerDamage = this.calculateDamage(6, 10);
				if (type != 'hitMonsterOnly') {
					var playerDamage = this.calculateDamage(6, 10);
					this.playerTestText = '6 | 10 -> ' + playerDamage;
					this.healthPlayer -= playerDamage;
					this.results.unshift({ isPlayer: true, text: 'Player got hit with ' + playerDamage })
				}
				
				
				var monsterDamage = this.calculateDamage(type == 'special' ? 8 : 3, 10);
				this.monsterTestText = (type == 'special' ? 8 : 3) + ' | 10 -> ' + monsterDamage;
				this.healthMonster -= monsterDamage;
				this.results.unshift({ isPlayer: false, text: 'Monster got hit with ' + monsterDamage })
				
				this.checkResult();
			}
		},
		heal: function () {
			this.healthPlayer = 100;
			this.attack('hitMonsterOnly');
		},
		giveUp: function () {
			this.gameOn = false;
			this.results = [];
			this.healthPlayer = 0;
			this.healthMonster = 100;
			this.playerTestText = null;
			this.monsterTestText = null;
		},
		calculateDamage: function (min, max) {
			return Math.max(min, Math.floor(Math.random() * max) + 1);
		},
		checkResult: function () {
		// Returns false if the game is over, otherwise true
			if (this.healthPlayer <= 0) {
				confirm('Monster wins!\nMonster:' + this.healthMonster + ' vs ' + 'You:' + this.healthPlayer + '\nNew game?') ? this.start() : null;	
				return false;
			} else if (this.healthMonster <= 0) {
				confirm('You win!\nYou:' + this.healthPlayer + ' vs ' + 'Monster:' + this.healthMonster + '\nNew game?') ? this.start() : null;
				return false;
			}
			return true;
		}
	}
})