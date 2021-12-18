function search1(){
    var a=document.getElementById("shuru").value;
    if(a==""){
        alert("内容不能为空");
    }
    else{
        window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=15007414_6_dg&wd=" + a;
        // window.location.href = "https://cn.bing.com/search?q=" + a;
    }
}
