<template>
<p>I emit data to parent</p>
    <div class="flex-box">
        <input
            ref="username"
            type="text"
            placeholder="Add name here..."
            @input="$emit('name-changed', $event.target.value)"
        />
        <input
            ref="userage"
            type="text"
            placeholder="Add age here..."
            @input="$emit('age-changed', $event.target.value)"
        />
    </div>
    <button class="button" @click="$emit('submitted', { name: $refs.username.value, age: $refs.userage.value })">
        Submit to child-b
    </button>
</template>

<script>
export default {
    emits: {
        // always kebab case
        'name-changed': (name) => {
            if (name != null) return true;
        },
        'age-changed': (age) => {
            if (age != null) return true;
        },
        submitted: ({ name, age }) => {
            if (name != null && age != null) {
                return true;
            } else {
                console.error('validation failed');
                return false;
            }
        }
    }
};
</script>

<style scoped>
.flex-box {
    display: flex;
}
</style>