<script>
  import Home from "./sections/Home.svelte";
  import About from "./sections/About.svelte";
  import Contact from "./sections/Contact.svelte";
  import Projects from "./sections/Projects.svelte";
</script>

<div class="flex flex-col">
  <section id="home">
    <Home />
  </section>

  <section id="about">
    <About />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <Contact />
  </section>
</div>
