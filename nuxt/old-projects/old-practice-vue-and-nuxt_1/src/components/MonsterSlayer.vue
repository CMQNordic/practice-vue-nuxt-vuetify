<template>
    <div>
        <h2>Monster Slayer Game</h2>
        <hr />
        <section id="assignment">
            <div id="game">
                <section id="monster" class="container">
                    <h2>Monster Health</h2>
                    <div class="healthbar">
                        <div class="healthbar__value" :style="monsterProgressBar"></div>
                    </div>
                </section>
                <section id="player" class="container">
                    <h2>Your Health</h2>
                    <div class="healthbar">
                        <div class="healthbar__value" :style="playerProgressBar"></div>
                    </div>
                </section>
                <section id="controls">
                    <button @click="attackMonsterNormal()">ATTACK</button>
                    <button @click="attackMonsterSpecial()">SPECIAL ATTACK</button>
                    <button @click="healPlayer()">HEAL</button>
                    <button @click="surrenderPlayer()">SURRENDER</button>
                </section>
                <section id="log" class="container">
                    <h2>Battle Log</h2>
                    <ul>
                        <li v-for="i in log" :key="i">{{ i }}</li>
                    </ul>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Monster Slayer',
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            log: []
        };
    },
    computed: {
        monsterProgressBar() {
            return { width: this.monsterHealth + '%' };
        },
        playerProgressBar() {
            return { width: this.playerHealth + '%' };
        }
    },
    watch: {
        monsterHealth(newValue, oldValue) {
          console.log(newValue)
          console.log(oldValue)
        }
    },
    methods: {
        getRandom(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        takeHit(currentScore, hit) {
            let scoreAfterHit = currentScore - hit;
            if (scoreAfterHit < 0) {
                return 0;
            } else {
                return scoreAfterHit;
            }
        },
        attackMonster(hit) {
            this.monsterHealth = this.takeHit(this.monsterHealth, hit);
            this.log.push('Monster was hit with: ' + hit);
            this.attackPlayer();
        },
        attackMonsterNormal() {
            this.attackMonster(this.getRandom(5, 12));
        },
        attackMonsterSpecial() {
            this.attackMonster(this.getRandom(10, 20));
        },
        attackPlayer() {
            let hit = this.getRandom(6, 15);
            this.playerHealth = this.takeHit(this.playerHealth, hit);
            this.log.push('Player was hit with: ' + hit);
        },
        healPlayer() {
            let playerScore = this.playerHealth + 12;
            if (playerScore < 100) {
                this.playerHealth = playerScore;
            } else {
                this.playerHealth = 100;
            }
            this.attackPlayer();
        },
        surrenderPlayer() {
            this.playerHealth = 0;
        }
    }
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    background-color: #880017;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}

section {
    width: 90%;
    max-width: 40rem;
    margin: auto;
}

.healthbar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    margin: 1rem 0;
    background: #fde5e5;
}

.healthbar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
}

.container {
    text-align: center;
    padding: 0.5rem;
    margin: 1rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
}

#monster h2,
#player h2 {
    margin: 0.25rem;
}

#controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

button {
    font: inherit;
    border: 1px solid #88005b;
    background-color: #88005b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    margin: 1rem;
    width: 12rem;
    cursor: pointer;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
    outline: none;
}

button:hover,
button:active {
    background-color: #af0a78;
    border-color: #af0a78;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
    background-color: #ccc;
    border-color: #ccc;
    box-shadow: none;
    color: #3f3f3f;
    cursor: not-allowed;
}

#log ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#log li {
    margin: 0.5rem 0;
}

.log--player {
    color: #7700ff;
}

.log--monster {
    color: #da8d00;
}

.log--damage {
    color: red;
}

.log--heal {
    color: green;
}
</style>
