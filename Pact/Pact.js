var Pact = function(value, element, attribute, unit) {
  return {
    ov: value,
    v: value,
    el: element,
    attr: attribute || "",
    unit: unit || "",

    r: function() {
      var v = "";

      if (this.el !== undefined) {
        if (this.attr == "") {
          this.el.innerHTML = this.v;
        } else {
          if (this.unit != "") {
            if (this.unit == "%") {
            } else {
              v = this.v + " " + this.unit;
            }
            switch(this.unit) {
              case "%":
                v = Math.max(Math.floor(this.v / this.ov * 100), 0) + this.unit;
                break;
              case "/1":
                v = Math.max((this.v / this.ov), 0).toFixed(2);
                break;
              default:
                v = this.v + " " + this.unit;
            }
          } else {
            v = this.v;
          }

          this.el.style.setProperty(this.attr, v);
        }
      }

      return this;
    },

    toString: function() {
      return this.v;
    },

    plus: function(x) {
      this.v += x;
      this.r();
    },

    minus: function(x) {
      this.v -= x;
      this.r();
    },

    set: function(x) {
      this.v = x;
      this.r();
    },

    upTo: function(x) {
      this.v = Math.min(this.ov, this.v + x);
      this.r();
    },

    downTo: function(x) {
      this.v = Math.max(0, this.v - x);
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
