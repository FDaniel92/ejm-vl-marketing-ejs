import BaseService from "./base-service"

export default class PostService extends BaseService {
  static allUrl = 'posts'

  static async fetchEmphasized(axios) {
    const { data } = await axios.get('/' + this.allUrl)
    return data

  }
}
