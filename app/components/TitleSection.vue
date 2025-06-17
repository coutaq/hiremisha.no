<template>
<section class="col-span-full flex flex-col md:flex-row gap-4 items-center md:items-start md:justify-center md:gap-8">
    <div>
        <NuxtImg src="../../images/me.jpg" alt="A nice picture of me." width="340" height="340" :placeholder="[340, 340, 50, 5]" quality="80" ></NuxtImg>
    </div>
    <div class=" flex flex-col gap-1">
        <h1 class="text-3xl md:text-4xl font-light">
            Mykhailo "Misha" Melikov
        </h1>
        <h2 class="font-light text-xl">I make things on my computer</h2>
        <ul class="list-disc text-sm mx-3">
            <li>
               Bachelors in Computer Science
            </li>
            <li>
               5+ years of experience
            </li>
            <li>
               Sometimes okay at design
            </li>
        </ul>
    </div>
     
</section>

</template>