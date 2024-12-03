<template>
    <div class="account-settings">
        <div class="container max-w-8xl">
            <!-- User Info Form -->
            <div class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl shadow-lg">
                <div class="py-4">
                    <h1 class="mb-4">Your Profile</h1>
                    <hr />
                </div>
                <div class="flex space-x-8 mt-4">
                    <div>
                        <label for="profile-picture" class="block text-xl font-medium text-surface-900 dark:text-surface-0 mb-2">Profile Picture</label>
                        <div class="flex items-center gap-4"></div>
                        <!-- Profile Picture -->
                        <div class="mb-6">
                            <div class="flex items-center gap-2">
                                <img :src="profilePictureUrl" alt="Profile" class="w-24 h-24 rounded-full object-cover border-2 border-primary-color" />
                                <input type="file" id="profile-picture" @change="handleProfilePictureChange" class="file-input hidden" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div>
                            <h1 class="text-xl mb-4">General Info</h1>
                            <hr />
                            <div class="w-1/3 flex flex-col gap-2 mt-4">
                                <label for="username">Username</label>
                                <InputText id="username" v-model="value" aria-describedby="username-help" disabled value="username" text />
                            </div>
                            <div class="w-1/3 flex flex-col gap-2 mt-4">
                                <label for="email">Email</label>
                                <InputText id="email" v-model="value" aria-describedby="email-help" disabled value="jack@example.com" text />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const username = ref('');
const email = ref('');
const password = ref('');
const language = ref('en');
const profilePictureUrl = ref('https://via.placeholder.com/150'); // Default profile picture
</script>
