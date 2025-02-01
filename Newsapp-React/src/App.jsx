import { useEffect, useState } from 'react'
import Card from './Card'
import './Card.css'


function App() {
  const [article, setArticle] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=215beca6dcc1419a97b2b84cd0cc67af').then((response) => {
      if (!response.ok) {
        console.log('Failed to fetch API', response.statusText)
      }
      return response.json()
    }).then((data) => {
      console.log('Data Fetched')
      setArticle(data.articles || [])
    })



  }, [])

  return (
    <>
      <div className='main'>
        {
          article.map((data, index) =>
         {
            if (data.urlToImage !== null && data.description !== null && data.title !== null) 
            {
              return (<Card key={index} title={data.title} description={data.description.length>100? (data.description.substring(0,100) + '....' ): data.description } urlToImage={data.urlToImage} />)
            }

          }
          )
        }
      </div>

    </>
  )
}

export default App
