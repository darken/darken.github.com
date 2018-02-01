var changeLocale;

(function () {
  function localizeSel(string, selector) {
    var localized = string.toLocaleString();
    if (localized === string) return;

    $(selector).text(localized);
  }

  function localizeById(id) {

  }

  function localizeByIds() {
    var id;
    for (i = 0; i < arguments.length; i++) {
      id = arguments[i];
      localizeSel("%" + id, "#" + id);
    }
  }

  function localizeByClass() {
    for (i = 0; i < arguments.length; i++) {
      id = arguments[i];
      localizeSel("%" + id, ".lc_" + id);
    }
  }

  function localizeAll () {
    var proProfileContent = document.getElementById("proProfileContent").childNodes;

    localizeByIds(
      "proProfileTitle",
      "proProfileContent",
      "opTitle",
      "op01Description",
      "op02Description",
      "hostedOn"
    );

    localizeByClass(
      "opMoreButton",
      "opDownloadFor",
      "or"
    );

    //$("#proProfileContent").text(localize("%proProfileContent", $("#proProfileContent").text()));
    //$("#proProfileContent:nth-child(2)").text(localize("%proProfileContent_1", proProfileContent[1].nodeValue));
    //$("#proProfileContent:nth-child(4)").text(localize("%proProfileContent_2", proProfileContent[2].nodeValue));
  }

  changeLocale = function () {
    var selectedLocale = $("#localeSelect").val();
    if (String.locale === selectedLocale) return;

    String.locale = selectedLocale;
    window.location.hash = String.locale;
    localizeAll();
  };

  if (window.location.hash) {
    String.locale = window.location.hash.substr(1);
    /* Page is in english on load */
    if (String.locale !== "en") localizeAll();

    $("#localeSelect").val(String.locale);
  }
})();
