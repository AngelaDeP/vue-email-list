const app = new Vue(
    {
        el: '#app',
        data: {
            email: '',
            arrayEmail: [],
        },

        mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data);
                this.email = response.data.response;
            });

        },

    }
)