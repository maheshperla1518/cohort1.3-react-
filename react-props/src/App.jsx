import Card from "./Components/card"


let items = [
  {
    name: "Paneer Butter Masala",
    price: 250,
    type: "Veg",
    rating: 4.6,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab est necessitatibus.',
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Chicken Biryani",
    price: 320,
    type: "Non-Veg",
    rating: 3.8,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab est necessitatibus.',
    image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
  },
  {
    name: "Masala Dosa",
    price: 150,
    type: "Veg",
    rating: 4.5,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab est necessitatibus.',
    image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9zYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Mutton Curry",
    price: 380,
    type: "Non-Veg",
    rating: 4.7,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab est necessitatibus.',
    image: "https://plus.unsplash.com/premium_photo-1700751850729-277d4a01cff3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXV0dG9uJTIwY3Vycnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600"
  },
  {
    name: "Veg Fried Rice",
    price: 180,
    type: "Veg",
    rating: 4.4,
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab est necessitatibus.',
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
  },
  
];


function App(){
  return(
    <>
    
    {/* <h1 className="text-2xl text-center text-blue-600 mt-4 font-extrabold">Lorem, ipsum dolor sit amet consecteturadipisicing elit.</h1> */}

    {/* <Card heading="WorkSpace" img="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3NwYWNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"/>
    <Card heading="Confrence" img="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtzcGFjZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"/>
    <Card heading="Brew Ideas" img="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3NwYWNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"/>
     */}



      <div className="flex gap-1 flex-wrap">
        {
          items.map((item)=><Card name={item.name} image={item.image} price={item.price} desc={item.desc} rating={item.rating} type={item.type} />)
        }
      </div>
    </>
  )
}
export default App;

