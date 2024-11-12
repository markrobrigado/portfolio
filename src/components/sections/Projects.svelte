<script>
  import { base } from "$app/paths";
  const projects = [
    {
      title: "covbayes",
      description: "an android app that checks the likelihood of covid-19",
      link: "https://github.com/markrobrigado/covid-diagnosis-app",
    },
    {
      title: "soterra",
      description: "a blockchain application for land registration",
      link: "https://github.com/markrobrigado/blockchain-land-registration",
    },
    {
      title: "codex lang",
      description: "a c-like, general purpose, and procedural language",
      link: "https://github.com/markrobrigado/codex-lang",
    },
    {
      title: "passlock",
      description: "a desktop password manager",
      link: "https://github.com/markrobrigado/password-manager",
    },
  ];
</script>

<div
  class="flex flex-col h-auto min-h-screen items-center justify-center p-8 bg-slate-300 space-y-12 md:space-y-24"
>
  <div class="flex flex-col items-center">
    <img src={`${base}/eyes.png`} alt="animated waving hand emoji" width="64" />
    <span class="font-extrabold text-xl md:text-3xl text-stone-900"
      >take a look at these</span
    >
  </div>
  <div class="flex flex-col space-y-8">
    {#each projects as project}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="font-black text-2xl md:text-5xl text-stone-900 pb-8 border-b-4 border-red-600"
        >{project.description} &#91;{project.title}&#93;</a
      >
    {/each}
  </div>
  <a
    href="https://github.com/markrobrigado?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    class="font-extrabold text-xl md:text-3xl text-stone-900"
    >and a few more on &#91;github&#93;</a
  >
</div>
