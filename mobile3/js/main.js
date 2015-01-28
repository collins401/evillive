/**
 * Created by feitai on 2015/1/3.
 */
$(document).ready(function() {

    $('.appclase').click(function(e){
        e.preventDefault();
        $('#downloadApp').removeClass('active');
    });
    $('#appDwonload').click(function(e){
        e.preventDefault();
        $('#downloadApp').addClass('active');
    })
    //提交按钮等待
    $('.loading-botton').click(function(){
       var thiss = $(this);
        $(this).addClass('active');

        setTimeout(function() {
            thiss.removeClass('active');
        }, 2000);
    });
    //评分标星显示
    $('.press').each(function(){
        var press = $(this).data('press');
        console.log(toPercent(press/5));
        $(this).css('width',toPercent(press/5));
    });
    function toPercent(data){
        var strData = parseFloat(data)*100;
        var ret = strData.toString()+"%";
        return ret;
    }
    //tab切换
    $('.detail-tabs li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-box .tabs-cont').eq($('.detail-tabs li.active').index()).fadeIn().siblings().fadeOut();
    });
    $("#yzmBtn").click(function(){//获取手机验证码点击事件
        var patrn=/(1[3|5|7|8])[\d]{9}/;
        if($('.tel-icon').val() == '' || $('.tel-icon').val() == null){
            showTips('手机号码不能为空！');
            return false;
        }

        if(!patrn.test($('.tel-icon').val()))
        {
            showTips('手机格式不正确！ ');
            return false;
        }
        timer(this);
    });
    var wait = 60;
    function timer(o){
        if(wait == 0){
            $('#yzmBtn').removeAttr('disabled');
            $('#yzmBtn').text('获取验证码');
            wait=60;
        }else{
            $('#yzmBtn').attr('disabled','true');
            $('#yzmBtn').text("重新发送(" + wait + ")");
            wait--;
            setTimeout(function(){
                timer(o);
            },1000);
        }
    }
    $('#regForm').click(function(){
        telvalidata();
        if($('.yzm-icon').val() == '' || $('.yzm-icon').val() == null){
            showTips('验证码不能为空！');
            return false;
        }
        if($('.name-icon').val() == '' || $('.name-icon').val() == null){
            showTips('昵称不能为空！');
            return false;
        }
        if($('.pwd-icon').val() == '' || $('.pwd-icon').val() == null){
            showTips('密码不能为空！');
            return false;
        }
        if($('.pwd-icon').val().length <6 || $('.pwd-icon').val().length >15){
            showTips('密码长度至少6位数,且不超过15个字符');
            return false;
        }
    })

});
//手机验证
function telvalidata(){
    var patrn=/(1[3|5|7|8])[\d]{9}/;
    if($('.tel-icon').val() == '' || $('.tel-icon').val() == null){
        showTips('手机号码不能为空！');
        return false;
    }

    if(!patrn.test($('.tel-icon').val()))
    {
        showTips('手机格式不正确！ ');
        return false;
    }
}
//信息提示框
function showTips(txt,time,status)
{
    var htmlCon = '';
    if(txt != ''){
        if(status != 0 && status != undefined){
            htmlCon = '<div class="overlay active" id="overtip"><div class="tipsBox ok">'+txt+'</div></div>';
        }else{
            htmlCon = '<div class="overlay active" id="overtip"><div class="tipsBox error">'+txt+'</div></div>';
        }
        $('body').prepend(htmlCon);
        if(time == '' || time == undefined){
            time = 1500;
        }
        setTimeout(function(){ $('#overtip').remove(); },time);
    }
}




