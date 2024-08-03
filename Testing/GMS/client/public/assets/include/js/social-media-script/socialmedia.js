$(document).ready(function () {
    $("#facebook").sharrre({
        share: {
            facebook: true,
        },
        enableHover: false,
        enableTracking: false,
        enableCounter: false,
        click: function (api, options) {
            api.simulateClick();
            api.openPopup("facebook");
        },
        template: '<i class="fab fa-facebook-f"></i> Facebook',
        url:
            "https://www.facebook.com/CapregSoft",
    });

    $("#twitter").sharrre({
        share: {
            twitter: true,
        },
        enableHover: false,
        enableTracking: false,
        enableCounter: false,
        buttons: { twitter: { via: "CapregSoft" } },
        click: function (api, options) {
            api.simulateClick();
            api.openPopup("twitter");
        },
        template: '<i class="fab fa-twitter"></i> Twitter',
        url:
            "https://twitter.com/capregsoft",
    });

    // Facebook Pixel Code Don't Delete
    !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(
        window,
        document,
        "script",
        "http://connect.facebook.net/en_US/fbevents.js"
    );

    try {
        fbq("init", "111649226022273");
        fbq("track", "PageView");
    } catch (err) {
        console.log("Facebook Track Error:", err);
    }
});

<noscript>
    <img height="1" width="1" style="display: none"
        src="https://www.facebook.com/tr?id=111649226022273&amp;ev=PageView&amp;noscript=1" />
</noscript>