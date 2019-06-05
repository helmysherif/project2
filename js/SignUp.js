
$("ul .sub-menu").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});
function validatePass()
        {
            var pass = document.forms["SignUp"]["exampleInputPassword1"].value;
            var confirmpass = document.forms["SignUp"]["exampleInputPassword2"].value;
            var isNum = false , isUpper = false , isLower = false , pos , char , msg , msg2;
            msg = document.getElementById("comment");
            msg2 = document.getElementById("comment2");
            msg.innerHTML = "";
            if(pass.length < 8)
            {
                msg.innerHTML = "</br>Your Password Must Be More Than 8 Character";
                return false;
            }
            for(pos = 0;pos < pass.length;pos++)
            {
                char = pass.charCodeAt(pos);
                if(char>=48 && char<=57)
                {
                    isNum = true;
                }
                if(char>=65 && char<=90)
                {
                    isUpper = true;
                }
                if(char>=97 && char<=122)
                {
                    isLower = true;
                }
            }
            if(!isNum)
            {
                msg.innerTHML = "</BR>Your Password Must Contain Numbers";
            }
            if(!isUpper)
            {
                msg.innerHTML += "</br>Your Password Must Contain Upper Case Letters";
            }
            if(!isLower)
            {
                msg.innerHTML += "</br>Your Password Must Contain Lower Case Letters";
            }
            if(!isNum || !isUpper || !isLower)
            {
               return false;
            }
            if(confirmpass !== pass)
            {
                msg2.innerHTML = "</br>Incorrect Password";
                return false;
            }
        }
        $(".menu-toggle").click(function () {
            $("nav").toggleClass("active")
        });
        /* start to hide the placeholder after focus on the input field */
        var placeAttr = "";
        $("[placeholder]").focus(function(){
            placeAttr = $(this).attr("placeholder");
            $(this).attr("placeholder","");
        }).blur(function(){
            $(this).attr("placeholder",placeAttr);
        })
        $("[required]").blur(function(){
            if($(this).val() == "")
            {
                $(this).next("span").fadeIn().delay(2000).fadeOut();
                $(this).css({
                    'border':'bottom',
                    'border-width':'1px',
                    'border-style':'solid',
                    'border-color':'#ff4d4d'
                })
            }
        })
        /* end to hide the placeholder after focus on the input field */
        /* start add the asterisk in the required input field */
        $("<span class = 'Asterisk'>*</span>").insertBefore(":input[required]");
        $(".Asterisk").parent("div").css({'position':'relative'});
        $(".Asterisk").each(function(){
            $(this).css({
                'position':'absolute',
                'top':'10px',
                'left': $(this).parent("div").find(":input").innerWidth() + 20,
                'color':'red',
                'font-size':'18px'
            });
        });
        /* end add the asterisk in the required input field */

