$(function(){

    //String.prototype.queryString= function(name) {
    //    var reg=new RegExp("[\?\&]" + name+ "=([^\&]+)","i"),r = this.match(reg);
    //    return r!==null?unescape(r[1]):null;
    //};
    //window.onload=function(){
    //    var last=location.href.queryString("_v");
    //    document.body.innerHTML+=last||"";
    //    if(location.href.indexOf("?")==-1){
    //        location.href=location.href+"?_v="+(new Date().getTime());
    //    }else{
    //        var now=new Date().getTime();
    //        if(!last){
    //            location.href=location.href+"&_v="+(new Date().getTime());
    //        }else if(parseInt(last)<(now-1000)){
    //            location.href=location.href.replace("_v="+last,"_v="+(new Date().getTime()));
    //        }
    //    }
    //};

    //if (screen.width >600){
    //    $("#container").addClass("sidebar-closed");//此分辨率下你需要的操作
    //}else{
    //    //window.onresize=function(){
    //    //    location=location ;
    //    //};
    //    //location.reload();
    //    $("#container").removeClass("sidebar-closed");
    //};



$("#ul>li").bind("click",function(){
	var index = $("#ul>li").index( $(this) );
	// $("#ul>li ul").hide();
	if($("#ul>li ul").eq(index).is(':hidden'))
        {
        	$("#ul>li ul").hide();
          $("#ul>li ul").eq(index).show();
  
         
        }else{
          $("#ul>li ul").eq(index).hide();
           
        }
              
	// $("#ul>li ul").eq(index).show();

});
$("#ul>li").bind("mouseleave",function(){
	var index = $("#ul>li").index( $(this) );
	$("#ul>li ul").hide();
});



// var newsTitle = "#news_inx .newstitle li";
//         var newsContent_l = "#news_inx .newslist .news_l";
//         var newsContent_r = "#news_inx .newslist .news_r ul";

//         $(newsTitle + ":first").addClass("on");
//         $(newsContent_l).not(":first").hide();

//         $(newsTitle).unbind("click").bind("mouseover", function(){
//             $(this).siblings(newsTitle).removeClass("on").end().addClass("on");
//             var index = $(newsTitle).index( $(this) );
//             $(newsContent_l).eq(index).siblings(newsContent_l).hide().end().show();
//             $(newsContent_r).eq(index).siblings(newsContent_r).removeClass("on").end().addClass("on");
//         });




















});