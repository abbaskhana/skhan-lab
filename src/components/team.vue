<template>
  <section>
      <div class="bg-gradient-to-b from-white rounded-2xl mt-1">
        <h1 class="pl-5 pt-7 font-bold">Kindly click a button to find out more about</h1>
                <div class="flex ml-5 flex-wrap">
          <p class="my-2">
        <button
          @click="showdata('Principal_Investigator')"
          class="inline-block capitalize px-6 py-3 border-2 text-black  border-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Principal Investigator  
        </button>
      </p>
      <p class="my-2 ml-3">
        <button
        @click="showdata('Lab_Assistant')"
          class="inline-block capitalize px-6 py-3 border-2 text-black font-medium shadow-md border-black text-sm leading-tight uppercase rounded  hover:bg-blue-300 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample1"
          aria-expanded="false"
          aria-controls="collapseWidthExample1"
        >
          Lab Assistant 
        </button>
      </p>
      <p class="my-2 ml-3">
        <button
        @click="showdata('Current_Member')"
          class="inline-block capitalize px-6 py-3 border-2 border-black text-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample2"
          aria-expanded="false"
          aria-controls="collapseWidthExample2"
        >
          Current Member 
        </button>
      </p>
      <p class="my-2 ml-3">
        <button
        @click="showdata('Alumni')"
          class="inline-block capitalize px-4 border-black py-3 border-2 text-black font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample3"
          aria-expanded="false"
          aria-controls="collapseWidthExample3"
        >
          Alumni 
        </button>
      </p>
      </div>
      <div style="min-height: 120px w-full">
        <div :class="Principal_Investigator" id="collapseWidthExample">
          <div
            class="block p-6 rounded-lg shadow-lg  "
            
          >
            <div class="">
                <div class="">
                  <div class="grid  sm:grid-cols-1 ">
                    <div class="flex justify-end">
                    <img src="@/assets/img/team/shahid.png" width="180" class="absolute  max-w-7xl  rounded-full w-48" alt="">
                </div>
                  </div>
                  
                   <div class="w-4/5">
                  <h1 class="text-3xl py-2 font-bold">Dr. Shahid Ullah</h1>
                  <p class="text-xl mt-3 font-bold">Principal investigator</p>
                  <p class="text-md">
                    S Khan lab Mardan khyber pakhtunkhwa, Pakistan Since
                    Feb.2020- currently
                  </p>
                  <p class="text-2xl py-4 font-bold">Education</p>
                  <p class="text-xl  font-bold">
                    Doctorate of philosophy (PhD)
                  </p>
                  <p class="text-md">
                    Huazhong University of Science and Technology
                    (HUST).2013-June 2016
                  </p>
                  <p class="text-xl mt-5 font-bold">
                    Master of Science in Biochemistry
                  </p>
                  <p class="text-md">
                    Abdul Wali Khan University Mardan, khyber Pakhtunkhwa,
                    Pakistan, 2009-2012
                  </p>
                  <p class="text-xl mt-5 font-bold">Bachelor of Science</p>
                  <p class="text-md">
                    University of Malakand and Khyber Pakhtuankhwa, Pakistan
                  </p>
                  <p class="text-xl mt-5 font-bold">
                    Bachelor of Education (B.Ed.)
                  </p>
                  <p class="text-md">
                    University of Malakand and Khyber Pakhtuankhwa, Pakistan
                  </p>

                  <p class="text-xl mt-5 font-bold">Research Interests</p>
                  <p class="text-md">
                    • Computational study of Post translation modification of
                    Protein (PTMs)
                  </p>
                  <p class="text-md">
                    • Drug discovery and development, Rational drug designing
                    (Computer-aided drug design, structure-based drug design
                  </p>
                  <p class="text-md">
                    • Development of functional nanomaterials including carbon
                    nanomaterials, upconversion nanoparticles, organic
                    nanomaterials, protein-based carriers, and other
                    multifunctional composite nanostructures, for the
                    exploration of novel disease diagnostic and cancer
                    therapeutic approaches.
                  </p>
                </div>

                    
                    <p class="text-2xl mt-5 mt-3 font-bold">Awards & Scholarships</p>
                    <p class="text-md">Appointed as a YOUNG SCIENTIST in Toronto University Canada.</p>
                    <p class="text-md">Six months Research collaboration in OXFORD University England.</p>
                    <p class="text-md"><a class="text-blue-600" href="https://lupinepublishers.com/complementary-alternative-medicine-journal/editorial-committee.php#">https://lupinepublishers.com/complementary-alternative-medicine-journal/editorial-committee.php#</a></p>
                    <p class="text-md">Editor of journals Nanomedicine and nanotechnology</p>
                    <p class="text-md"><a class="text-blue-600" href="https://medwinpublishers.com/NNOA/editorial-board.php">(https://medwinpublishers.com/NNOA/editorial-board.php)</a></p>
                    <p class="text-md">Editor of Acta Scientific Journals & (international open library)</p>
                    <p class="text-md"><a class="text-blue-600" href="https://www.actascientific.com/ASOR-EB.php">(https://www.actascientific.com/ASOR-EB.php)</a></p>
                    <p class="text-md">Editor of Salveregin Science Group Journals.v</p>
                    <p class="text-md"><a class="text-blue-600" href="https://www.salveregin.com/pharmacology-international-conferences/porganising-commitee/">(https://www.salveregin.com/pharmacology-international-conferences/porganising-commitee/)</a></p>
                    <p class="text-md">Committee member of Bacteriology, Virology and Infectious Diseases, Tokyo Japan.</p>
                    <p class="text-md"><a class="text-blue-600" href="https://conferenceera.com/bacteriology-virology-infectious-diseases-conference/program-committee">(https://conferenceera.com/bacteriology-virology-infectious-diseases-conference/program-committee)</a></p>
                    <p class="text-md">Member of American Society for Biochemistry and Molecular Biology (ASBMS)</p>
                    <p class="text-md"><a class="text-blue-600" href="https://society.asbmb.org">https://society.asbmb.org</a></p>
                    <p class="text-md">PhD scholarship awarded by Chinese government scholarship program (CSC).</p>
                    <p class="text-md"><a class="text-blue-600" href="http://iso.hust.edu.cn/info/1073/1235.htm">(http://iso.hust.edu.cn/info/1073/1235.htm)</a></p>
                    <p class="text-md">Got excellent student award among 60 thousand international students at HUST</p>
                    <p class="text-md"><a class="text-blue-600" href="http://iso.hust.edu.cn/info/1080/1332.htm">(http://iso.hust.edu.cn/info/1080/1332.htm)</a></p>
                    <p class="text-md">Master Scholarship awarded by Italian government</p>
                    <p class="text-md">Bachelor scholarship from Pakistani government</p>
                    <p class="text-md">Six month computer certificate scholarship awarded by Pakistani government</p>

                </div>
            </div>
          </div>
        </div>
      </div>

      
      <div style="min-height: 120px w-full">
        <div :class="Lab_Assistant" id="collapseWidthExample1">
          <div
            class="block px-6 rounded-lg shadow-lg h-screen "
            
          >
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl py-2 font-bold">Muhammad Tariq</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Lab Assistant</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">BS in Chemistry</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Collection of phospho datasites</p>
                </div>
                <div>
                    <img src="@/assets/img/team/tariq.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>

      <div style="min-height: 120px w-full">
        <div :class="Current_Member" id="collapseWidthExample2">
          <div
            class="block px-6 rounded-lg shadow-lg  "
            
          >
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Mr. Waheed Sindhani</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">WEB DEVELOPER</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">Master</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Artificial Intelegence</p>
                </div>
                <div>
                    <img src="@/assets/img/team/waheed.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
  <hr class="my-5 border-dashed border-gray-300">
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Mr.Muhammad Ijaz</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">Bachelor</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Computational Study of PTMS</p>
                </div>
                <div>
                    <img src="@/assets/img/team/ijaz.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
<hr class="my-5 border-dashed border-gray-300">
            <div class="flex justify-between items-center  flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">MR. Gulzar Ahmad</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">Bachelor</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Computational Study of Phosphorylation</p>
                </div>
                <div>
                    <img src="@/assets/img/team/gulzar.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
            <hr class="my-5 border-dashed border-gray-300">
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Mr. Farhan Ullah</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">PhD Biochemistry in Progress</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Computational study of phosphorylation related enzyme and there classification</p>
                </div>
                <div>
                    <img src="@/assets/img/team/farhan.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
            <hr class="my-2 border-dashed border-gray-300">
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Ms. W-Rahman</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">Ph.D Chemistry in progress</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Development of functional nanomaterials</p>
                </div>
                <div>
                    <img src="@/assets/img/team/female.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
            <hr class="my-5 border-dashed border-gray-300">
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Mr. Syed Luqman Ali</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">BS in Biochemistry</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Collection of Hyperaccumulated data & Plant Genomics</p>
                </div>
                <div>
                    <img src="@/assets/img/team/luqman.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
            <hr class="my-5 border-dashed border-gray-300">
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Mr. Muhammad Amir Ali</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">BS in Biochemistry</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Biodegradation of plastic</p>
                </div>
                <div>
                    <img src="@/assets/img/team/amir.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>

      <div style="min-height: 120px w-full">
        <div :class="Alumni" id="collapseWidthExample3">
          <div
            class="block p-6 rounded-lg shadow-lg  "
            
          >
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Dr.Sana Farooq Ahmed</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">PhD</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Prevelance of Bacterial Pathogens Causing Nosocomial</p>
                </div>
                <div>
                    <img src="@/assets/img/team/female.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
<hr class="my-5 border-dashed border-gray-300">
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Dr. Faizah Altaf</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">PhD</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Polymers, composites Environment, Fuel Cell, Energy</p>
                </div>
                <div>
                    <img src="@/assets/img/team/drfaizapng.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
                </div>
            </div>
<hr class="my-5 border-dashed border-gray-300">
            <div class="flex justify-between items-center flex-wrap">
                <div class="">
                    <h1 class="text-2xl font-bold">Mr. Hazrat Usman</h1>
                    <p class="text-lg font-bold">Position</p>
                    <p class="text-md">Researcher</p>
                    <p class="text-lg font-bold">Qualification</p>
                    <p class="text-md">Master</p>
                    <p class="text-lg font-bold">Research Area</p>
                    <p class="text-md">Data mining</p>
                </div>
                <div>
                    <img src="@/assets/img/team/usman.png" width="180" class="max-w-7xl rounded-full w-48" alt="">
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
        Principal_Investigator:"collapse-vertical collapse show",
        Lab_Assistant:"collapse-vertical collapse",
        Current_Member:"collapse-vertical collapse",
        Alumni:"collapse-vertical collapse",
      }
    },
    methods:{
      showdata(name){

        if(name=="Principal_Investigator"){
          this.Principal_Investigator="collapse-vertical collapse show"
        this.Lab_Assistant="collapse-vertical collapse"
        this.Current_Member="collapse-vertical collapse"
        this.Alumni="collapse-vertical collapse"
        }
        if(name=="Lab_Assistant"){
          this.Principal_Investigator="collapse-vertical collapse"
        this.Lab_Assistant="collapse-vertical collapse show"
        this.Current_Member="collapse-vertical collapse"
        this.Alumni="collapse-vertical collapse"
        }
        if(name=="Current_Member"){
          this.Principal_Investigator="collapse-vertical collapse"
        this.Lab_Assistant="collapse-vertical collapse"
        this.Current_Member="collapse-vertical collapse show"
        this.Alumni="collapse-vertical collapse"
        }
        if(name=="Alumni"){
          this.Principal_Investigator="collapse-vertical collapse"
        this.Lab_Assistant="collapse-vertical collapse"
        this.Current_Member="collapse-vertical collapse"
        this.Alumni="collapse-vertical collapse show"
        }
      }
    }
}
</script>

<style>
hr {
    border-top-width: 2px;
}
</style>