var RestApi = 'http://jjs.51daniu.cn/rest/index.php';
var Apistore= 'http://apistore.51daniu.cn/rest/index.php';
var currentVersion="1.0.16120100";
var enryDesktop = {
    init:function()
    {
      // /**定义：菜单栏menubar*************Start******/
      //
      // var menubar = new nw.Menu({ type: 'menubar' });
      // var sub1 = new nw.Menu();
      // sub1.append(new nw.MenuItem({
      //     label: '子菜单1',
      //     click: function() {
      //         var element = document.createElement('div');
      //         element.appendChild(document.createTextNode('Test 1'));
      //         document.body.appendChild(element);
      //     }
      // }));
      // menubar.append(new nw.MenuItem({ label: '菜单1', submenu: sub1 }));
      // var win = nw.Window.get();
      // win.menu = menubar;
      // /**定义：菜单栏menubar*************Over******/
      //
      // /**定义：右键菜单contextmenu*************Start******/
      // var menu = new nw.Menu();
      // menu.append(new nw.MenuItem({
      //   label: 'Item A',
      //   click: function(){
      //     alert('You have clicked at "Item A"');
      //   }
      // }));
      // menu.append(new nw.MenuItem({ label: 'Item B' }));
      // menu.append(new nw.MenuItem({ type: 'separator' }));
      // menu.append(new nw.MenuItem({ label: 'Item C' }));
      // document.body.addEventListener('contextmenu', function(ev) {
      //   ev.preventDefault();
      //   menu.popup(ev.x, ev.y);
      //   return false;
      // }, false);
      /**定义：右键菜单contextmenu*************Over******/
    },
    post:function(args,res)
    {
      $.post(RestApi,args,function(response){
        res(response);
      });
    }
}
