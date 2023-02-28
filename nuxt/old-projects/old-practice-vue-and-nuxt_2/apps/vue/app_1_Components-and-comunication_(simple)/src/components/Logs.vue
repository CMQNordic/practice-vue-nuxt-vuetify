<template>
    <div>
        <button @click="logs = []">Clear log</button>
        <div class="log">
            <h3>Component: {{ compName }}</h3>
            <p v-for="log in logs" :key="log.id">
                {{ log.source }}:
                <span class="log-message">{{ log.text }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import { appEventBus } from '../main';

export default {
    data: function () {
        return {
            compName: 'Logs',
            logs: [],
        };
    },
    // when created (life-hook) set listener to log events
    created() {
        appEventBus.$on('logEvent', (log) => {
            this.logs.push(log);
        });
    },
};
</script>

<style>
.log {
    background-color: white;
    padding: 3px;
}
</style>
