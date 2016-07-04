/**
 * index 页面功能
 * @author xianglx@cstonline.com
 * @date: 2015-6-28
 */
(function(win){
    var _global = {
        lx:{
            /*
             * 获取路径当中的值
             * @param 传入获取值对应的key
             * @return 返回获取到的值或false
             * */
            getUrlParam: function(key){
                var val = false;
                try{
                    var url = location.href.split("?")[1];
                    var params = url.split("&");
                    var len = params.length;
                    for (var i=0; i< len; i++){
                        var param = params[i].split("=");;
                        var k = param[0];
                        var v = param[1];
                        if (k == key){
                            val = v;
                            break;
                        }
                    }
                }catch(e){}
                return val;
            }
        }
    };
    win.global = _global;
})(window);

