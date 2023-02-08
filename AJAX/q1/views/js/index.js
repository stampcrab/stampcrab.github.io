$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = () => {
        $("#fname").val("");
        $("#lname").val("");
        $("#msg").text("Data added successfully");
        $("#fname").focus();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        let timeArr = $("#arrTime").val().split(":");
        if (timeArr[0] >= 12) {
            timeArr.push('pm');
            timeArr[0] = timeArr[0] - 12;
        }
        else
            timeArr.push('am');
        const data = {
            fname: $("#fname").val(),
            lname: $("#lname").val(),
            food: $("#food").val(),
            time: timeArr[0] + ":" + timeArr[1] + " " + timeArr[2]
        };
        $.post({
            url: "/add",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});