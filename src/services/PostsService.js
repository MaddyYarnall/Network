import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts(query = '') {
    const res = await api.get('api/posts' + query)
    logger.log(res.data.posts)
    AppState.posts = res.data.posts
    // FIXME - response has newer/older
    // res.data.newer / res.data.older
    // save to appstate
  }

  // FIXME create this function to pass the url for newer or older and set result to appstate
  // getMore(url){ ... }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log(res.data.posts)
    AppState.posts.unshift(res.data)
  }

  async searchPosts(searchTerm) {
    console.log('search term in service', searchTerm)
    const res = await api(`api/posts?query=${searchTerm}`)
    console.log('search res', res);
    AppState.posts = res.data.posts
  }

  async removePost(id) {
    await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id != post.id)
  }

}

export const postsService = new PostsService