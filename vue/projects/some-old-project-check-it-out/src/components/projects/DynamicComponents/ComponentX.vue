<template>
    <h3>I'm Component A</h3>
    <p>
        Prop: <b>name = {{ name }}</b>
    </p>
    <input type="text" placeholder="Write something..." />
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
            default: 'not set'
        }
    }
};
</script>

