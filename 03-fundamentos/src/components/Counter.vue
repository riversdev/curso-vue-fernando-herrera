<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }}<sup>2</sup> = {{ getSquareValue() }}</p>
  <p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{ counter }}</p>

  <div>
    <button @click="increment" data-testid="incrementBtn">+1</button>
    <button @click="decrement" data-testid="decrementBtn">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      // required: true,
      default: 100,
      validator(value) {
        return value >= 0;
      },
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      // console.log("getSquareValue");
      return this.counter * this.counter;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  computed: {
    squareCounter() {
      // console.log("squareCounter");
      return this.counter * this.counter;
    },
    customTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
}

button:hover {
  background-color: #5aa67b;
}
</style>