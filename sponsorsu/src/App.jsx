import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div>
      <h1>Sponsorsu-Reklam Platformu</h1>
      <Card
        isFeatured={true}
        title="Card Title"
        description="Card Description"
        tags={["React", "CSS"]}
      />
      <Card
        isFeatured={false}
        title="ikinci baslik"
        description="ikinci aciklama"
        tags={["Node", "MongoDB"]}
      />
    </div>
  )
}

export default App
