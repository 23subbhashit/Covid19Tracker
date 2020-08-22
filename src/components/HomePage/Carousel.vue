<template>
  <div class="m-3">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="20"
      img-height="20"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
      <b-carousel-slide
        img-blank-color="#abddbb"
        caption="Preventions"
        text="Clean your hands often. Use soap and water, or an alcohol-based hand rub."
        img-src="https://images.unsplash.com/photo-1584582868981-38dbd5d1a86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      >
      </b-carousel-slide>
      <b-carousel-slide
        img-blank-color="#abddbb"
        caption="First slide"
        text="Maintain a safe distance from anyone who is coughing or sneezing."
        img-src="https://images.unsplash.com/photo-1584582868981-38dbd5d1a86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      >
      </b-carousel-slide>
      <b-carousel-slide
        img-blank-color="#abddbb"
        caption="First slide"
        text="Wear a mask when physical distancing is not possible."
        img-src="https://images.unsplash.com/photo-1584582868981-38dbd5d1a86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      >
      </b-carousel-slide>
    </b-carousel>

    
  </div>
</template>

