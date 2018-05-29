import Vue from 'vue'

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const dateFilter = value => {
    return formatDate(value);
};

function formatDate(inputDate){
    if(!!inputDate){
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        const formattedDate = day +
                                " de " +
                                months[month] +
                                ", " +
                                year +
                                " às " +
                                hour + 
                                ":" +
                                min;
        return formattedDate; } else { return 'Nenhuma compra efetuada'} 
    }
    Vue.filter('date', dateFilter)
