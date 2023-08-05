import { useEffect, useState } from "react"
import NavCustom from "./components/NavCustom/NavCustom"
// import { API_KEY } from "./data/config"
import axios from "axios"
import NewsContent from "./components/NewsContent/NewsContent"
import Footer from "./components/Footer/Footer"
import "./css/common.css"

const API_KEY = import.meta.env.VITE_ACCESS_KEY
function App() {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState("General")
  const [newsResults, setNewsResults] = useState([])
  const [limit, setLimit] = useState(30)
  const [totalContent, setTotalContent] = useState(0)

  // const newsApi = async () => {
  //   try {
  //     const news = await axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=${limit}&sort=published_desc& &categories=${category.toLowerCase()}`, {
  //       languages: 'fr,-en',
  //       countries: 'in,us',
  //     })

  //     console.log(news.data)
  //     setNewsResults(news.data.data)
  //     setTotalContent(news.data.pagination.total)
  //   } catch (err) {
  //     console.log(err)

  //   }
  // }
  const newsApi = async () => {
    try {
      const news = await axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json/?limit=${limit}&api-key=${API_KEY}`)
      console.log("data", news.data.results)
      setNewsResults(news.data.results);
      setTotalContent(news.data.num_results)
      setTotalContent(news.data.num_results)
    }
    catch (err) {
      console.log("err", err)
    }
  }
  useEffect(() => {
    newsApi()
  }, [newsResults.length, limit, category])



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
