


$(function () {

    $.connection.hub.url = "http://37.187.35.32:8081/signalr";
    $.connection.hub.logging = true;
    var distributionHub = $.connection.distributionHub;

    distributionHub.client.displayBills = function(Bills) {
        for(var bill in Bills)
            self.bills.push(new Bill(Bills[bill].Type, Bills[bill].DueDate.split("T")[0], Bills[bill].Amount));
    }

    function Bill(type, date, amount) {
        this.type = type;
        this.date = date;
        this.amount = amount;
    }

    $.connection.hub.start({transport: "longPolling"}).done(function() {
       distributionHub.server.getBills();
    });
})