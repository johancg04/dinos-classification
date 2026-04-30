const logoApiUrl = import.meta.env.VITE_LOGO_API_URL
const apiKey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY
const classificationsApiUrl = import.meta.env.VITE_CLASSIFICATIONS_API_URL

export class LogoDevApi {
    getUrlToLogo() {
        const domain = new URL(classificationsApiUrl).host
        return `${logoApiUrl}/${domain}?token=${apiKey}`
    }
}