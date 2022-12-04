<template>
  <div
    class="flex flex-col h-screen md:justify-center justify-between max-w-[940px] mx-auto relative"
  >
    <!-- Desktop Container -->
    <main class="p-5 md:bg-white md:rounded-2xl md:shadow-lg">
      <div class="flex flex-col gap-4 md:flex-row">
        <!-- Mobile Sidebar -->
        <div
          class="md:hidden bg-mobile w-full h-[172px] absolute top-0 left-0 bg-cover -z-10"
        ></div>
        <div class="flex justify-center gap-4 py-5 z-5 md:hidden">
          <div
            v-for="step of stepsInfo"
            class="step-no"
            :class="
              currentStep == step.no ? 'text-primary-100 bg-primary-400' : ''
            "
          >
            {{ step.no }}
          </div>
        </div>
        <!-- End of Mobile Sidebar -->
        <!-- Desktop Sidebar -->
        <div
          class="md:bg-desktop bg-cover w-[274px] h-[568px] rounded-xl hidden md:block"
        >
          <div class="grid gap-6 p-10">
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
                <div class="text-sm uppercase">
                  <p class="text-xs font-light text-primary-300">
                    Step {{ step.no }}
                  </p>
                  <p class="font-bold tracking-widest text-accent-300">
                    {{ step.head }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Desktop Sidebar -->
        <!-- Content -->
        <div
          class="z-10 flex-1 p-5 bg-white rounded-lg shadow-lg md:shadow-none"
        >
          <div
            class="flex flex-col h-full gap-4 mx-auto md:justify-between md:w-4/5"
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
                    <span :class="nameValid ? 'hidden' : 'block'"
                      >The field is required</span
                    >
                  </div>
                  <input
                    type="text"
                    id="name"
                    v-model="name"
                    placeholder="e.g. Stephen King"
                    :class="
                      nameValid ? 'border-accent-200' : 'border-primary-red'
                    "
                  />
                </div>
                <!-- End of Name -->
                <!-- Email -->
                <div class="input-group">
                  <div class="label-msg">
                    <label for="email">Email Address</label>
                    <span :class="emailValid ? 'hidden' : 'block'"
                      >The field is required</span
                    >
                  </div>
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    placeholder="e.g. stephenking@lorem.com"
                    :class="
                      emailValid ? 'border-accent-200' : 'border-primary-red'
                    "
                  />
                </div>
                <!-- End of Email -->
                <!-- Phone Number -->
                <div class="input-group">
                  <div class="label-msg">
                    <label for="phone">Phone Number</label>
                    <span :class="phoneValid ? 'hidden' : 'block'"
                      >The field is required</span
                    >
                  </div>
                  <input
                    type="text"
                    id="phone"
                    v-model="phone"
                    placeholder="e.g. +1 234 567 890"
                    :class="
                      phoneValid ? 'border-accent-200' : 'border-primary-red'
                    "
                  />
                </div>
                <!-- End of Phone Number -->
              </div>
            </section>
            <!-- End of Step 1 -->
            <!-- Step 2 -->
            <section v-show="currentStep == 2">
              <div class="grid gap-4 md:grid-cols-3">
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
                      <p v-show="planType" class="text-primary-100">
                        2 months free
                      </p>
                    </div>
                  </label>
                </div>

                <div class="px-5 py-4 rounded-lg bg-accent-300 md:col-span-3">
                  <div class="flex items-center justify-center gap-4">
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
                      class="relative inline-flex items-center h-6 rounded-full w-11 bg-primary-100"
                    >
                      <span
                        :class="planType ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block w-4 h-4 transition transform bg-white rounded-full"
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
              <div class="grid gap-4">
                <label v-for="addon of addons" class="addon" :for="addon.value">
                  <input
                    type="checkbox"
                    class="peer"
                    :id="addon.value"
                    :name="addon.value"
                    :value="addon"
                    v-model="selectedAddons"
                  />
                  <div>
                    <p class="font-bold text-primary-100">{{ addon.title }}</p>
                    <p class="text-sm text-accent-100">{{ addon.desc }}</p>
                  </div>
                  <p class="ml-auto text-primary-200">
                    ${{ planType ? addon.yearly : addon.monthly }}/{{
                      planType ? "yr" : "mo"
                    }}
                  </p>
                </label>
              </div>
            </section>
            <!-- End of Step 3 -->
            <!-- Step 4 -->
            <div v-show="currentStep == 4">
              <div class="grid gap-4 p-5 rounded-lg bg-accent-300">
                <div
                  v-for="plan of plans"
                  v-show="selectedPlan == plan.name"
                  class="flex items-center justify-between"
                >
                  <div>
                    <p class="font-bold text-primary-100">
                      {{ plan.title }} ({{ planType ? "Yearly" : "Monthly" }})
                    </p>
                    <button
                      class="underline text-accent-100 hover:text-primary-200"
                      @click="currentStep = 2"
                    >
                      Change
                    </button>
                  </div>
                  <p class="font-bold text-primary-100">
                    ${{ planType ? plan.yearly : plan.monthly }}/{{
                      planType ? "yr" : "mo"
                    }}
                  </p>
                </div>
                <div
                  class="grid"
                  :class="
                    selectedAddons != ''
                      ? 'gap-2 pt-4 border-t border-accent-200'
                      : ''
                  "
                >
                  <div
                    v-for="addon of selectedAddons"
                    class="flex items-center justify-between"
                  >
                    <p class="text-accent-100">{{ addon.title }}</p>
                    <p class="text-primary-100">
                      +${{ planType ? addon.yearly : addon.monthly }}/{{
                        planType ? "yr" : "mo"
                      }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between p-5">
                <p class="text-accent-100">
                  Total (per {{ planType ? "year" : "month" }})
                </p>
                <p class="font-bold text-primary-200">
                  +${{ total }}/{{ planType ? "yr" : "mo" }}
                </p>
              </div>
            </div>
            <!-- End of Step 4 -->
            <!-- Step 5 -->
            <div
              v-show="currentStep == 5"
              class="flex flex-col justify-center h-full text-center itesm-center"
            >
              <img src="/images/icon-thank-you.svg" class="mx-auto" />
              <h1 class="mt-6 mb-2">Thank you!</h1>
              <p class="text-accent-100">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>
            <!-- Content Footer -->
            <div
              class="justify-between hidden mt-auto md:flex"
              v-show="currentStep != 5"
            >
              <button
                class="btn btn-link"
                @click="goBack"
                v-show="currentStep > 1"
              >
                Go Back
              </button>
              <button
                class="ml-auto btn btn-primary"
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
    <div class="w-full p-5 bg-white" v-show="currentStep != 5">
      <div class="flex justify-between md:hidden">
        <button class="btn btn-link" @click="goBack" v-show="currentStep > 1">
          Go Back
        </button>
        <button
          class="ml-auto btn btn-primary"
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
      <div class="block mt-4 text-xs text-center text-accent-100 md:hidden">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          class="underline"
          >Frontend Mentor</a
        >. Coded by
        <a href="https://larrasu.github.io" target="_blank" class="underline"
          >Larra Su</a
        >.
      </div>
    </div>
    <!-- End of Footer -->

    <!-- End of Desktop Container -->
    <div class="hidden mt-4 text-xs text-center text-accent-100 md:block">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="underline"
        >Frontend Mentor</a
      >. Coded by
      <a href="https://larrasu.github.io" target="_blank" class="underline"
        >Larra Su</a
      >.
    </div>
  </div>
</template>

<script setup>
const currentStep = ref(1);
const name = ref("");
const email = ref("");
const phone = ref("");
const selectedPlan = ref("arcade");
const planType = ref(false);
const selectedAddons = ref([]);
const total = ref(0);

const nameValid = ref(true);
const emailValid = ref(true);
const phoneValid = ref(true);

total.value = computed(() => {
  let total = 0;
  if (selectedPlan.value == "arcade") {
    total += planType.value ? 90 : 9;
  } else if (selectedPlan.value == "advanced") {
    total += planType.value ? 120 : 12;
  } else if (selectedPlan.value == "pro") {
    total += planType.value ? 150 : 15;
  }
  selectedAddons.value.forEach((addon) => {
    total += planType.value ? addon.yearly : addon.monthly;
  });
  return total;
});

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
  if (currentStep.value == 1) {
    if (name.value == "") {
      nameValid.value = false;
    } else {
      nameValid.value = true;
    }
    if (email.value == "") {
      emailValid.value = false;
    } else {
      emailValid.value = true;
    }
    if (phone.value == "") {
      phoneValid.value = false;
    } else {
      phoneValid.value = true;
    }
    if (nameValid.value && emailValid.value && phoneValid.value) {
      currentStep.value++;
    }
  } else if (currentStep.value >= 2 && currentStep.value < 4) {
    currentStep.value++;
  }
}

function confirm() {
  currentStep.value = 5;
}
</script>
