import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService {
  async getProfile(id) {
    const res = await api.get(`api/posts/${id}`)
    logger.log(res.data.creatorId)
    AppState.profile = res.data.creatorId
  }

}

export const profileService = new ProfileService