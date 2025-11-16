import User from "./Components/User";

const users = [
  {
    name: "Aarav Patel",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600"
  },
  {
    name: "Sneha Reddy",
    profession: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600"
  },
  {
    name: "Rahul Verma",
    profession: "Marketing Specialist",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600"
  },
  {
    name: "Priya Sharma",
    profession: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600"
  },
  {
    name: "Rohan Das",
    profession: "Content Creator",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600"
  },
  {
    name: "Kavya Iyer",
    profession: "Photographer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600"
  },
  {
    name: "Vikram Nair",
    profession: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
  }
];
let NewApp = ()=>{
    return(
        <>
          <div>
            {
              users.map((user)=><User name={user.name} profession={user.profession} image={user.image} />)
            }
          </div>
        </>
    )
}

export default NewApp;
