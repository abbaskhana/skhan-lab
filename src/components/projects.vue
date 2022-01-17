<template>
  <section>
      <div class="bg-gradient-to-b from-white rounded-2xl mt-1">
                <div class="flex ml-5">
          <p class="my-5">
        <button
          @click="showdata('International_Projects')"
          class="inline-block capitalize px-6 py-3 border-2 text-black  border-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          International Projects  
        </button>
      </p>
      <p class="my-5 ml-5">
        <button
          @click="showdata('Local_Projects')"
          class="inline-block capitalize px-6 py-3 border-2 text-black  border-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample1"
          aria-expanded="false"
          aria-controls="collapseWidthExample1"
        >
          Local Projects  
        </button>
      </p>
      </div>
      <div style="min-height: 120px w-full">
        <div :class="International_Projects" id="collapseWidthExample">
          <div
            class="block px-6 rounded-lg shadow-lg  "
            
          >
            <div class="flex justify-between items-center">
                <div class="">
                    <h1 class="text-2xl py-0.5 font-medium">Sun Yat-Sen University Guangdong China</h1>
                    <p class="text-lg">Currently have collaboration of multi-Projects, such as.</p>
                    <p class="text-md">1)	Covid -19 relevant Projects.</p>
                    <p class="text-md">2)	Phyto-side Project. </p>
                    <p class="text-md">3)	Some Common biological databases.</p>
                </div>
                <div>
                    <img src="@/assets/img/partner/partner2.png" width="180" class="max-w-7xl" alt="">
                </div>
            </div>

            <div class="flex justify-between items-center">
                <div class="">
                    <h1 class="text-2xl py-0.5 font-medium">King Faisal University Riyadh Saudi Aribia </h1>
                    <p class="text-lg">Ongoing Projects</p>
                    <p class="text-md">1)	This study uses hyperaccumulated plants to improve the hydraulic qualities of course-textured sandy desert soil. The goal of this study is to change the features of sandy soil so that it can hold more available water and assist the roots for better plantation. The role of hyperaccumulated plants in this study is to act as a bonding agent and carbon source, in addition to contributing to carbon sequestration for climate change mitigation. We hope that our findings may aid in future initiatives for converting deserts into farming lands.</p>
                    <p class="text-md">2)	Biodegradation of carbon-relevant materials like plastic using deferent micro-organisms.</p>
                    
                </div>
                <div>
                    <img src="@/assets/img/partner/partner4.png" width="180" class="max-w-7xl" alt="">
                </div>
            </div>
            <div class="flex justify-between items-center my-2 ">
                <div class="">
                    <h1 class="text-2xl py-0.5 font-medium">Kapodistrian University of Athens, Greece </h1>
                    <p class="text-lg">Project in Collaboration</p>
                    <p class="text-md mb-3">Cancer related Projects such as CRDB: The advancement of cancer research has been facilitated through freely available cancer databases and tools. The age of genomics and big data has given rise to the need for cooperation and data sharing in order to make efficient use of this new information. The advancement of modern genomic technology such as microarrays, proteomics, transcriptomics, and gene sequencing has resulted in the generation of a huge amount of cancer data, therefore the first challenge of these multi omics cancer data was the design and use of electronic databases to store and manage the stormy amount of knowledge. </p>
                    
                </div>
                <div>
                    <img src="@/assets/img/partner/partner3.png" width="180" class="max-w-7xl" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>

      
      <div style="min-height: 120px w-full">
        <div :class="Local_Projects" id="collapseWidthExample1">
          <div
            class="block p-6 rounded-lg shadow-lg  "
            
          >
            <div class="flex justify-between items-center">
                <div class="">
                    <h1 class="text-3xl py-2">Local Projects</h1>
                    <p class="text-lg">We investigated the number of deaf people in Takht Bhai, Distt. Mardan, Khyber Pakhtunkhwakhua Pakistan which are many times greater than in other areas, we are attempting to control and communicate with deaf people's families under government acts, as well as manage CRISPER-Cas9 technological for future generations. For stopping this flood, we need a huge fund or international collaborations for which we are trying to manage.</p>
                </div>
                <div>
                    <img src="@/assets/img/partner/local-partner1.png" width="180" class="max-w-7xl" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
    data(){
      return{
        International_Projects:"collapse-vertical collapse show",
        Local_Projects:"collapse-vertical collapse",
      }
    },
    methods:{
      showdata(name){

        if(name=="International_Projects"){
          this.International_Projects="collapse-vertical collapse show"
        this.Local_Projects="collapse-vertical collapse"
        }
        if(name=="Local_Projects"){
          this.International_Projects="collapse-vertical collapse"
        this.Local_Projects="collapse-vertical collapse show"
        }
      }
    }
}
</script>

<style>

</style>