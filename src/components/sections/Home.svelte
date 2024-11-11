<script>
  const string = "HELLO";
</script>

<div
  class="relative flex flex-col justify-center overflow-hidden h-auto min-h-screen"
>
  <div class="absolute">
    <div class="flex space-x-0.5 overflow-hidden">
      <div class="flex space-x-0.5 animate-loop-scroll">
        {#each Array(5) as _}
          <span
            class="text-[256px] leading-[0.85] font-black text-fill-transparent"
            >{string}</span
          >
        {/each}
      </div>

      <div class="flex space-x-0.5 animate-loop-scroll" aria-hidden="true">
        {#each Array(5) as _}
          <span
            class="text-[256px] leading-[0.85] font-black text-fill-transparent"
            >{string}</span
          >
        {/each}
      </div>
    </div>

    <div class="flex space-x-0.5 overflow-hidden">
      <div class="flex space-x-0.5 animate-loop-scroll-reverse">
        {#each Array(5) as _}
          <span
            class="text-[256px] leading-[0.85] font-black text-fill-transparent"
            >{string}</span
          >
        {/each}
      </div>
      <div
        class="flex space-x-0.5 animate-loop-scroll-reverse"
        aria-hidden="true"
      >
        {#each Array(5) as _}
          <span
            class="text-[256px] leading-[0.85] font-black text-fill-transparent"
            >{string}</span
          >
        {/each}
      </div>
    </div>

    <div class="flex space-x-0.5 overflow-hidden">
      <div class="flex space-x-0.5 animate-loop-scroll">
        {#each Array(5) as _}
          <span
            class="text-[256px] leading-[0.85] font-black text-fill-transparent"
            >{string}</span
          >
        {/each}
      </div>
      <div class="flex space-x-0.5 animate-loop-scroll" aria-hidden="true">
        {#each Array(5) as _}
          <span
            class="text-[256px] leading-[0.85] font-black text-fill-transparent"
            >{string}</span
          >
        {/each}
      </div>
    </div>
  </div>
  <div class="relative flex justify-center">
    <a href="#about" class="text-[256px]">👋</a>
  </div>
</div>
