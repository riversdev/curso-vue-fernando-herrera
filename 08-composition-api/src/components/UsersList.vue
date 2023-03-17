<script>
    export default {
        props: {
            users: {
                type: Array,
                required: true
            }
        },
        setup() {
            
        },
    }
</script>

<template>
    <!-- <ul>
        <li v-for="{id, first_name, last_name, email} in users" :key="id">
            <h4>{{ first_name }} {{ last_name }}</h4>
            <h6>{{ email }}</h6>
        </li>
    </ul> -->
    <ul>
        <slot v-for="user in users" :key="user.id" :user="user"></slot>
    </ul>
</template>

<style scoped>
    ul {
        list-style: none;
    }
</style>