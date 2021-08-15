/**
 * @description js được chèn bởi trình chỉnh sửa phông nền typecho
 * @author ihewro Sun
 * @version 5.1.1
 */

window.onload = function () {
  
    
  
    /* 样式栏 */
    $(document).ready(function(){
        if ($("#wmd-button-row").length >0){
            $('#wmd-button-row').append(
               '<li class="wmd-spacer wmd-spacer4" id="wmd-spacer4"></li>'+
                '<li class="wmd-button" id="wmd-post-button" style="" title="Gọi các bài viết khác"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAu0lEQVQ4y+1SMQrCQBCcuSyBCPEBYukH7K2tBMtUlr7JzlIJeUYKO7G1CT5ArCTIseQsFFGI5kJaB7ZZZmdnmQUeyAC4lpUBgEFHdBaQml7SMJM2CaRogb+DbjHuvjmowwFA/7mwILmNomhdluWL8POVSU4/bBszEJGR9wnOuR7JGYAcwLGqqpUx5uQtQPLinBsCmAAoRCSx1qqvwDUIgj2AMYCNiMxV9eabwpnkMgxDJZnHcbxQVftOuAP6tELU+XUtGwAAAABJRU5ErkJggg=="/></li>'+
                '<li class="wmd-button" id="wmd-button-button" style="" title="Chèn nút"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA3UlEQVQ4y62TsY3DMBAEZ0+AAxeg2LFCFeB2vh6FLEGRAnXwBXwhqsBwwHPwJ4OgJdh+/wIEiOXuEsc7igqSenf/ktQCOWhz90VScvcfttA0zRFIwGBmp/o8uAFIoX0wz5LOPEFo5jokvWKuQhKASeqBi7t/F4IOGCVNkqbYd+t5aC/hJZU1h3A2s7aov40Su4I7AYm4ocRYmquQsSplsqJVK3nIOS91QM55kXSoaXv14fZgse5w9+teCe5+3fB//og9vxNGFbLbxsCwthE+GCTgf0b5z59JGze89Z1vd3ZUeZKleVUAAAAASUVORK5CYII="/></li>'+
                '<li class="wmd-button" id="wmd-text-button" style="" title="Chèn văn bản được đánh dấu"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA/UlEQVQ4y5WRMUoEQRBFX1VPy7JID8OIGBh6Co+xyCIiIiIewkuIocGeQFAMZBExNRcRL6CBZ1ikTapxXKeH3g8VFPR7VFULv5nSnw/gmYLETH2LyNEQuLsk+ALmwGJJcpwTXHcFqrpj/XnPJP8kWrJbehtjnInIyeAEmRX+lIicDgmKSkTOACorgBtgUrpPjPFKRMCOc+i9XwNuV50E4MIkBya5WwF+p21b7Uj2q6oaAfcF8JuqbgHQNE1XMjXJvAhOqes6SRYismeShx74VVU3ey9rk1yaZOKcGwOPHfglC6eEEJLk03s/NsmTwRtFfxxCUFXdTr1zbj0H/wBlW31InotZ5QAAAABJRU5ErkJggg=="/></li>'+
               /**    '<li class="wmd-button" id="wmd-ss-button" style="" title="Chèn hộp thu nhỏ"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAcdJREFUSMftlLFLI2EQxd/EwwQ3rKyQg4sIxkIEba5JKySptxCTDUkqA4cIwcI/QAJWVywJpAs2YY/c9y0INhohjcVymC5E2OJIWAPWciBZNyt+Vxzn2SZNivNXzTDF4808Bvjfob8F55yz5OUlTnGKn+vrKKKIgu+/XL9ci1+q6tbcmlsbDqWElJASNzeYx7zoh8MTK+5hD58dJ6NlNO08mfzwOhAQ9EXXUUQRFIuJqIiKqOfJh/Kh/PHuLktZypLnmdzk35snJwICgTlFmc73cAgAOJ/1/t/BmxAym9nM3t8PHAWOUF1dFVfiiuq+7zf8ht/Q9XFunBvnXDe8El5ZsC4uhC50GLI8seAxHSPpOGk7bWvp3d3XEFKPeiKyuYlb3FJ2YwNb2MKPp6eQElJCiiTlKU95enhgXdZl3WYTMcTwdWlpKtctx0EGmVlv/x0Ab0PYZm3WLhQQRxzx5WVqUYtavh+sBCvBSr2uWqqlWo+PfMAHfHBwgAgiiEzxCTvooHN/r6W0lJYyjH8hLFGJSqqKMspie20NVVTR87yRNbJG1tmZaZqmaT4/kyCBbzs7IBA+LS5O7LhMZWz3+386w5j1BWbPb/OHsYTTDyKOAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAxLTAxVDIyOjIxOjU3KzA4OjAw0/e32gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0wMVQyMjoyMTo1NyswODowMKKqD2YAAABJdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uXzZ5N3JpZm1kb3BqL2NhaWRhbi5zdmfHIwUIAAAAAElFTkSuQmCC"/></li>'+**/
                '<li class="wmd-button" id="wmd-yc1-button" style="" title="Chèn nội dung ẩn (nhận xét hiển thị)"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABT0lEQVQ4y8WSsUoDURBFz727JIEIEYsgYiEhWKmIf6CVlYilpaX4BXZ+gVj4EdbaBCsRKxERBQsRjWIhNoLIEiRZm7fwWGOrA1O8mblz78w8+GtLkmRU0kbx1rCier3uLMtm8jxvhdBjrVa76fV6I4PB4BgYT5Jktt/vv5e7jwDbwAuQl/wVuAWeJbV/sEpaAO4jwCfQCZ6F2LPttu3pMngpAArwqe0mgO0x4KIAA/tAJmm5AM8BHzGz7aakNeAN+AqyW8BuXCdpHuCqNGsnCHuLZYdYp1R7beCgvI8gexR4sr2Y5/n6L1c9olqtpsBh1DUDLoGu7bakHUlrYSfxns7TNK3F5zuJkl3brUhREziN8ne2J8qyJwNDAd6Lzhgzn9keHzbzBdCV1JK0NeQjPQCblUolLX/bFDgfIrstaUXSqu2ZRqNhfrOwpCn+w74BrYRu4ajW+pAAAAAASUVORK5CYII="/></li>'+
               /**   '<li class="wmd-button" id="wmd-yc2-button" style="" title="Chèn nội dung ẩn (hiển thị khi đăng nhập)"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAiNJREFUSMfFlL9LG2EYx5/nLhniEIwuJg4GJMTBFoQOF7eISS2CoNFcBh06XVwUnaz/QLcWoUMChYBBTV5PRcyohgwOndohiKC9JU45JT+GXEhMng71IsWWJDXid3x5nu/z+T7wvAAvLGy3QS7LZbnscNQqtUqtMjPDrXAr4CEiL3lxdX/fL/pFv3h11XEAFmdxFvd4AAGpdHgIAABdJtMfRSVNo1M6hW9TU2JIDImh4+NmvlzLpBJK9GZj46+DdXWZTDiGY2C+r2tBTQGSlKQkGQyQhzzYnc6moH70w8ehoUbfUwHc6EY33t0RIwYfLi6aRrKABX6en+t9TwZoJPOil3aWlmAbtuFrqfSo4P6dwhTGH8vLLfu2Wqgr5oq5Yq7BQUxgAhPT09w6tw5uIu6MOzPUDw58aV/al1aUdn1fTP/cABERESITmMCE0VFugBsA2/g4zdIsFAUBF3ERvlitoIEGlp4eEkgAR7GI13gN0cvL+lZ9C/qPjlBBBZW9vd//Q6HQFECWZGnn9cgIMWKcvLlJYQrD9+Hh/044j/Pw9uYGspClV4HAXPdcdyBzcvIIQD8bdVfdzX7OZAAAoL+vr2O7jkIUPt3e5iZzk/n3VqsUlIJSsFptXIHKVKYym63jg3UtwAKs9vaa7Wa72f7g3wDgU3yKT2HbV9Gu+AJf4AsPcxo/lebUnJozlzNOGCeM79bWngugGqlGKpF8/rmDtqxfzBLd7dgv6jsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMDFUMjI6MjE6NTcrMDg6MDDT97faAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTAxVDIyOjIxOjU3KzA4OjAwoqoPZgAAAEl0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vaG9tZS9hZG1pbi9pY29uLWZvbnQvdG1wL2ljb25fNnk3cmlmbWRvcGovZGVuZ2x1LnN2Z+iQ6bQAAAAASUVORK5CYII="/></li>'+**/

'<li class="wmd-button" id="wmd-center-button" style="" title="Căn lề giữa"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPUlEQVQ4y8WSQQ0AIBDDOnJBxanigUlEHiL2WAU06TJII2BcwXUEK55gI+BlN+ju7SZ4P5B0HEHNTEUT8nxdQwi+gMYYHQAAAABJRU5ErkJggg=="/></li>'+
'<li class="wmd-button" id="wmd-img-button" style="" title="Chèn img bbcode"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAqklEQVQ4y8WSsQ3CQAxF37dSUVExAQUFDQ0KDWMkY9CwADUNDEHBBmwQ5mAGapsmESFSlIQUeZJ1vpPu6csyTI2AGPGXpLxcgGJMghx4AulQQVLrU+A+VGAtqfpU3iaouEpa/pPgG0UyM1tI2ko6dc2gycHdz8AemAFrSUVEPHoJJGURcay/RcTNzDbu/uoURMS7GlQdd58DPwKVfdY421iVtWtLMHgXpuUDXnQmIxVCxpIAAAAASUVORK5CYII="/></li>'+



                '<style>' +
                '.wmd-button-row{height: 100%!important;}.OwO .OwO-logo { position: relative; display: inline-block;padding: 0; width: 50px; height: 24px; color: #99a2aa; border: 1px solid #e5e9ef; border-radius: 4px; position: relative; z-index: 101;font-size: 12px; text-align: center;line-height: 23px; margin-top: 3px;cursor: pointer; background: #fff;}</style>');

            $('#text').before('<div class="wmd-button OwO" style="" title="Chèn biểu tượng cảm xúc"></div>');

            var owo = new OwO({
                logo: 'Smiles',
                container: document.getElementsByClassName('OwO')[0],
                target: document.getElementById('text'),
                api: '/usr/themes/spimes/owo/OwO.json',
                position: 'down',
                width: '100%',
                maxHeight: '220px'
            });

            $(document).on('click', '#wmd-img-button', function() {//标签

                textContent = '[img]url img[/img]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent);

            });
          
           
          

           /** $(document).on('click', '#wmd-hplayer-button', function() {

                $('body').append(
                    '<div id="MetingPanel">'+
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                    '<div class="wmd-prompt-dialog">'+
                    '<div>'+
                    '<p><b>插入音乐</b></p>'+
                    '<p>请在下方的输入框内输入要插入的音乐地址 <p style="color: #ff0012">支持云解析歌曲地址和本地歌曲资源，不支持歌单地址</p> <a target="_blank" href="https://handsome.ihewro.com/#/functions?id=%e6%96%87%e7%ab%a0%e5%86%85%e6%8f%92%e5%85%a5%e9%9f%b3%e4%b9%90">使用文档</a>'+
                    '<p><labe>输入音乐地址</labe><input type="text"></input><label style="display: none">是否自动播放</label><input' +
                    ' type="checkbox" id="autoplay" style="display: none"></input></p>'+
                    '</div>'+
                    '<form>'+
                    '<button type="button" class="btn btn-s primary" id="hplayer_ok">确定</button>'+
                    '<button type="button" class="btn btn-s" id="hplayer_cancel">取消</button>'+
                    '</form>'+
                    '</div>'+
                    '</div>');
                $('.wmd-prompt-dialog input').val('http://').select();

            });**/


            $(document).on('click', '#wmd-post-button', function() {

                $('body').append(
                    '<div id="postPanel">'+
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                    '<div class="wmd-prompt-dialog">'+
                    '<div>'+
                    '<p><b>Gọi các bài viết khác</b></p><p>Bạn có thể gọi một bài viết khác trong bài viết hiện tại để đạt được trải nghiệm giao tiếp giữa các bài viết.</p>'+
                    '<labe>Nhập cid bài viết</labe><input type="text" name="cid" placeholder="Bắt buộc"></input></p>'+                    
                    '</div>'+
                    '<form>'+
                    '<button type="button" class="btn btn-s primary" id="post_ok">Xác nhận</button>'+
                    '<button type="button" class="btn btn-s" id="post_cancel">Hủy bỏ</button>'+
                    '</form>'+
                    '</div>'+
                    '</div>');
            });

            /** $(document).on('click', '#wmd-video-button', function() {

                $('body').append(
                    '<div id="videoPanel">'+
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                    '<div class="wmd-prompt-dialog">'+
                    '<div>'+
                    '<p><b>插入视频</b></p>'+
                    '<p>可以向文章中插入一个简约美观的视频播放器<a target="_blank" href="https://handsome.ihewro.com/#/functions?id=%e6%96%87%e7%ab%a0%e5%86%85%e6%8f%92%e5%85%a5%e8%a7%86%e9%a2%91">使用文档</a></p>'+
                    '<labe>输入视频地址</labe><input type="text" name="url"' +
                    ' placeholder="必填，不支持云解析（比如xxx.com/xxx.mp4）"></input>'+
                    '<labe>输入视频封面</labe><input type="text" name="pic" placeholder="选填，不填则显示主题内置的一张背景图片"></input></input>'+
                    '</div>'+
                    '<form>'+
                    '<button type="button" class="btn btn-s primary" id="video_ok">确定</button>'+
                    '<button type="button" class="btn btn-s" id="video_cancel">取消</button>'+
                    '</form>'+
                    '</div>'+
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });**/

           /**  $(document).on('click', '#wmd-button-button', function() {//按钮

                $('body').append(
                    '<div id="buttonPanel">'+//按钮
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                    '<div class="wmd-prompt-dialog">'+
                    '<div>'+
                    '<p><b>插入按钮</b></p>'+
                    '<p>基本</p>'+
                    '<p><input type="text" name="te" placeholder="内容"></input><input type="text" name="url" placeholder="链接"></input></p>' +
                    '<p><input type="text" name="ic" placeholder="图标"></input></p>'+
                    '<p><labe>样式</labe></p>'+
                    '<p><select id="co" style="width: 80%"><option value="light">白色</option><option value="info">蓝色</option><option value="dark">深色</option><option value="success">绿色</option><option value="black">黑色</option><option value="warning">黄色</option><option value="primary">紫色</option><option value="danger">红色</option></select>'+
                    '<select id="ty" style="width: 20%"><option value="">矩形</option><option value="round">椭圆形</option></select></p>'+
                    '</div>'+
                    '<form>'+
                    '<button type="button" class="btn btn-s primary" id="button_ok">确定</button>'+//按钮
                    '<button type="button" class="btn btn-s" id="button_cancel">取消</button>'+//按钮
                    '</form>'+
                    '</div>'+
                    '</div>');
                $('.wmd-prompt-dialog input').select();

            });**/
          
            $(document).on('click', '#wmd-button-button', function() {//标签

                textContent = '[button a=URL không có http://]Chỉnh sửa nội dung thẻ tại đây[/button]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent);

            });


            $(document).on('click', '#wmd-text-button', function() {//标签

                textContent = '[scode]Chỉnh sửa nội dung thẻ tại đây[/scode]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent);

            });
          
           
            $(document).on('click', '#wmd-yc1-button', function() {

                textContent = '[hide]Chỉnh sửa văn bản ẩn ở đây (nhận xét hiển thị)[/hide]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent);

            });
           
            $(document).on('click', '#wmd-center-button', function() {

                textContent = '[center]Chỉnh sửa văn bản ẩn ở đây (nhận xét hiển thị)[/center]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent);

            });

           /** $(document).on('click', '#wmd-ss-button', function() {//收缩框

                $('body').append(
                    '<div id="ssPanel">'+//收缩框
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>'+
                    '<div class="wmd-prompt-dialog">'+
                    '<div>'+
                    '<p><select id="sst" style="width: 20%"><option value="true">展开</option><option value="false">合上</option></select><input type="text" name="bt" placeholder="标题" style="width: 80%"></input></p>'+
                    '</div>'+
                    '<form>'+
                    '<button type="button" class="btn btn-s primary" id="ss_ok">确定</button>'+//收缩框
                    '<button type="button" class="btn btn-s" id="ss_cancel">取消</button>'+//收缩框
                    '</form>'+
                    '</div>'+
                    '</div>');
                $('.wmd-prompt-dialog input').select();

            });**/



           /** $(document).on('click', '#wmd-yc2-button', function() {

                textContent = '[login]这里编辑隐藏文本（登陆可见）[/login]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent);

            });**/



            /* 执行区 *///否定
            $(document).on('click','#hplayer_cancel',function() {
                $('#MetingPanel').remove();
                $('textarea').focus();
            });
            $(document).on('click','#video_cancel',function() {
                $('#videoPanel').remove();
                $('textarea').focus();
            });
            $(document).on('click','#post_cancel',function() {
                $('#postPanel').remove();
                $('textarea').focus();
            });
            $(document).on('click','#button_cancel',function() {//按钮
                $('#buttonPanel').remove();//按钮
                $('textarea').focus();
            });
            $(document).on('click','#text_cancel',function() {//标签
                $('#textPanel').remove();//标签
                $('textarea').focus();
            });
            $(document).on('click','#ss_cancel',function() {//收缩框
                $('#ssPanel').remove();//收缩框
                $('textarea').focus();
            });

            /* 代码块 *///肯定
         /**   $(document).on('click','#hplayer_ok',function() {
                //执行一个ajax请求获取解析歌单地址的音频信息
                callback=$.ajax({
                    type:'POST',
                    url: hplayerUrl,
                    data:{data:$('.wmd-prompt-dialog input').val(),size:"large",autoplay:$("#autoplay").is(':checked')},
                    async:false
                });

                myField = document.getElementById('text');
                var textMetingContent = callback.responseText;
                inserContentToTextArea(myField,textMetingContent,'#MetingPanel');

            });**/


          /**   $(document).on('click','#button_ok',function() {//按钮
//内容
                var textContent = $('.wmd-prompt-dialog input[name="te"]').val();
//颜色
                var obj_co = document.getElementById("co"); //定位id
                var index_co = obj_co.selectedIndex; // 选中索引
                var color = obj_co.options[index_co].value; // 选中值
//形状
                var obj_ty = document.getElementById("ty"); //定位id
                var index_ty = obj_ty.selectedIndex; // 选中索引
                var type = obj_ty.options[index_ty].value; // 选中值
//ICON
                var icon = $('.wmd-prompt-dialog input[name="ic"]').val();
//URL
                var url = $('.wmd-prompt-dialog input[name="url"]').val();
//输出格式
                textContent = '[button color="' + color + '" icon="' + icon + '" url="' + url + '" type="' + type + '"]' + textContent + '[/button]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent,'#buttonPanel');//按钮

            });**/


            $(document).on('click','#text_ok',function() {//标签

                var obj_ty = document.getElementById("type"); //定位id
                var index_ty = obj_ty.selectedIndex; // 选中索引
                var type = obj_ty.options[index_ty].value; // 选中值
//输出格式
                textContent = '[scode class="' + type + '"]Chỉnh sửa nội dung thẻ tại đây[/scode]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent,'#textPanel');//标签

            });
          
             $(document).on('click','#text_ok',function() {//标签

                var obj_ty = document.getElementById("type"); //定位id
                var index_ty = obj_ty.selectedIndex; // 选中索引
                var type = obj_ty.options[index_ty].value; // 选中值
//输出格式
                textContent = '[button class="' + type + '"]Chỉnh sửa nội dung thẻ tại đây[/button]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent,'#textPanel');//标签

            });


           /** $(document).on('click','#ss_ok',function() {//收缩框

                var obj_ty = document.getElementById("sst"); //定位id
                var index_ty = obj_ty.selectedIndex; // 选中索引
                var type = obj_ty.options[index_ty].value; // 选中值
                var t = $('.wmd-prompt-dialog input[name="bt"]').val();
//输出格式
                textContent = '[collapse status="' + type + '" title="' + t + '"]这里编辑收缩框内容[/collapse]';

                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent,'#ssPanel');//收缩框

            });**/



           /** $(document).on('click', '#video_ok',function () {
                var textContent = $('.wmd-prompt-dialog input[name="url"]').val();
                var pic = $('.wmd-prompt-dialog input[name="pic"]').val();
                var picHtml = "";
                var reg = new RegExp("\/","g");//g,表示全部替换。
                if (pic !== ""){
                    pic = pic.replace(reg,'\\/');
                    picHtml = 'pic="' + pic + '"';
                }
                textContent=textContent.replace(reg,'\\/');

                textContent = '[vplayer url="' + textContent + '" '+ picHtml +' /]';
                myField = document.getElementById('text');

                inserContentToTextArea(myField,textContent,'#videoPanel');
            }) **/

            $(document).on('click', '#post_ok',function () {
                var cid = '' + $('.wmd-prompt-dialog input[name = "cid"]').val() + '';               

                var textContent = '[post]' + cid + '[/post]';
                myField = document.getElementById('text');
                inserContentToTextArea(myField,textContent,'#postPanel');           
        
              
              
            })
        }
    });

};

