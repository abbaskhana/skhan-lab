<template>
  <section class="lg:px-16 md:px-10 py-2 bg-gradient-to-b from-blue-300">
    <div class="">
      <section>
        <div class="overflow-x-hidden">
          <div class="background-img rounded-t-3xl"></div>
          <nav
            class="relative w-ful flex justify-between items-center bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light"
          >
            <div class="w-72  pl-2">
              <div
                class="input-group relative flex flex-wrap items-stretch w-full"
              >
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn inline-block px-6  py-0.5 bg-gray-100 text-black font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="container-fluid w-full flex flex-wrap items-center justify-end"
            >
              <div>
                <button
                  class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    class="w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="collapse navbar-collapse flex justify-between items-center"
                id="navbarSupportedContent"
              >
                <!-- Left links -->
                <ul
                  class="navbar-nav flex flex-col list-style-none justify-end"
                >
                  <li class="nav-item   px-0.5">
                    <button
                      @click="goToPage('/')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full   hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Home
                    </button>
                  </li>
                  <li class="nav-item   px-0.5">
                    <button
                      @click="goToPage('/team')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full    hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Team
                    </button>
                  </li>
                  <li class="nav-item   px-0.5">
                    <button
                    @click="goToPage('/events')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full    hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Event
                    </button>
                  </li>
                  <li class="nav-item   px-0.5">
                    <button
                      @click="goToPage('/contactus')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full    hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Contact
                    </button>
                  </li>
                  <li class="nav-item   px-0.5">
                    <button
                      @click="goToPage('/partner')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full    hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Partners
                    </button>
                  </li>
                  <li class="nav-item   px-0.5">
                    <button
                      @click="goToPage('/projects')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full    hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Projects
                    </button>
                  </li>
                  <li class="nav-item   px-0.5">
                    <button
                    @click="goToPage('/society')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full    hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Society
                    </button>
                  </li>
                  <li class="nav-item   px-0.5">
                    <button
                      @click="goToPage('/publication')"
                      type="button"
                      class="inline-block px-4  py-0.5 bg-gray-100 text-black font-medium md:text-lg leading-tight uppercase rounded-full    hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize"
                    >
                      Publication
                    </button>
                  </li>
                </ul>
                <!-- Left links -->
              </div>
              <!-- Collapsible wrapper -->
            </div>
          </nav>
        </div>
      </section>
      <section>
        <div class="flex">
          <sidebar  />
          <div class="w-full">
            <router-view />
          </div>
        </div>
        <footerbar />
      </section>
    </div>
  </section>
</template>

<script>
import sidebar from "./components/sidebar.vue";
import footerbar from "./components/footer.vue";
export default {
  components: {
    sidebar,
    footerbar,
  },
  data() {
    return {
    };
  },
  methods: {
    goToPage(page){
      var page=page
   this.$router.push(page); 
      },
  },
};
</script>

<style>
.background-img {
  background-image: url("./assets/img/top-bg.jpeg");
  height: 170px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
