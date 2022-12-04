<template>
  <div
    class="flex flex-col h-screen md:justify-center justify-between max-w-[940px] mx-auto relative"
  >
    <!-- Desktop Container -->
    <main class="md:bg-white md:rounded-2xl p-5 md:shadow-lg">
      <div class="flex md:flex-row flex-col gap-4">
        <!-- Mobile Sidebar -->
        <div
          class="md:hidden bg-mobile w-full h-[172px] absolute top-0 left-0 bg-cover -z-10"
        ></div>
        <div class="z-5 flex md:hidden justify-center gap-4 py-5">
          <div v-for="step of stepsInfo" class="step-no">
            {{ step.no }}
          </div>
        </div>
        <!-- End of Mobile Sidebar -->
        <!-- Desktop Sidebar -->
        <div
          class="md:bg-desktop bg-cover w-[274px] h-[568px] rounded-xl hidden md:block"
        >
          <div class="grid p-10 gap-6">
            <div v-for="step of stepsInfo">
              <div class="flex items-center gap-4">
                <div
                  class="step-no"
                  :class="
                    currentStep == step.no
                      ? 'text-primary-100 bg-primary-400'
                      : ''
                  "
                >
                  {{ step.no }}
                </div>
                <div class="uppercase text-sm">
                  <p class="text-primary-300 font-light text-xs">
                    Step {{ step.no }}
                  </p>
                  <p class="text-accent-300 font-bold tracking-widest">
                    {{ step.head }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Desktop Sidebar -->
        <!-- Content -->
        <div class="p-5 bg-white rounded-md flex-1 z-10">
          <div
            class="flex flex-col md:justify-between h-full gap-4 md:w-4/5 mx-auto"
          >
            <!-- Heading -->
            <div v-for="step of stepsInfo" v-show="currentStep == step.no">
              <h1>{{ step.title }}</h1>
              <p class="text-accent-100">{{ step.desc }}</p>
            </div>
            <!-- End of Heading -->
            <!-- Step 1 -->
            <section v-show="currentStep == 1">
              <div class="grid gap-4">
                <!-- Name -->
                <div class="input-group">
                  <div class="label-msg">
                    <label for="name">Name</label>
                    <span>The field is required</span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    v-model="name"
                    placeholder="e.g. Stephen King"
                  />
                </div>
                <!-- End of Name -->
                <!-- Email -->
                <div class="input-group">
                  <div class="label-msg">
                    <label for="email">Email Address</label>
                    <span>The field is required</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    placeholder="e.g. stephenking@lorem.com"
                  />
                </div>
                <!-- End of Email -->
                <!-- Phone Number -->
                <div class="input-group">
                  <div class="label-msg">
                    <label for="phone">Phone Number</label>
                    <span>The field is required</span>
                  </div>
                  <input
                    type="text"
                    id="phone"
                    v-model="phone"
                    placeholder="e.g. +1 234 567 890"
                  />
                </div>
                <!-- End of Phone Number -->
              </div>
            </section>
            <!-- End of Step 1 -->
            <!-- Step 2 -->
            <section v-show="currentStep == 2">
              <div class="grid md:grid-cols-3 gap-4">
                <div v-for="plan of plans">
                  <input
                    type="radio"
                    :id="plan.name"
                    name="plan"
                    :value="plan.name"
                    v-model="selectedPlan"
                    class="sr-only peer"
                  />
                  <label :for="plan.name" class="plan">
                    <img :src="`/images/icon-${plan.name}.svg`" />
                    <div class="mt-auto">
                      <p>{{ plan.title }}</p>
                      <p>
                        ${{ planType == false ? plan.monthly : plan.yearly }}/{{
                          planType == false ? "mo" : "yr"
                        }}
                      </p>
                      <p v-show="planType">2 months free</p>
                    </div>
                  </label>
                </div>

                <div class="bg-accent-300 rounded-lg px-5 py-4 md:col-span-3">
                  <div class="flex items-center gap-4 justify-center">
                    <p
                      class="font-bold transition"
                      :class="
                        !planType ? 'text-primary-100' : 'text-accent-100'
                      "
                    >
                      Monthly
                    </p>
                    <HeadlessSwitch
                      v-model="planType"
                      class="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-100"
                    >
                      <span
                        :class="planType ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                      />
                    </HeadlessSwitch>
                    <p
                      class="font-bold transition"
                      :class="planType ? 'text-primary-100' : 'text-accent-100'"
                    >
                      Yearly
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <!-- End of Step 2 -->
            <!-- Step 3 -->
            <section v-show="currentStep == 3">
              <div>
                <div></div>
              </div>
            </section>
            <!-- End of Step 3 -->
            <!-- Content Footer -->
            <div class="hidden md:flex justify-between mt-auto">
              <button
                class="btn btn-link"
                @click="goBack"
                v-show="currentStep > 1"
              >
                Go Back
              </button>
              <button
                class="btn btn-primary ml-auto"
                @click="nextStep"
                v-show="currentStep < 4"
              >
                Next Step
              </button>
              <button
                class="btn btn-accent"
                @click="confirm"
                v-show="currentStep >= 4"
              >
                Confirm
              </button>
            </div>
            <!-- End of Content Footer -->
          </div>
        </div>
        <!-- End of Content -->
      </div>
    </main>

    <!-- Footer -->
    <div class="w-full bg-white p-5 md:hidden flex justify-between">
      <button class="btn btn-link" @click="goBack" v-show="currentStep > 1">
        Go Back
      </button>
      <button
        class="btn btn-primary ml-auto"
        @click="nextStep"
        v-show="currentStep < 4"
      >
        Next Step
      </button>
      <button class="btn btn-accent" @click="confirm" v-show="currentStep >= 4">
        Confirm
      </button>
    </div>
    <!-- End of Footer -->

    <!-- End of Desktop Container -->
    <div class="text-xs text-center text-accent-100 mt-4 hidden md:block">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by
      <a href="https://larrasu.github.io" class="underline">Larra Su</a>.
    </div>
  </div>
</template>

<script setup>
const currentStep = ref(1);
const name = ref("");
const email = ref("");
const phone = ref();
const selectedPlan = ref("arcade");
const planType = ref(false);
const selectedAddons = ref([]);
const total = ref(0);

const stepsInfo = [
  {
    no: "1",
    title: "Personal info",
    head: "Your info",
    desc: "Please provide your name, email address, and phone number.",
  },
  {
    no: "2",
    title: "Select your plan",
    head: "Select plan",
    desc: "You have the option of monthly or yearly billing.",
  },
  {
    no: "3",
    title: "Pick add-ons",
    head: "Add-ons",
    desc: "Add-ons help enhance your gaming experience.",
  },
  {
    no: "4",
    title: "Finishing up",
    head: "Summary",
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

const addons = [
  {
    value: "online",
    title: "Online service",
    desc: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    value: "storage",
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    value: "profile",
    title: "Customizable Profile",
    desc: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];

function goBack() {
  if (currentStep.value >= 1) {
    currentStep.value--;
  }
}

function nextStep() {
  currentStep.value++;
}

function confirm() {
  currentStep.value = "complete";
}
</script>
