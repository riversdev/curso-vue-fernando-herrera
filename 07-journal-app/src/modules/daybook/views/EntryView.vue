<script>
    import { computed, defineAsyncComponent, ref, watch } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import Swal from 'sweetalert2'
    import { getDayMonthYear } from '@/modules/daybook/helpers/getDayMonthYear'
    import { uploadImage } from '@/modules/daybook/helpers/uploadImage'

    export default {
        props: {
          id: {
            type: String,
            required: true
          }
        },
        components: {
            FabButton: defineAsyncComponent(() => import('@/modules/daybook/components/FabButton.vue'))
        },
        setup(props) {
            const store = useStore()
            const router = useRouter()
            const vuexEntry = computed(() => store.getters['journal/getEntryById'](props.id))
            const entry = ref(null)
            const inputFile = ref()
            const localImage = ref(null)
            const imageFile = ref(null)

            const getEntry = () => {
              if (!vuexEntry.value) {
                if (props.id === 'new') {
                  entry.value = {
                    date: new Date().getTime(),
                    text: ''
                  }
                } else {
                  router.push({ name: 'no-entry-selected' })
                }
              } else {
                entry.value = { ...vuexEntry.value }
              }
            }

            const saveEntry = async () => {
              new Swal({ title: 'Guardando...' })
              Swal.showLoading()

              const imageUrl = await uploadImage(imageFile.value)

              if (!imageUrl) return Swal.fire('No guardada', 'La imagen no pudo ser guardada !', 'error')

              entry.value.picture = imageUrl

              if (entry.value.id) {
                await store.dispatch('journal/updateEntry', entry.value)
              } else {
                const id = await store.dispatch('journal/createEntry', entry.value)

                router.push({ name: 'entry-view', params: { id } })
              }

              localImage.value = null
              imageFile.value = null

              Swal.fire('Guardada', 'Entrada guardada exitosamente', 'success')
            }

            const deleteEntry = async () => {
              const { isConfirmed } = await Swal.fire({
                title: 'Seguro de eliminar ?',
                text: 'La entrada sera eliminada !',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'Cancelar',
              })

              if (!isConfirmed) return

              new Swal({ title: 'Eliminando...' })
              Swal.showLoading()

              await store.dispatch('journal/deleteEntry', entry.value.id)

              router.push({ name: 'no-entry-selected' })

              Swal.fire('Eliminada', 'Entrada eliminada exitosamente', 'success')
            }

            const onSelectedImage = async ({ target: { files } }) => {
              if (files.length === 0) {
                localImage.value = null
                imageFile.value = null

                return
              }

              imageFile.value = files[0]

              const reader = await new Promise((resolve, reject) => {
                const reader = new FileReader()

                reader.onload = () => resolve(reader.result)

                reader.onerror = reject

                reader.readAsDataURL(imageFile.value)
              })

              localImage.value = reader
            }

            getEntry()

            watch(() => props.id, () => getEntry())

            return {
              entry,
              day: computed(() => getDayMonthYear(entry.value.date).day),
              month: computed(() => getDayMonthYear(entry.value.date).month),
              yearDay: computed(() => getDayMonthYear(entry.value.date).yearDay),
              inputFile,
              localImage,

              saveEntry,
              deleteEntry,
              onSelectedImage,
            }
        },
    }
</script>

<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div class="d-flex align-items-center">
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">{{ month }}</span>
      <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
    </div>
    <div>
      <input type="file" ref="inputFile" @change="onSelectedImage" v-show="false" accept="image/*" />
      <button v-if="entry.id" class="btn btn-danger" @click="deleteEntry">
        <i class="fas fa-trash-alt me-2"></i>
        Borrar
      </button>
      <button class="btn btn-primary ms-2" @click="inputFile.click">
        <i class="fas fa-upload me-2"></i>
        Subir foto
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3">
    <div class="form-floating mb-3">
      <textarea
        class="form-control"
        placeholder="Que sucedio hoy ?"
        id="floatingTextarea2"
        style="height: 200px"
        v-model="entry.text"
      ></textarea>
      <label for="floatingTextarea2">Que sucedio hoy ?</label>
    </div>
  </div>
  <img v-if="entry.picture" alt="entry picture" :src="entry.picture" class="img-thumbnail">
  <img v-if="localImage" alt="entry picture" :src="localImage" class="img-thumbnail">
  <FabButton icon="fa-save" @on:click="saveEntry" />
</template>

<style lang="scss" scoped>
    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>