<template>
    <base-card>
        <li class="ResourceItem">
            <header class="ResourceItem__Header">
                <h3 class="ResourceItem__Header__Title">{{ title }}</h3>
                <base-button mode="flat" @click.stop="$emit('modify-resources', { id: id, action: 'DELETE' })">
                    Delete
                </base-button>
            </header>
            <p class="ResourceItem__Header__Description">{{ description }}</p>
            <nav>
                <a class="ResourceItem__Header__Link" :href="link">View resource</a>
            </nav>
        </li>
    </base-card>
</template>

<script>
export default {
    props: ['id', 'title', 'description', 'link'],
    emits: ['modify-resources']
};
</script>

<style scoped>
.ResourceItem {
    list-style-type: none;
    margin: 0;
    padding: 0.8rem;
}
.ResourceItem:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
.ResourceItem__Header {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
}
.ResourceItem__Header__Title {
    margin: 0;
}
.ResourceItem__Header__Description {
    margin: 0.5rem 0;
}

.ResourceItem__Header__Link {
    text-decoration: none;
    color: #ce5c00;
}

.ResourceItem__Header__Link:hover,
.ResourceItem__Header__Link:active {
    color: #c89300;
}
</style>