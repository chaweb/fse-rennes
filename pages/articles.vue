
<template>
    <main>
        <div v-for="post in posts" :key="post.id">
            <nuxtLink :to="`/articles_${post.id}`">{{post.title}}</nuxtLink>
        </div>
    </main>
</template>

<script setup>
definePageMeta({ layout: 'custom' })
const { getItems } = useDirectusItems();

const posts = await getItems({ collection: "blogs" });
</script>