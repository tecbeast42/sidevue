import { sideVueBus } from './sideVue.js';

export default {
    template:`
	<button @click="toggle()">
	    Toggle {{sidevueId}}
	</button>
    `,
    methods: {
        toggle() {
	       sideVueBus.$emit('sidevue-toggle' + this.sidevueId);
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
