module.exports = {
  errorResponse: (msg) => {
    return {
      sukses: true,
      msg: msg
    }
  },
  suksesResponse: (msg) => {
    return {
      sukses: false,
      msg: msg
    }
  }
}