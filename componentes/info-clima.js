Vue.component('info-clima', {
    props: ['data'],
    data() {
        return {
           vermas: false
        }
    },
    template: `<div class="row d-flex justify-content-center mx-3">
                    <div class="info-clima col-12 col-md-6 text-white rounded-5 mt-2 px-4 py-4 mb-5">
                        <h2 class="pb-3">Hoy</h2>
                        <div class="row text-center">
                            <div class="col-6 col-md-8 px-3">
                                <h3 class="grados fw-bold pb-4">
                                    <p>{{ data.main.temp | number('0') }}°</p>
                                </h3>
                            </div>
                            <div class="col-6 col-md-4 px-3">
                                <img class="w-75" src="imagenes/cloudy.png" alt="">
                            </div>  
                        </div>
                        <div class="row">
                            <span class="ciudad h2">{{ data.name }}</span>
                        </div>
                        <a href="#" class="text-info text-decoration-none d-block mt-1 text-end" @click="switchVerMas()">{{ vermas ? 'ver menos' : 'ver más' }}</a>
                        <transition name="fade">
                            <div v-if="vermas">
                                <div class="pb-1 pt-4">
                                    <p class="fs-5 data-clima">Min {{ data.main.temp_min | number('0')  }}° | Max {{ data.main.temp_max | number('0')  }}°</p>
                                </div>
                                <div class="">
                                    <p class="fs-5 data-clima">Humedad {{ data.main.temp_min | number('0')  }}%</p>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>`,
    methods: {
        switchVerMas() {
            this.vermas = !this.vermas
        }
    },
})