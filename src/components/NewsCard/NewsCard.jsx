/* eslint-disable react/prop-types */
import "./NewsCard.css"
import newspaper from "../../assets/newspaper.jpg"
function NewsCard({ news }) {
    console.log("news", news)



    return (
        <div className="card__container">
            <div className="image">
                {
                    news.multimedia[2] !== undefined ?
                        <img src={news.multimedia[2].url} alt={news.material_type_facet} />
                        :
                        <img src={newspaper} alt="img" />
                }
            </div>
            <div className="card__body">
                <div className="title">
                    <a href={news.url} className="title">{news.title}</a>
                    <p className="author"> <span style={{ fontWeight: "600" }}>Short</span> by {news.byline} <span> {new Date(news.published_date).toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} </span></p>
                </div>
                <div className="description">
                    {news.abstract.length > 150 ? news.abstract.slice(0, 150) + "..." : news.abstract}
                </div>
                <div className="footer">
                    <small>Read more at <a href={news.url} target="_blank" className="source__link" style={{ fontWeight: "600", cursor: "pointer" }} rel="noreferrer">{news.source}</a></small>
                </div>

            </div>
        </div>
    )
}

export default NewsCard