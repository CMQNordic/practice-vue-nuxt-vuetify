<template>
    <base-assignment>
        <template #title> Section 2. Assignment 2 </template>
        <template #description>
            Native events | @keyup="onKeyPressed" | @keyup.enter="onSubmit($event.target.value)"
        </template>
        <template #content>
            <!-- 1) Show an alert (any text of your choice) when the button is pressed -->
            <!-- 2) Register user input on "keydown" and output it in the paragraph  -->
            <!-- 3) Repeat 2) but only output the entered value if the ENTER key was pressed -->
            <button @click="s = s + '|'">Press button to add a character</button>
            <p>{{ s }}</p>
            <div>
                <label>
                    Mirrors input char by char:
                    <input type="text" @keyup="onKeyPressed" />
                </label>
                <p>{{ char }}</p>
            </div>

            <div>
                <label>
                    Submit text with enter:
                    <input type="text" @keyup.enter="onSubmit($event.target.value)" />
                </label>
                <p>{{ confirmedInput }}</p>
            </div>
        </template>
    </base-assignment>
</template>

<script>
export default {
    data() {
        return {
            s: '',
            char: '',
            confirmedInput: ''
        };
    },
    methods: {
        onKeyPressed(event) {
            this.char = event.target.value;
        },
        onSubmit(value) {
            this.confirmedInput = value;
        }
    }
};
</script>
