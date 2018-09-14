function Sixinput (ele, option) {
  this.ele = $(ele);
  this.defaultopt = {
    width: 20,
    height: 20,
    margin: 3,
    fontSize: 14,
    align: "center",
    color: "#000",
    lineHeight: 20
  }
  this.options = $.extend(this.defaultopt, option)
  this.init();
}

Sixinput.prototype.init = function () {
  var This = this;
  for (var i = 1;i <= 6; i++){
    $("<input class='inputItem"+ i +"' type='text'>").val("").css({"textAlign": this.options.align, "color": this.options.color, "width": this.options.width + "px", "height": this.options.height + "px","lineHeight": this.lineHeight + "px", "margin": this.options.margin + "px", "fontSize": this.options.fontSize + "px"}).appendTo(this.ele).get(0).addEventListener("input", function () {
      if (!this.value.match(/\d/)) {
        this.value = "";
      }
      if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);
      }
    })
  }
  $(This.ele).children(".inputItem1").get(0).oninput = function () {
    if (this.value != "") {
      $(This.ele).children(".inputItem2").get(0).focus();
    }
    This.finalVal()
  }
  $(This.ele).children(".inputItem2").get(0).oninput = function () {
        if (this.value != "") {
      $(This.ele).children(".inputItem3").get(0).focus();
    } else {
      $(This.ele).children(".inputItem1").get(0).focus();
    }
    This.finalVal()
  }
  $(This.ele).children(".inputItem3").get(0).oninput = function () {
    if (this.value != "") {
      $(This.ele).children(".inputItem4").get(0).focus();
    } else {
      $(This.ele).children(".inputItem2").get(0).focus();
    }
    This.finalVal()
  }
  $(This.ele).children(".inputItem4").get(0).oninput = function () {
    if (this.value != "") {
      $(This.ele).children(".inputItem5").get(0).focus();
    } else {
      $(This.ele).children(".inputItem3").get(0).focus();
    }
    This.finalVal()
  }
  $(This.ele).children(".inputItem5").get(0).oninput = function () {
    if (this.value != "") {
      $(This.ele).children(".inputItem6").get(0).focus();
    } else {
      $(This.ele).children(".inputItem4").get(0).focus();
    }
    This.finalVal()
  }
  $(This.ele).children(".inputItem6").get(0).oninput = function () {
    if (this.value != "") {
      
    } else {
      $(This.ele).children(".inputItem5").get(0).focus();
    }
    This.finalVal()
  }
}
Sixinput.prototype.finalVal = function () {
  var This = this
  var ok = true
  $(this.ele).children("input").each(function (index, item) {
    if (item.value == "") {
      $(This.ele).removeAttr("value")
      ok = false;
    }
  })
  if (ok) {
    var value = $(this.ele).children(".inputItem1").val() + $(this.ele).children(".inputItem2").val() + $(this.ele).children(".inputItem3").val() + $(this.ele).children(".inputItem4").val() + $(this.ele).children(".inputItem5").val() + $(this.ele).children(".inputItem6").val()
    $(this.ele).attr("value", value)
  }
}
Sixinput.prototype.clear = function () {
    var This = this
    $(this.ele).children("input").each(function (index, item) {
      this.value = ""
    })
    $(This.ele).removeAttr("value")
}