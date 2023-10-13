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
    for (let i = 0; i < arguments.length; i++) {
      let id = arguments[i];
      localizeSel("%" + id, "#" + id);
    }
  }

  function localizeByClass() {
    for (let i = 0; i < arguments.length; i++) {
      let id = arguments[i];
      localizeSel("%" + id, ".lc_" + id);
    }
  }

  function localizeAll () {
    localizeByIds(
      "proProfileTitle",
      "proProfileContent",
      "notesTitle",
      "hostedOn"
    );
  }

  changeLocale = function () {
    let  selectedLocale = $("#localeSelect").val();
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
