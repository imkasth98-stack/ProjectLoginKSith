import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";


function App(){
  let cards = [
    {
    imageUrl: "p1.png",
    title: "HTML",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
    imageUrl: "p2.png",
    title: "CSS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
    imageUrl: "p3.png",
    title: "JavaScript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
    imageUrl: "p4.png",
    title: "React",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }

  ]


  return (
    <>
      <Header />
      <div className="card">
        {cards.map((item) => {
          return (
            <Card
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default App;