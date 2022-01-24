import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ProfileService {
  async getProfile(id) {
    const res = await api.get(`api/profiles/${id}`)
    // logger.log('[GET PROFILE]', res.data)
    AppState.profile = res.data
  }

  async editProfile(updatedProfile, query = '') {
    const res = await api.put('api/profiles' + query, updatedProfile)
    logger.log(res.data)
    AppState.profile = new Profile(res.data)
  }

}

export const profileService = new ProfileService