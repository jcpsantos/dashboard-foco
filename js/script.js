var pieData = {
    labels: ["Agências", "Hoteis"],
    datasets: [
        {
            data: 300,
            backgroundColor: "rgb(255, 99, 132)"
        },
        {
            data: 50,
            backgroundColor: "rgb(54, 162, 235)"
        }
    ]
};

//new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData);

new Chart(document.getElementById("pie"),{
    "type":"pie",
    "data":
        {"labels":["Agências","Hoteis"],
        "datasets":[{
            "label":"Novos Clientes",
            "data":[300,50],
            "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)"]
        }]}
});

new Chart(document.getElementById("line"),{
    "type":"line",
    "data":{
        "labels":["Jan","Fev","Mar","Abr","Mai","Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        "datasets":[{
            "label":"Crescimento x Redução",
            "data":[65,59,80,81,56,55,40,70,85,71,50,44],
            "fill":false,
            "borderColor":"rgb(75, 192, 192)",
            "lineTension":0.1}]},
            "options":{}
});