import { AppState } from "../AppState.js"
import { api } from '../services/AxiosService.js'
import { logger } from '../utils/Logger.js'
class AdsService {

  async getBanners() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.banner = res.data
  }
}

export const adsService = new AdsService