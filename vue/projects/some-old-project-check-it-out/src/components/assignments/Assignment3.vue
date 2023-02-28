<template>
    <base-assignment>
        <template #title> Section 2. Assignment 3 </template>
        <template #description>
            Computed and Watch | computed: { printedResult() {...} } | watch: { result(newValue, oldValue) {...} } |
            setTimeout(() => {...}, 2000);
        </template>
        <template #content>
            <!-- 1) Connect the buttons and calculate a value (a number) -->
            <!-- Show "Not there yet" until you reach a result of exactly 37 -->
            <!-- Show "Too much!" if the result is greater than 37 -->
            <!-- 2) Watch for changes in "result" and reset the value to 0 after 5 seconds -->

            <div>
                <p><b>Try to sum to get exactly 37!</b></p>
                <button @click="addNumber(5)">Add 5</button>
                <button @click="addNumber(1)">Add 1</button>
            </div>
            <p>Current value: {{ result }}</p>
            <p>Result: {{ printedResult }}</p>
        </template>
    </base-assignment>
</template>

<script>
export default {
    data() {
        return {
            result: 0,
            goal: 37
        };
    },
    computed: {
        printedResult() {
            if (this.result === this.goal) {
                return 'Congrats! ' + this.result + ' reached';
            } else if (this.result > this.goal) {
                return 'Too high! You lost :-(';
            } else if (this.result === 0) {
            } else {
                return 'Not there yet';
            }
        }
    },
    watch: {
        result(newValue, oldValue) {
            if (newValue >= 37) {
                // game over
                setTimeout(() => {
                    this.result = 0;
                }, 2000);
            }
        }
    },
    methods: {
        addNumber(value) {
            this.result += value;
        }
    }
};
</script>
