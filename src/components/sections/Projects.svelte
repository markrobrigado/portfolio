<script>
  let projects = [
    {
      title: "covbayes",
      description: "an android app that checks the likelihood of covid-19",
      link: "https://github.com/markrobrigado/covid-diagnosis-app",
    },
    {
      title: "soterra",
      description: "a decentralized application for land registration",
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
  class="flex flex-col h-auto min-h-screen items-center justify-center p-8 bg-stone-400 space-y-12 md:space-y-24"
>
  <span class="font-extrabold text-xl md:text-3xl text-stone-900"
    >i made these👇</span
  >
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
    >and a few more &#91;github&#93;</a
  >
</div>
