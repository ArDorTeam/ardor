module.exports = {
    apps : [
      {
        name: "ardor",
        script: "./dist/main.js",
        instances: '1',
        instance_var: 'INSTANCE_ID',
        exec_mode: 'fork'
      }
    ]
  }
