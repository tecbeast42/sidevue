module.exports = {
    template:`
	<button @click="toggle()">
	    Toggle
	</button>
	
    `,
    methods: {
        toggle() {
	    this.$dispatch('sidevue-toggle');
	}
    }
    

}
