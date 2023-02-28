<template>
    <p>
        Name:<b>{{ name }}</b>
    </p>
    <p>
        Age:<b>{{ age }}</b>
    </p>
    <p>
        Text A:<b>{{ textA }}</b>
    </p>
    <p>
        Text B (from struct): <b>{{ textBStruct.CompX.textB }}</b>
    </p>
    <p>
        Text C (from struct): <b>{{ textCStruct[0][1].textC }}</b>
    </p>
</template>

<script>
export default {
    props: {
        textA: null,
        textBStruct: null,
        textCStruct: null,
        name: {
            type: String,
            required: false,
            default: ''
        },
        age: {
            type: Number,
            required: true,
            validator(value) {
                if (isNaN(value)) {
                    console.error('Not a number was sent as prop when number was expected');
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
};
</script>