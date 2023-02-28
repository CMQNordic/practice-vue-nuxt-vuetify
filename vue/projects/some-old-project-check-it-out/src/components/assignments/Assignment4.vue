<template>
    <base-assignment>
        <template #title> Section 2. Assignment 4 </template>
        <template #description>
            Binding classes and styles | v-if="" vs v-show="" | :class="[classNameAsString, objectWithClassNames, { classBackgroundRed:
            hasError }] | :style="[colorAsText ? { 'background-color': colorAsText } : {}, stylesAsObject]
        </template>
        <template #content>
            <!-- 1) Enter classname in user input and use it as a CSS class on a div box to turn green -->
            <!-- 2) Use the "visible" and "hidden" classes to show/ hide the box -->
            <!-- Clicking the button should toggle between the two options -->
            <!-- 3) Add dynamic inline styling to the below paragraph and let the user enter a background-color -->
            <!-- 4) Add some examples of class and style bindings with two words -->

            <div
                style="border: thin solid; width: 100%; height: 50px; margin-bottom: 10px"
                class="initialBackground"
                :class="[classNameAsString, objectWithClassNames, { classBackgroundRed: hasError }]"
                v-if="isVifEnabled"
                v-show="isVShowEnabled"
            >
                {{ classNameAsString }}
            </div>

            <div>
                <label>
                    Define class name "i-am-green" to change background:
                    <input type="text" @input="setText" />
                </label>
                <button @click="toggleError">Toggle background color (overwrite all others)</button>
            </div>

            <br />

            <div>
                <button @click="toggleVisibility()">Enable/disable "visibility: hidden"</button> (still in flow, in DOM,
                invisible)
            </div>
            <div>
                <button @click="toggleDisplay()">Enable/disable "display: none"</button> (out of flow, in DOM.
                Invisible.)
            </div>
            <div>
                <button @click="toggleIf()">Enable/disabl v-if="true/false"</button> (out of flow. Out of DOM.
                Invisible.)
            </div>
            <div>
                <button @click="toggleShow()">Enable/disabl v-show="true/false"</button> (out of flow, In DOM.
                invisible.)
            </div>

            <br />
            <br />

            <div
                style="background-color: lightgray; border: thin solid; width: 100%; height: 50px; margin-bottom: 10px"
                :style="[colorAsText ? { 'background-color': colorAsText } : {}, stylesAsObject]"
            >
                {{ colorAsText }}
            </div>
            <div>
                <label>
                    Define a background color as text i.e red:
                    <input type="text" v-model="colorAsText" />
                </label>
            </div>
            <div>
                <label>
                    Set font:
                    <input type="text" @input="setFontSize" />
                </label>
            </div>

            <br />

            <button @click="modifyStylesAsObject">Add diffrent styles</button>
        </template>
    </base-assignment>
</template>

<script>
export default {
    data() {
        return {
            classNameAsString: '',
            colorAsText: null,
            visibilityHidden: false,
            displayNone: false,
            isVifEnabled: true,
            isVShowEnabled: true,
            hasError: false,
            stylesAsObject: {
                'font-size': '36px'
            }
        };
    },
    computed: {
        objectWithClassNames() {
            return {
                'visibility-hidden': this.visibilityHidden,
                displayNone: this.displayNone
            };
        }
    },
    methods: {
        setText(event) {
            this.classNameAsString = event.target.value;
        },
        setFontSize(event) {
            this.stylesAsObject['font-size'] = event.target.value + 'px';
        },
        toggleError() {
            this.hasError = !this.hasError;
        },
        toggleVisibility() {
            this.visibilityHidden = !this.visibilityHidden;
        },
        toggleDisplay() {
            this.displayNone = !this.displayNone;
        },
        toggleIf() {
            this.isVifEnabled = !this.isVifEnabled;
        },
        toggleShow() {
            this.isVShowEnabled = !this.isVShowEnabled;
        },
        modifyStylesAsObject() {
            if (this.stylesAsObject['background-color']) {
                delete this.stylesAsObject['background-color'];
                delete this.stylesAsObject.color;
            } else {
                this.stylesAsObject['font-size'] = '16px';
                
                // Add new properties
                this.stylesAsObject['background-color'] = 'green';
                this.stylesAsObject.color = 'white';
            }
        }
    }
};
</script>

<style scoped>
.initialBackground {
    background-color: lightgray;
}

.i-am-green {
    background-color: Green;
}
.visibility-hidden {
    visibility: hidden;
}
.displayNone {
    display: none;
}
.classBackgroundRed {
    background-color: red;
}
</style>
