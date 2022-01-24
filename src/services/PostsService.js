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

  // async searchPosts(searchTerm) {
  //   console.log('search term in service', searchTerm)
  //   const res = await api(`?query=${searchTerm}`)
  //   console.log('search res', res);
  //   AppState.searchResults = res.data.results.map(p => new Post(p))
  // }

  async removePost(id) {
    const res = await api.delete('api/posts/' + id)
    AppState.posts = AppState.posts.filter(p => p.id != post.id)
  }

}

export const postsService = new PostsService