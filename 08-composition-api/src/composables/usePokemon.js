import { ref } from 'vue'
import axios from 'axios'

export const usePokemon = (pokemonId = 1) => {
    const pokemon = ref(null)
    const isLoading = ref(false)
    const errorMessage = ref(null)

    const searchPokemon = async (id) => {
        if (!id) return
        
        isLoading.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

            pokemon.value = data
            errorMessage.value = null
        } catch (error) {
            errorMessage.value = 'No se pudo cargar el pokemon'
        }
    }

    searchPokemon(pokemonId)

    return {
        pokemon,
        isLoading,
        errorMessage,

        searchPokemon,
    }
}