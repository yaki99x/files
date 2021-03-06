$(document).ready(function(){

  var textarea = $("#md-editor");

  $("#md-bold").click(function () {
    textarea.mdBold();
  });
  $("#md-italic").click(function () {
    textarea.mdItalic();
  });
  $("#md-h1").click(function () {
    textarea.mdHeader({number: 1});
  });
  $("#md-h2").click(function () {
    textarea.mdHeader({number: 2});
  });
  $("#md-h3").click(function () {
    textarea.mdHeader({number: 3});
  });
  $("#md-h4").click(function () {
    textarea.mdHeader({number: 4});
  });
  $("#md-link").click(function () {
    if($("#md-build-i").attr("class") == "fa fa-eye") textarea.mdLink();
  });
  $("#md-image").click(function () {
    if($("#md-build-i").attr("class") == "fa fa-eye") textarea.mdImage();
  });
  $("#md-code").click(function () {
    textarea.mdCode();
  });
  $("#md-hr").click(function () {
    textarea.mdHr();
  });
  $("#md-quote").click(function () {
    textarea.mdQuote();
  });
  $("#md-numList").click(function () {
    textarea.mdNumberedList();
  });
  $("#md-bulletList").click(function () {
    textarea.mdBulletList();
  });
  $("#md-build").click(function () {
    if($("#md-build-i").attr("class") == "fa fa-eye"){
      textarea.hide();
      $("#md-build-div").show();
      $("#md-build-i").attr("class", "fa fa-eye-slash");
      var parser = new HyperDown;
      buildHtml = parser.makeHtml(textarea.val());
      $("#md-build-div").html(buildHtml);
    }else{
      $("#md-build-div").hide();
      textarea.show();
      $("#md-build-i").attr("class", "fa fa-eye");
    }
  });
  $("#md-fwen").click(function () {
    textarea.mdfwen();
  });
});


$.fn.extend({
    insertValue: function(insertValue) {
        if(insertValue == false) return null;
        if($("#md-build-i").attr("class") == "fa fa-eye-slash") return null;
        var $t = $(this)[0];
        if ($t.selectionStart || $t.selectionStart == "0") {
            var startPos = $t.selectionStart;
            var endPos = $t.selectionEnd;
            var scrollTop = $t.scrollTop;
            $t.value = $t.value.substring(0, startPos) + insertValue + $t.value.substring(endPos, $t.value.length);
            this.focus();
            $t.selectionStart = startPos + insertValue.length;
            $t.selectionEnd = startPos + insertValue.length;
            $t.scrollTop = scrollTop;
        } else {
            this.value += insertValue;
            this.focus();
        }
    }
});

/**
 *
 * jquery-markdown 1.0
 * @author Can Geli??
 * @license License file must be attached with the source code (MIT License)
 *
 */

$.fn.textReplace = function(options) {
    var settings = $.extend({
        selected: function() {
            return "";
        },
        no_selection: function() {
            return "";
        }
    }, options);
    var textarea = this, actual = this.get(0);
    var selectionStart = actual.selectionStart, selectionEnd = actual.selectionEnd;
    var text_to_replace = $(textarea).val().substring(selectionStart, selectionEnd);

    if (selectionStart === selectionEnd) {
        $(textarea).insertValue(settings.no_selection());
    } else {
        $(textarea).insertValue(settings.selected(text_to_replace));
    }
};

