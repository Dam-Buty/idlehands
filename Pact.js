var Pact = function(value, element, attribute, unit) {
  return {
    ov: value,
    value: value,
    el: element,
    attr: attribute || "",
    unit: unit || "",

    r: function() {
      var value = "";

      if (this.el !== undefined) {
        if (this.attr == "") {
          this.el.innerHTML = this.value;
        } else {
          if (this.unit != "") {
            if (this.unit == "%") {
            } else {
              value = this.value + " " + this.unit;
            }
            switch(this.unit) {
              case "%":
                value = Math.max(Math.floor(this.value / this.ov * 100), 0) + this.unit;
                break;
              case "/1":
                value = Math.max((this.value / this.ov), 0).toFixed(2);
                break;
              default:
                value = this.value + " " + this.unit;
            }
          } else {
            value = this.value;
          }

          this.el.style.setProperty(this.attr, value);
        }
      }

      return this;
    },

    toString: function() {
      return this.value;
    },

    plus: function(x) {
      this.value += x;
      this.r();
    },

    minus: function(x) {
      this.value -= x;
      this.r();
    },

    set: function(x) {
      this.value = x;
      this.r();
    },

    upTo: function(x) {
      this.value = Math.min(this.ov, this.value + x);
      this.r();
    },

    downTo: function(x) {
      this.value = Math.max(0, this.value - x);
      this.r();
    },

    reset: function(x) {
      this.ov = x;
      this.r();
    },

    resetPlus: function(x) {
      this.ov += x;
      this.r();
    },

    resetMinus: function(x) {
      this.ov -= x;
      this.r();
    },
  }.r();
};
