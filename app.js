var main = document.getElementById("main");
m.route.prefix = "";
var count = 0;
var page = {
  view: function () {
    return [
      m("h1", { class: "red" }, "my test app " + count),
      m(
        "button",
        {
          onclick: function () {
            count++;
          }
        },
        count + " clicks"
      ),
      m("p", { class: "tc" }, [
        m("a", { href: "/home", class: "link dim" }, "Go to Home")
      ])
    ];
  }
};
class Home {
  view() {
    return [
      m("a.link.dim", { href: "/page"}, ["Go to Page", m("b", 'text')]),
      m("form#vform", {
        class: "mw6 center pa2 black-80 mb3",
        autocomplete: "off"
      }, [
        m("input[type=text][name=_ji_qi_ren_][value='']", {style:"display:none;"}), 
        m("div.row", [
          m("div.w-100.pa1",[
            m("label[for=email]", {class: "f6 f5-ns b db mb2 lh-copy"}, [
              "請輸入您登錄學員系統的電子郵箱",
              m("span.red", "*（請確認拼寫正確）")
            ]),
            m("input#email[type=email][name=email][required]", {
              class: "input-reset bb b--black-20 pa2 mb2 db w-100 validate"
            }),
            m("button", {
              class: "link tc db pa3 bg-light-blue white f4 f3-ns b br3 w-100 center shadow-2"},
              "點擊進入觀看視頻"
            ),
          ]),
        ]),
      ]),
    ];
  }
}
m.route(main, "/", {
  "/": Home,
  "/page": page
});
