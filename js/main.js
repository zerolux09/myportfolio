jQuery(document).ready(function($) {});

$(document).ready(function() {
  $(".popup-btn").on("click", function(event) {
    event.preventDefault();
    $(".popup").fadeIn();
  });
  $(".popup-close").on("click", function(event) {
    event.preventDefault();
    $(".popup").fadeOut();
  });
});

// $(document).ready(function(){
//   $('.js-tilt').on('click', function(){};
// let js-title =
// document.querySelector(".sroll-leftbtn")function(){
//   let  sroll-leftbtn  = $('.sroll-leftbtn')
//   console.log("hi");
// // };
// $(document).ready(function(){
//   var jstilt =('#js-tilt');
// })

// $(document).ready(function () {
//   $('.sroll-left').on('click', function(event){
//     $('#js-tilt').addClass('.sroll-left'); // отправить письмо с заказом

// });
// document.querySelector(".sroll-leftbtn").onclick = function() {
//   let jstilt = document.querySelector("#js-tilt");
//    srollleft = document.querySelector(".sroll-left");
//   document.querySelector("#js-tilt").addClass(".sroll-left");
//   qunitheader.this.addClass(".sroll-left");
// };
// function arleft() {}
let srollleft;
function wef() {
  console.log((elem.style.srollleft = srollleft));
}
$(document).ready(function($) {
  // var className = $(".srollleft").attr("class");
  $("#sroll-leftbtn").click(function() {
    $(this)
      .parents(".js-tilt")
      element.classlist.add("srollleft");
  });
});

// }
// $(document).ready(function(){
//     var ScroLlts = $('#sroll-leftbtn'),
//     var ScrolLeft = $('.sroll-left'),
//     function ScrolLeft(jstilt).on('click',('#sroll-leftbtn') function(event){
//       $('#js-tilt').addClass('.sroll-left');
//     }
//       $('#js-title').addClass('.sroll-left');
//     });
//   });

jQuery(document).ready(function() {
  var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
    coverLayer = $(".cd-cover-layer");

  /*
		convert a cubic bezier value to a custom mina easing
		http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
	*/
  var duration = 600,
    epsilon = 1000 / 60 / duration / 4,
    firstCustomMinaAnimation = bezier(0.63, 0.35, 0.48, 0.92, epsilon);

  modalTriggerBts.each(function() {
    initModal($(this));
  });

  function initModal(modalTrigger) {
    var modalTriggerId = modalTrigger.attr("id"),
      modal = $('.cd-modal[data-modal="' + modalTriggerId + '"]'),
      svgCoverLayer = modal.children(".cd-svg-bg"),
      paths = svgCoverLayer.find("path"),
      pathsArray = [];
    //store Snap objects
    (pathsArray[0] = Snap("#" + paths.eq(0).attr("id"))),
      (pathsArray[1] = Snap("#" + paths.eq(1).attr("id"))),
      (pathsArray[2] = Snap("#" + paths.eq(2).attr("id")));

    //store path 'd' attribute values
    var pathSteps = [];
    pathSteps[0] = svgCoverLayer.data("step1");
    pathSteps[1] = svgCoverLayer.data("step2");
    pathSteps[2] = svgCoverLayer.data("step3");
    pathSteps[3] = svgCoverLayer.data("step4");
    pathSteps[4] = svgCoverLayer.data("step5");
    pathSteps[5] = svgCoverLayer.data("step6");

    //open modal window
    modalTrigger.on("click", function(event) {
      event.preventDefault();
      modal.addClass("modal-is-visible");
      coverLayer.addClass("modal-is-visible");
      animateModal(pathsArray, pathSteps, duration, "open");
    });

    //close modal window
    modal.on("click", ".modal-close", function(event) {
      event.preventDefault();
      modal.removeClass("modal-is-visible");
      coverLayer.removeClass("modal-is-visible");
      animateModal(pathsArray, pathSteps, duration, "close");
    });
  }

  function animateModal(paths, pathSteps, duration, animationType) {
    var path1 = animationType == "open" ? pathSteps[1] : pathSteps[0],
      path2 = animationType == "open" ? pathSteps[3] : pathSteps[2],
      path3 = animationType == "open" ? pathSteps[5] : pathSteps[4];
    paths[0].animate({ d: path1 }, duration, firstCustomMinaAnimation);
    paths[1].animate({ d: path2 }, duration, firstCustomMinaAnimation);
    paths[2].animate({ d: path3 }, duration, firstCustomMinaAnimation);
  }

  function bezier(x1, y1, x2, y2, epsilon) {
    //https://github.com/arian/cubic-bezier
    var curveX = function(t) {
      var v = 1 - t;
      return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
    };

    var curveY = function(t) {
      var v = 1 - t;
      return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
    };

    var derivativeCurveX = function(t) {
      var v = 1 - t;
      return (
        3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2
      );
    };

    return function(t) {
      var x = t,
        t0,
        t1,
        t2,
        x2,
        d2,
        i;

      // First try a few iterations of Newton's method -- normally very fast.
      for (t2 = x, i = 0; i < 8; i++) {
        x2 = curveX(t2) - x;
        if (Math.abs(x2) < epsilon) return curveY(t2);
        d2 = derivativeCurveX(t2);
        if (Math.abs(d2) < 1e-6) break;
        t2 = t2 - x2 / d2;
      }

      (t0 = 0), (t1 = 1), (t2 = x);

      if (t2 < t0) return curveY(t0);
      if (t2 > t1) return curveY(t1);

      // Fallback to the bisection method for reliability.
      while (t0 < t1) {
        x2 = curveX(t2);
        if (Math.abs(x2 - x) < epsilon) return curveY(t2);
        if (x > x2) t0 = t2;
        else t1 = t2;
        t2 = (t1 - t0) * 0.5 + t0;
      }

      // Failure
      return curveY(t2);
    };
  }
});

