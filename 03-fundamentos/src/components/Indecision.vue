<template>
  <img v-if="img" :src="img" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input type="text" placeholder="Hazme una pregunta" v-model="question" />
    <p>Recuerda terminar con un signo de interrogacion (?)</p>
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ customizedAnswer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: null,
      img: "",
      isValidQuestion: false,
    };
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = "Pensando...";
        this.isValidQuestion = false;

        const response = await fetch("https://yesno.wtf/api");
        const { answer, image } = await response.json();

        this.answer = answer;
        this.img = image;
        this.isValidQuestion = true;
      } catch (error) {
        console.log(error);
        this.answer = "No se pudo cargar del API";
        this.img = null;
      }
    },
  },
  computed: {
    customizedAnswer() {
      const responses = {
        yes: "Si",
        no: "No",
        maybe: "Talvez",
      };

      return responses[this.answer];
    },
  },
  watch: {
    question(value, oldValue) {
      console.log({ value });

      if (!value.includes("?")) return;

      this.getAnswer();
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
  text-align: center;
  margin-top: 10vh;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>