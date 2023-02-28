<template>
    <base-assignment>
        <template #title>Project. Monster slayer</template>
        <template #description>Section 4. Project. Practising...</template>
        <template #content>
            <section class="container progress">
                <div class="progress-title">Monster health: {{ monsterHealth + '%' }}</div>
                <div class="progress-bar">
                    <div class="progress-value" :style="monsterProgress"></div>
                </div>
            </section>

            <section class="container progress">
                <div class="progress-title">Player health: {{ playerHealth + '%' }}</div>
                <div class="progress-bar">
                    <div class="progress-value" :style="playerProgress"></div>
                </div>
            </section>

            <section v-if="gameOver" id="result" class="container" >
                <h2>Game Over</h2>
                <p v-if="winner === 'player'">You won</p>
                <p v-else-if="winner === 'monster'">Monster won</p>
                <p v-else-if="winner === 'draw'">draw</p>
                <p v-else>error</p>
                <button @click="restart()">RESTART</button>
            </section>

            <section v-else id="controls" class="container">
                <button @click="runAttack(null)" :disabled="gameOver">ATTACK</button>
                <button @click="runAttack('special')" :disabled="gameOver">SPECIAL ATTACK</button>
                <button @click="heal()" :disabled="gameOver">HEAL</button>
                <button @click="surrender()" :disabled="gameOver">SURRENDER</button>
            </section>

            <section class="container">
                Log:
                <ul>
                    <li v-for="v in log" :key="v">{{ v }}</li>
                </ul>
            </section>
        </template>
    </base-assignment>
</template>

<script>
export default {
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            log: [],
            gameOver: false,
            winner: ''
        };
    },
    watch: {
        monsterHealth(newHealth, oldHealth) {
            if (newHealth <= 0 && this.playerHealth <= 0) {
                this.gameOver = true;
                this.monsterHealth = 0;
                this.winner = 'draw';
            } else if (newHealth <= 0) {
                this.gameOver = true;
                this.monsterHealth = 0;
                this.winner = 'player';
            }
        },
        playerHealth(newHealth, oldHealth) {
            if (newHealth <= 0 && this.monsterHealth <= 0) {
                this.gameOver = true;
                this.playerHealth = 0;
                this.winner = 'draw';
            } else if (newHealth <= 0) {
                this.gameOver = true;
                this.playerHealth = 0;
                this.winner = 'monster';
            } else if (newHealth > 100) {
                this.playerHealth = 100;
            }
        }
    },
    computed: {
        monsterProgress() {
            return 'width: ' + this.monsterHealth + '%';
        },
        playerProgress() {
            return 'width: ' + this.playerHealth + '%';
        }
    },
    methods: {
        attack(user) {
            let min = 1;
            let max = 8;
            let value = !this.gameOver ? Math.floor(Math.random() * (max - min + 1) + min) : 0;
            this.log.push(user + ' attacked with ' + value);
            return value;
        },
        runAttack(type) {
            if (type) {
                this.monsterHealth -= this.attack('monster');
            }
            this.monsterHealth -= this.attack('monster');
            this.playerHealth -= this.attack('player');
        },
        heal() {
            this.playerHealth += 10;
        },
        surrender() {
            this.playerHealth = 0;
        },
        restart() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.gameOver = false;
            this.winner = 0;
            this.log = [];
        }
    }
};
</script>

<style scoped>
.container {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 0.4rem;
    padding: 0.5rem;
    margin-left: 0;
    margin-right:0;
    margin-bottom: 10px;
}
.progress-bar {
    border: thin solid black;
    border-radius: 4px;
}
.progress-value {
    background-color: rgb(89, 167, 89);
    border-radius: 4px;
    height: 1em;
}
#controls {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
#controls button {
    margin: 0 5px;
}
#result {
    color: red;
    text-align: center;
    position: relative;
}
#result button {
    position: absolute;
    /* inset: auto 1em 1em auto; */
    bottom: 1em;
    right: 1em;
}
</style>
