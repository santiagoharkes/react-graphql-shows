const caluja = []
const eventos = [{ caluja }]

var start = new Date("2020/01/01"); //yyyy-mm-dd
var end = new Date("2020/02/28"); //yyyy-mm-dd

while (start <= end) {

    var mm = ((start.getMonth() + 1) >= 10) ? (start.getMonth() + 1) : '0' + (start.getMonth() + 1);
    var dd = ((start.getDate()) >= 10) ? (start.getDate()) : '0' + (start.getDate());
    var yyyy = start.getFullYear();
    var date = yyyy + "/" + mm + "/" + dd; //yyyy-mm-dd

    const fecha = new Date(date).getDay()

    switch (fecha) {
        case 0:
        case 6:
            caluja.push({
                title: "Evento 1",
                date: date,
                turnos: {
                    mañana: {
                        Uno: 10,
                        Dos: 11,
                    }
                },
            })
            break
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            caluja.push({
                title: "Evento 1",
                date: date,
                turnos: {
                    tarde: {
                        Dos: 14,
                        Tres: 15,
                    }
                },
            })

            break
    }


    start = new Date(start.setDate(start.getDate() + 1)); //date increase by 1
}

console.log(eventos)