// кнопка

const LiquidButton = class LiquidButton {
  constructor(svg) {
    const options = svg.dataset;
    this.id = this.constructor.id || (this.constructor.id = 1);
    this.constructor.id++;
    this.xmlns = "http://www.w3.org/2000/svg";
    this.tension = options.tension * 1 || 0.4;
    this.width = options.width * 1 || 200;
    this.height = options.height * 1 || 50;
    this.margin = options.margin || 40;
    this.hoverFactor = options.hoverFactor || -0.1;
    this.gap = options.gap || 5;
    this.debug = options.debug || false;
    this.forceFactor = options.forceFactor || 0.2;
    this.color1 = options.color1 || "#36DFE7";
    this.color2 = options.color2 || "#8F17E1";
    this.color3 = options.color3 || "#BF09E6";
    this.textColor = options.textColor || "#FFFFFF";
    this.text = options.text || "Button";
    this.svg = svg;
    this.layers = [
      {
        points: [],
        viscosity: 0.5,
        mouseForce: 100,
        forceLimit: 2
      },
      {
        points: [],
        viscosity: 0.8,
        mouseForce: 150,
        forceLimit: 3
      }
    ];

    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      layer.viscosity =
        options["layer-" + (layerIndex + 1) + "Viscosity"] * 1 ||
        layer.viscosity;
      layer.mouseForce =
        options["layer-" + (layerIndex + 1) + "MouseForce"] * 1 ||
        layer.mouseForce;
      layer.forceLimit =
        options["layer-" + (layerIndex + 1) + "ForceLimit"] * 1 ||
        layer.forceLimit;
      layer.path = document.createElementNS(this.xmlns, "path");
      this.svg.appendChild(layer.path);
    }
    this.wrapperElement = options.wrapperElement || document.body;
    if (!this.svg.parentElement) {
      this.wrapperElement.append(this.svg);
    }

    this.svgText = document.createElementNS(this.xmlns, "text");
    this.svgText.setAttribute("x", "50%");
    this.svgText.setAttribute("y", "50%");
    this.svgText.setAttribute("dy", ~~(this.height / 8) + "px");
    this.svgText.setAttribute("font-size", ~~(this.height / 3));
    this.svgText.style.fontFamily = "sans-serif";
    this.svgText.setAttribute("text-anchor", "middle");
    this.svgText.setAttribute("pointer-events", "none");
    this.svg.appendChild(this.svgText);

    this.svgDefs = document.createElementNS(this.xmlns, "defs");
    this.svg.appendChild(this.svgDefs);

    this.touches = [];
    this.noise = options.noise || 0;
    document.body.addEventListener("touchstart", this.touchHandler);
    document.body.addEventListener("touchmove", this.touchHandler);
    document.body.addEventListener("touchend", this.clearHandler);
    document.body.addEventListener("touchcancel", this.clearHandler);
    this.svg.addEventListener("mousemove", this.mouseHandler);
    this.svg.addEventListener("mouseout", this.clearHandler);
    this.initOrigins();
    this.animate();
  }

  get mouseHandler() {
    return e => {
      this.touches = [
        {
          x: e.offsetX,
          y: e.offsetY,
          force: 1
        }
      ];
    };
  }

  get touchHandler() {
    return e => {
      this.touches = [];
      const rect = this.svg.getBoundingClientRect();
      for (
        let touchIndex = 0;
        touchIndex < e.changedTouches.length;
        touchIndex++
      ) {
        const touch = e.changedTouches[touchIndex];
        const x = touch.pageX - rect.left;
        const y = touch.pageY - rect.top;
        if (x > 0 && y > 0 && x < this.svgWidth && y < this.svgHeight) {
          this.touches.push({ x, y, force: touch.force || 1 });
        }
      }
      // e.preventDefault(); закоменував бо якась помылка , выдблюкуй якщо що
    };
  }

  get clearHandler() {
    return e => {
      this.touches = [];
    };
  }

  get raf() {
    return (
      this.__raf ||
      (this.__raf = (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          setTimeout(callback, 10);
        }
      ).bind(window))
    );
  }

  distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  update() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = layer.points;
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const point = points[pointIndex];
        const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
        const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
        const d = Math.sqrt(dx * dx + dy * dy);
        const f = d * this.forceFactor;
        point.vx += f * (dx / d || 0);
        point.vy += f * (dy / d || 0);
        for (
          let touchIndex = 0;
          touchIndex < this.touches.length;
          touchIndex++
        ) {
          const touch = this.touches[touchIndex];
          let mouseForce = layer.mouseForce;
          if (
            touch.x > this.margin &&
            touch.x < this.margin + this.width &&
            touch.y > this.margin &&
            touch.y < this.margin + this.height
          ) {
            mouseForce *= -this.hoverFactor;
          }
          const mx = point.x - touch.x;
          const my = point.y - touch.y;
          const md = Math.sqrt(mx * mx + my * my);
          const mf = Math.max(
            -layer.forceLimit,
            Math.min(layer.forceLimit, (mouseForce * touch.force) / md)
          );
          point.vx += mf * (mx / md || 0);
          point.vy += mf * (my / md || 0);
        }
        point.vx *= layer.viscosity;
        point.vy *= layer.viscosity;
        point.x += point.vx;
        point.y += point.vy;
      }
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const prev = points[(pointIndex + points.length - 1) % points.length];
        const point = points[pointIndex];
        const next = points[(pointIndex + points.length + 1) % points.length];
        const dPrev = this.distance(point, prev);
        const dNext = this.distance(point, next);

        const line = {
          x: next.x - prev.x,
          y: next.y - prev.y
        };

        const dLine = Math.sqrt(line.x * line.x + line.y * line.y);

        point.cPrev = {
          x: point.x - (line.x / dLine) * dPrev * this.tension,
          y: point.y - (line.y / dLine) * dPrev * this.tension
        };

        point.cNext = {
          x: point.x + (line.x / dLine) * dNext * this.tension,
          y: point.y + (line.y / dLine) * dNext * this.tension
        };
      }
    }
  }

  animate() {
    this.raf(() => {
      this.update();
      this.draw();
      this.animate();
    });
  }

  get svgWidth() {
    return this.width + this.margin * 2;
  }

  get svgHeight() {
    return this.height + this.margin * 2;
  }

  draw() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      if (layerIndex === 1) {
        if (this.touches.length > 0) {
          while (this.svgDefs.firstChild) {
            this.svgDefs.removeChild(this.svgDefs.firstChild);
          }
          for (
            let touchIndex = 0;
            touchIndex < this.touches.length;
            touchIndex++
          ) {
            const touch = this.touches[touchIndex];
            const gradient = document.createElementNS(
              this.xmlns,
              "radialGradient"
            );
            gradient.id = "liquid-gradient-" + this.id + "-" + touchIndex;
            const start = document.createElementNS(this.xmlns, "stop");
            start.setAttribute("stop-color", this.color3);
            start.setAttribute("offset", "0%");
            const stop = document.createElementNS(this.xmlns, "stop");
            stop.setAttribute("stop-color", this.color2);
            stop.setAttribute("offset", "100%");
            gradient.appendChild(start);
            gradient.appendChild(stop);
            this.svgDefs.appendChild(gradient);
            gradient.setAttribute("cx", touch.x / this.svgWidth);
            gradient.setAttribute("cy", touch.y / this.svgHeight);
            gradient.setAttribute("r", touch.force);
            layer.path.style.fill = "url(#" + gradient.id + ")";
          }
        } else {
          layer.path.style.fill = this.color2;
        }
      } else {
        layer.path.style.fill = this.color1;
      }
      const points = layer.points;
      const commands = [];
      commands.push("M", points[0].x, points[0].y);
      for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
        commands.push(
          "C",
          points[(pointIndex + 0) % points.length].cNext.x,
          points[(pointIndex + 0) % points.length].cNext.y,
          points[(pointIndex + 1) % points.length].cPrev.x,
          points[(pointIndex + 1) % points.length].cPrev.y,
          points[(pointIndex + 1) % points.length].x,
          points[(pointIndex + 1) % points.length].y
        );
      }
      commands.push("Z");
      layer.path.setAttribute("d", commands.join(" "));
    }
    this.svgText.textContent = this.text;
    this.svgText.style.fill = this.textColor;
  }

  createPoint(x, y) {
    return {
      x: x,
      y: y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0
    };
  }

  initOrigins() {
    this.svg.setAttribute("width", this.svgWidth);
    this.svg.setAttribute("height", this.svgHeight);
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = [];
      for (
        let x = ~~(this.height / 2);
        x < this.width - ~~(this.height / 2);
        x += this.gap
      ) {
        points.push(this.createPoint(x + this.margin, this.margin));
      }
      for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
        const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        points.push(
          this.createPoint(
            (Math.sin(angle) * this.height) / 2 +
              this.margin +
              this.width -
              this.height / 2,
            (Math.cos(angle) * this.height) / 2 + this.margin + this.height / 2
          )
        );
      }
      for (
        let x = this.width - ~~(this.height / 2) - 1;
        x >= ~~(this.height / 2);
        x -= this.gap
      ) {
        points.push(
          this.createPoint(x + this.margin, this.margin + this.height)
        );
      }
      for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
        const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        points.push(
          this.createPoint(
            this.height -
              (Math.sin(angle) * this.height) / 2 +
              this.margin -
              this.height / 2,
            (Math.cos(angle) * this.height) / 2 + this.margin + this.height / 2
          )
        );
      }
      layer.points = points;
    }
  }
};

const redraw = () => {
  button.initOrigins();
};

const buttons = document.getElementsByClassName("liquid-button");
for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
  const button = buttons[buttonIndex];
  button.liquidButton = new LiquidButton(button);
}

// const swup = new Swup();

// document.addEventListener("DOMContentLoaded", () => {
// 	// run whatever we need
// 	function init() {
// 		if (document.querySelector('#header-video')) {
// 			// something like new Carousel('#carousel')

// 		}
// 	}

// });

//  let momodaal =

let timelinepanel = document.querySelector('.timeline-panel');
let showprocces = document.querySelector('.show-procces');
showprocces.addEventListener('click', function(){
timelinepanel.style.overflow= 'auto';
})
console.log(showprocces);