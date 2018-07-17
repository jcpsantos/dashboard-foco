/*var pieData = {
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
};*/

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

var options = {
      useEasing: false, 
      useGrouping: false,  
    };
    var mensal1 = new CountUp('mensalidade1', 0, 578, 0, 2.5, options);
    var mensal2 = new CountUp('mensalidade2', 0, 176, 0, 2.5, options)
    var mensal3 = new CountUp('mensalidade3', 0, 1000, 0, 2.5, options)

    var cancel1 = new CountUp('cancelado1', 0, 578, 0, 2.5, options)
    var cancel2 = new CountUp('cancelado2', 0, 176, 0, 2.5, options)
    var cancel3 = new CountUp('cancelado3', 0, 1000, 0, 2.5, options)

    var susp1 = new CountUp('suspenso1', 0, 578, 0, 2.5, options)
    var susp2 = new CountUp('suspenso2', 0, 176, 0, 2.5, options)
    var susp3 = new CountUp('suspenso3', 0, 1000, 0, 2.5, options)

    var rec1 = new CountUp('recuperado1', 0, 578, 0, 2.5, options)
    var rec2 = new CountUp('recuperado2', 0, 176, 0, 2.5, options)
    var rec3 = new CountUp('recuperado3', 0, 1000, 0, 2.5, options)
    if (!mensal1.error) {
      mensal1.start();
      mensal2.start();  
      mensal3.start();
      cancel1.start();
      cancel2.start();  
      cancel3.start();
      susp1.start();
      susp2.start();  
      susp3.start();
      rec1.start();
      rec2.start();  
      rec3.start();
    } else {
      console.error(mensal1.error);    
    }
 