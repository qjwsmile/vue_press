<template>
  <div class="hero">
    <p class="description">
      
    </p>
  </div>
</template>
 
<script>
export default {
  name: "",
  data() {
    return {
      // 你现在的努力，辛苦，压力，承受的一切，都是为了攒够能力和本钱，去做自己更喜欢的事，去为自己争取选择的权利。
      strs: [
        {
          title: "你现在的努力、辛苦、压力",
          // 停顿的位置
          stop: [7,10],
          // stop: [4, 13] // 可以是数组，多几个位置停顿
        },
        {
          title: "承受的一切",
        },
        {
          title: "都是为了攒够能力和本钱",
        },
        {
          title: "去做自己更喜欢的事",
        },
        {
          title: "去为自己争取选择的权利",
        },
        {
          title: "加油！！！",
        }
      ],
      // 当前进行到第几行
      currentIndex: 0,
      spans: null,
      el: null,
    };
  },
  mounted() {
    this.el = document.querySelector(".hero .description");

    if (!this.el) {
      let that = this;
      const timer = setInterval(() => {
        if (this.el) {
          timer && clearInterval(timer);
          that.init();
        }
        this.el = document.querySelector(".hero .description");
      }, 100);
    } else {
      this.init();
    }
  },
  methods: {
    init() {
      if (this.currentIndex == this.strs.length) {
        this.currentIndex = 0;
      }
      this.el.innerHTML = this.strs[this.currentIndex].title;
      this.el.innerHTML = this.el.textContent.replace(/\S/g, "<span>$&</span>");

      let delay = 0;
      this.spans = [...document.querySelectorAll(".hero .description span")];
      this.spans.forEach((span, i) => {
        delay += 0.1;
        if (this.strs[this.currentIndex].hasOwnProperty("stop")) {
          if (this.strs[this.currentIndex].stop instanceof Array) {
            if (this.strs[this.currentIndex].stop.includes(i)) {
              delay += 0.3;
            }
          } else {
            if (this.strs[this.currentIndex].stop == i) {
              delay += 0.3;
            }
          }
        }

        span.style.setProperty("--delay", `${delay}s`);
      });

      this.el.addEventListener("animationend", this.lastEnd);
    },

    lastEnd(e) {
      if (
        e.target == document.querySelector(".hero .description span:last-child")
      ) {
        this.el.classList.add("ended");
        setTimeout(() => {
          this.el.removeEventListener("animationend", this.lastEnd);
          let delay = 0;

          this.spans.reverse().forEach((span, i) => {
            this.el.classList.remove("ended");
            span.style.width = "2ch";
            span.style.animation = "0.1s text-out ease-in-out forwards";
            delay += 0.05;

            // 回去停顿功能
            // if (this.strs[this.currentIndex].hasOwnProperty("stop")) {
            //   if (this.strs[this.currentIndex].stop instanceof Array) {
            //     if (
            //       this.strs[this.currentIndex].stop.includes(
            //         this.spans.length - i
            //       )
            //     ) {
            //       delay += 0.3;
            //     }
            //   } else {
            //     if (
            //       this.strs[this.currentIndex].stop ==
            //       this.spans.length - i
            //     ) {
            //       delay += 0.3;
            //     }
            //   }
            // }

            span.style.animationDelay = `${delay}s`;
          });
          this.el.addEventListener("animationend", this.firstEnd);
        }, 2000);
      }
    },

    firstEnd(e) {
      if (
        e.target ==
        document.querySelector(".hero .description span:first-child")
      ) {
        this.spans.forEach((v) => {
          v.remove();
        });
        this.el.removeEventListener("animationend", this.firstEnd);
        this.currentIndex++;
        this.init();
      }
    },
  },
};
</script>
 
<style >
.hero .description {
  margin: 0;
  padding: 0;
  /* 必须是等宽字体 */
  /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
  font-family: monospace;
  position: relative;
  width: fit-content;
  height: 3.2rem;
}

.hero .description::after {
  content: "";
  display: inline;
  position: absolute;
  width: 0.2rem;
  height: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgb(238, 103, 92);
  border-radius: 2px;
  right: -0.6rem;
}

.hero .description.ended::after {
  animation: 1.1s cursor steps(2, jump-none) infinite;
}

.hero .description span {
  --delay: 10s;
  display: inline-block;
  overflow: hidden;
  width: 0ch;
  animation: 0.1s text-in ease-in-out forwards;
  animation-delay: var(--delay);
  font-weight: 600;
  font-size: 2rem;
  color: rgb(238, 103, 92);
}

@media screen and (max-width: 750px) {
    .hero .description span{
      font-size: 0.8rem;
    }
    .hero .description {
      height: 1.2rem;
    }
    .hero .description::after {
       height: 1rem;
    }
}

@keyframes text-in {
  from {
    width: 0ch;
  }

  to {
    /* 必须是等宽字体 */
    /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
    /* 中文2ch，英文1ch */
    width: 2ch;
  }
}

@keyframes text-out {
  from {
    /* 中文2ch，英文1ch */
    width: 2ch;
  }

  to {
    width: 0ch;
  }
}

@keyframes cursor {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
 
        Copied!
    
    