export const useAdh = defineStore('adh', {
    state: () => ({
        contact : {
            name: "",
            lastname: "",
            address: "",
            email: "",
            phone: "",
        },
        
        acceptRules: false,
        adhered: false,
        gift: 0,

        stateOf: 0
    }),
    getters: {
        price: (state) => state.gift + (state.adhered ? 10 : 0) // ? prix de l'adhesion : 10€/semestre
    },

    actions: {
        addContact(data : {name: string, lastname: string, address: string, email: string, phone: string}){
            this.contact = data
        },

        next(){
            this.stateOf++
        },
        previous(){
            this.stateOf--
        }
    }
})
