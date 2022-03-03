// https://www.notion.so/terrankartiktellus/GraphQL-server-for-Product-Page-9a60b0a44b1c4057b886906164e9ba4a

const { ApolloServer, gql } = require('apollo-server')

const ProductsArray =  [
      {
               id: "qwdq9wdqjwd89qwdq9",
               categoryId: "2w2w1q1e3e3", 
               name: "Dell Laptop",
               description: "All in one, Intel® Pentium® Gold Processor 7505 Windows 11 Home Single Language",
               quantity: 20,
               price: 499.99,
               onSale: true, 
      },
      {
               id: "9e859uy86w0dk",
               categoryId: "2w2w1q1e3e3",
               name: "Hp Laptop",
               description: "AMD 3550H Processor Windows 11 , 8GB RAM",
               quantity: 32,
               price: 899.99,
               onSale: false, 
      },
      {
               id: "iosckdm69yg",
               categoryId: "325t5w2w453",
               name: "Quilted Jacket with Zipper Pockets",
               description: "Netplay T-shirts – there’s one for everyone",
               quantity: 332,
               price: 99.99,
               onSale: true, 
      },
];
const CategoriesArray = [
  {
    id: "2w2w1q1e3e3",
    name: "Electronics"
  },
  {
    id: "325t5w2w453",
    name: "Clothing"
  },
  {
    id: "849t67y7ipfgnb",
    name: "Hardware Tools"
  },
  
  
];

const typeDefs = gql`
          
          type Query{
                    product(id: ID!): Product!,
          }
          type Product {
                    id: ID!,
		                categoryId: ID!,
		                name: String!,
                    description: String!,
                    quantity: Int!,
                    price: Float!,
                    onSale: Boolean!,
          }
          
`;
const resolvers = {
          Query:{
            product: (parent,args)=>{
              const {id} = args;
              return ProductsArray.find( element=> element.id===id );
            } 
          },
};
const server = new ApolloServer({
          typeDefs , resolvers
});

server.listen().then(
          ({url})=>{
                    console.log("Server up and running at: "+url);
          }
)