import Vue from 'vue';

export const sideVueBus = new Vue();

export default {
    template: `
        <div>
            <section class="SideVue" :style="style" :class="sidevueClass">
                <slot></slot>
            </section>
        </div>
    `,
    data() {
        return {
            open: false
        }
    },
    computed : {
        style() {
            let style = Object.assign({
                'box-shadow':'0 0 20px #000',
                'transition':'all .5s ease-in-out',
            },this.dimensions);
            return Object.assign(style,this.position);
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
        startOpen: {
            default: false,
            type: Boolean,
            required: false,
        },
        sidevueId: {
            default: '',
            type: String,
            required: false,
        },
        sidevueClass: {
            default: '',
            type: String,
            required: false
        }
    },
    mounted() {
        this.open = this.startOpen;

        sideVueBus.$on('sidevue-close' + this.sidevueId, () => {
            this.open = false;
        });
        sideVueBus.$on('sidevue-open' + this.sidevueId, () => {
            this.open = true;
        });
        sideVueBus.$on('sidevue-toggle' + this.sidevueId, () => {
            this.toggle();
        });
    }
}
