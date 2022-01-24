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

  async searchPosts(searchTerm) {
    console.log('search term in service', searchTerm)
    const res = await api(`?query=${searchTerm}`)
    console.log('search res', res);
    AppState.searchResults = res.data.results.map(p => new Post(p))
  }

  async removePost() {
    const res = await api.delete('api/posts')
    logger.log('post was deleted', res.data)
    AppState.posts = res.data
  }

  async likePost() {

  }
}

export const postsService = new PostsService