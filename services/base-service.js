export default class BaseService {

    static allUrl = ''
  
    static async fetch(axios, id, params) {
      const { data } = await axios.get('/' + this.allUrl + '/' + id, { params })
      return data
    }
  
    static async fetchAll(axios, params) {
      const { data } = await axios.get('/' + this.allUrl, { params })
      return data
    }  
  }
  