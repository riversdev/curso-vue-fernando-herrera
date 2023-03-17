<script>
    import { computed } from 'vue'

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const days   = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    export default {
        name: 'EntryItem',
        props: {
            entry: {
                type: Object,
                required: true,
            }
        },
        setup(props) {
            return {
                day: computed(() => {
                    const date = new Date(props.entry.date)

                    return date.getDate()
                }),
                month: computed(() => {
                    const date = new Date(props.entry.date)

                    return months[date.getMonth()]
                }),
                yearDay: computed(() => {
                    const date = new Date(props.entry.date)

                    return `${date.getFullYear()}, ${days[date.getDay()]}`
                }),
                shortText: computed(() => props.entry.text.length > 130 ? props.entry.text.substring(0, 150) + '...' : props.entry.text)
            }
        },
    }
</script>

<template>
    <div class="mb-3 pointer p-2 entry-container" @click="$router.push({ name: 'entry-view', params: { id: entry.id } })">
        <div class="entry-title d-flex align-items-center">
            <span class="text-success fs-5 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-5">{{ month }}</span>
            <span class="mx-2 fw-light">{{ yearDay }}</span>
        </div>
        <div class="entry-description">
            {{ shortText }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover {
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }

        .entry-description {
            font-size: 12px;
        }
    }
</style>