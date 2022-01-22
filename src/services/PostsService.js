import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts(query = '') {
    const res = await api.get('api/posts' + query)
    logger.log(res.data.posts)
    AppState.posts = res.data.posts
  }

  // async likePost() {
  //   const res = await api.post('api/posts/:id/like')
  //   logger.log(res.data.posts)
  //   AppState.posts = res.data.posts
  // }

  // async searchPosts(){
  //   const res = await api
  // }

}


export const postsService = new PostsService