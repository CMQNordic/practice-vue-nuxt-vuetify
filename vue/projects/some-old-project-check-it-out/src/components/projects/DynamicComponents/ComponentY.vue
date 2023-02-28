<template>
    <h3>I'm Component B</h3>
    <p>
        Prop:<b> age = {{ age }}</b>
    </p>
    <input type="text" placeholder="Write something..." />
</template>

<script>
export default {
    props: {
        age: {
            type: Number,
            required: true,
            default: 0
        }
    }
};
</script>

