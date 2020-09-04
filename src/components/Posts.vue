<template>
  <div class="div">
    <div class="input">
      <textarea
        v-model="message"
        @input="assertCharLength()"
        placeholder="Your thoughts go here"
        v-on:keyup.enter="addItem(message)"
      ></textarea>
    </div>

    <div class="display">
      <h2 v-for="(thought, n) in thoughts" v-bind:title="thought.data" v-bind:key="n">
        {{thought.data}}
        <button id="removeBtn" @click="deleteItem(n)">delete thought</button>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data: function () {
    return {
      name: "none",
      maxCharacters: 40,
      message: "",
      thoughts: [],
    };
  },
  methods: {
    addItem(index) {
      this.thoughts.push({ data: index });
    },
    deleteItem(index) {
      if (confirm("are you sure?")) {
        this.thoughts.splice(index, 1);
      }
    },
    assertCharLength() {
      if (this.message.length >= this.maxCharacters) {
        this.message = this.message.substring(0, this.maxCharacters);
      }
    },
  },
};
</script>

<style>
textarea {
  resize: none;
  width: 50rem;
  height: 2rem;
  border: 40rem;
  border-bottom: 0.1rem solid red;
}

.display {
  margin: 2px;
  background-color: #f5d6d6;
}
h2 {
  border-bottom: 0.0002px rgb(48, 47, 47) dotted;
}
.img {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
}

#removeBtn {
  float: right;
}
</style>