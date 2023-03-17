import axios from 'axios'

export const uploadImage = async (file) => {
    if (!file) return null

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dwjujtv6q/upload'
    const formData = new FormData()

    formData.append('upload_preset', 'vue-journal')
    formData.append('file', file)

    try {
        const { data } = await axios.post(cloudUrl, formData)

        return data.secure_url
    } catch (error) {
        return null
    }
}