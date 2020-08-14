<template>

<div class="main-content">
  <div class="concept concept-five">
    <h1 class="word"><span class="char">C</span><span class="char">O</span><span class="char">V</span><span class="char">I</span><span class="char">D</span><span class="char">1</span><span class="char">9</span></h1>
  </div>
</div>

  
</template>

<style scoped>


.main-content {
  text-align: center;
  text-transform: uppercase;
  position: relative;
  height: 100vh;
}

.hover,
.word,
h1 {
  cursor: pointer;
}

h1 {
  position: relative;
  color: #fff;
  font: 900 60px Montserrat;
  text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.concept {
  position: relative;
  padding: 5em;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: center;
}
.concept-five {
  background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/mountains.jpg) center center/cover;
  display: flex;
  align-items: center;
}
.concept-five .word {
  width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
}
.concept-five .word:hover .char:nth-child(even) {
  top: 20px;
}
.concept-five .word:hover .char:nth-child(odd) {
  top: -20px;
}
.concept-five .char {
  flex: 1;
  position: relative;
  display: inline-block;
  top: 0;
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
</style>