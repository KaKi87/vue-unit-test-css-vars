<template>
    <section class="some-component" :style="{ color: 'var(--color-red)' }">
        <p>someComponent</p>
    </section>
</template>

<style>
    :root {
        --color-red: red;
    }
</style>

<script>
    export default {
        mounted: function(){
            console.log(this.$el.style.color); // var(--color-red)
        }
    }
</script>
