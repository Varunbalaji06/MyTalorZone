(function() {
    let product_form = document.querySelector("form[action='/cart/add']");
    let cart_form = document.querySelector("form[action='/cart']");
    let mini_cart_form = document.querySelector("#mini-cart-form");
    let shop = Shopify.shop;
    let customer = __st.cid;
    var referer = document.referrer;
    var redirected_from_return_portal =  referer.includes("localhost") || referer.includes("/apps/ecoreturns") || referer.includes(".ecoreturns.ai")
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    let exchange_session_id = params.exchange_session_id; 
    let available_credit = params.available_credit || 0; 
    let allowed_quantity = params.allowed_quantity || 1;

    if(redirected_from_return_portal && exchange_session_id){
        sessionStorage.setItem("exchange_session_id", exchange_session_id);
        sessionStorage.setItem("available_credit", available_credit);
        sessionStorage.setItem("allowed_quantity", allowed_quantity);
        
    }

    if(sessionStorage.getItem("exchange_session_id")){
        let footerElem = document.createElement('footer');
        let btnElem = document.createElement('button')
        btnElem.textContent="GO BACK"
        btnElem.style.cssText = 'padding:10px;background: #FFFFFF;border-radius: 2px;color:#000000'
        btnElem.addEventListener("click", function(){
            window.open('','_parent',''); 
            window.close();
        })
        footerElem.textContent = `Exchange is currently in progress. Choose an item you want to exchange with a credit of ${sessionStorage.getItem("available_credit")}. Additional payment if any will be collected while submitting the request.`;
        footerElem.appendChild(btnElem)
        footerElem.style.cssText = 'z-index:26;padding:0 75px;display:flex;justify-content:space-around;align-items:center;position:fixed;left:0;bottom:0;width:100%;height:50px;background:black;color:white;text-align:center; cursor:pointer;';
        document.body.appendChild(footerElem);
        /* Sticky footer code*/
    }

    let app_url = "https://returns.saara.io/api";
    let host_url = "https://returns.saara.io";
    let api_host_url = "http://34.226.19.148/api";
    let page = ShopifyAnalytics.lib.generatePageObject().path;
    let account = document.querySelector(".saara-credit");
    if (product_form || cart_form || mini_cart_form) {
        if (typeof customer !== "undefined" || sessionStorage.getItem("exchange_session_id")) {
            if(sessionStorage.getItem("exchange_session_id") && document.querySelector(".checkout-button")){
                document.querySelector(".checkout-button").removeAttribute('onclick');
                document.querySelector(".checkout-button").setAttribute("name", "checkout");
                document.querySelector(".checkout-button").innerHTML = "Continue Exchange";
            }

            document.addEventListener('click', function (e) {
                if (e.target && (e.target.id == 'checkout' || e.target.name == 'checkout')) {

                    let cart_checkout = document.querySelector("form[action='/cart'] input[name='checkout']") || document.querySelector("button[id='checkout']") || document.querySelector("button[name='checkout']") || document.querySelector(".checkout-button");
                    if (cart_checkout) {
                        
                        e.preventDefault();
                        
                        // Disable button to prevent unwanted clicks
                        cart_checkout.disabled = true;
                        // Get Line items of the Customer
                        var cartContents = fetch('/cart.js')
                            .then(response => response.json())
                            .then(data => {
                                let line_items = data.items;
                                let requestoptions = {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        total: data.total_price / 100,
                                        customer: customer,
                                        line_items: line_items,
                                        'store': shop
                                    })
                                };
                                if(sessionStorage.getItem("exchange_session_id")){

                                    if(line_items.length > 1){
                                        showCartErrorMessage(cart_checkout, "Your cart has more than one item. Please remove the additional items in your cart to proceed with the exchange");
                                        cart_checkout.disabled = false;
                                    }
                                    else if (line_items[0].quantity != sessionStorage.getItem("allowed_quantity")){
                                        showCartErrorMessage(cart_checkout, `The quantity of the item in your cart must be ${sessionStorage.getItem("allowed_quantity")}. Please add/remove the item(s) to proceed with the exchange.
                                        `);
                                        cart_checkout.disabled = false;
                                    }
                                    else{
                                        fetch(app_url + `/exchange/item/exchange_session/${sessionStorage.getItem("exchange_session_id")}/`, requestoptions)
                                        .then(response => response.json())
                                        .then(data => {
                                            if (data.redirect_url) {
                                                window.open('','_parent',''); 
                                                window.close();
                                            } else {
                                                window.location.href = '/checkout';
                                            }
                                        });

                                    }

                                    
                                }
                                else {
                                    fetch(app_url + '/create-checkout', requestoptions)
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data.status) { // Enabled the Checkout Button
                                            //cart_checkout.disabled = false; // Redirect To Checkout Page
                                            window.location.href = data.message.draft_order.invoice_url;
                                        } else {
                                            window.location.href = '/checkout';
                                        }
                                    });
                                }
                            });

                    }

                }
            });


        }
    }
    if (page.replaceAll("/", "") == "account") {
        fetch(host_url + '/process-incentive/?store=' + shop)
            .then(response => response.json())
            .then(res => {
                if (res.data.credits_visibility) {
                    
//                        var table = document.querySelector("table");
//                        document.head.insertAdjacentHTML("beforeend", `<style> table thead th , table tbody td {word-break:break-all}</style>`);
//                        if (res.data.exchange_return_button_visibility && table){
//                            for (let i in table.rows) {
//                                let row = table.rows[i];
//                                if (row instanceof HTMLElement) {
//                                    if (row.parentElement.tagName==='TBODY') {
//                                        let orderid;
//                                        if (/\d/.test(row.firstElementChild.firstElementChild.innerText)){
//                                           orderid = row.firstElementChild.firstElementChild.innerText;
//                                        } else {
//                                           orderid = row.firstElementChild.lastElementChild.innerText;
//                                        }
//                                        orderid = orderid.replace("#", "~");
//                                        let host = res.consumer_worflow_base_url+'?order_id=' + orderid + '&cid=' + customer;
//                                        row.insertAdjacentHTML('beforeend', `<td><a style="font-size:12px; padding:8px; word-break:break-all;" target="_blank" class="saara-return-btn btn" href="${host}">Return</a></td>`);
//                                    } else if (row.parentElement.tagName==='THEAD') {
//                                        row.insertAdjacentHTML('beforeend', "<th>Return/Exchange</th>");
//                                    }
//                                }
//                            }
//                        }
                        if (typeof customer !== "undefined") {
                            let requestoptions = {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    store: shop,
                                    cstmr: customer,
                                    url: host_url
                                })
                            };
                            fetch(app_url + '/wallet/' + customer + '/')
                                .then(response => response.json())
                                .then(data => {
                                    if (account) {
                                        let currency = Shopify.currency.active;
                                        let credit = data.data.balance;
                                        account.innerHTML = "<b>" + currency + "</b>" + ' ' + credit;
                                    }
                                });
                        }
                    var saara_links = document.getElementsByClassName('saara-links');
                    var cont = document.getElementsByClassName('saara-cont');
                    if (saara_links.length) {
                        saara_links[0].style.display = "inline-block";
                    }
                    if (cont.length) {
                        cont[0].style.display = "block";
                    }
                }
            });
    }

})();


function showCartErrorMessage(element, message) {
    let cartErrorElement = document.getElementById("cart-errors")
    let ecoreturnsExchangeError = document.getElementById("ecoreturns_exchange_error")
    if(ecoreturnsExchangeError){
        ecoreturnsExchangeError.innerHTML = message;
    }
    else{
        if(cartErrorElement){
            cartErrorElement.parentNode.insertAdjacentHTML('beforeend',`<div id="ecoreturns_exchange_error" style='color:red;text-align:center'>${message}</div>`);
        }
        else{
            element.parentNode.insertAdjacentHTML('beforeend', `<div id="ecoreturns_exchange_error" style="color:red;text-align:center">${message}</div>`)
        } 
    }


}