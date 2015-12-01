jQuery.fn.extend({

  jexpandable: function() {
    this.each(function () {

      var
        _this = $(this),
        text = _this.data('text'),
        do_show = false,
        CHARS_TO_SHOW = 120;

      if (!text)
        throw "jexpandable: No text provided. Make sure text is provided in the `data-text` attribute."

      function linkContainer(opts) {
        return ' <span style="border-bottom: 1px  dashed;"> ' + opts.title + '</span>'
      }

      function toggleVisibility() {
        var
          content;

        if (do_show || text.length <= CHARS_TO_SHOW)
          if (text.length > CHARS_TO_SHOW)
            content = text + linkContainer({title: 'less'})
          else
            content = text
        else {
          if (text.indexOf("\n") == -1)
            content = text.substr(0, CHARS_TO_SHOW)
          else
            content = text.split("\n")[0]

          content += linkContainer({title: 'more'});
        }

        _this.html(content);
        do_show = !do_show;
      };
      toggleVisibility();

      _this.on('click', function () {
        toggleVisibility();
      });

    });
  }

});
