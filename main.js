const app = new Vue(
    {
        el: '#app',
        data: {
            arrayEmail: [],
            
        },

        mounted() {

            this.email = '';
            
            for (let i = 0; i < 10; i++) {

                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.email = response.data.response;
                    console.log(this.email);

                    this.arrayEmail.push(this.email);
                    console.log(this.arrayEmail);
                });

            }

        },

    }
)