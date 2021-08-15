document.write('<div class="fixed-sidebar" style="margin-left: -430px;">');
document.write('<div class="panel-set"><h3 class="panel-title">Cài đặt chủ đề<small>Spimes</small></h3></div>');
document.write('<ul id="menu-items" class="menu">');
document.write('<li id="menu-item" class="item-0 "><a href="#div-1" class="link-0"><span><i class="icon iconfont icon-icon-test13"></i> Cài đặt chung Info </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-2" class="link-0"><span><i class="icon iconfont icon-shouye"></i> Cài đặt trang chủ Index </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-3" class="link-0"><span><i class="icon iconfont icon-icon-test16"></i> Trung tâm thành viên member </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-4" class="link-0"><span><i class="icon iconfont icon-icon-test16"></i> Cài đặt quảng cáo Advert </span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-5" class="link-0"><span><i class="icon iconfont icon-tupian"></i> Cài đặt kiểu Style</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-6" class="link-0"><span><i class="icon iconfont icon-wenjuan"></i> Chân trang của thanh bên Side</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-7" class="link-0"><span><i class="icon iconfont icon-jiju"></i> Cài đặt di động Mobi</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-8" class="link-0"><span><i class="icon iconfont icon-sousuo"></i> SEO</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#div-9" class="link-0"><span><i class="icon iconfont icon-shandian"></i> Tăng tốc tối ưu hóa Optim</span></a></li>');
document.write('<li id="menu-item" class="item-0 "><a href="#typecho-option-item--69" class="link-0 ss"><span><i class="icon iconfont icon-anquan"></i> Lưu các thiết lập Save</span></a></li>');
document.write('</ul></div>');
document.write('<a href="#" id="scroll-to-top" class=""><span class="text-lg icon iconfont icon-icon-test26"></span></a>');


$(document).ready(function() { $('a.link-0').click(function() { $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top+-60+'px' }, { duration: 500, easing: 'swing' }); return false; }); }); $(function(){ $('a.link-0').click(function (e) {  $('a.link-0').removeClass('active'); $(this).addClass('active'); }); });