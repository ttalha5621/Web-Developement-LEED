(backgroundOrange = navbar_initialized = fixedTop = !(transparentDemo = transparent = !0)),
  (toggle_initialized = sidebar_mini_active = !1);
var is_iPad = null != navigator.userAgent.match(/iPad/i),
  scrollElement =
    -1 < navigator.platform.indexOf("Win") ? $(".main-panel") : $(window);
function debounce(i, n, t) {
  var s;
  return function () {
    var a = this,
      e = arguments;
    clearTimeout(s),
      (s = setTimeout(function () {
        (s = null), t || i.apply(a, e);
      }, n)),
      t && !s && i.apply(a, e);
  };
}
function hexToRGB(a, e) {
  var i = parseInt(a.slice(1, 3), 16),
    n = parseInt(a.slice(3, 5), 16),
    t = parseInt(a.slice(5, 7), 16);
  return e
    ? "rgba(" + i + ", " + n + ", " + t + ", " + e + ")"
    : "rgb(" + i + ", " + n + ", " + t + ")";
}
(seq = 0),
  (delays = 80),
  (durations = 500),
  (seq2 = 0),
  (delays2 = 80),
  (durations2 = 500),
  (function () {

    if (((isWindows = -1 < navigator.platform.indexOf("Win")), isWindows)) {
      new PerfectScrollbar(".sidebar-wrapper"),
        new PerfectScrollbar(".main-panel");
      $("html").addClass("perfect-scrollbar-on");
    } else $("html").addClass("perfect-scrollbar-off");

  })(),
  $(document).ready(function () {
    ($navbar = $(".navbar[color-on-scroll]")),
      (scroll_distance = $navbar.attr("color-on-scroll") || 500),
      $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(),
      $('[data-toggle="popover"]').each(function () {
        (color_class = $(this).data("color")),
          $(this).popover({
            template:
              '<div class="popover popover-' +
              color_class +
              '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          });
      });
    var a = $(".tagsinput").data("color");
    0 != $(".tagsinput").length && $(".tagsinput").tagsinput(),
      $(".bootstrap-tagsinput").addClass(a + "-badge"),
      0 != $(".selectpicker").length &&
      $(".selectpicker").selectpicker({
        iconBase: "now-ui-icons",
        tickIcon: "ui-1_check",
      }),
      $("body").hasClass("sidebar-mini") && (sidebar_mini_active = !0),
      navigator.platform.startsWith("Win") &&
      $(".modal")
        .on("show.bs.modal", function () {
          new PerfectScrollbar(".modal");
        })
        .on("hide.bs.modal", function () {
          new PerfectScrollbar(".modal").destroy();
        }),
      0 == $(".full-screen-map").length &&
      0 == $(".bd-docs").length &&
      $(".collapse")
        .on("show.bs.collapse", function () {
          $(this)
            .closest(".navbar")
            .removeClass("navbar-transparent")
            .addClass("bg-white");
        })
        .on("hide.bs.collapse", function () {
          $(document).scrollTop() <= scroll_distance &&
            $(this)
              .closest(".navbar")
              .addClass("navbar-transparent")
              .removeClass("bg-white");
        }),
      $(".form-file-simple .inputFileVisible").click(function () {
        $(this).siblings(".inputFileHidden").trigger("click");
      }),
      $(".form-file-simple .inputFileHidden").change(function () {
        var a = $(this)
          .val()
          .replace(/C:\\fakepath\\/i, "");
        $(this).siblings(".inputFileVisible").val(a);
      }),
      $(
        ".form-file-simple .inputFileHidden, .form-file-multiple .inputFileHidden"
      ).css("z-index", "-1"),
      $(
        ".form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn"
      ).click(function () {
        $(this).siblings(".inputFileHidden").trigger("click");
      }),
      $(".form-file-multiple .inputFileHidden").change(function () {
        for (var a = "", e = 0; e < $(this).get(0).files.length; ++e)
          e < $(this).get(0).files.length - 1
            ? (a += $(this).get(0).files.item(e).name + ",")
            : (a += $(this).get(0).files.item(e).name);
        $(this).siblings(".inputFileVisible").val(a);
      }),
      nowuiDashboard.initMinimizeSidebar(),
      0 != $(".navbar[color-on-scroll]").length &&
      (nowuiDashboard.checkScrollForTransparentNavbar(),
        $(window).on("scroll", nowuiDashboard.checkScrollForTransparentNavbar)),
      $(".form-control")
        .on("focus", function () {
          $(this).parent(".input-group").addClass("input-group-focus");
        })
        .on("blur", function () {
          $(this).parent(".input-group").removeClass("input-group-focus");
        }),
      $(".bootstrap-switch").each(function () {
        ($this = $(this)),
          (data_on_label = $this.data("on-label") || ""),
          (data_off_label = $this.data("off-label") || ""),
          $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label,
          });
      }),
      is_iPad && $("body").removeClass("sidebar-mini");
  }),
  $(document).on("click", ".navbar-toggle", function () {
    ($toggle = $(this)),
      1 == nowuiDashboard.misc.navbar_menu_visible
        ? ($("html").removeClass("nav-open"),
          (nowuiDashboard.misc.navbar_menu_visible = 0),
          setTimeout(function () {
            $toggle.removeClass("toggled"), $("#bodyClick").remove();
          }, 550))
        : (setTimeout(function () {
          $toggle.addClass("toggled");
        }, 580),
          (div = '<div id="bodyClick"></div>'),
          $(div)
            .appendTo("body")
            .click(function () {
              $("html").removeClass("nav-open"),
                (nowuiDashboard.misc.navbar_menu_visible = 0),
                setTimeout(function () {
                  $toggle.removeClass("toggled"), $("#bodyClick").remove();
                }, 550);
            }),
          $("html").addClass("nav-open"),
          (nowuiDashboard.misc.navbar_menu_visible = 1));
  }),
  $(window).resize(function () {
    (seq = seq2 = 0),
      0 == $(".full-screen-map").length &&
      0 == $(".bd-docs").length &&
      (($navbar = $(".navbar")),
        (isExpanded = $(".navbar")
          .find('[data-toggle="collapse"]')
          .attr("aria-expanded")),
        $navbar.hasClass("bg-white") && 991 < $(window).width()
          ? 0 == scrollElement.scrollTop() &&
          $navbar.removeClass("bg-white").addClass("navbar-transparent")
          : $navbar.hasClass("navbar-transparent") &&
          $(window).width() < 991 &&
          "false" != isExpanded &&
          $navbar.addClass("bg-white").removeClass("navbar-transparent")),
      is_iPad && $("body").removeClass("sidebar-mini");
  }),
  (nowuiDashboard = {
    misc: { navbar_menu_visible: 0 },
    checkScrollForTransparentNavbar: debounce(function () {
      scrollElement.scrollTop() >= scroll_distance
        ? transparent &&
        ((transparent = !1),
          $(".navbar[color-on-scroll]")
            .removeClass("navbar-transparent")
            .addClass("bg-white"))
        : transparent ||
        ((transparent = !0),
          (0 !==
            $(".navbar.fixed-top .navbar-toggler[aria-expanded='false']")
              .length ||
            991 < $(window).width()) &&
          $(".navbar[color-on-scroll]")
            .addClass("navbar-transparent")
            .removeClass("bg-white"));
    }, 17),
    checkSidebarImage: function () {
      ($sidebar = $(".sidebar")),
        (image_src = $sidebar.data("image")),
        void 0 !== image_src &&
        ((sidebar_container =
          '<div class="sidebar-background" style="background-image: url(' +
          image_src +
          ') "/>'),
          $sidebar.append(sidebar_container));
    },
    initMinimizeSidebar: function () {
      $("#minimizeSidebar").click(function () {
        $(this);
        1 == sidebar_mini_active
          ? ($("body").removeClass("sidebar-mini"),
            (sidebar_mini_active = !1),
            nowuiDashboard.showSidebarMessage("Sidebar mini deactivated..."))
          : ($("body").addClass("sidebar-mini"),
            (sidebar_mini_active = !0),
            nowuiDashboard.showSidebarMessage("Sidebar mini activated..."));
        var a = setInterval(function () {
          window.dispatchEvent(new Event("resize"));
        }, 180);
        setTimeout(function () {
          clearInterval(a);
        }, 1e3);
      });
    },
    startAnimationForLineChart: function (a) {
      a.on("draw", function (a) {
        "line" === a.type || "area" === a.type
          ? a.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: a.path
                .clone()
                .scale(1, 0)
                .translate(0, a.chartRect.height())
                .stringify(),
              to: a.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint,
            },
          })
          : "point" === a.type &&
          (seq++,
            a.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease",
              },
            }));
      }),
        (seq = 0);
    },
    startAnimationForBarChart: function (a) {
      a.on("draw", function (a) {
        "bar" === a.type &&
          (seq2++,
            a.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: "ease",
              },
            }));
      }),
        (seq2 = 0);
    },
    showSidebarMessage: function (a) {
      try {
        $.notify(
          { icon: "now-ui-icons ui-1_bell-53", message: a },
          {
            type: "info",
            timer: 4e3,
            placement: { from: "top", align: "right" },
          }
        );
      } catch (a) {
        console.log(
          "Notify library is missing, please make sure you have the notifications library added."
        );
      }
    },
  });

