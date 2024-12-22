var instafeedApp = (function instafeedLoad() {
  /*!
   * Copyright (c) 2023 Mintt Studio
   * Unauthorized copying, modification, or distribution is prohibited.
   * For inquiries, contact: business@minttstudio.com
   */
  const e = "instafeed.nfcube.com",
    t = "cdn.nfcube.com",
    o = "11.2.1",
    s = "feed",
    n = "insta-feed",
    a = ".instafeed-lightbox",
    r = "instafeed",
    d = !1;
  var l = (function () {
    function d(t) {
      (this.translations = {
        en: {
          SHOP_NOW: "Shop now",
          TAG_PRODUCTS: "Tag products",
          TAGGED_BY: "Tagged by {username}",
          VIEW_ON_INSTAGRAM: "View on Instagram",
          HANG_ON:
            "Hang on we are processing your feed, this might take a couple of minutes ☕",
          DELETE: "Delete",
        },
        "pt-PT": {
          SHOP_NOW: "Comprar agora",
          TAG_PRODUCTS: "Identificar produtos",
          TAGGED_BY: "Marcado por {username}",
          VIEW_ON_INSTAGRAM: "Ver no Instagram",
          HANG_ON:
            "Aguarde um momento, estamos a processar o seu feed, isto pode demorar alguns minutos ☕",
          DELETE: "Apagar",
        },
        "pt-BR": {
          SHOP_NOW: "Comprar agora",
          TAG_PRODUCTS: "Marcar produtos",
          TAGGED_BY: "Marcado por {username}",
          VIEW_ON_INSTAGRAM: "Ver no Instagram",
          HANG_ON:
            "Aguarde um momento, estamos processando seu feed, isso pode levar alguns minutos ☕",
          DELETE: "Delete",
        },
        es: {
          SHOP_NOW: "Comprar ahora",
          TAG_PRODUCTS: "Etiquetar productos",
          TAGGED_BY: "Etiquetado por {username}",
          VIEW_ON_INSTAGRAM: "Ver en Instagram",
          HANG_ON:
            "Espera un momento, estamos procesando tu feed, esto podría tardar unos minutos ☕",
          DELETE: "Eliminar",
        },
        "ja-JP": {
          SHOP_NOW: "今すぐ購入",
          TAG_PRODUCTS: "商品にタグを付ける",
          TAGGED_BY: "{username}によってタグ付けされました",
          VIEW_ON_INSTAGRAM: "Instagramで見る",
          HANG_ON:
            "少々お待ちください、フィードを処理中です。これには数分かかる場合があります ☕",
          DELETE: "削除",
        },
        fr: {
          SHOP_NOW: "Acheter",
          TAG_PRODUCTS: "Étiqueter les produits",
          TAGGED_BY: "Tagué par {username}",
          VIEW_ON_INSTAGRAM: "Afficher sur Instagram",
          HANG_ON:
            "Patientez, nous traitons votre flux, cela pourrait prendre quelques minutes ☕",
          DELETE: "Supprimer",
        },
        de: {
          SHOP_NOW: "Jetzt shoppen",
          TAG_PRODUCTS: "Produkte taggen",
          TAGGED_BY: "Getaggt von {username}",
          VIEW_ON_INSTAGRAM: "Auf Instagram ansehen",
          HANG_ON:
            "Einen Moment bitte, wir verarbeiten deinen Feed, das könnte einige Minuten dauern ☕",
          DELETE: "Löschen",
        },
        sv: {
          SHOP_NOW: "Handla nu",
          TAG_PRODUCTS: "Tagga produkter",
          TAGGED_BY: "Taggad av {username}",
          VIEW_ON_INSTAGRAM: "Visa på Instagram",
          HANG_ON:
            "Vänta, vi behandlar ditt flöde, detta kan ta några minuter ☕",
          DELETE: "Radera",
        },
        it: {
          SHOP_NOW: "Acquista ora",
          TAG_PRODUCTS: "Tagga prodotti",
          TAGGED_BY: "Taggato da {username}",
          VIEW_ON_INSTAGRAM: "Visualizza su Instagram",
          HANG_ON:
            "Aspetta, stiamo elaborando il tuo feed, potrebbe richiedere qualche minuto ☕",
          DELETE: "Elimina",
        },
        da: {
          SHOP_NOW: "Shop nu",
          TAG_PRODUCTS: "Tag produkter",
          TAGGED_BY: "Tagget af {username}",
          VIEW_ON_INSTAGRAM: "Se på Instagram",
          HANG_ON:
            "Vent venligst, vi behandler dit feed, det kan tage et par minutter ☕",
          DELETE: "Slet",
        },
        nb: {
          SHOP_NOW: "Handle nå",
          TAG_PRODUCTS: "Tagge produkter",
          TAGGED_BY: "Taggede av {username}",
          VIEW_ON_INSTAGRAM: "Vis på Instagram",
          HANG_ON:
            "Vent litt, vi behandler din feed, dette kan ta noen minutter ☕",
          DELETE: "Slett",
        },
        nl: {
          SHOP_NOW: "Nu winkelen",
          TAG_PRODUCTS: "Producten taggen",
          TAGGED_BY: "Getagd door {username}",
          VIEW_ON_INSTAGRAM: "Bekijk op Instagram",
          HANG_ON:
            "Even geduld alstublieft, we verwerken je feed, dit kan een paar minuten duren ☕",
          DELETE: "Verwijderen",
        },
      }),
        (this.availableLanguages = [
          "en",
          "es",
          "de",
          "fr",
          "sv",
          "da",
          "it",
          "nl",
          "nb",
          "ja-JP",
          "pt-PT",
          "pt-BR",
        ]),
        (this.options = {
          target: n,
          locale: "en",
          showLoading: !0,
          forceUpdate: !1,
          key: "",
          overrides: "",
          picturesLoaded: 0,
          picturesNeeded: 0,
          admin: window.location.hostname === e,
        }),
        "undefined" != typeof Shopify &&
          Shopify.locale &&
          this.availableLanguages.includes(Shopify.locale) &&
          (this.options.locale = Shopify.locale),
        Object.assign(this.options, t),
        this.options.admin || this._loadCss();
      document.querySelectorAll(a).forEach((e) => {
        e.parentNode.removeChild(e);
      });
    }
    return (
      (d.prototype.translate = function (e) {
        const t = this.options.locale;
        return this.translations[t] && this.translations[t][e]
          ? this.translations[t][e]
          : e;
      }),
      (d.prototype.run = function () {
        var t = document.getElementById(this.options.target);
        if (0 === t.clientWidth && parseInt(this.options.autoLayout) > 0)
          return this._checkClientWidth(this, t), !1;
        (this.options.corners =
          50 === parseInt(this.options.corners)
            ? "50%"
            : this.options.corners + "px"),
          parseInt(this.options.autoLayout) > 0
            ? ((this.options.picturesNeeded =
                this.options.rows * this._getAutoColumns(t.clientWidth)),
              this._isMobileDevice() &&
                this._validateCharge(this.options.charge) &&
                (this.options.picturesNeeded =
                  this.options.rowsMobile *
                  this._getAutoColumns(t.clientWidth)))
            : this._isMobileDevice() &&
              this._validateCharge(this.options.charge)
            ? (this.options.picturesNeeded =
                this.options.rowsMobile * this.options.columnsMobile)
            : (this.options.picturesNeeded =
                this.options.rows * this.options.columns),
          this.options.admin &&
            this.options.showLoading &&
            (t.innerHTML =
              '<img src="//' +
              e +
              '/assets/img/loader.gif" style="position:relative;height:11px;width:16px;" /><br/><em>' +
              this.translate("HANG_ON") +
              "</em>");
        const o = this;
        return (
          fetch(this._buildUrl())
            .then((e) => {
              if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
              return e.json();
            })
            .then((e) => {
              try {
                o.parse(e);
              } catch (e) {
                console.error("Parse function error:", e.message);
              }
            })
            .catch((e) => {
              if (
                (console.log("Fetch error:", e.message), this.options.admin)
              ) {
                this.options.error.call(this, {
                  meta: {
                    code: 204,
                    username: "",
                    error_message:
                      "Taking a bit longer to fetch your feed, please refresh this page in a couple of minutes.",
                  },
                });
              }
            }),
          !0
        );
      }),
      (d.prototype.parse = function (t) {
        const o = document.getElementById(this.options.target);
        if (!o) return !1;
        if ("object" != typeof t) throw new Error("Invalid JSON response");
        const {
            meta: { code: s, error_message: n },
          } = t,
          a = parseInt(s, 10);
        if (((o.innerHTML = ""), 200 !== a))
          return (
            this.options.admin &&
              "function" == typeof this.options.error &&
              this.options.error.call(this, t),
            !1
          );
        "function" == typeof this.options.success &&
          this.options.success.call(this, t);
        var l = t.data,
          p = this._geModalTemplate(),
          c = "";
        for (i = 0, len = l.length; i < len; i++) {
          var u = l[i],
            h = t.meta.followers,
            g = t.meta.profile_picture,
            m = u.images.standard_resolution,
            f = "";
          if (
            (this.options.picturesLoaded++, 3 === parseInt(this.options.openIg))
          ) {
            u.hasOwnProperty("tagged_products") &&
              u.tagged_products.length > 0 &&
              this._validateCharge(this.options.charge) &&
              u.tagged_products.forEach((t) => {
                let o = "";
                if (
                  (parseInt(t.variant) > 0 &&
                    (o = "?variant=" + parseInt(t.variant)),
                  t.translations && this.options.locale in t.translations)
                ) {
                  let e = this.options.locale;
                  "title" in t.translations[e] &&
                    "" !== t.translations[e].title.trim() &&
                    (t.title = t.translations[e].title);
                }
                var i, s;
                this.options.admin
                  ? ((i =
                      "<div class='product-title'><a href='https://" +
                      this.options.shopOrigin +
                      "/" +
                      t.handle +
                      o +
                      "' target='_blank' rel='noopener'>" +
                      t.title +
                      "</a><a href='#" +
                      this.options.picturesLoaded +
                      "-" +
                      this.options.target +
                      "' id='delete-product' data-picture-id='" +
                      u.id +
                      "' data-tagging-id='" +
                      t.id +
                      "'><div class='tagged-buy-button'>" +
                      this.translate("DELETE") +
                      "</div></a></div>"),
                    (s =
                      "<div><a href='https://" +
                      this.options.shopOrigin +
                      "/" +
                      t.handle +
                      o +
                      "' target='_blank' rel='noopener'><img class='js-lazy-image' src='https://" +
                      e +
                      "/assets/img/placeholder.png' data-src='" +
                      t.image +
                      "' alt='product image' /></a></div>"))
                  : ((i =
                      "<div class='product-title'><a href='//" +
                      window.location.hostname +
                      Shopify.routes.root +
                      t.handle +
                      o +
                      "'>" +
                      t.title +
                      "</a><a href='//" +
                      window.location.hostname +
                      Shopify.routes.root +
                      t.handle +
                      o +
                      "'><button class='tagged-buy-button' tabindex='-1'>" +
                      this.translate("SHOP_NOW").toUpperCase() +
                      "</button></a></div>"),
                    (s =
                      "<div><a href='//" +
                      window.location.hostname +
                      Shopify.routes.root +
                      t.handle +
                      o +
                      "'><img class='js-lazy-image' src='https://" +
                      e +
                      "/assets/img/placeholder.png' data-src='" +
                      t.image +
                      "' alt='product image' /></a></div>")),
                  (f +=
                    "<div class='tagged-products' id='" +
                    u.id +
                    "-" +
                    t.id +
                    "'><div class='tagged-products-image'>" +
                    s +
                    "</div><div class='tagged-products-buttons'>" +
                    i +
                    "</div></div>");
              });
            var v = "";
            "video" === u.type && u.hasOwnProperty("videos")
              ? ((v = r + "-video"),
                (imageFullHtml =
                  '<video muted controls playsinline id="video-' +
                  this.options.picturesLoaded +
                  "-" +
                  this.options.target +
                  '" preload="none" poster="' +
                  m.url +
                  '" src="' +
                  u.videos.standard_resolution.url +
                  '" style="display:block;"></video>'))
              : (imageFullHtml =
                  "<img class='js-lazy-image' src='//" +
                  e +
                  "/assets/img/placeholder.png' data-src='" +
                  u.images.standard_resolution.url +
                  "' alt='Instagram post with the caption: " +
                  this._escapeHtml(
                    this._getObjectProperty(u, "caption.text").substring(0, 64)
                  ) +
                  "...' />");
            var y =
                1 === this.options.picturesLoaded
                  ? Math.min(this.options.picturesNeeded, l.length)
                  : this.options.picturesLoaded - 1,
              b =
                this.options.picturesLoaded === this.options.picturesNeeded ||
                this.options.picturesLoaded === l.length
                  ? 1
                  : this.options.picturesLoaded + 1;
            c += this._makeTemplate(p, {
              model: u,
              id: this.options.picturesLoaded,
              fullId: u.id,
              minusId: y,
              plusId: b,
              link: u.link,
              image: m.url,
              video: v,
              tagged_username:
                u.user.username.length > 0
                  ? "<div style='color:gray;text-align:center;line-heigh:60px;'>" +
                    this.translate("TAGGED_BY").replace(
                      "{username}",
                      "<a href='" +
                        u.link +
                        "' style='text-decoration:underline!important;color:gray;' target='_blank' aria-label='@" +
                        u.user.username +
                        " on Instagram (opens in new window)' rel='noopener'>@" +
                        u.user.username +
                        "</a></div>"
                    )
                  : "",
              username: t.meta.username,
              fullName: t.meta.full_name,
              userPicture:
                5 === this.options.apiVersion &&
                parseInt(this.options.charge) > 0
                  ? g
                  : "https://" +
                    e +
                    "/assets/img/logo-instagram-transparent.png",
              imageFullHtml: imageFullHtml,
              taggedProduct: f,
              date: this._timeConverter(u.created_time),
              caption: this._escapeHtml(
                this._getObjectProperty(u, "caption.text")
              ),
              likes:
                u.likes.count > 1
                  ? "<span><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='grey'></path></svg> " +
                    this._shortenLargeNumber(u.likes.count, 1) +
                    "</span> \x3c!--<span>&#10078; {{comments}}</span>--\x3e"
                  : "",
              comments: this._shortenLargeNumber(u.comments.count, 1),
              location: this._getObjectProperty(u, "location.name"),
            });
          }
          if (
            this.options.picturesLoaded >= this.options.picturesNeeded ||
            t.data.length === this.options.picturesLoaded
          )
            break;
        }
        this._appendHtmlToParent(c);
        var I = 0;
        if (
          ((I =
            parseInt(this.options.autoLayout) > 0
              ? parseFloat(100 / this._getAutoColumns(o.clientWidth)).toFixed(6)
              : this._isMobileDevice() &&
                this._validateCharge(this.options.charge)
              ? parseFloat(100 / this.options.columnsMobile).toFixed(6)
              : parseFloat(100 / this.options.columns).toFixed(6)),
          (d.sliderNumVisibleImages[this.options.feedId] = parseInt(
            Math.round(100 / I)
          )),
          (d.totalImages[this.options.feedId] = this.options.picturesLoaded),
          (o.innerHTML += this._generateLayoutHTML(l, this._escapeHtml)),
          this._setNumVisibleImages(),
          4 !== parseInt(this.options.layout) &&
            5 !== parseInt(this.options.layout))
        ) {
          const e = document.querySelector(".instafeed-new-layout-wrapper"),
            t = document.querySelector(".instafeed-new-layout-container");
          (e.style.display = "grid"),
            (t.style.height = "unset"),
            (e.style.gridTemplateColumns =
              "repeat(" +
              d.sliderNumVisibleImages[this.options.feedId] +
              ", 1fr)");
        } else
          o.addEventListener("swiped-left", (e) => {
            instafeedSliderMove(1, this.options.feedId);
          }),
            o.addEventListener("swiped-right", (e) => {
              instafeedSliderMove(-1, this.options.feedId);
            }),
            (d.sliderState = {}),
            this.options.sliderBehavior > 1 &&
              (clearInterval(d.autoScroll),
              (d.autoScroll = setInterval(() => {
                instafeedSliderMove(1, this.options.feedId);
              }, 4e3)));
        this._setFeedHeader(h, g),
          this._changeMobileDOM(),
          this._enableLazyLoading(),
          this._observeAndPlayVideos(),
          instafeedEventTag("instafeed_loaded", "Instafeed App", "Feed loaded");
        const _ = new CustomEvent("instafeedAppLoaded");
        return document.dispatchEvent(_), !0;
      }),
      (d.prototype._geModalTemplate = function () {
        let t = "";
        var o =
            this._validateCharge(this.options.charge) &&
            parseInt(this.options.likes) > 0 &&
            4 !== parseInt(this.options.apiVersion)
              ? (o = "{{likes}}")
              : "",
          i =
            1 === parseInt(this.options.taggedPosts) ||
            4 === parseInt(this.options.taggedPosts)
              ? "{{tagged_username}}"
              : "",
          s = this.options.admin
            ? "<div class='products-tagging'><a id='search' data-picture-id='{{fullId}}'><button class='btn primary'>" +
              this.translate("TAG_PRODUCTS") +
              "</button></a></div><div class='tagging-message' id='tagging-{{fullId}}'></div>"
            : "";
        return (
          (t =
            "<div tabindex='0' role='button' class='" +
            r +
            "-lightbox' data-" +
            r +
            "-close-id='{{id}}-" +
            this.options.target +
            "' id='{{id}}-" +
            this.options.target +
            "'><div tabindex='0' role='button' aria-label='previous post' class='" +
            r +
            "-new-arrow prev' data-" +
            r +
            "-open-id='{{minusId}}-" +
            this.options.target +
            "'></div><div class='lightbox-instagram' role='dialog' aria-labelledby='{{id}}-" +
            this.options.target +
            "' aria-modal='true'><div class='" +
            r +
            "-post-image'>{{imageFullHtml}}</div><div class='description'><div class='" +
            r +
            "-header'><div class='" +
            r +
            "-header-left-section'><div class='" +
            r +
            "-header-logo'><img src='//" +
            e +
            "/assets/img/placeholder.png' class='profile-picture js-lazy-image' data-src='{{userPicture}}' alt='instagram profile picture' /></div><a class='" +
            r +
            "-fullname' href='https://www.instagram.com/{{username}}/' target='_blank' aria-label='@{{username}} on Instagram (opens in new window)' rel='noopener'><div class='" +
            r +
            "-fullname' >{{username}}</div></a></div></div><div class='sub-header'><div class='post-engagement'>" +
            o +
            "</div><div class='arrows'><object><img role='button' tabindex='0' src='//" +
            e +
            "/assets/img/placeholder.png' data-" +
            r +
            "-open-id='{{minusId}}-" +
            this.options.target +
            "' alt='previous image' /></object><object><img role='button' tabindex='0' src='//" +
            e +
            "/assets/img/placeholder.png' alt='next image' data-" +
            r +
            "-open-id='{{plusId}}-" +
            this.options.target +
            "' /></object></div></div><div class='" +
            r +
            "-content-wrapper'>" +
            i +
            "<div class='box-content'>" +
            s +
            " {{taggedProduct}}</div><div class='" +
            r +
            "-caption'>{{caption}}</div></div><div class='post-date'><span style='padding-left:8px;'>{{date}}</span> • <a href='{{link}}' target='_blank' aria-label='@{{username}} on Instagram (opens in new window)' rel='noopener' class='follow'>" +
            this.translate("VIEW_ON_INSTAGRAM") +
            "</a></div></div></div><div tabindex='0' role='button' class='" +
            r +
            "-close-button' aria-label='close button' data-" +
            r +
            "-close-id='{{id}}-" +
            this.options.target +
            "' id='close-button-url'>&#x2715;</div><div tabindex='0' role='button' aria-label='next post' class='" +
            r +
            "-new-arrow next' data-" +
            r +
            "-open-id='{{plusId}}-" +
            this.options.target +
            "'></div></div>"),
          t
        );
      }),
      (d.prototype._changeMobileDOM = function () {
        if (this._isMobileDevice(!0)) {
          document.querySelectorAll("." + r + "-post-image").forEach((e) => {
            const t = e.nextElementSibling,
              o = t ? t.querySelector("." + r + "-header") : null;
            o && e.parentNode.insertBefore(o, e);
          });
        }
      }),
      (d.prototype._setFeedHeader = function (e, t) {
        const o = document.getElementById(this.options.target),
          i =
            this._validateCharge(this.options.charge) &&
            5 === parseInt(this.options.apiVersion) &&
            (1 === parseInt(this.options.showFollowers) ||
              3 === parseInt(this.options.showFollowers)),
          s =
            this._validateCharge(this.options.charge) &&
            5 === parseInt(this.options.apiVersion) &&
            parseInt(this.options.showFollowers) > 1,
          n = i ? `<h3>${this._shortenLargeNumber(e)} followers</h3>` : "",
          a =
            0 === parseInt(this.options.feedId)
              ? "undefined" != typeof instafeedLocalTitle &&
                instafeedLocalTitle.length > 0
              : void 0 !==
                  window["instafeed" + this.options.feedId + "Title"] &&
                window["instafeed" + this.options.feedId + "Title"].length > 0,
          d =
            a &&
            "undefined" != typeof instafeedLocalTitle &&
            instafeedLocalTitle.length > 0
              ? instafeedLocalTitle
              : window["instafeed" + this.options.feedId + "Title"],
          l = this.options.title.length > 0 || a;
        let p = "";
        if (
          (s &&
            (p += `<img id="${r}-header-logo" alt="Instagram logo" src=${t} />`),
          l)
        ) {
          p += `<h2 style="${i ? "margin-bottom:0;" : ""}">${
            a ? d : this.options.title
          }</h2>`;
        }
        i && (p += n), (l || i) && this._appendHtmlToParent(p, o, o.firstChild);
      }),
      (d.prototype._setNumVisibleImages = function () {
        const e = document.getElementById(this.options.target),
          t = parseFloat(e.offsetWidth),
          o = parseFloat(
            (t / d.sliderNumVisibleImages[this.options.feedId]) *
              (parseInt(this.options.space) / 100)
          ),
          i = parseInt(d.sliderNumVisibleImages[this.options.feedId] - 1),
          s =
            (t - parseFloat(i * o)) /
            d.sliderNumVisibleImages[this.options.feedId],
          n =
            2 === parseInt(this.options.layout) ||
            5 === parseInt(this.options.layout)
              ? parseFloat(s * (16 / 9))
              : s;
        document
          .querySelectorAll(
            `.${r}-new-layout-item[data-feed-id="${this.options.feedId}"]`
          )
          .forEach((e) => {
            (e.style.width = `${s}px`), (e.style.height = `${n}px`);
          });
        const a = document.querySelector(
          `.${r}-new-layout-container[data-feed-id="${this.options.feedId}"]`
        );
        (a.style.width = `${t}px`),
          (a.style.height = `${n}px`),
          (document.querySelector(
            `.${r}-new-layout-wrapper[data-feed-id="${this.options.feedId}"]`
          ).style.gap = `${o}px`),
          (d.sliderStepSize[this.options.feedId] =
            0 === this.options.sliderBehavior ||
            2 === this.options.sliderBehavior
              ? t + o
              : s + o),
          (d.sliderRowSize[this.options.feedId] = t + o);
      }),
      (d.prototype._generateLayoutHTML = function (e) {
        let t = "",
          o = 0;
        for (let i of e)
          if (
            (o++,
            (t += this._imageTemplate(i, o)),
            o >= this.options.picturesNeeded || e.length === o)
          )
            break;
        let i = "";
        return (
          o > d.sliderNumVisibleImages[this.options.feedId] &&
            this.options.sliderBehavior <= 1 &&
            this.options.layout >= 4 &&
            (i = `\n            <button class="${r}-new-arrow ${r}-new-arrow-prev" onclick="instafeedSliderMove(-1,${this.options.feedId})" style="margin-left:10px;padding-right:2px;">&#10094;</button>\n            <button class="${r}-new-arrow ${r}-new-arrow-next" onclick="instafeedSliderMove(1,${this.options.feedId})" style="margin-right:10px;padding-left:2px;">&#10095;</button>\n        `),
          `\n      <div class="${r}-new-layout-container" data-feed-id="${this.options.feedId}">\n          <div class="${r}-new-layout-wrapper" data-feed-id="${this.options.feedId}">\n              ${t}\n          </div>\n          ${i}\n      </div>`
        );
      }),
      (d.prototype._imageTemplate = function (t, o) {
        let i = t.images.standard_resolution,
          s =
            (parseInt(100 - this.options.space, 10),
            this._escapeHtml(t.caption.text).substring(0, 64)),
          n = "";
        const a = this._generateIcon(t);
        (n =
          "video" === t.type && parseInt(this.options.autoplay, 10) > 0
            ? `<video muted loop playsinline class="auto-loop-videos" data-feed-id="${this.options.feedId}" id="inline-video-${o}-${this.options.target}" preload="none" poster="${i.url}" src="${t.videos.standard_resolution.url}" style="border-radius:${this.options.corners};"></video>`
            : `<img style="border-radius:${this.options.corners};" class="js-lazy-image" src="//${e}/assets/img/placeholder.png" data-src="${i.url}" alt="Instagram post with the caption: '${s}...'">`),
          (n += `\n    <div tabindex='0' role='button' class="${r}-new-layout-item-container" data-${r}-open-id="${o}-${this.options.target}">\n      <div tabindex='0' role='button' class="${r}-hover-layer" data-feed-id="${this.options.feedId}-${t.type}" data-${r}-open-id="${o}-${this.options.target}" style="border-radius:${this.options.corners};">      \n        <div class="${r}-hover-icon">${a}</div>\n      </div>\n    </div>`);
        const d = this._generatePostUrl(n, t, o);
        return `\n        <div class="${r}-new-layout-item" data-feed-id="${this.options.feedId}">\n            ${d}\n        </div>`;
      }),
      (d.prototype._generatePostUrl = function (e, t, o) {
        const i = parseInt(this.options.openIg, 10);
        return 1 === i
          ? `<a href="${t.link}" target="_blank" rel="noopener">${e}</a>`
          : 3 === i
          ? `${e}`
          : e;
      }),
      (d.prototype._generateIcon = function (t) {
        if (
          parseInt(this.options.likes) > 0 &&
          5 === parseInt(this.options.apiVersion)
        )
          return `<svg style="height:16px;width:16px;" viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='white'></path></svg>\n              <span style="margin-left:5px;padding-bottom:2px;">${this._shortenLargeNumber(
            t.likes.count,
            1
          )}</span>`;
        {
          const o =
            "video" === t.type ? "video-icon-v3.png" : "instagram-icon-v2.svg";
          return `<img src="//${e}/assets/img/${o}" alt="">`;
        }
      }),
      (d.prototype._appendHtmlToParent = function (
        e,
        t = document.body,
        o = null
      ) {
        const i = document.createElement("template");
        for (i.innerHTML = e; i.content.firstChild; )
          t.insertBefore(i.content.firstChild, o);
      }),
      (d.prototype._buildUrl = function () {
        let t,
          o,
          i,
          n = "";
        if (
          ((o = this.options.forceUpdate ? 1 : 0),
          (i =
            this.options.overrides.length > 0
              ? "&overrides=" + this.options.overrides
              : ""),
          window.location.pathname.includes("/products/"))
        ) {
          let e = window.location.pathname.substring(
            window.location.pathname.indexOf("/products/") + 10
          );
          e.length > 0 && (n = "&handle=" + e);
        }
        return (
          (t =
            "https://" +
            e +
            "/" +
            s +
            "/v" +
            this.options.apiVersion +
            "?limit=" +
            this.options.picturesNeeded +
            "&account=" +
            this.options.shopOrigin +
            "&fu=" +
            o +
            "&fid=" +
            this.options.feedId +
            "&hash=" +
            this.options.hash +
            "&locale=" +
            this.options.locale +
            n +
            i),
          t
        );
      }),
      (d.prototype._makeTemplate = function (e, t) {
        return e.replace(/{{([\w[\].]+)}}/g, (e, o) => {
          const i = this._getObjectProperty(t, o);
          return null !== i ? i : "";
        });
      }),
      (d.prototype._getObjectProperty = function (e, t) {
        const o = (t = t.replace(/\[(\w+)\]/g, ".$1")).split(".");
        for (const t of o) {
          if (null === e || !(t in e)) return null;
          e = e[t];
        }
        return e;
      }),
      (d.prototype._validateCharge = function (e) {
        return parseInt(e) > 0;
      }),
      (d.prototype._getAutoColumns = function (e) {
        return e < 480 ? 2 : e < 768 ? 3 : e < 1024 ? 4 : e <= 1200 ? 5 : 6;
      }),
      (d.prototype._escapeHtml = function (e) {
        return (
          e &&
            (e = e
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;")),
          e
        );
      }),
      (d.prototype._shortenLargeNumber = function (e, t) {
        const o = ["k", "M", "G", "T", "P", "E", "Z", "Y"];
        for (let i = o.length - 1; i >= 0; i--) {
          const s = Math.pow(1e3, i + 1);
          if (e <= -s || e >= s) return +(e / s).toFixed(t) + o[i];
        }
        return e;
      }),
      (d.prototype._timeConverter = function (e) {
        return new Date(1e3 * e).toLocaleDateString(navigator.language, {
          month: "long",
          day: "numeric",
        });
      }),
      (d.prototype._isMobileDevice = function (e = !1) {
        return (
          !(!this.options.admin || this.options.desktopPreview || !1 !== e) ||
          ((!this.options.admin || !this.options.desktopPreview || !1 !== e) &&
            window.matchMedia("only screen and (max-width: 768px)").matches)
        );
      }),
      (d.prototype._checkClientWidth = function (e, t) {
        0 === t.clientWidth
          ? setTimeout(() => {
              e._checkClientWidth(e, t);
            }, 100)
          : e.run();
      }),
      (d.prototype._loadCss = function () {
        if (
          document.currentScript &&
          !document.currentScript.src.includes(t) &&
          !document.currentScript.src.includes(e)
        )
          return !1;
        const i = document.createElement("link");
        (i.href = `https://${e}/cdn/${r}-${o}.css`),
          (i.type = "text/css"),
          (i.rel = "stylesheet"),
          (i.media = "screen,print"),
          document.head.appendChild(i);
      }),
      (d.prototype._enableLazyLoading = function () {
        const e = document.querySelectorAll(".js-lazy-image"),
          t = { rootMargin: "100px 0px", threshold: 0.01 };
        let o,
          i = e.length;
        function s(e) {
          const t = e.dataset.src;
          var o;
          if (t.includes("https://"))
            return ((o = t),
            new Promise((e, t) => {
              const i = new Image();
              (i.src = o), (i.onload = e), (i.onerror = t);
            }))
              .then(() => {
                !(function (e, t) {
                  e.classList.add("js-lazy-image--handled"), (e.src = t);
                })(e, t);
              })
              .catch((e) => {
                console.log(e);
              });
        }
        "IntersectionObserver" in window && e.length
          ? ((o = new IntersectionObserver(function (e) {
              0 === i && o.disconnect();
              e.forEach((e) => {
                e.intersectionRatio > 0 &&
                  (i--, o.unobserve(e.target), s(e.target));
              });
            }, t)),
            e.forEach((e) => {
              e.classList.contains("js-lazy-image--handled") || o.observe(e);
            }))
          : (function (e) {
              e.forEach((e) => s(e));
            })(e);
      }),
      (d.prototype._observeAndPlayVideos = function () {
        const e = parseInt(this.options.autoplay),
          t = (e) => e?.play(),
          o = (e) =>
            document.getElementById(`inline-video-${e}-${this.options.target}`),
          i = { threshold: 0.5 };
        if (1 === e) {
          const e = document.querySelectorAll(
              '.auto-loop-videos[data-feed-id="' + this.options.feedId + '"]'
            ),
            o = new IntersectionObserver((e, o) => {
              e.forEach((e) => {
                e.isIntersecting && (t(e.target), o.unobserve(e.target));
              });
            }, i);
          e.forEach((e) => o.observe(e));
        }
        if (2 === e) {
          const e = document.querySelectorAll(
            `.${r}-hover-layer[data-feed-id='${this.options.feedId}-video'], .${r}-overlay[data-feed-id='${this.options.feedId}-video']`
          );
          e.forEach((e) => {
            (e.style.opacity = "1"), (e.style.background = "transparent");
          }),
            e.forEach((e) => {
              const i = (i) => {
                const s = e.getAttribute(`data-${r}-open-id`).split("-")[0],
                  n = o(s);
                var a;
                i
                  ? (t(n), (e.style.opacity = 0))
                  : ((a = n), a?.pause(), (e.style.opacity = 1));
              };
              e.addEventListener("mouseover", () => i(!0)),
                e.addEventListener("mouseout", () => i(!1)),
                e.addEventListener("touchstart", () => i(!0)),
                e.addEventListener("touchend", () => i(!1));
            });
        }
      }),
      d
    );
  })();
  !(function () {
    var e, t;
    function o(t) {
      const o = document.getElementById(t);
      o &&
        (o.style.setProperty("display", "none", "important"),
        (document.body.style.overflowY = "visible"),
        (l.modalOpen = null),
        document.removeEventListener("keydown", e, !1));
    }
    document.addEventListener("click", function (i) {
      if (
        !i.target ||
        (!i.target.hasAttribute(`data-${r}-open-id`) &&
          !i.target.hasAttribute(`data-${r}-close-id`))
      )
        return !1;
      var s = i.target.hasAttribute(`data-${r}-open-id`)
          ? i.target.getAttribute(`data-${r}-open-id`)
          : i.target.getAttribute(`data-${r}-close-id`),
        n = document.getElementById("video-" + t),
        a = document.getElementById("video-" + s);
      if (
        (a &&
          (l.sound ? (a.muted = !1) : (a.muted = !0),
          (a.onplay = () => {
            null === l.modalOpen && a.pause();
          }),
          a.addEventListener("volumechange", function () {
            a.muted ? (l.sound = !1) : (l.sound = !0);
          })),
        n && n.pause(),
        i.target.hasAttribute(`data-${r}-open-id`))
      ) {
        const t = document.getElementById(s);
        if (((l.previouslyFocusedElement = document.activeElement), t)) {
          l.modalOpen && o(l.modalOpen),
            (l.modalOpen = s),
            t.style.setProperty("display", "flex", "important"),
            (document.body.style.overflowY = "hidden"),
            a && a.play();
          const i = `.${r}-new-arrow`,
            { firstFocusableElement: n, lastFocusableElement: p } = (function (
              e,
              t
            ) {
              const o = e.querySelectorAll(t),
                i = o[0],
                s = o[o.length - 1];
              return { firstFocusableElement: i, lastFocusableElement: s };
            })(t, i);
          (e = (e) => {
            !(function (e, t, o) {
              d;
              let i = "Tab" === e.key || 9 === e.keyCode;
              if (!i) return;
              e.shiftKey
                ? e.target === t && (o.focus(), e.preventDefault())
                : e.target === o && (t.focus(), e.preventDefault());
            })(e, n, p);
          }),
            document.addEventListener("keydown", e, !1),
            t.focus();
        }
      }
      i.target.hasAttribute(`data-${r}-close-id`) &&
        (l.previouslyFocusedElement && l.previouslyFocusedElement.focus(),
        o(s)),
        (t = s);
    }),
      window.addEventListener("keydown", (e) => {
        const { key: t } = e;
        if ("Escape" === t) l.modalOpen && o(l.modalOpen);
        else if ("Enter" === e.key) {
          const e = document.activeElement;
          ("button" === e.getAttribute("role") ||
            e.classList.contains(`${r}-new-arrow`)) &&
            e.click();
        }
        var i = document.getElementById(l.modalOpen);
        if (i) {
          var s = "";
          if (
            ("ArrowLeft" === t
              ? (s = `.${r}-new-arrow.prev`)
              : "ArrowRight" === t && (s = `.${r}-new-arrow.next`),
            s)
          ) {
            var n = i.querySelector(s);
            n && n.click();
          }
        }
      });
  })(),
    (window.instafeedEventTag = function (e, t, o) {
      "function" == typeof gtag &&
        gtag("event", e, { event_category: t, event_label: o });
    }),
    (window.instafeedSliderMove = (e, t = 0) => {
      l.sliderState[t] ||
        (l.sliderState[t] = { currentTransform: 0, minTransform: 0 });
      const o = l.sliderState[t],
        i = Math.ceil(l.totalImages[t] / l.sliderNumVisibleImages[t]) - 1,
        s = l.sliderRowSize[t] * i;
      (o.currentTransform += e * -l.sliderStepSize[t]),
        o.currentTransform < -s && (o.currentTransform = o.minTransform),
        o.currentTransform > o.minTransform && (o.currentTransform = -s);
      const n = document.querySelector(
        `.${r}-new-layout-wrapper[data-feed-id="${t}"]`
      );
      n && (n.style.transform = `translateX(${o.currentTransform}px)`);
    }),
    (function (e, t) {
      (e.Instafeed = t),
        (e.Instafeed.version = o),
        (e.Instafeed.sound = !1),
        (e.Instafeed.modalOpen = null),
        (e.Instafeed.previouslyFocusedElement = null),
        (e.Instafeed.sliderRowSize = {}),
        (e.Instafeed.autoScroll = null),
        (e.Instafeed.sliderStepSize = {}),
        (e.Instafeed.sliderNumVisibleImages = {}),
        (e.Instafeed.sliderState = {}),
        (e.Instafeed.totalImages = {});
    })(this, l),
    (function (e, t) {
      "use strict";
      "function" != typeof e.CustomEvent &&
        ((e.CustomEvent = function (e, o) {
          o = o || { bubbles: !1, cancelable: !1, detail: void 0 };
          var i = t.createEvent("CustomEvent");
          return i.initCustomEvent(e, o.bubbles, o.cancelable, o.detail), i;
        }),
        (e.CustomEvent.prototype = e.Event.prototype)),
        t.addEventListener(
          "touchstart",
          function (e) {
            "true" !== e.target.getAttribute("data-swipe-ignore") &&
              ((r = e.target),
              (a = Date.now()),
              (o = e.touches[0].clientX),
              (i = e.touches[0].clientY),
              (s = 0),
              (n = 0));
          },
          !1
        ),
        t.addEventListener(
          "touchmove",
          function (e) {
            if (o && i) {
              var t = e.touches[0].clientX,
                a = e.touches[0].clientY;
              (s = o - t), (n = i - a);
            }
          },
          !1
        ),
        t.addEventListener(
          "touchend",
          function (e) {
            if (r === e.target) {
              var l = parseInt(d(r, "data-swipe-threshold", "20"), 10),
                p = d(r, "data-swipe-unit", "px"),
                c = parseInt(d(r, "data-swipe-timeout", "500"), 10),
                u = Date.now() - a,
                h = "",
                g = e.changedTouches || e.touches || [];
              if (
                ("vh" === p &&
                  (l = Math.round((l / 100) * t.documentElement.clientHeight)),
                "vw" === p &&
                  (l = Math.round((l / 100) * t.documentElement.clientWidth)),
                Math.abs(s) > Math.abs(n)
                  ? Math.abs(s) > l &&
                    u < c &&
                    (h = s > 0 ? "swiped-left" : "swiped-right")
                  : Math.abs(n) > l &&
                    u < c &&
                    (h = n > 0 ? "swiped-up" : "swiped-down"),
                "" !== h)
              ) {
                var m = {
                  dir: h.replace(/swiped-/, ""),
                  touchType: (g[0] || {}).touchType || "direct",
                  xStart: parseInt(o, 10),
                  xEnd: parseInt((g[0] || {}).clientX || -1, 10),
                  yStart: parseInt(i, 10),
                  yEnd: parseInt((g[0] || {}).clientY || -1, 10),
                };
                r.dispatchEvent(
                  new CustomEvent("swiped", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: m,
                  })
                ),
                  r.dispatchEvent(
                    new CustomEvent(h, {
                      bubbles: !0,
                      cancelable: !0,
                      detail: m,
                    })
                  );
              }
              (o = null), (i = null), (a = null);
            }
          },
          !1
        );
      var o = null,
        i = null,
        s = null,
        n = null,
        a = null,
        r = null;
      function d(e, o, i) {
        for (; e && e !== t.documentElement; ) {
          var s = e.getAttribute(o);
          if (s) return s;
          e = e.parentNode;
        }
        return i;
      }
    })(window, document);
  if (document.getElementById("insta-feed") !== null) {
    var feed = new Instafeed({
      account: "",
      hash: "8b0b7b7c456e59080109435402912b1a",
      key: "instafeed-3722cb37d6d01f177bc8721971695d1a",
      apiVersion: 4,
      shopOrigin: "ambreeonline.myshopify.com",
      title: "",
      openIg: 3,
      space: 1,
      corners: 0,
      likes: 0,
      showFollowers: 1,
      layout: 5,
      sliderBehavior: 0,
      filter: "",
      taggedPosts: 0,
      columns: 5,
      columnsMobile: 4,
      rows: 5,
      rowsMobile: 5,
      autoplay: 1,
      autoLayout: 1,
      feedId: 0,
      charge: "31106662694",
    });
    feed.run();
  }
  return instafeedLoad;
})();
window.addEventListener(
  "resize",
  (
    (lastWidth) => () =>
      window.innerWidth !== lastWidth &&
      ((lastWidth = window.innerWidth), instafeedApp())
  )(window.innerWidth)
);
document.addEventListener("shopify:section:load", () => {
  instafeedApp();
});
