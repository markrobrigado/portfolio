<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import "../app.css";
</script>

<div class="w-full h-screen flex flex-col p-8">
  <Header />
  <div class="flex-grow flex items-center justify-center">
    <slot /> <!-- Placeholder for page-specific content -->
  </div>
  <Footer />
</div>