<template>
    <h1 ref="h1">
    </h1>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      strs : [
        {
          title: "没有梦想，和咸鱼有什么区别",
          stop: 5,
        },
        {
          title: "没有什么能够顾阻你,前进的步伐",
          stop: 10,
          // stop: [4, 13]
        },
      ],
      currentIndex : 0,
      h1 :null,
      spans : null
    };
  },
  mounted() {
    this.h1 = this.$refs.h1
    this.init();
  },
  methods: {
     init() {
      if (this.currentIndex == this.strs.length) {
        this.currentIndex = 0;
      }
      this.h1.innerHTML = this.strs[this.currentIndex].title;
      this.h1.innerHTML = this.h1.textContent.replace(/\S/g, "<span>$&</span>");

      let delay = 0;
      this.spans = [...document.querySelectorAll("span")];
      this.spans.forEach((span, i) => {
        delay += 0.1;
        if (this.strs[this.currentIndex].stop instanceof Array) {
          if (this.strs[this.currentIndex].stop.includes(i)) {
            delay += 0.3;
          }
        } else {
          if (this.strs[this.currentIndex].stop == i) {
            delay += 0.3;
          }
        }

        span.style.setProperty("--delay", `${delay}s`);
      });

      this.h1.addEventListener("animationend", this.lastEnd);
    },
    astEnd(e) {
      if (e.target == document.querySelector("h1 span:last-child")) {
        this.h1.classList.add("ended");
        setTimeout(() => {
          this.h1.removeEventListener("animationend", this.lastEnd);
          let delay = 0;

          spans.reverse().forEach((span, i) => {
            this.h1.classList.remove("ended");
            span.style.width = "2ch";
            span.style.animation = "0.1s text-out ease-in-out forwards";
            delay += 0.05;
            // 回去停顿功能
            // if (strs[currentIndex].stop instanceof Array) {
            //   if (strs[currentIndex].stop.includes(spans.length - i)) {
            //     delay += 0.3
            //   }
            // } else {
            //   if (strs[currentIndex].stop == spans.length - i) {
            //     delay += 0.3
            //   }
            // }
            span.style.animationDelay = `${delay}s`;
          });
          h1.addEventListener("animationend", this.firstEnd);
        }, 2000);
      }
    },
    firstEnd(e) {
      if (e.target == document.querySelector("h1 span:first-child")) {
        spans.forEach((item) => {
          item.remove();
        });
        this.h1.removeEventListener("animationend", this.firstEnd);
        currentIndex++;
        // h1.classList.add('ended')
        // h1.classList.remove('ended')
        init();
      }
    }
  },
};
</script>
    
<style  >
  h1 {
    margin: 0;
    padding: 0;
    /* 必须是等宽字体 */
    font-family: monospace;
    /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
    /* width: 1ch; */
    position: relative;
    /* overflow: hidden; */
    /* animation: 1s typing forwards steps(13); */
  }

  h1::after {
    content: "";
    display: inline;
    position: absolute;
    width: 5px;
    height: 2ch;
    background-color: #000;
    border-radius: 2px;
    right: -0.5ch;
  }

  h1.ended::after {
    animation: 1.1s cursor steps(2, jump-none) infinite;
  }

  h1 span {
    --delay: 10s;
    display: inline-block;
    overflow: hidden;
    width: 0ch;
    animation: 0.1s text-in ease-in-out forwards;
    /* animation: 0.1s text-out ease-in-out forwards; */
    animation-delay: var(--delay);
  }

  @keyframes text-in {
    from {
      width: 0ch;
    }

    to {
      width: 2ch;
    }
  }

  @keyframes text-out {
    from {
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
    
