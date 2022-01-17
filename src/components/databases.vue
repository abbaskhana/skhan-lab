<template>
  <section>
    <div class="overflow-x-hidden">
      <h1
        class="lg:text-3xl md:text-lg pl-5 bg-blue-400 text-left rounded text-white py-5 font-medium"
      >
        Welcome to DBHR
      </h1>
      <p class="text-justify py-5 pl-5 text-gray-600">
        The biological databases are libraries of life sciences information,
        provides access to genomic data,(Wheeler, Church et al., 2002) analysis
        of genetic diseases, genetic genealogy or genetic fingerprinting for
        criminology (Ulrich-Merzenich, Panek et al. 2009), physical, chemical
        and biological information on sequence, domain structure, function,
        three dimensional structure and protein-protein interactions (Cho, Park
        et al. 2002), relationships between medical conditions, symptoms, and
        medications (Rebhan, Chalifa-Caspi et al. 1997), and information on cell
        signaling pathways (Bauer‐Mehren, Furlong et al. 2009), is the great
        contribution by the scientific community. We are therefore bringing
        together a set of human-related database that are commonly used and
        currently available. As database classification based on data type is
        insightful, we allocate one major category to each database, although a
        single database can lead to multiple categories. In what follows, the
        emphasis is on databases classified as
        <span class="text-red-500 font-bold">DNA Database</span>,
        <span class="text-red-500 font-bold">RNA Database</span>,
        <span class="text-red-500 font-bold">Protein Database</span>,
        <span class="text-red-500 font-bold">Expression Database</span>,
        <span class="text-red-500 font-bold">Pathway Database</span> and
        <span class="text-red-500 font-bold">Disease</span>
        Database. The (DBHR) can be explored in three ways, i.e. it can be
        searched either by clicking on the name or the picture or by entering
        the name of the database in the search bar above.
      </p>
      <div class="flex">
        <div class="md:px-5 lg:px-10">
          <button
            type="button"
            class="block my-3 w-full lg:px-12 md:px-7 py-4 bg-blue-500 text-white font-medium md:text-sm lg:text-lg rounded-full leading-snug uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            DNA
          </button>
          <button
            type="button"
            class="block my-3 w-full lg:px-12 md:px-7 py-4 bg-blue-500 text-white font-medium md:text-sm lg:text-lg rounded-full leading-snug uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            RNA
          </button>
          <button
            type="button"
            class="block my-3 w-full lg:px-12 md:px-7 py-4 bg-blue-500 text-white font-medium md:text-sm lg:text-lg rounded-full leading-snug uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Protein
          </button>
          <button
            type="button"
            class="block my-3 w-full lg:px-12 md:px-7 py-4 bg-blue-500 text-white font-medium md:text-sm lg:text-lg rounded-full leading-snug uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Expression
          </button>
          <button
            type="button"
            class="block my-3 w-full lg:px-12 md:px-7 py-4 bg-blue-500 text-white font-medium md:text-sm lg:text-lg rounded-full leading-snug uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Pathway
          </button>
          <button
            type="button"
            class="block my-3 w-full lg:px-12 md:px-7 py-4 bg-blue-500 text-white font-medium md:text-sm lg:text-lg rounded-full leading-snug uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Disease
          </button>
        </div>
        <div class="flex justify-center w-full">
            <img src="@/assets/img/dbhr-map.png" alt="">
        </div>
      </div>
      <h1
        class="lg:text-3xl md:text-lg my-3 pl-5 bg-blue-400 text-left rounded text-white py-5 font-medium"
      >
        Statistics of DBHR
      </h1>
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide relative my-5"
          data-bs-ride="carousel"
        >
          <div
            class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
          >
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active bg-blue-500"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              class="bg-blue-500"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              class="bg-blue-500"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <div class="flex">
                <img
                  src="@/assets/img/db-slider1.png"
                  class="w-1/2"
                  alt="..."
                />
                <img
                  src="@/assets/img/db-slider2.png"
                  class="w-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <div class="flex">
                <img
                  src="@/assets/img/db-slider2.png"
                  class="w-1/2"
                  alt="..."
                />
                <img
                  src="@/assets/img/db-slider3.png"
                  class="w-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <div class="flex">
                <img
                  src="@/assets/img/db-slider1.png"
                  class="w-1/2"
                  alt="..."
                />
                <img
                  src="@/assets/img/db-slider2.png"
                  class="w-1/2"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <!-- <button
    class="carousel-control-prev text-black absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button> -->
          <!-- <button
    class="carousel-control-next text-black absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-indicators [data-bs-target][data-v-5655fa78] {
  background-color: blue !important;
}
</style>
