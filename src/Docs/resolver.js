const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    },
    users: (root, args, context) => {
      const users = axios.get(`${baseUrl}/api/users`)
      .then(res => res.data)
    }
  }
};