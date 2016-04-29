
$("#login").on('click', function (e, data) {
    var account = $("#account").val();
    var password = $("#password").val();
    var user_type_code = $("#user_type").val();
    //window.location.href = "index.html";

    if (account && password&& user_type_code) {
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            url: schoolhouse.address + "loginAndRegist/canLogin",
            data: {
                user_type_code: user_type_code,
                account: account,
                password: password
            },
            success: function (data) {
                if (data.success) {
                    
                    if(data.data.result){
                        localStorage.setItem("user_id", data.data.result.user_id); 
                        localStorage.setItem("user_type_code", data.data.result.user_type_code); 
                        if(user_type_code == 'user001'){
                            window.location.href = "stu_index.html";
                        }else if(user_type_code == 'user002'){
                            window.location.href = "tea_index.html";
                        }else if(user_type_code == 'user003'){
                            window.location.href = "par_index.html";
                        }else{
                            show_alert(null,"不存在此类用户!");
                        } 
                    }else{
                        show_alert(null,"用户名或密码错误!");
                    }
                } else {
                    show_alert(null,data.reason);
                }
            },
            error: function () {
                show_alert(null,"请求超时");
            }
        });
    } else {
        show_alert(null,"请输入完整信息后登陆");
    }
    
});