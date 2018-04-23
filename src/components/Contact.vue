<template>
<div id="contact">
  <h1>Contact</h1>
  <form class="panel" method="POST" action="https://formspree.io/team@hakron.io">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Foobana Bara"
        autocomplete="name">
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="thefoo@yahoo.com"
        autocomplete="email"
        required>
      <label for="message">Message</label>
      <textarea id="message" required name="message" placeholder="I just wanted to say you guys are great"></textarea>
    <input type="submit" value="Send" />
  </form>
</div>
</template>


<style>
form {
  max-width: 20em;
  margin: 0 auto;
  padding: 1em;
}

#contact h1 {
  text-align: center;
  margin: 0.5em;
}

#message {
  width: 100%;
  height: 5em;
}

input,
textarea {
  display: block;
  width: 100%;
  margin-bottom: 1em;
  font-size: 16px;
}

input[type="submit"] {
  width: 30%;
  margin: 0 auto;
}
</style>