$.fn.mdBold = function(options) {
    var settings = $.extend({
        default: "????????????"
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return "**" + text + "**";
        },
        no_selection: function() {
            return "**" + settings.default + "**";
        }
    });
};
$.fn.mdItalic = function(options) {
    var settings = $.extend({
        default: "????????????"
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return "*" + text + "*";
        },
        no_selection: function() {
            return "*" + settings.default + "*";
        }
    });
};
$.fn.mdHeader = function(options) {
    var settings = $.extend({
        default: "????????????",
        number: 1
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return '\n' + "#".repeat(settings.number) + " " + text + '\n\n';
        },
        no_selection: function() {
            return '\n' + "#".repeat(settings.number) + " " + settings.default + '\n\n';
        }
    });
};
$.fn.mdLink = function(options) {
    var settings = $.extend({
        default_text: "????????????",
        default_url: prompt('?????????????????????')
    }, options);
    $(this).textReplace({
        selected: function(text) {
            if(settings.default_url !== null && settings.default_url !== "" && settings.default_url !== false){
                return '[' + text + '](' + settings.default_url + ')';
            }else{
                return false;
            }
        },
        no_selection: function() {
            if(settings.default_url !== null && settings.default_url !== "" && settings.default_url !== false){
                return '[' + settings.default_text + '](' + settings.default_url + ')';
            }else{
                return false;
            }
        }
    });
};
$.fn.mdImage = function(options) {
    var settings = $.extend({
        default_alt_text: "????????????",
        default_image_url: prompt('?????????????????????')
    }, options);
    $(this).textReplace({
        selected: function(image_alt_text) {
            if(settings.default_image_url !== null && settings.default_image_url !== "" && settings.default_image_url !== false){
              return '![' + image_alt_text + '](' + settings.default_image_url + ')';
            }else{
              return false;
            }
        },
        no_selection: function() {
            if(settings.default_image_url !== null && settings.default_image_url !== "" && settings.default_image_url !== false){
                return '![' + settings.default_alt_text + '](' + settings.default_image_url + ')';
            }else{
                return false;
            }
        }
    });
};

$.fn.mdCode = function(options) {
    var settings = $.extend({
        default: "???????????????"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '`' + code + '`';
            } else {
                final_code = "";
                for (i = 0; i <??lines.length; i++) {
                    final_code += "    " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '`' + settings.default + '`';
        }
    });
};
$.fn.mdHr = function(options) {
    var settings = $.extend({
        default: ""
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return text + "\n\n----------\n\n";
        },
        no_selection: function() {
            return "\n\n----------\n\n";
        }
    });
};
$.fn.mdQuote = function(options) {
    var settings = $.extend({
        default: "????????????"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '\n> ' + code + '\n';
            } else {
                final_code = "\n";
                for (i = 0; i <??lines.length; i++) {
                    final_code += "> " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '\n> ' + settings.default + '\n';
        }
    });
}
$.fn.mdfwen = function(options) {
    var settings = $.extend({
        default: "# ????????????Markdown?????????\n\n## ????????????Markdown?????????\n\n### ????????????Markdown?????????\n\n????????? ???????????????????????? **Markdown?????????** ??????????????????????????????????????????????????????Markdown?????????, ?????????????????????????????????????????????Markdown????????????????????????\n\n## ????????????\n\n?????????<kbd>Ctrl/Command</kbd> + <kbd>Z</kbd>\n\n?????????<kbd>Ctrl/Command</kbd> + <kbd>Y</kbd>\n\n## ???????????????????????????\n\n*????????????* _????????????_\n\n**????????????** __????????????__\n\n~~????????????~~\n\n> ????????????\n\n## ?????????????????????\n\n??????: [link](https://www.csdn.net/).\n\n## ??????????????????????????????\n\n1. ??????1\n2. ??????2\n3. ??????3\n\n##????????????????????????\n\n<table><tr><td bgcolor=yellow>?????????yellow</td></tr></table>"
    }, options);
    $(this).textReplace({
        selected: function(code) {
              return '\n' + settings.default + '\n';
        },
        no_selection: function() {
            return '\n' + settings.default + '\n';
        }
    });
}
$.fn.mdNumberedList = function(options) {
    var settings = $.extend({
        default: "????????????"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '\n1. ' + code + '\n';
            } else {
                final_code = "\n";
                for (i = 0; i <??lines.length; i++) {
                    final_code += (i+1)+". " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '\n1. ' + settings.default + '\n';
        }
    });
}
$.fn.mdBulletList = function(options) {
    var settings = $.extend({
        default: "????????????"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '\n- ' + code + '\n';
            } else {
                final_code = "\n";
                for (i = 0; i <??lines.length; i++) {
                    final_code += "- " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '\n- ' + settings.default + '\n';
        }
    });
}
