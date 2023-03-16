Vue.component('Busqueda', {
    data() {
        return {
            api: {
                key: `af127f59c01ee5ee16e6705d74b63a79`,
            },
            valor: ``,
        }
    },
    template: `
            <div class="busqueda row sticky-top mx-3 pb-3">
                <div class="col-12 col-md-6 mx-auto">
                    <form class="d-flex pt-3 sticky-top mx-auto" @submit.prevent>
                        <input class="form-control border-0" type="text" placeholder="Busca por pais o ciudad" v-model="valor">
                        <button class="btn btn-info ms-2" @click="buscar(valor)">Buscar</button>
                    </form>
                </div>
            </div>`,
    methods: {
        buscar(valor) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=${this.api.key}&units=metric`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.$emit('data', data);
                    localStorage.data = JSON.stringify(data)
                })   
            this.valor = "";
        },
    },
})