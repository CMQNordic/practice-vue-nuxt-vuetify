<template>
    <div class="assignment">
        <div class="assignment__header">
            <p class="assignment__title">
                <slot name="title">title here...</slot>
            </p>
            <p class="assignment__description">
                <slot name="description">description here...</slot>
            </p>
        </div>
        <div class="assignment_content">
            <slot name="content">content here...</slot>
        </div>
    </div>
</template>

<style scoped >
.assignment {
    margin: 2rem 0;
    padding: 0;
    border: thin solid rgba(0, 0, 0, 0.16);
    border-radius: 0.5rem;
}

.assignment__header {
    background-color: rgb(224, 221, 221, 0.2);
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom: thin solid rgba(0, 0, 0, 0.16);

    padding-left: 0.5rem;
    padding-top: 0.7rem;
}

.assignment__title {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 900;
}

.assignment__description {
    margin: 0.5rem 0;
    font-weight: 500;
}

.assignment_content {
    padding: 1.2rem;
}
</style>