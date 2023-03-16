const app = new Vue({
    el: `#app`,
    data() {
        return {
            data: {},
        }
    },
    beforeCreate() {
        if (!localStorage.length) {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=argentina&appid=af127f59c01ee5ee16e6705d74b63a79&units=metric`;
            fetch(url)
                .then(response => response.json())
                .then(data => this.data = data)   
        }
    },
    mounted() {
        this.data = JSON.parse(localStorage.data)
    },
})