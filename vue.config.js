module.exports = {
  pluginOptions: {
    electronBuilder: {
      productName: "myapp",
      appId: "com.reflex.app",
      publish: [{
        provider: 'github',
        owner: 'Polidoro-root',
        private: true,
      }]
    }
  }
}