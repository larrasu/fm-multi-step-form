<template>
  <div>
    <div>
      <div class="bg-sidebar-mobile">
        <div class="flex gap-4">
          <div v-for="n in totalSteps" class="rounded-full border px-2">
            {{ n }}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="e.g. Stephen King" />
          </div>

          <div>
            <label for="email">Email Address</label>
            <input
              type="text"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>

          <div>
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
          </div>
        </div>

        <div>
          <button>Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const step = 1;
const totalSteps = 4;
</script>
