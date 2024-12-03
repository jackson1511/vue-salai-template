<template>
    <div class="account-settings">
        <div class="container max-w-8xl">
            <!-- User Info Form -->
            <div class="bg-surface-0 dark:bg-surface-900 p-6 rounded-xl shadow-lg">
                <div class="py-4">
                    <h1 class="mb-4">Your Profile</h1>
                    <hr />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const profilePictureUrl = ref('https://via.placeholder.com/150'); // Default profile picture
</script>