function inserContentToTextArea(myField,textContent,modelId) {
    $(modelId).remove();
    if (document.selection) {//IE浏览器
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = textContent;
        myField.focus();
    } else if (myField.selectionStart || myField.selectionStart == '0') {
        //FireFox、Chrome
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        var cursorPos = startPos;
        myField.value = myField.value.substring(0, startPos)
            + textContent
            + myField.value.substring(endPos, myField.value.length);
        cursorPos += textContent.length;

        myField.selectionStart = cursorPos;
        myField.selectionEnd = cursorPos;
        myField.focus();
    }
    else{//其他环境
        myField.value += textContent;
        myField.focus();
    }
}

$(document).ready(function () {
   $("#custom-field table tr:nth-child(4)").hide();
   $("#custom-field table tr:nth-child(5)").hide();
   $("#custom-field table tr:nth-child(6)").hide();
   $("#custom-field table tr:nth-child(7)").hide();
   $("#custom-field table tr:nth-child(8)").hide();
   $("#custom-field table tr:nth-child(9)").hide();
   $("#custom-field table tr:nth-child(10)").hide();
   $("#custom-field table tr:nth-child(11)").hide();
 });

$("#custom-field").before('<style>.op_cur{ cursor: pointer; }</style><ul class="op_cur typecho-option-tabs fix-tabs clearfix"><li id="lie_is" class="active"><a>Loại danh sách</a></li><li id="post_is"><a>SEO</a></li><li id="video_is"><a>Phần video</a></li><li id="copy_is"><a>Bản quyền</a></li></ul>');

