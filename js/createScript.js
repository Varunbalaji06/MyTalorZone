function loadZippyJQuery() {
  if ("undefined" == typeof jQuery || void 0 === jQuery.get) {
    let e = document.createElement("script");
    (e.type = "text/javascript"),
      (e.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"),
      document.head.insertBefore(
        e,
        document.head.getElementsByTagName("script")[0]
      ),
      console.log("jQuery is loaded.");
  }
}
function popupZippy() {
  "cart" != zippyPage &&
    jQuery.get(
      "https://www.risingsigma.com/zippy-v2/pop-scope.php",
      { shop: zippyShop, p: __st.p },
      function (e, i) {
        "success" == i &&
          e.pop_here &&
          1 == e.app_enabled &&
          (5 == e.image
            ? (popup_image =
                "https://www.risingsigma.com/zippy-v2/uploads/images/" +
                e.image_url)
            : (popup_image =
                "https://www.risingsigma.com/zippy-v2/assets/img/popup/" +
                e.image +
                ".png"),
          (popup_heading_text = e.heading_text),
          (popup_heading_color = e.heading_color),
          (popup_subheading_text = e.subheading_text),
          (popup_subheading_color = e.subheading_color),
          (succ_msg = e.msg1),
          (fail_msg = e.fail_msg),
          (set_id = e.set_id),
          (char_length = e.char_length),
          jQuery.get(
            "https://www.risingsigma.com/zippy-v2/json.php",
            { shop: zippyShop },
            function (e, i) {
              if ("success" == i && "1" == e.master_value)
                switch (
                  ((border_width = e.border_width),
                  (but_width = e.but_width),
                  (z_heading = e.heading),
                  (box_width = e.box_width),
                  (box_style = e.box_style),
                  (box_color = e.box_color),
                  (box_rad = e.box_rad),
                  (but_text = e.but_text),
                  (but_style = e.but_style),
                  (but_color = e.but_color),
                  (but_rad = e.but_rad),
                  (succ_color = e.succ_color),
                  (fail_color = e.fail_color),
                  (placeholder_text = e.placeholder_text),
                  (back_color = e.back_color),
                  (txt_color = e.txt_color),
                  (tooltip_text = e.tooltip_text),
                  (tooltip_back_color = e.tooltip_back_color),
                  (tooltip_txt_color = e.tooltip_txt_color),
                  (output_heading = e.output_heading),
                  (heading_color = e.heading_color),
                  (heading_size = e.heading_size),
                  (widget_layout = e.layout),
                  (change_text = e.change_btn_text),
                  (indian_validation = e.indian_pin_check),
                  (char_length = 1 == indian_validation ? 6 : char_length),
                  e.icon)
                ) {
                  case "1":
                    _icon = "fa-truck";
                    break;
                  case "2":
                    _icon = "fa-shipping-fast";
                    break;
                  case "3":
                    _icon = "fa-shopping-cart";
                    break;
                  case "4":
                    _icon = "fa-map-marker-alt";
                    break;
                  case "5":
                    _icon = "fa-map-marked-alt";
                    break;
                  case "6":
                    _icon = "fa-search-location";
                }
              jQuery("head").append(
                '<link rel="stylesheet" type="text/css" href="https://www.risingsigma.com/zippy-v2/assets/css/output.css">'
              ),
                jQuery("head").append(
                  '<script src="https://kit.fontawesome.com/f52954a4c1.js" crossorigin="anonymous"></script>'
                ),
                jQuery("head").append(
                  '<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>'
                ),
                (widget_body =
                  "1" == widget_layout
                    ? "                                <div class='zipcode_bar_input_1528 zipcode_bar_output_1511_popup' style='border-radius: " +
                      box_rad +
                      "px; border-width: " +
                      border_width +
                      "; border-color: " +
                      box_color +
                      "; max-width: " +
                      box_width +
                      "px; border-style: " +
                      box_style +
                      ";'>                                    <input class='zipcode_bar_inputbox_1528' id = 'pin_popup' type = 'text' placeholder = '" +
                      placeholder_text +
                      "' maxlength='" +
                      char_length +
                      "' autocomplete = 'off' >                                    <button class='zipcode_bar_btn_1528' style='color: " +
                      txt_color +
                      ";' id='checkPin_popup' type='button'>" +
                      but_text +
                      "</button>                                </div>                                <div id='pin_pass_popup'>                                    <div class='zipcode_bar_title_1511'>                                        <i class='fa " +
                      _icon +
                      " fs-icon' aria-hidden='true' style='color: " +
                      heading_color +
                      "; font-size: " +
                      (parseInt(heading_size) + 6) +
                      "px;'></i>                                        <span id='delhivery'  style='color: " +
                      heading_color +
                      "; font-size: " +
                      heading_size +
                      "px;'>" +
                      z_heading +
                      "</span>                                    </div>                                    <div class='zipcode_bar_input_1528' style='text-align: initial; margin-left: auto; margin-right: auto; border-radius: " +
                      box_rad +
                      "px; border-width: " +
                      border_width +
                      "; border-color: " +
                      box_color +
                      "; max-width: " +
                      box_width +
                      "px; border-style: " +
                      box_style +
                      ";'>                                        <span class='zipcode_entered'>                                            <span id='zipcode-holder-layout-2-popup'>" +
                      zipcode +
                      "</span>                                            <span id='popup-svg'></span>                                            </span>                                        <span class='change_btn' id='change_popup' style='color: rgb(255, 63, 108);'>" +
                      change_text +
                      "</span>                                    </div>                                    <p id='succ_msg_popup' class='zippy-failure' style='color: " +
                      fail_color +
                      ";'>" +
                      fail_msg +
                      "</p>                                </div>                                "
                    : "                                <div class='zipcode_bar_input_1511 zipcode_bar_output_1511_popup'>                                    <input style='border-radius: " +
                      box_rad +
                      "px; border-width: " +
                      border_width +
                      "; border-color: " +
                      box_color +
                      "; width: " +
                      box_width +
                      "px; border-style: " +
                      box_style +
                      ";' id='pin_popup' type='text' placeholder='" +
                      placeholder_text +
                      "' autocomplete='off' maxlength='" +
                      char_length +
                      "'>                                    <button style='border-radius: " +
                      but_rad +
                      "px; border-width: " +
                      but_width +
                      "; border-color: " +
                      but_color +
                      "; border-style: " +
                      but_style +
                      "; background-color: " +
                      back_color +
                      "; color: " +
                      txt_color +
                      ";' id='checkPin_popup' type='button'>" +
                      but_text +
                      "</button>                                </div>                                <div class='zippy-success-card-1511' id='pin_pass_popup'>                                    <i class='fa fa-map-marker-alt fs-icon' aria-hidden='true'></i>                                    <button id='change_popup' type='button'>" +
                      output_heading +
                      " " +
                      zipcode +
                      "</button>                                    <p id='succ_msg_popup' class='zippy-failure' style='color: " +
                      fail_color +
                      ";'>" +
                      fail_msg +
                      "</p>                                </div>                                "),
                jQuery("body").append(
                  "                            <div id='popup_1528' class='overlay_1511'>                                <div class='popup_1511' align ='center' style='overflow: hidden;'>                                <img id='popup_image' src='" +
                    popup_image +
                    "' width='250px' alt='delivery icon'>                                <span class='close_1511'>&times;</span>                                <h2 id='popup_heading' style='font-family: Lato; color: " +
                    popup_heading_color +
                    ";'>" +
                    popup_heading_text +
                    "</h2>                                <p id='popup_subheading' style='color: " +
                    popup_subheading_color +
                    ";'>" +
                    popup_subheading_text +
                    "</p>                                <div class='content_1511'>                                    <div class='zipcode_bar_title_1511 zipcode_bar_output_1511_popup'>                                        <i class='fa " +
                    _icon +
                    " fs-icon' aria-hidden='true' style='color: " +
                    heading_color +
                    "; font-size: " +
                    (parseInt(heading_size) + 6) +
                    "px;'></i>                                        <span id='delhivery' style='color: " +
                    heading_color +
                    "; font-size: " +
                    heading_size +
                    "px;'>" +
                    z_heading +
                    "</span>                                    </div>                                    " +
                    widget_body +
                    "                                    <!--<a href='https://apps.shopify.com/zippy?utm_source=stores_referral&utm_medium=popup_widget&utm_campaign=zippy_promo' target='_blank'><img src='https://www.risingsigma.com/zippy-v2/assets/img/poweredby.png' width='100px' alt='powered by zippy' style='right: 10px; bottom: 10px; position: absolute;'></a>-->                                </div >                            </div>"
                );
              var t = document.getElementById("popup_1528"),
                o = document.getElementsByClassName("close_1511")[0];
              (window.onload = function () {
                t.style.display = "block";
              }),
                (o.onclick = function () {
                  (t.style.display = "none"), setCookieZippy("popped", 1, 1);
                }),
                jQuery("#pin_pass_popup").hide(),
                window.matchMedia("(max-width: 700px)").matches &&
                  (jQuery("#pin_popup").focus(function () {
                    jQuery(".popup_1511").css("top", "0%");
                  }),
                  jQuery("#pin_popup").blur(function () {
                    jQuery(".popup_1511").css("top", "15%");
                  })),
                jQuery("#checkPin_popup").click(function () {
                  zippyClicked = 1;
                  let e = jQuery("#pin_popup").val().trim();
                  0 == e.length
                    ? (jQuery(".zipcode_bar_output_1511_popup:eq(1)").after(
                        "<span id='temp-tooltip' style='color: red;'>Please enter a valid ZIPCode.</span>"
                      ),
                      setTimeout(function () {
                        jQuery("#temp-tooltip").fadeOut();
                      }, 1700))
                    : (setCookieZippy("zip", e),
                      setCookieZippy("popped", 1, 1),
                      jQuery.get(
                        "https://www.risingsigma.com/zippy-v2/engine-popup.php",
                        { set_id: set_id, q: e, clicked: zippyClicked },
                        function (i, t) {
                          if (
                            ((msg = fail_msg),
                            (color = fail_color),
                            "success" == t && "1" == i.flag)
                          ) {
                            if (
                              ((msg = i.msg1),
                              (color = succ_color),
                              "1" == widget_layout
                                ? ((svg =
                                    '                                                    <svg viewBox="0 0 24 24" fill="#23C5A0" class="tick">                                                        <g fill="none" fill-rule="evenodd">                                                            <path d="M0 0h24v24H0z"></path>                                                            <path fill="#23C5A0" fill-rule="nonzero" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 111.41-1.41L10 14.17l6.88-6.88a.996.996 0 111.41 1.41l-7.59 7.59a.996.996 0 01-1.41 0z"></path>                                                        </g>                                                    </svg>                                                    '),
                                  jQuery(
                                    ".zipcode_bar_output_1511_popup"
                                  ).hide(),
                                  jQuery("#zipcode-holder-layout-2-popup").text(
                                    e
                                  ),
                                  jQuery("#popup-svg").html(svg))
                                : (jQuery(
                                    ".zipcode_bar_output_1511_popup"
                                  ).hide(),
                                  jQuery("#change_popup").text(
                                    "Deliver to " + e
                                  )),
                              "b96dab-2" == zippyShop)
                            ) {
                              const e = setTimeout(function () {
                                jQuery("#popup_1528").fadeOut(),
                                  clearTimeout(e);
                              }, 1e3);
                            }
                          } else
                            "1" == widget_layout
                              ? ((svg =
                                  '<svg style="margin-left: 4px; width: 18px; vertical-align: middle;" height="18px" viewBox="0 0 512 512" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>'),
                                jQuery(".zipcode_bar_output_1511_popup").hide(),
                                jQuery("#zipcode-holder-layout-2-popup").text(
                                  e
                                ),
                                jQuery("#popup-svg").html(svg))
                              : (jQuery(
                                  ".zipcode_bar_output_1511_popup"
                                ).hide(),
                                jQuery("#change_popup").text(
                                  "Deliver to " + e
                                ));
                          jQuery("#succ_msg_popup").css("color", color),
                            jQuery("#succ_msg_popup").html(msg),
                            jQuery("#pin_pass_popup").fadeIn();
                        },
                        "json"
                      ));
                }),
                jQuery("#change_popup").click(function () {
                  jQuery("#pin_pass_popup").hide(),
                    jQuery(".zipcode_bar_output_1511_popup").show();
                }),
                jQuery("#pin_popup").input(function (e) {
                  if (
                    (jQuery("#pin_pass_popup").fadeOut(),
                    1 == indian_validation)
                  ) {
                    const i = e.target.value;
                    /\D/g.test(i)
                      ? (jQuery("#succ_msg_popup").css("display", "block"),
                        jQuery("#succ_msg_popup").fadeIn(),
                        jQuery("#succ_msg_popup").html(
                          "Only Indian pincodes are allowed."
                        ),
                        (e.target.value = i.replace(/\D/g, "")))
                      : jQuery("#succ_msg_popup").fadeOut();
                  }
                  13 === e.keyCode &&
                    (e.preventDefault(),
                    document.getElementById("checkPin_popup").click());
                });
            },
            "json"
          ));
      },
      "json"
    );
}
function main_function() {
  if (
    ((zippyUrl = document.URL),
    (zippyUrl = zippyUrl.split("/")),
    (zippyPage = zippyUrl[zippyUrl.length - 2]),
    ("products" == zippyPage && "blogs" != zippyUrl[3]) ||
      (zippyPage = zippyUrl[zippyUrl.length - 1]),
    console.log(zippyPage),
    (zippyShop = Shopify.shop),
    (zippyShop = zippyShop.split(".")[0]),
    console.log(zippyShop),
    getCookieZippy("popped") ||
      ("plants-by-woodlark-nurseries" == zippyShop
        ? "products" == zippyPage && popupZippy()
        : "pashafarmanara" == zippyShop
        ? "shipping-and-local-delivery" == zippyPage && popupZippy()
        : "swing-right-golf" == zippyShop
        ? ("golf-club-repair-services-raleigh-nc" != zippyPage &&
            "schedule-an-appointment" != zippyPage) ||
          popupZippy()
        : "omeio" == zippyShop
        ? "delivery" == zippyPage && popupZippy()
        : "how-water" == zippyShop
        ? "products" == zippyPage && popupZippy()
        : "merci-maman-3443" == zippyShop
        ? setTimeout(popupZippy, 1e4)
        : popupZippy()),
    "products" == zippyPage)
  ) {
    if (
      ((utm_source = zippyUrl[zippyUrl.length - 1].split("?")),
      (zippyProduct = utm_source[0]),
      console.log(zippyProduct),
      utm_source.length > 1
        ? ((utm_source = utm_source[1].split("&")),
          (variant_id = utm_source.find(function (e) {
            return (
              (e = e.split("=")), (e[0] = e[0].toLowerCase()), "variant" == e[0]
            );
          })),
          variant_id && (variant_id = variant_id.split("=")[1]),
          (utm_source = utm_source.find(function (e) {
            return (
              (e = e.split("=")),
              (e[0] = e[0].toLowerCase()),
              "utm_source" == e[0]
            );
          })),
          utm_source && (utm_source = utm_source.split("=")[1]))
        : (utm_source = void 0),
      jQuery.get(
        "https://www.risingsigma.com/zippy-v2/scope.php",
        { shop: zippyShop, page: zippyPage, product: zippyProduct },
        function (e, i) {
          "success" == i &&
            "1" == e.prod_here &&
            1 == e.app_enabled &&
            ((set_id = e.set_id),
            (disable_atc = e.disable_atc),
            (succ_msg = e.msg1),
            (fail_msg = e.fail_msg),
            (char_length = e.char_length),
            jQuery("head").append(
              '<link rel="stylesheet" type="text/css" href="https://www.risingsigma.com/zippy-v2/assets/css/output.css">'
            ),
            jQuery("head").append(
              '<script src="https://kit.fontawesome.com/f52954a4c1.js" crossorigin="anonymous"></script>'
            ),
            jQuery.get(
              "https://www.risingsigma.com/zippy-v2/json.php",
              { shop: zippyShop },
              function (e, i) {
                if ("success" == i && "1" == e.master_value) {
                  (border_width = e.border_width),
                    (but_width = e.but_width),
                    (z_heading = e.heading),
                    (box_width = e.box_width),
                    (box_style = e.box_style),
                    (box_color = e.box_color),
                    (box_rad = e.box_rad),
                    (but_text = e.but_text),
                    (but_style = e.but_style),
                    (but_color = e.but_color),
                    (but_rad = e.but_rad),
                    (succ_color = e.succ_color),
                    (fail_color = e.fail_color),
                    (placeholder_text = e.placeholder_text),
                    (back_color = e.back_color),
                    (txt_color = e.txt_color),
                    (tooltip_text = e.tooltip_text),
                    (tooltip_back_color = e.tooltip_back_color),
                    (tooltip_txt_color = e.tooltip_txt_color),
                    (output_heading = e.output_heading),
                    (heading_color = e.heading_color),
                    (heading_size = e.heading_size),
                    (widget_layout = e.layout),
                    (change_text = e.change_btn_text),
                    (indian_validation = e.indian_pin_check),
                    (char_length = 1 == indian_validation ? 6 : char_length);
                  let i = e.display_rule,
                    o = e.disp_rule_1,
                    p = e.disp_rule_2,
                    a = e.disp_rule_3,
                    r = e.rule_value_1,
                    s = e.rule_value_2,
                    l = e.rule_value_3;
                  function t(e, i) {
                    if (((i = new RegExp(i, "i")), i.test(document.URL))) {
                      if ("1" == e) return 1;
                    } else if ("2" == e) return 1;
                    return 0;
                  }
                  if ("any" == i)
                    null != r && "" != r && (rules_flag = t(o, r)),
                      rules_flag ||
                        null == s ||
                        "" == s ||
                        (rules_flag = t(p, s)),
                      rules_flag ||
                        null == l ||
                        "" == l ||
                        (rules_flag = t(a, l));
                  else {
                    let e = 2;
                    null != r && "" != r && (e = t(o, r)),
                      0 != e && null != s && "" != s && (e = t(p, s)),
                      0 != e && null != l && "" != l && (e = t(a, l)),
                      2 != e && (rules_flag = e);
                  }
                  if (1 == rules_flag)
                    return void console.log(
                      "Non serviceable by display rules."
                    );
                  switch (e.icon) {
                    case "1":
                      _icon = "fa-truck";
                      break;
                    case "2":
                      _icon = "fa-shipping-fast";
                      break;
                    case "3":
                      _icon = "fa-shopping-cart";
                      break;
                    case "4":
                      _icon = "fa-map-marker-alt";
                      break;
                    case "5":
                      _icon = "fa-map-marked-alt";
                      break;
                    case "6":
                      _icon = "fa-search-location";
                  }
                  if (
                    (jQuery(e.btn_selector).length
                      ? ((zippyBtn = jQuery(e.btn_selector)),
                        (zippyBtnFromDB = !0))
                      : (zippyBtn = jQuery("[action='/cart/add']:eq(0)").find(
                          "[type=submit]:eq(0)"
                        )),
                    null != e.pos_selector)
                  ) {
                    let i = e.pos_selector.split(" "),
                      t = i[0],
                      o = i[1];
                    "after" == t
                      ? jQuery(o).after("<div id='zippy_widget_1511'></div>")
                      : "before" == t
                      ? jQuery(o).before("<div id='zippy_widget_1511'></div>")
                      : "none" == t &&
                        (1 == e.wpos
                          ? jQuery(o).after(
                              "<div id='zippy_widget_1511' style='max-width: 100%;'></div>"
                            )
                          : 2 == e.wpos &&
                            jQuery(o).before(
                              "<div id='zippy_widget_1511' style='max-width: 100%;'></div>"
                            ));
                  } else
                    switch (e.wpos) {
                      case "1":
                        jQuery("#zippy_widget_1511").remove(),
                          jQuery(e.btn_selector).length
                            ? zippyBtn.after(
                                "<div id='zippy_widget_1511'></div>"
                              )
                            : "www-barfindia-com" == zippyShop
                            ? jQuery("[action='/cart/add']:eq(1)").after(
                                "<div id='zippy_widget_1511'></div>"
                              )
                            : "iba-cos" == zippyShop
                            ? jQuery(".payment-buttons:eq(0)").after(
                                "<div id='zippy_widget_1511'></div>"
                              )
                            : "pink-celestial" == zippyShop
                            ? zippyBtn.after(
                                "<div id='zippy_widget_1511'></div>"
                              )
                            : jQuery("[action='/cart/add']:eq(0)").after(
                                "<div id='zippy_widget_1511'></div>"
                              );
                        break;
                      case "2":
                        jQuery("#zippy_widget_1511").remove(),
                          zippyBtn.parent().is(".wrapper-1511")
                            ? jQuery(".wrapper-1511").before(
                                "<div id='zippy_widget_1511'></div>"
                              )
                            : zippyBtn.before(
                                "<div id='zippy_widget_1511'></div>"
                              );
                        break;
                      case "3":
                        console.log("Manual");
                        break;
                      case "4":
                        jQuery("#zippy_widget_1511").remove(),
                          (par = zippyBtn),
                          par.before("<div id='zippy_widget_1511'></div>");
                        break;
                      default:
                        jQuery("#zippy_widget_1511").remove();
                    }
                  (zipcode = getCookieZippy("zip")),
                    "" != zipcode ? hasZippyCookie() : noZippyCookie();
                }
              },
              "json"
            ));
        },
        "json"
      ),
      0 == rules_flag)
    )
      return;
  } else
    "cart" == zippyPage
      ? ((utm_source = zippyUrl[zippyUrl.length - 1].split("?")),
        utm_source.length > 1
          ? ((utm_source = utm_source[1].split("&")),
            (utm_source = utm_source.find(function (e) {
              return (
                (e = e.split("=")),
                (e[0] = e[0].toLowerCase()),
                "utm_source" == e[0]
              );
            })),
            utm_source && (utm_source = utm_source.split("=")[1]))
          : (utm_source = void 0),
        jQuery.get(
          "https://www.risingsigma.com/zippy-v2/scope.php",
          { shop: zippyShop, page: zippyPage },
          function (e, i) {
            "success" == i &&
              "1" == e.prod_here &&
              1 == e.app_enabled &&
              ((set_id = e.set_id),
              (disable_atc = e.disable_atc),
              (succ_msg = e.msg1),
              (fail_msg = e.fail_msg),
              (char_length = e.char_length),
              jQuery("head").append(
                '<link rel="stylesheet" type="text/css" href="https://www.risingsigma.com/zippy-v2/assets/css/output.css">'
              ),
              jQuery("head").append(
                '<script src="https://kit.fontawesome.com/f52954a4c1.js" crossorigin="anonymous"></script>'
              ),
              jQuery.get(
                "https://www.risingsigma.com/zippy-v2/json.php",
                { shop: zippyShop },
                function (e, i) {
                  if ("success" == i && "1" == e.master_value) {
                    switch (
                      ((border_width = e.border_width),
                      (but_width = e.but_width),
                      (z_heading = e.heading),
                      (box_width = e.box_width),
                      (box_style = e.box_style),
                      (box_color = e.box_color),
                      (box_rad = e.box_rad),
                      (but_text = e.but_text),
                      (but_style = e.but_style),
                      (but_color = e.but_color),
                      (but_rad = e.but_rad),
                      (succ_color = e.succ_color),
                      (fail_color = e.fail_color),
                      (placeholder_text = e.placeholder_text),
                      (back_color = e.back_color),
                      (txt_color = e.txt_color),
                      (tooltip_text = e.tooltip_text),
                      (tooltip_back_color = e.tooltip_back_color),
                      (tooltip_txt_color = e.tooltip_txt_color),
                      (output_heading = e.output_heading),
                      (heading_size = e.heading_size),
                      (output_heading = e.output_heading),
                      (cart_checkout_disabled = e.cart_checkout_disabled),
                      (widget_layout = e.layout),
                      (change_text = e.change_btn_text),
                      (indian_validation = e.indian_pin_check),
                      (char_length = 1 == indian_validation ? 6 : char_length),
                      (zippyBtn = jQuery("[name='checkout']")),
                      "store-altlifelab-com" == zippyShop ||
                      "www-barfindia-com" == zippyShop ||
                      "healthonplants" == zippyShop ||
                      "integfarmsindia" == zippyShop ||
                      "freshlyflour" == zippyShop ||
                      "sahuayo-mayorista" == zippyShop ||
                      "ripoff-streetwear-india" == zippyShop ||
                      "vinuaqua" == zippyShop ||
                      "praakritikshop" == zippyShop ||
                      "dsappliance" == zippyShop
                        ? (zippyBtn = jQuery("[name='checkout']:eq(1)"))
                        : "heritage-life-5123" == zippyShop
                        ? (zippyBtn = jQuery("#checkout"))
                        : "masculn-project-new" == zippyShop &&
                          (zippyBtn = jQuery("[name='checkout']:eq(2)")),
                      e.icon)
                    ) {
                      case "1":
                        _icon = "fa-truck";
                        break;
                      case "2":
                        _icon = "fa-shipping-fast";
                        break;
                      case "3":
                        _icon = "fa-shopping-cart";
                        break;
                      case "4":
                        _icon = "fa-map-marker-alt";
                        break;
                      case "5":
                        _icon = "fa-map-marked-alt";
                        break;
                      case "6":
                        _icon = "fa-search-location";
                    }
                    switch (e.cpos) {
                      case "1":
                        0 == jQuery("#zippy_widget_1511").length &&
                          ("store-altlifelab-com" == zippyShop
                            ? jQuery("[action='/cart']:eq(2)").append(
                                "<div id='zippy_widget_1511'></div>"
                              )
                            : "www-barfindia-com" == zippyShop ||
                              "integfarmsindia" == zippyShop ||
                              "wild-oz" == zippyShop ||
                              "praakritikshop" == zippyShop ||
                              "freshlyflour" == zippyShop ||
                              "sahuayo-mayorista" == zippyShop ||
                              "ripoff-streetwear-india" == zippyShop
                            ? zippyBtn
                                .closest(".cart__ctas")
                                .after("<div id='zippy_widget_1511'></div>")
                            : "healthonplants" == zippyShop
                            ? zippyBtn
                                .closest(".cart__footer")
                                .prepend("<div id='zippy_widget_1511'></div>")
                            : "heritage-life-5123" == zippyShop
                            ? zippyBtn
                                .closest(".cart__ctas")
                                .before("<div id='zippy_widget_1511'></div>")
                            : jQuery("[action='/cart']").append(
                                "<div id='zippy_widget_1511'></div>"
                              ));
                        break;
                      case "2":
                        0 == jQuery("#zippy_widget_1511").length &&
                          zippyBtn.before("<div id='zippy_widget_1511'></div>");
                    }
                    (zipcode = getCookieZippy("zip")),
                      "" != zipcode ? hasZippyCookie() : noZippyCookie();
                  }
                },
                "json"
              ));
          },
          "json"
        ))
      : 0 != jQuery(".zippy_widget_1511").length ||
        0 != jQuery("#zippy_widget_1511").length
      ? (console.log("Manual"),
        (utm_source = zippyUrl[zippyUrl.length - 1].split("?")),
        utm_source.length > 1
          ? ((utm_source = utm_source[1].split("&")),
            (utm_source = utm_source.find(function (e) {
              return (
                (e = e.split("=")),
                (e[0] = e[0].toLowerCase()),
                "utm_source" == e[0]
              );
            })),
            utm_source && (utm_source = utm_source.split("=")[1]))
          : (utm_source = void 0),
        jQuery.get(
          "https://www.risingsigma.com/zippy-v2/scope.php",
          { shop: zippyShop, page: zippyPage },
          function (e, i) {
            "success" == i &&
              "1" == e.prod_here &&
              1 == e.app_enabled &&
              ((set_id = e.set_id),
              (disable_atc = e.disable_atc),
              (succ_msg = e.msg1),
              (fail_msg = e.fail_msg),
              (char_length = e.char_length),
              jQuery("head").append(
                '<link rel="stylesheet" type="text/css" href="https://www.risingsigma.com/zippy-v2/assets/css/output.css">'
              ),
              jQuery("head").append(
                '<script src="https://kit.fontawesome.com/f52954a4c1.js" crossorigin="anonymous"></script>'
              ),
              jQuery.get(
                "https://www.risingsigma.com/zippy-v2/json.php",
                { shop: zippyShop },
                function (e, i) {
                  if ("success" == i && "1" == e.master_value) {
                    switch (
                      ((border_width = e.border_width),
                      (but_width = e.but_width),
                      (z_heading = e.heading),
                      (box_width = e.box_width),
                      (box_style = e.box_style),
                      (box_color = e.box_color),
                      (box_rad = e.box_rad),
                      (but_text = e.but_text),
                      (but_style = e.but_style),
                      (but_color = e.but_color),
                      (but_rad = e.but_rad),
                      (succ_color = e.succ_color),
                      (fail_color = e.fail_color),
                      (placeholder_text = e.placeholder_text),
                      (back_color = e.back_color),
                      (txt_color = e.txt_color),
                      (tooltip_text = e.tooltip_text),
                      (tooltip_back_color = e.tooltip_back_color),
                      (tooltip_txt_color = e.tooltip_txt_color),
                      (heading_color = e.heading_color),
                      (heading_size = e.heading_size),
                      (output_heading = e.output_heading),
                      (widget_layout = e.layout),
                      (change_text = e.change_btn_text),
                      (indian_validation = e.indian_pin_check),
                      (char_length = 1 == indian_validation ? 6 : char_length),
                      e.icon)
                    ) {
                      case "1":
                        _icon = "fa-truck";
                        break;
                      case "2":
                        _icon = "fa-shipping-fast";
                        break;
                      case "3":
                        _icon = "fa-shopping-cart";
                        break;
                      case "4":
                        _icon = "fa-map-marker-alt";
                        break;
                      case "5":
                        _icon = "fa-map-marked-alt";
                        break;
                      case "6":
                        _icon = "fa-search-location";
                    }
                    (zipcode = getCookieZippy("zip")),
                      "" != zipcode ? hasZippyCookie() : noZippyCookie();
                  }
                },
                "json"
              ));
          },
          "json"
        ))
      : console.log("No Zippy Div");
}
function setCookieZippy(e, i, t = 7) {
  "thegourmetbox" == zippyShop && (t = 2);
  let o = new Date();
  o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3);
  let p = "expires=" + o.toUTCString();
  document.cookie =
    "jandhlogs-co-uk" == zippyShop
      ? e + "=" + i + "; Path=/; SameSite=None; Secure"
      : e + "=" + i + "; " + p + "; Path=/; SameSite=None; Secure";
}
function getCookieZippy(e) {
  let i = e + "=",
    t = document.cookie.split(";");
  for (let e = 0; e < t.length; e++) {
    let o = t[e];
    for (; " " == o.charAt(0); ) o = o.substring(1);
    if (0 == o.indexOf(i)) return o.substring(i.length, o.length);
  }
  return "";
}
async function hasZippyCookie() {
  if ("products" == zippyPage || "cart" == zippyPage) {
    jQuery("#zippy_widget_1511").empty(),
      jQuery(".zippy_widget_1511").empty(),
      (zipcode = getCookieZippy("zip"));
    let e = null;
    "cart" == zippyPage &&
      ((e = await fetch("/cart.json")),
      (e = await e.json()),
      (e = e.items.map((e) => e.handle))),
      jQuery.ajax({
        url: "https://www.risingsigma.com/zippy-v2/engine.php",
        data: {
          set_id: set_id,
          q: zipcode,
          clicked: zippyClicked,
          utm: utm_source,
          page: zippyPage,
          product: zippyProduct,
          variant: variant_id,
          cart: e,
        },
        type: "GET",
        beforeSend: function () {
          jQuery("#zippy_widget_1511").empty(),
            jQuery("#zippy_widget_1511").append(
              '<div class="fas fa-spinner zippy_loading"></div>'
            ),
            jQuery(".zippy_widget_1511").empty(),
            jQuery(".zippy_widget_1511").append(
              '<div class="fas fa-spinner zippy_loading"></div>'
            );
        },
        success: function (e, i) {
          jQuery("#zippy_widget_1511").empty(),
            jQuery(".zippy_widget_1511").empty(),
            (msg = e.fail_msg),
            (color = fail_color);
          let t =
            '<svg style="margin-left: 4px; width: 18px; vertical-align: middle;" height="18px" viewBox="0 0 512 512" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>';
          "success" == i &&
            "1" == e.flag &&
            ((msg = e.msg1),
            (color = succ_color),
            (t =
              '                    <svg viewBox="0 0 24 24" fill="#23C5A0" class="tick">                        <g fill="none" fill-rule="evenodd">                            <path d="M0 0h24v24H0z"></path>                            <path fill="#23C5A0" fill-rule="nonzero" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 111.41-1.41L10 14.17l6.88-6.88a.996.996 0 111.41 1.41l-7.59 7.59a.996.996 0 01-1.41 0z"></path>                        </g>                    </svg>                    ')),
            (lekh =
              "1" == widget_layout
                ? '                    <div class="zipcode_bar_title_1511">                        <i class="fa ' +
                  _icon +
                  ' fs-icon" aria-hidden="true" style="color: ' +
                  heading_color +
                  "; font-size: " +
                  (parseInt(heading_size) + 6) +
                  'px;"></i>                        <span id="delhivery" style="color: ' +
                  heading_color +
                  "; font-size: " +
                  heading_size +
                  'px;">' +
                  z_heading +
                  '</span>                    </div>                    <div class="zipcode_bar_input_1528" style="border-radius: ' +
                  box_rad +
                  "px; border-width: " +
                  box_width +
                  "; border-color: " +
                  box_color +
                  "; max-width: " +
                  box_width +
                  "px; border-style: " +
                  box_style +
                  '; ">                        <span class="zipcode_entered">                            <span id="zipcode-holder-layout-2">' +
                  zipcode +
                  "</span>                            " +
                  t +
                  '                        </span>                        <span class="change_btn" id="change" style="color: rgb(255, 63, 108); ">CHANGE</span>                    </div>                    <p class="zippy-failure" style="color: ' +
                  color +
                  '; ">' +
                  msg +
                  "</p>                    "
                : '                    <div class="zippy-success-card-1511">                        <i class="fa fa-map-marker-alt fs-icon" aria-hidden="true"></i>                        <button id="change" type="button">' +
                  output_heading +
                  " " +
                  zipcode +
                  '<i class="fa fa-pencil" aria-hidden="true" style="margin-left: 5px;"></i></button>                        <p class="zippy-failure" style="color: ' +
                  color +
                  ';">' +
                  msg +
                  "</p>                    </div>"),
            (lekhForClass =
              "1" == widget_layout
                ? '                    <div class="zipcode_bar_title_1511">                        <i class="fa ' +
                  _icon +
                  ' fs-icon" aria-hidden="true" style="color: ' +
                  heading_color +
                  "; font-size: " +
                  (parseInt(heading_size) + 6) +
                  'px;"></i>                        <span class="delhivery" style="color: ' +
                  heading_color +
                  "; font-size: " +
                  heading_size +
                  'px;">' +
                  z_heading +
                  '</span>                    </div>                    <div class="zipcode_bar_input_1528" style="border-radius: ' +
                  box_rad +
                  "px; border-width: " +
                  box_width +
                  "; border-color: " +
                  box_color +
                  "; max-width: " +
                  box_width +
                  "px; border-style: " +
                  box_style +
                  '; ">                        <span class="zipcode_entered">                            <span class="zipcode-holder-layout-2">' +
                  zipcode +
                  "</span>                            " +
                  t +
                  '                        </span>                        <span class="change_btn" class="change" style="color: rgb(255, 63, 108); ">CHANGE</span>                    </div>                    <p class="zippy-failure" style="color: ' +
                  color +
                  '; ">' +
                  msg +
                  "</p>                    "
                : '                    <div class="zippy-success-card-1511">                        <i class="fa fa-map-marker-alt fs-icon" aria-hidden="true"></i>                        <button class="change" type="button">' +
                  output_heading +
                  " " +
                  zipcode +
                  '<i class="fa fa-pencil" aria-hidden="true" style="margin-left: 5px;"></i></button>                        <p class="zippy-failure" style="color: ' +
                  color +
                  ';">' +
                  msg +
                  "</p>                    </div>"),
            !e.msg ||
              ("products" != zippyPage && "vellankifoods" != zippyShop) ||
              (lekh += e.msg),
            jQuery(".zippy_widget_1511").append(lekhForClass),
            jQuery("#zippy_widget_1511").append(lekh),
            0 != jQuery("#zippy_widget_1511").length && disableFuncZippy(),
            jQuery("#zippy_widget_1511").css(
              "margin-left",
              "center" == jQuery(".wrapper-1511").css("text-align")
                ? "auto"
                : ""
            ),
            jQuery("#zippy_widget_1511").css(
              "margin-right",
              "center" == jQuery(".wrapper-1511").css("text-align")
                ? "auto"
                : ""
            ),
            jQuery("#zippy_widget_1511").css(
              "text-align",
              jQuery(".wrapper-1511").css("text-align")
            ),
            "products" == zippyPage
              ? "1" == disable_atc &&
                "success" == i &&
                "1" == e.flag &&
                zippyBtn.parent().is(".wrapper-1511") &&
                (jQuery(".tooltip-1511").remove(),
                jQuery(".overlay-1511").remove(),
                already_disabled ||
                  (jQuery(zippyBtn)
                    .closest("form")
                    .find("[type=button]")
                    .removeAttr("disabled"),
                  jQuery(zippyBtn)
                    .closest("form")
                    .find("[role=button]")
                    .removeAttr("disabled"),
                  "hello-blooms-melbourne" == zippyShop
                    ? "Sold Out" != zippyBtn.text() &&
                      zippyBtn.removeAttr("disabled")
                    : zippyBtn.removeAttr("disabled")),
                zippyBtn.off("focus"),
                jQuery(".overlay-1511").mouseenter(),
                jQuery(".overlay-1511").mouseleave(),
                zippyBtn.unwrap())
              : "cart" == zippyPage &&
                "1" == cart_checkout_disabled &&
                "success" == i &&
                "1" == e.flag &&
                zippyBtn.parent().is(".wrapper-1511") &&
                (jQuery(".tooltip-1511").remove(),
                jQuery(".overlay-1511").remove(),
                zippyBtn.removeAttr("disabled"),
                zippyBtn.css("pointer-events", "auto"),
                zippyBtn.off("focus"),
                jQuery(".overlay-1511").mouseenter(),
                jQuery(".overlay-1511").mouseleave(),
                zippyBtn.unwrap()),
            jQuery("#change").click(function () {
              noZippyCookie();
            }),
            jQuery(".change").click(function () {
              noZippyCookie();
            });
        },
        dataType: "json",
      });
  } else
    jQuery(".zippy_widget_1511").empty(),
      jQuery("#zippy_widget_1511").empty(),
      (zipcode = getCookieZippy("zip")),
      jQuery.get(
        "https://www.risingsigma.com/zippy-v2/engine.php",
        { set_id: set_id, q: zipcode, clicked: zippyClicked, utm: utm_source },
        function (e, i) {
          (msg = e.fail_msg),
            (color = fail_color),
            (svg =
              '<svg style="margin-left: 4px; width: 18px; vertical-align: middle;" height="18px" viewBox="0 0 512 512" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>'),
            "success" == i &&
              "1" == e.flag &&
              ((msg = e.msg1),
              (color = succ_color),
              (svg =
                '                    <svg viewBox="0 0 24 24" fill="#23C5A0" class="tick">                        <g fill="none" fill-rule="evenodd">                            <path d="M0 0h24v24H0z"></path>                            <path fill="#23C5A0" fill-rule="nonzero" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 111.41-1.41L10 14.17l6.88-6.88a.996.996 0 111.41 1.41l-7.59 7.59a.996.996 0 01-1.41 0z"></path>                        </g>                    </svg>                    ')),
            (lekh =
              "1" == widget_layout
                ? '                    <div class="zipcode_bar_title_1511">                        <i class="fa ' +
                  _icon +
                  ' fs-icon" aria-hidden="true"></i>                        <span id="delhivery">' +
                  z_heading +
                  '</span>                    </div>                    <div class="zipcode_bar_input_1528" style="border-radius: ' +
                  box_rad +
                  "px; border-width: " +
                  box_width +
                  "; border-color: " +
                  box_color +
                  "; max-width: " +
                  box_width +
                  "px; border-style: " +
                  box_style +
                  ';">                        <span class="zipcode_entered">                            <span id="zipcode-holder-layout-2">' +
                  zipcode +
                  "</span>                            " +
                  svg +
                  '                        </span>                        <span class="change_btn change" style="color: rgb(255, 63, 108);">CHANGE</span>                    </div>                    <p class="zippy-failure" style="color: ' +
                  color +
                  ';">' +
                  msg +
                  "</p>                    "
                : '                    <div class="zippy-success-card-1511">                        <i class="fa fa-map-marker-alt fs-icon" aria-hidden="true"></i>                        <button class="change" type="button">' +
                  output_heading +
                  " " +
                  zipcode +
                  '<i class="fa fa-pencil" aria-hidden="true" style="margin-left: 5px;"></i></button>                        <p class="zippy-failure" style="color: ' +
                  color +
                  ';">' +
                  msg +
                  "</p>                    </div>"),
            e.msg && (lekh += e.msg),
            jQuery(".zippy_widget_1511").append(lekh),
            jQuery("#zippy_widget_1511").append(lekh),
            zippyBtn &&
              (0 != jQuery(".zippy_widget_1511").length && disableFuncZippy(),
              jQuery(".zippy_widget_1511").css(
                "margin-left",
                "center" == jQuery(".wrapper-1511").css("text-align")
                  ? "auto"
                  : ""
              ),
              jQuery(".zippy_widget_1511").css(
                "margin-right",
                "center" == jQuery(".wrapper-1511").css("text-align")
                  ? "auto"
                  : ""
              ),
              jQuery(".zippy_widget_1511").css(
                "text-align",
                jQuery(".wrapper-1511").css("text-align")
              ),
              "1" == disable_atc &&
                "success" == i &&
                "1" == e.flag &&
                zippyBtn.parent().is(".wrapper-1511") &&
                (jQuery(".tooltip-1511").remove(),
                jQuery(".overlay-1511").remove(),
                zippyBtn.removeAttr("disabled"),
                zippyBtn.css("pointer-events", "auto"),
                zippyBtn.off("focus"),
                jQuery(".overlay-1511").mouseenter(),
                jQuery(".overlay-1511").mouseleave(),
                zippyBtn.unwrap())),
            jQuery(".change").click(function () {
              noZippyCookie();
            });
        },
        "json"
      );
}
function noZippyCookie() {
  "products" == zippyPage || "cart" == zippyPage
    ? (jQuery("#zippy_widget_1511").empty(),
      jQuery(".zippy_widget_1511").empty(),
      jQuery.get("https://www.risingsigma.com/zippy-v2/engine.php", {
        shop: zippyShop,
      }),
      (lekh =
        "1" == widget_layout
          ? '            <div class="zipcode_bar_title_1511">                <i class="fa ' +
            _icon +
            ' fs-icon" aria-hidden="true" style="color: ' +
            heading_color +
            "; font-size: " +
            (parseInt(heading_size) + 6) +
            'px;"></i>                <span id="delhivery" style="color: ' +
            heading_color +
            "; font-size: " +
            heading_size +
            'px;">' +
            z_heading +
            '</span>            </div>            <div class="zipcode_bar_input_1528" style="border-radius: ' +
            box_rad +
            "px; border-width: " +
            border_width +
            "; border-color: " +
            box_color +
            "; max-width: " +
            box_width +
            "px; border-style: " +
            box_style +
            ';">                <form id="formide">                    <input class="zipcode_bar_inputbox_1528" id="pin" type="text" placeholder="' +
            placeholder_text +
            '" maxlength="' +
            char_length +
            '" autocomplete="off">                    <button class="zipcode_bar_btn_1528" style="color: ' +
            txt_color +
            ';" id="checkPin" type="button">' +
            but_text +
            '</button>                </form >            </div >            <div id="pin_fail"></div>            '
          : '            <div class="zipcode_bar_title_1511">                <i class="fa ' +
            _icon +
            ' fs-icon" aria-hidden="true" style="color: ' +
            heading_color +
            "; font-size: " +
            (parseInt(heading_size) + 6) +
            'px;"></i>                <span id="delhivery" style="color: ' +
            heading_color +
            "; font-size: " +
            heading_size +
            'px;">' +
            z_heading +
            '</span>            </div>            <div class="zipcode_bar_input_1511">                <form id="formide">                    <input style="border-radius: ' +
            box_rad +
            "px; border-width: " +
            border_width +
            "; border-color: " +
            box_color +
            "; width: " +
            box_width +
            "px; border-style: " +
            box_style +
            ';" id="pin" type="text" placeholder="' +
            placeholder_text +
            '" autocomplete="off" maxlength="' +
            char_length +
            '">                    <button style="border-radius: ' +
            but_rad +
            "px; border-width: " +
            but_width +
            "; border-color: " +
            but_color +
            "; border-style: " +
            but_style +
            "; background-color: " +
            back_color +
            "; color: " +
            txt_color +
            ';" id="checkPin" type="button">' +
            but_text +
            '</button>                </form>            </div>            <div id="pin_fail"></div>            '),
      (lekhForClass =
        "1" == widget_layout
          ? '            <div class="zipcode_bar_title_1511">                <i class="fa ' +
            _icon +
            ' fs-icon" aria-hidden="true" style="color: ' +
            heading_color +
            "; font-size: " +
            (parseInt(heading_size) + 6) +
            'px;"></i>                <span class="delhivery" style="color: ' +
            heading_color +
            "; font-size: " +
            heading_size +
            'px;">' +
            z_heading +
            '</span>            </div>            <div class="zipcode_bar_input_1528" style="border-radius: ' +
            box_rad +
            "px; border-width: " +
            border_width +
            "; border-color: " +
            box_color +
            "; max-width: " +
            box_width +
            "px; border-style: " +
            box_style +
            ';">                <form class="formide">                    <input class="zipcode_bar_inputbox_1528" class="pin" type="text" placeholder="' +
            placeholder_text +
            '" maxlength="' +
            char_length +
            '" autocomplete="off" >                    <button class="zipcode_bar_btn_1528" style="color: ' +
            txt_color +
            ';" class="checkPin" type="button">' +
            but_text +
            '</button>                </form >            </div >            <div class="pin_fail"></div>            '
          : '            <div class="zipcode_bar_title_1511">                <i class="fa ' +
            _icon +
            ' fs-icon" aria-hidden="true" style="color: ' +
            heading_color +
            "; font-size: " +
            (parseInt(heading_size) + 6) +
            'px;"></i>                <span class="delhivery" style="color: ' +
            heading_color +
            "; font-size: " +
            heading_size +
            'px;">' +
            z_heading +
            '</span>            </div>            <div class="zipcode_bar_input_1511">                <form class="formide">                    <input style="border-radius: ' +
            box_rad +
            "px; border-width: " +
            border_width +
            "; border-color: " +
            box_color +
            "; width: " +
            box_width +
            "px; border-style: " +
            box_style +
            ';" class="pin" type="text" placeholder="' +
            placeholder_text +
            '" autocomplete="off" maxlength="' +
            char_length +
            '">                    <button style="border-radius: ' +
            but_rad +
            "px; border-width: " +
            but_width +
            "; border-color: " +
            but_color +
            "; border-style: " +
            but_style +
            "; background-color: " +
            back_color +
            "; color: " +
            txt_color +
            ';" class="checkPin" type="button">' +
            but_text +
            '</button>                </form>            </div>            <div class="pin_fail"></div>            '),
      jQuery("#zippy_widget_1511").append(lekh),
      jQuery(".zippy_widget_1511").append(lekhForClass),
      0 != jQuery("#zippy_widget_1511").length && disableFuncZippy(),
      jQuery("#zippy_widget_1511").css(
        "margin-left",
        "center" == jQuery(".wrapper-1511").css("text-align") ? "auto" : ""
      ),
      jQuery("#zippy_widget_1511").css(
        "margin-right",
        "center" == jQuery(".wrapper-1511").css("text-align") ? "auto" : ""
      ),
      jQuery("#zippy_widget_1511").css(
        "text-align",
        jQuery(".wrapper-1511").css("text-align")
      ),
      jQuery("#pin").on("input", function (e) {
        if (1 == indian_validation) {
          const i = e.target.value;
          /\D/g.test(i)
            ? (jQuery("#pin_fail").css("display", "block"),
              jQuery("#pin_fail").fadeIn(),
              jQuery("#pin_fail").html("Only Indian pincodes are allowed."),
              (e.target.value = i.replace(/\D/g, "")))
            : jQuery("#pin_fail").fadeOut();
        }
        13 === e.keyCode && jQuery("#checkPin").click();
      }),
      jQuery(".pin").on("input", function (e) {
        if (1 == indian_validation) {
          const i = e.target.value;
          /\D/g.test(i)
            ? (jQuery(".pin_fail").css("display", "block"),
              jQuery(".pin_fail").fadeIn(),
              jQuery(".pin_fail").html("Only Indian pincodes are allowed."),
              (e.target.value = i.replace(/\D/g, "")))
            : jQuery(".pin_fail").fadeOut();
        }
        13 === e.keyCode && jQuery(".checkPin").click();
      }),
      jQuery("#formide").submit(function (e) {
        e.preventDefault();
      }),
      jQuery("#checkPin").click(function () {
        zippyClicked = 1;
        let e = jQuery("#pin").val().trim();
        0 == e.length
          ? (jQuery("#pin_fail").css("display", "block"),
            jQuery("#pin_fail").fadeIn(),
            jQuery("#pin_fail").html("Please enter a valid input."),
            setTimeout(function () {
              jQuery("#pin_fail").fadeOut();
            }, 2222))
          : (setCookieZippy("zip", e), hasZippyCookie());
      }),
      jQuery(".checkPin").click(function () {
        zippyClicked = 1;
        let e = jQuery(".pin").val().trim();
        0 == e.length
          ? (jQuery(".pin_fail").css("display", "block"),
            jQuery(".pin_fail").fadeIn(),
            jQuery(".pin_fail").html("Please enter a valid input."),
            setTimeout(function () {
              jQuery(".pin_fail").fadeOut();
            }, 2222))
          : (setCookieZippy("zip", e), hasZippyCookie());
      }))
    : (jQuery(".zippy_widget_1511").empty(),
      jQuery("#zippy_widget_1511").empty(),
      jQuery.get("https://www.risingsigma.com/zippy-v2/engine.php", {
        shop: zippyShop,
      }),
      (lekh =
        "1" == widget_layout
          ? '            <div class="zipcode_bar_title_1511">                <i class="fa ' +
            _icon +
            ' fs-icon" aria-hidden="true" style="color: ' +
            heading_color +
            "; font-size: " +
            (parseInt(heading_size) + 6) +
            'px;"></i>                <span id="delhivery" style="color: ' +
            heading_color +
            "; font-size: " +
            heading_size +
            'px;">' +
            z_heading +
            '</span>            </div>            <div class="zipcode_bar_input_1528" style="border-radius: ' +
            box_rad +
            "px; border-width: " +
            border_width +
            "; border-color: " +
            box_color +
            "; max-width: " +
            box_width +
            "px; border-style: " +
            box_style +
            ';">                <form class="formide">                    <input class="zipcode_bar_inputbox_1528 pin" type="text" placeholder="' +
            placeholder_text +
            '" maxlength="' +
            char_length +
            '" autocomplete="off">                    <button class="zipcode_bar_btn_1528 checkPin" style="color: ' +
            txt_color +
            ';" type="button">' +
            but_text +
            '</button>                </form >            </div >            <div class="pin_fail"></div>            '
          : '            <div class="zipcode_bar_title_1511">                <i class="fa ' +
            _icon +
            ' fs-icon" aria-hidden="true" style="color: ' +
            heading_color +
            "; font-size: " +
            (parseInt(heading_size) + 6) +
            'px;"></i>                <span id="delhivery" style="color: ' +
            heading_color +
            "; font-size: " +
            heading_size +
            'px;">' +
            z_heading +
            '</span>            </div>            <div class="zipcode_bar_input_1511">                <form class="formide">                    <input style="border-radius: ' +
            box_rad +
            "px; border-width: " +
            border_width +
            "; border-color: " +
            box_color +
            "; width: " +
            box_width +
            "px; border-style: " +
            box_style +
            ';" class="pin" type="text" placeholder="' +
            placeholder_text +
            '" autocomplete="off" maxlength="' +
            char_length +
            '">                    <button style="border-radius: ' +
            but_rad +
            "px; border-width: " +
            but_width +
            "; border-color: " +
            but_color +
            "; border-style: " +
            but_style +
            "; background-color: " +
            back_color +
            "; color: " +
            txt_color +
            ';" class="checkPin" type="button">' +
            but_text +
            '</button>                </form>            </div>            <div class="pin_fail"></div>            '),
      jQuery(".zippy_widget_1511").append(lekh),
      jQuery("#zippy_widget_1511").append(lekh),
      zippyBtn &&
        (0 != jQuery(".zippy_widget_1511").length && disableFuncZippy(),
        jQuery(".zippy_widget_1511").css(
          "margin-left",
          "center" == jQuery(".wrapper-1511").css("text-align") ? "auto" : ""
        ),
        jQuery(".zippy_widget_1511").css(
          "margin-right",
          "center" == jQuery(".wrapper-1511").css("text-align") ? "auto" : ""
        ),
        jQuery(".zippy_widget_1511").css(
          "text-align",
          jQuery(".wrapper-1511").css("text-align")
        )),
      jQuery(".pin").on("input", function (e) {
        if (1 == indian_validation) {
          const i = e.target.value;
          /\D/g.test(i)
            ? (jQuery(".pin_fail").css("display", "block"),
              jQuery(".pin_fail").fadeIn(),
              jQuery(".pin_fail").html("Only Indian pincodes are allowed."),
              (e.target.value = i.replace(/\D/g, "")))
            : jQuery(".pin_fail").fadeOut();
        }
        13 === e.keyCode && jQuery(".checkPin").click();
      }),
      jQuery(".formide").submit(function (e) {
        e.preventDefault();
      }),
      jQuery(".checkPin").click(function () {
        zippyClicked = 1;
        let e = jQuery(jQuery(this).closest(".formide"))
          .find(".pin")
          .val()
          .trim();
        0 == e.length
          ? (jQuery(".pin_fail").css("display", "block"),
            jQuery(".pin_fail").fadeIn(),
            jQuery(".pin_fail").html("Please enter a valid input."),
            setTimeout(function () {
              jQuery(".pin_fail").fadeOut();
            }, 2222))
          : (setCookieZippy("zip", e), hasZippyCookie());
      }));
}
function disableFuncZippy() {
  const e = jQuery(zippyBtn).get();
  if ("products" == zippyPage) {
    if (
      (!zippyBtn.parent().is(".wrapper-1511") &&
        (jQuery(zippyBtn)
          .closest("form")
          .find("[type=button]:not([id='change']):not([id='checkPin'])")
          .prop("disabled") ||
          jQuery(zippyBtn)
            .closest("form")
            .find("[role=button]:not([id='change']):not([id='checkPin'])")
            .prop("disabled") ||
          jQuery(zippyBtn).prop("disabled")) &&
        (already_disabled = !0),
      zippyBtn.parent().is(".wrapper-1511") &&
        (jQuery(".tooltip-1511").remove(),
        jQuery(".overlay-1511").remove(),
        already_disabled ||
          (jQuery(zippyBtn)
            .closest("form")
            .find("[type=button]")
            .removeAttr("disabled"),
          jQuery(zippyBtn)
            .closest("form")
            .find("[role=button]")
            .removeAttr("disabled"),
          zippyBtn.removeAttr("disabled")),
        zippyBtn.off("focus"),
        jQuery(".overlay-1511").mouseenter(),
        jQuery(".overlay-1511").mouseleave(),
        zippyBtn.unwrap()),
      "1" == disable_atc)
    ) {
      let i = !0;
      for (let t of e) {
        t = jQuery(t);
        const e = t.css("width"),
          o = t.css("height");
        let p = document.createElement("div");
        p.classList.add("wrapper-1511"), t.wrap(p), (p = jQuery(p));
        let a = document.createElement("div");
        if (
          (a.classList.add("overlay-1511"),
          (a.innerHTML = "<div></div>"),
          (a = jQuery(a)),
          a.height(o),
          a.width(e),
          "pcchandraindia" == zippyShop &&
            window.matchMedia("(max-width: 767px)").matches &&
            (a.css("position", "fixed"),
            a.css("bottom", 0),
            a.css("top", "auto"),
            a.css("left", t.offset().left)),
          t.before(a),
          a.css("cursor", "not-allowed"),
          i)
        ) {
          t.before(
            '<div class="tooltip-1511">                    <div class="tooltip-content-1511" style="background: ' +
              tooltip_back_color +
              "; color: " +
              tooltip_txt_color +
              ';">' +
              tooltip_text +
              '</div>                    <div class="arrow-bottom-1511" style="border-top-color: ' +
              tooltip_back_color +
              '"></div>                </div>'
          );
          let e = parseInt(o.substr(0, o.length - 2)) - 7;
          jQuery(".tooltip-1511").css("left", "7px"),
            "sportsqvest" == zippyShop
              ? (e -= 70)
              : "bakedtotaste-rhwd" == zippyShop
              ? (e -= 105)
              : "pcchandraindia" == zippyShop &&
                ((e += 64),
                window.matchMedia("(max-width: 767px)").matches &&
                  jQuery(".tooltip-1511").css("left", "-70px")),
            jQuery(".tooltip-1511").css("top", -1 * e + "px");
        }
        a.mouseenter(function () {
          jQuery(".tooltip-1511").css("display", "inline-block");
        }),
          a.mouseleave(function () {
            jQuery(".tooltip-1511").css("display", "none");
          }),
          zippyBtnFromDB ||
            ("campusshoess" != zippyShop &&
              jQuery(t)
                .closest("form")
                .find("[type=button]:not([id='change']):not([id='checkPin'])")
                .attr("disabled", "disabled"),
            jQuery(t)
              .closest("form")
              .find("[role=button]:not([id='change']):not([id='checkPin'])")
              .attr("disabled", "disabled")),
          t.attr("disabled", "disabled"),
          t.css("width", e),
          t.on("focus", function () {
            t.css("outline", "none");
          }),
          (i = !1);
      }
    }
  } else if ("cart" == zippyPage) {
    if (
      (zippyBtn.parent().is(".wrapper-1511") &&
        (jQuery(".tooltip-1511").remove(),
        jQuery(".overlay-1511").remove(),
        zippyBtn.removeAttr("disabled"),
        zippyBtn.css("pointer-events", "auto"),
        zippyBtn.off("focus"),
        jQuery(".overlay-1511").mouseenter(),
        jQuery(".overlay-1511").mouseleave(),
        zippyBtn.unwrap()),
      "1" == cart_checkout_disabled)
    ) {
      let e = zippyBtn.css("width");
      zippyBtn.wrap("<div class='wrapper-1511'></div>"),
        jQuery(".wrapper-1511").prepend("<div class='overlay-1511'></div>"),
        jQuery(".wrapper-1511").css("width", e),
        (overlay = jQuery(".overlay-1511")),
        "fixed" == zippyBtn.css("position") &&
          (overlay.css("top", zippyBtn.css("top")),
          overlay.css("left", zippyBtn.css("left"))),
        overlay.height(jQuery(".wrapper-1511").height()),
        overlay.width(jQuery(".wrapper-1511").width()),
        overlay.css("cursor", "not-allowed"),
        zippyBtn.before(
          '<div class="tooltip-1511">                <div class="tooltip-content-1511" style="background: ' +
            tooltip_back_color +
            "; color: " +
            tooltip_txt_color +
            ';">' +
            tooltip_text +
            '</div>                <div class="arrow-bottom-1511" style="border-top-color: ' +
            tooltip_back_color +
            '"></div>            </div>'
        ),
        zippyBtn.attr("disabled", "disabled"),
        zippyBtn.css("pointer-events", "none"),
        zippyBtn.on("focus", function () {
          zippyBtn.css("outline", "none");
        });
      let i =
        jQuery(".wrapper-1511").height() + jQuery(".tooltip-1511").height() / 3;
      overlay.mouseenter(function () {
        jQuery(".tooltip-1511").css("top", "-" + i + "px"),
          jQuery(".tooltip-1511").css("left", "7px"),
          "pcchandraindia" == zippyShop &&
            (window.matchMedia("(min-width: 767px)").matches &&
              jQuery(".tooltip-1511").css("left", "-260px"),
            jQuery(".tooltip-1511").css("top", "-" + (i - 30) + "px")),
          jQuery(".tooltip-1511").css("display", "inline-block");
      }),
        overlay.mouseleave(function () {
          jQuery(".tooltip-1511").css("display", "none");
        });
    }
  } else if (
    zippyBtn &&
    (zippyBtn.parent().is(".wrapper-1511") &&
      (jQuery(".tooltip-1511").remove(),
      jQuery(".overlay-1511").remove(),
      zippyBtn.removeAttr("disabled"),
      zippyBtn.css("pointer-events", "auto"),
      zippyBtn.off("focus"),
      jQuery(".overlay-1511").mouseenter(),
      jQuery(".overlay-1511").mouseleave(),
      zippyBtn.unwrap()),
    "1" == disable_atc)
  ) {
    let e = zippyBtn.css("width");
    zippyBtn.wrap("<div class='wrapper-1511'></div>"),
      jQuery(".wrapper-1511").prepend("<div class='overlay-1511'></div>"),
      jQuery(".wrapper-1511").css("width", e),
      (overlay = jQuery(".overlay-1511")),
      overlay.height(jQuery(".wrapper-1511").height()),
      overlay.width(jQuery(".wrapper-1511").width()),
      overlay.css("cursor", "not-allowed"),
      zippyBtn.before(
        '<div class="tooltip-1511">                <div class="tooltip-content-1511" style="background: ' +
          tooltip_back_color +
          "; color: " +
          tooltip_txt_color +
          ';">' +
          tooltip_text +
          '</div>                <div class="arrow-bottom-1511" style="border-top-color: ' +
          tooltip_back_color +
          '"></div>            </div>'
      ),
      zippyBtn.attr("disabled", "disabled"),
      zippyBtn.css("pointer-events", "none"),
      zippyBtn.on("focus", function () {
        zippyBtn.css("outline", "none");
      });
    let i =
      jQuery(".wrapper-1511").height() + jQuery(".tooltip-1511").height() / 3;
    overlay.mouseenter(function () {
      jQuery(".tooltip-1511").css("top", "-" + i + "px"),
        jQuery(".tooltip-1511").css("left", "7px"),
        jQuery(".tooltip-1511").css("display", "inline-block");
    }),
      overlay.mouseleave(function () {
        jQuery(".tooltip-1511").css("display", "none");
      });
  }
}
var zippyBtn,
  disable_atc,
  border_width,
  but_width,
  icon,
  z_heading,
  box_width,
  box_style,
  box_color,
  box_rad,
  but_text,
  but_style,
  but_color,
  but_rad,
  succ_msg,
  succ_color,
  fail_msg,
  fail_color,
  placeholder_text,
  back_color,
  txt_color,
  tooltip_text,
  tooltip_back_color,
  tooltip_txt_color,
  zippyShop,
  zipcode,
  _icon,
  zippyProduct,
  par,
  msg,
  color,
  lekh,
  lekhForClass,
  overlay,
  set_id,
  utm_source,
  zippyPage,
  char_length,
  zippyUrl,
  output_heading,
  cart_checkout_disabled,
  variant_id,
  widget_layout,
  heading_color,
  heading_size,
  change_text,
  already_disabled = !1,
  zippyClicked = 0,
  rules_flag = 0;
let zippyBtnFromDB = !1;
var timerId_1511 = setInterval(function () {
  "undefined" != typeof jQuery && void 0 !== jQuery.get
    ? "undefined" != typeof Shopify &&
      ((function (e) {
        0 == e("#zippy-script-manual").length && main_function();
      })(jQuery),
      clearInterval(timerId_1511))
    : (console.log("jQuery not loaded."), loadZippyJQuery());
}, 50);
