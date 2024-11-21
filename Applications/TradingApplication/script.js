"use strict";

document.getElementById("btn").addEventListener("click", function () {
    var cmp = document.getElementById("inp").value.trim().toLowerCase();
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var result = JSON.parse(xmlHttp.responseText);
            var details = "";

            result.forEach(function (v) {
                if (cmp === v.id.toLowerCase()) {
                    details = `
                        <p><strong>Name:</strong> ${v.name}</p>
                        <p><strong>Symbol:</strong> ${v.symbol}</p>
                        <img src="${v.image}" alt="${v.name} image" style="width:100px;height:100px;">
                        <p><strong>Price:</strong> ₹${v.current_price}</p>
                        <p><strong>Market Cap:</strong> ₹${v.market_cap}</p>
                        <p><strong>Highest in 24 Hours:</strong> ₹${v.high_24h}</p>
                        <p><strong>Lowest in 24 Hours:</strong> ₹${v.low_24h}</p>
                        <p><strong>Price Change in 24 Hours:</strong> ₹${v.price_change_24h}</p>
                        <p><strong>Last Updated:</strong> ${new Date(v.last_updated).toLocaleString()}</p>
                    `;
                }
            });

            document.querySelector(".coin").innerHTML = details || `<p>No coin found with the name "${cmp}".</p>`;
        } else if (xmlHttp.readyState === 4) {
            document.querySelector(".coin").innerHTML = `<p>Unable to fetch data. Please try again later.</p>`;
        }
    };

    xmlHttp.open("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr", true);
    xmlHttp.send();
});
