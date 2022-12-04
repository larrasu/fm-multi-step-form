<template>
  <div
    class="flex flex-col justify-between h-screen desktop:flex-row max-w-screen-xl mx-auto"
  >
    <div class="desktop:p-5">
      <div class="w-full bg-cover bg-mobile desktop:hidden">
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

      <div class="bg-desktop mobile:hidden flex">
        <div class="flex">
          <div v-for="detail of stepDets">
            <div
              class="px-2 text-white border border-white rounded-full"
              :class="step == n ? 'bg-white text-primary-100' : ''"
            >
              {{ detail.no }}
            </div>
            <div>
              <p>Step {{ detail.no }}</p>
              <p>{{ detail.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="p-5">
        <div
          class="px-5 py-8 bg-white rounded-lg mobile:mx-auto mobile:z-10 mobile:-mt-10 mt-0"
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
              <div v-for="plan of plans">
                <input
                  type="radio"
                  :id="plan.name"
                  name="plan"
                  class="sr-only peer"
                />
                <label :for="plan.name" class="plan">
                  <img
                    :src="`~/assets/images/icon-${plan.name}.svg`"
                    :alt="plan.title"
                  />
                  <div>
                    <p>{{ plan.title }}</p>
                    <p>
                      ${{ planType == false ? plan.monthly : plan.yearly }}/{{
                        planType == false ? "mo" : "yr"
                      }}
                    </p>
                  </div>
                </label>
              </div>

              <!-- <div>
                <input
                  type="radio"
                  id="advanced"
                  name="plan"
                  class="sr-only peer"
                />
                <label for="advanced" class="plan">
                  <img src="~/assets/images/icon-advanced.svg" alt="Arcade" />
                  <div>
                    <p>Advanced</p>
                    <p>$12/mo</p>
                  </div>
                </label>
              </div>

              <div>
                <input type="radio" id="pro" name="plan" class="sr-only peer" />
                <label for="pro" class="plan">
                  <img src="~/assets/images/icon-pro.svg" alt="Arcade" />
                  <div>
                    <p>Pro</p>
                    <p>$15/mo</p>
                  </div>
                </label>
              </div> -->
            </div>

            <div
              class="flex items-center justify-center py-4 font-bold rounded text-accent-100 bg-accent-300 gap-3"
            >
              <p
                class="transition"
                :class="planType == true ? '' : 'text-primary-100'"
              >
                Monthly
              </p>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  class="sr-only peer"
                  v-model="planType"
                />
                <div
                  class="h-5 rounded-full w-11 bg-primary-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-primary-100 after:border-2 after:rounded-full after:h-4 after:w-5 after:transition-all peer-checked:after:translate-x-full"
                ></div>
              </label>
              <p
                class="transition"
                :class="planType == false ? '' : 'text-primary-100'"
              >
                Yearly
              </p>
            </div>
          </section>

          <div class="mobile:hidden block">
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
const step = ref(1);
const totalSteps = ref(4);
const planType = ref(false);

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

const plans = [
  {
    name: "arcade",
    title: "Arcade",
    monthly: 9,
    yearly: 90,
  },
  {
    name: "advanced",
    title: "Advanced",
    monthly: 12,
    yearly: 120,
  },
  {
    name: "pro",
    title: "Pro",
    monthly: 15,
    yearly: 150,
  },
];
</script>
