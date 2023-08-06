<template>
    <Markdown :source="post.content"></Markdown>
</template>

<script setup>
    import Markdown from 'vue3-markdown-it';

    definePageMeta({ layout: 'custom' })

    const { getItemById } = useDirectusItems();
    const route = useRoute();
    

    const post = await getItemById({ collection: "blogs", id: route.params.id });
    if (!post) throwError("No article found, 404");
</script>