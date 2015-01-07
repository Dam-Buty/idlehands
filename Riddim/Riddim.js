var Riddim = function(fps) {
  return {
    h: undefined,

    fps: fps || 10,

    q: [],

    start: function() {
      var self = this;
      this.h = setInterval(function() {
        self.tick();
      }, 1000 / this.fps);

      return this;
    },

    stop: function() {
     window.clearInterval(this.h);
    },

    tick: function() {
      var current = this.q.shift();

      if (current !== undefined) {
        for(var i = 0;i < current.length;i++) {
          current[i]();
        }
      }
    },

    plan: function(fn) {
      var self = this;

      return {
          fn: fn,
          in: function(ticks) {
            if (self.q[ticks - 1] === undefined) {
              self.q[ticks - 1] = [];
            }
            self.q[ticks - 1].push(fn);
          },

          every: function(ticks) {
            var fn2 = function() {
              if (fn() !== false) {
                self.plan(fn).every(ticks);
              }
            };
            if (self.q[ticks - 1] === undefined) {
              self.q[ticks - 1] = [];
            }
            self.q[ticks - 1].push(fn2);
          }
      };
    }
  };
};
