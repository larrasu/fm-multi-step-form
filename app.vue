<template>
  <div class="flex flex-col justify-between h-screen">
    <div class="desktop:p-5">
      <div class="w-full bg-cover bg-mobile">
        <div class="flex justify-center gap-4 pt-10 pb-20">
          <div
            v-for="n in totalSteps"
            class="px-2 text-white border border-white rounded-full"
            :class="step == n ? 'bg-white text-primary-100' : ''"
          >
            {{ n }}
          </div>
        </div>
      </div>

      <div class="p-5">
        <div
          class="px-5 py-8 bg-white rounded-lg mobile:mx-auto mobile:z-10 mobile:-mt-10"
        >
          <div
            class="mb-4"
            v-for="detail of stepDets"
            v-show="step == detail.no"
          >
            <h1 class="text-xl font-bold text-primary-100">
              {{ detail.title }}
            </h1>
            <p class="text-accent-100">
              {{ detail.desc }}
            </p>
          </div>
          <section v-show="step == 1">
            <div class="grid gap-3">
              <!-- <div class="input-group">
                <div class="label-msg">
                  <label for="name">Name</label>
                  <span class="hidden">This field is required</span>
                </div>
                <input type="text" id="name" placeholder="e.g. Stephen King" />
              </div> -->
              <TextInput
                model="name"
                field="Name"
                place="e.g. Stephen King"
                msg="This field is required"
              />
              <div class="input-group">
                <div class="label-msg">
                  <label for="email">Email Address</label>
                  <span class="hidden">This field is required</span>
                </div>
                <input
                  type="text"
                  id="email"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </div>
              <div class="input-group">
                <label for="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="e.g. +1 234 567 890"
                />
              </div>
            </div>
          </section>

          <section v-show="step == 2">
            <div class="grid gap-2 mb-6">
              <label
                class="flex items-center gap-2 px-5 py-3 border rounded cursor-pointer border-accent-200 peer-checked:border-primary-200"
              >
                <input type="radio" class="sr-only peer" />
                <img src="~/assets/images/icon-arcade.svg" alt="Arcade" />
                <div>
                  <p>Arcade</p>
                  <p>$9/mo</p>
                </div>
              </label>

              <label
                class="flex items-center gap-2 px-5 py-3 border rounded cursor-pointer border-accent-200 peer-checked:border-primary-200"
              >
                <input type="radio" class="sr-only peer" />
                <img src="~/assets/images/icon-advanced.svg" alt="Arcade" />
                <div>
                  <p>Advanced</p>
                  <p>$12/mo</p>
                </div>
              </label>

              <label
                class="flex items-center gap-2 px-5 py-3 border rounded cursor-pointer border-accent-200 peer-checked:border-primary-200"
              >
                <input type="radio" class="sr-only peer" />
                <img src="~/assets/images/icon-pro.svg" alt="Arcade" />
                <div>
                  <p>Pro</p>
                  <p>$15/mo</p>
                </div>
              </label>
            </div>

            <div
              class="flex items-center justify-center py-3 font-bold rounded text-accent-100 bg-accent-300"
            >
              <p class="text-primary-100">Monthly</p>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="h-5 rounded-full w-11 bg-primary-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-primary-100 after:border-2 after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:after:translate-x-full"
                ></div>
              </label>
              <p>Yearly</p>
            </div>
          </section>

          <div class="mobile:hidden">
            <button class="btn btn-primary">Next Step</button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between w-full p-5 bg-white desktop:hidden">
      <button @click="step--" v-show="step > 1" class="text-accent-100">
        Go Back
      </button>
      <button class="ml-auto btn btn-primary" @click="step++">Next Step</button>
    </div>
  </div>
</template>

<script setup>
const step = 1;
const totalSteps = 4;

const stepDets = [
  {
    no: "1",
    title: "Personal info",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    no: "2",
    title: "Select your plan",
    desc: "You have the option of monthly or yearly billing.",
  },
  {
    no: "3",
    title: "Pick add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    no: "4",
    title: "Finishing up",
    desc: "Double-check everything looks OK before confirming.",
  },
];
</script>
