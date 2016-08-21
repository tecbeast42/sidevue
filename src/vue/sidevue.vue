<style lang="sass">
    section.SideVue {
        box-shadow: 0 0 20px #000;
        transition: all .5s ease-in-out;
    }
</style>

<template>
    <section class="SideVue" @click="toggle()" :style="style">
        <slot></slot>
    </section>
</template>

<script lang="babel">
export default {
    data() {
        return {};
    },
    ready() {},
    computed : {
        style() {
            return Object.assign(this.dimensions,this.position);
        },
        gap () {
            return this.open ? '0' : 'calc( -'+this.openGap+' + '+this.closeGap+')';
        },
        dimensions () {
            if(this.orientation === "vertical") {
                return {
                    width: this.openGap,
                    height: '100vh',
                }
            } else {
                return {
                    height: this.openGap,
                    width: '100vw',
                }
            }
        },
        position() {
            let position = {position: "absolute"};

            switch(this.direction) {
                case "left" :
                    return Object.assign(position, {
                        left: this.gap,
                        top: 0,
                    });
                case "right" :
                    return Object.assign(position, {
                        right: this.gap,
                        top: 0,
                    });
                case "top" :
                    return Object.assign(position, {
                        top: this.gap,
                        left: 0,
                    });
                case "bottom" :
                    return Object.assign(position, {
                        bottom: this.gap,
                        left: 0,
                    });
            }
        },
        orientation() {
            if(this.direction === "left" || this.direction === "right")
                return "vertical";
            else if(this.direction === "top" || this.direction === "bottom")
                return "horizontal";
            else
                console.warn("SideVue: Invalid direction");
        }
    },
    events: {
        'sidevue-open'() {
            this.open = true;
        },
        'sidevue-close'() {
            this.open = false;
        },
        'sidevue-toggle'() {
            this.toggle();
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        }
    },
    props: {
        closeGap: {
            default: '50px',
            type: String,
            required: false,
        },
        openGap: {
            default: '45%',
            type: String,
            required: false,
        },
        direction: {
            default: 'left',
            type: String,
            required: false,
        },
        open: {
            default: false,
            type: Boolean,
            required: false,
        }
    }
}
</script>
