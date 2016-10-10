module.exports = {
    template:`
	<button @click="toggle()">
	    Toggle
	</button>

    `,
    methods: {
        toggle() {
	       this.$root.$emit('sidevue-toggle' + this.sidevueId);
	   }
    },
    props: {
        sidevueId: {
            default: '',
            type: String,
            required: false
        }
    }


}
