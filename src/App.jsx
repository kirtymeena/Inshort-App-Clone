import { useEffect, useState } from "react"
import NavCustom from "./components/NavCustom/NavCustom"
import { API_KEY } from "./data/config"
import axios from "axios"
import NewsContent from "./components/NewsContent/NewsContent"
import Footer from "./components/Footer/Footer"
import "./css/common.css"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState("General")
  const [newsResults, setNewsResults] = useState([])
  const [limit, setLimit] = useState(30)
  const [totalContent, setTotalContent] = useState(0)

  const newsApi = async () => {
    try {
      const news = await axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=${limit}&sort=published_desc& &categories=${category.toLowerCase()}`, {
        languages: 'fr,-en',
        countries: 'in,us',
      })

      console.log(news.data)
      setNewsResults(news.data.data)
      setTotalContent(news.data.pagination.total)
      // const
    } catch (err) {
      console.log(err)
      // alert("Unable to load content")
      // window.location.reload()
    }
  }
  useEffect(() => {
    newsApi()
  }, [newsResults.length, category, limit])



  return (
    <div className="home__layout">
      <header>
        <NavCustom setCategory={setCategory} category={category} />
      </header>
      <main>
        <div>
          <NewsContent newsResults={newsResults} limit={limit} totalContent={totalContent} setLimit={setLimit} />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
