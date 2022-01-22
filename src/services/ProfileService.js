import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ProfileService {
  async getProfile(id) {
    const res = await api.get(`api/profiles/${id}`)
    // logger.log('[GET PROFILE]', res.data)
    AppState.profile = res.data
  }

}

export const profileService = new ProfileService