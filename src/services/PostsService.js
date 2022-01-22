import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts(query = '') {
    const res = await api.get('api/posts' + query)
    logger.log(res.data.posts)
    AppState.posts = res.data.posts
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log(res.data.posts)
    AppState.posts.unshift(res.data)
  }

}


export const postsService = new PostsService