$('#lie_is').click(function(){
   $("#lie_is").addClass("active");
   $("#post_is").removeClass("active");
   $("#video_is").removeClass("active");
   $("#copy_is").removeClass("active");
   $("#custom-field table tr:nth-child(1)").show();
   $("#custom-field table tr:nth-child(2)").show();
   $("#custom-field table tr:nth-child(3)").show();
   $("#custom-field table tr:nth-child(4)").hide();
   $("#custom-field table tr:nth-child(5)").hide();
   $("#custom-field table tr:nth-child(6)").hide();
   $("#custom-field table tr:nth-child(7)").hide();
   $("#custom-field table tr:nth-child(8)").hide();
   $("#custom-field table tr:nth-child(9)").hide();
   $("#custom-field table tr:nth-child(10)").hide();
   $("#custom-field table tr:nth-child(11)").hide();
});

$('#post_is').click(function(){
   $("#post_is").addClass("active");
   $("#lie_is").removeClass("active");
   $("#video_is").removeClass("active");
   $("#copy_is").removeClass("active");
   $("#custom-field table tr:nth-child(1)").hide();
   $("#custom-field table tr:nth-child(2)").hide();
   $("#custom-field table tr:nth-child(3)").hide();
   $("#custom-field table tr:nth-child(4)").show();
   $("#custom-field table tr:nth-child(5)").show();
   $("#custom-field table tr:nth-child(6)").show();
   $("#custom-field table tr:nth-child(7)").hide();
   $("#custom-field table tr:nth-child(8)").hide();
   $("#custom-field table tr:nth-child(9)").hide();
   $("#custom-field table tr:nth-child(10)").hide();
   $("#custom-field table tr:nth-child(11)").hide();
});

