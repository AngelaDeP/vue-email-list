const app = new Vue(
    {
        el: '#app',
        data: {
            arrayEmail: [],
            
        },

        mounted() {
            
            this.email = '',
            this.arrayEmail = new Array(10);
            console.log(this.arrayEmail);

            for (let i = 0; i < this.arrayEmail.length; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.email = response.data.response;
                    console.log(this.email);

                    this.arrayEmail.push(this.email);
                });
                
            }

        },

    }
)