$('#video_is').click(function(){
   $("#video_is").addClass("active");
   $("#lie_is").removeClass("active");
   $("#post_is").removeClass("active");
   $("#copy_is").removeClass("active");
   $("#custom-field table tr:nth-child(1)").hide();
   $("#custom-field table tr:nth-child(2)").hide();
   $("#custom-field table tr:nth-child(3)").hide();
   $("#custom-field table tr:nth-child(4)").hide();
   $("#custom-field table tr:nth-child(5)").hide();
   $("#custom-field table tr:nth-child(6)").hide();
   $("#custom-field table tr:nth-child(7)").show();
   $("#custom-field table tr:nth-child(8)").show();
   $("#custom-field table tr:nth-child(9)").show();
   $("#custom-field table tr:nth-child(10)").hide();
   $("#custom-field table tr:nth-child(11)").hide();
});

$('#copy_is').click(function(){
   $("#copy_is").addClass("active");
   $("#lie_is").removeClass("active");
   $("#post_is").removeClass("active");
   $("#video_is").removeClass("active");
   $("#custom-field table tr:nth-child(1)").hide();
   $("#custom-field table tr:nth-child(2)").hide();
   $("#custom-field table tr:nth-child(3)").hide();
   $("#custom-field table tr:nth-child(4)").hide();
   $("#custom-field table tr:nth-child(5)").hide();
   $("#custom-field table tr:nth-child(6)").hide();
   $("#custom-field table tr:nth-child(7)").hide();
   $("#custom-field table tr:nth-child(8)").hide();
   $("#custom-field table tr:nth-child(9)").hide();
   $("#custom-field table tr:nth-child(10)").show();
   $("#custom-field table tr:nth-child(11)").show();
});