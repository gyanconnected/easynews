import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  articles = [{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Sports Desk","title":"Morocco vs Spain Live Score FIFA World Cup 2022: Morata comes in, MAR 0-0 ESP - Hindustan Times","description":"FIFA World Cup 2022 Live Score Morocco vs Spain: Morocco take on Spain in their Round of 16 fixture. Follow here Live Score and Live Updates of MAR vs ESP football match, straight from Education City Stadium in Qatar.","url":"https://www.hindustantimes.com/sports/football/morocco-vs-spain-live-score-fifa-world-cup-2022-round-of-16-football-match-today-latest-updates-education-city-stadium-101670334621927.html","urlToImage":"https://images.hindustantimes.com/img/2022/12/06/1600x900/MAR_1670335256140_1670335265102_1670335265102.jpg","publishedAt":"2022-12-06T16:34:08Z","content":"Here are the playing XIs-\r\nMorocco: Bounou, Hakimi, Aguerd, Saiss (c), Mazraoui, Ounahi, Amrabat, Amallah, Ziyech, En-Nesyri, Boufal\r\nSpain: Simon, Alba, Laporte, Rodri, Llorente, Pedri, Busquets (c)… [+28 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"PTI","title":"Demonetisation challenge: Restricted judicial review of economic policy does not mean court will fold hands and sit back, says SC - The Indian Express","description":"The top court was hearing a batch of 58 petitions challenging the demonetisation exercise announced by the Centre on November 8, 2016.","url":"https://indianexpress.com/article/india/demonetisation-challenge-restricted-judicial-review-of-economic-policy-does-not-mean-court-will-fold-hands-and-sit-back-says-sc-8309669/","urlToImage":"https://images.indianexpress.com/2022/12/supreme-court-1-2.jpg","publishedAt":"2022-12-06T15:11:34Z","content":"The Supreme Court on Tuesday said limited scope of a judicial review in economic policy matters does not mean that court will fold its hands and sit back, observing that the manner in which a decisio… [+3776 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT News Desk","title":"Saket Gokhale sent to 2-day police custody | Why TMC spokesperson was arrested - Hindustan Times","description":"Saket Gokhale said the Oreva company owner, which was given the contract to maintain the suspension bridge in Morbi, has not been arrested while he has been. | Latest News India","url":"https://www.hindustantimes.com/india-news/saket-gokhale-sent-to-2-day-police-custody-why-tmc-spokesperson-was-arrested-101670335506629.html","urlToImage":"https://images.hindustantimes.com/img/2022/12/06/1600x900/saket-gokhale_1670337240800_1670337256828_1670337256828.jpeg","publishedAt":"2022-12-06T14:38:50Z","content":"A magistrate court in Gujarat's Ahmedabad remanded Trinamool Congress (TMC) spokesperson Saket Gokhale to police custody till December 8 on Tuesday, hours after he was arrested over a complaint filed… [+2305 chars]"},{"source":{"id":null,"name":"NDTV News"},"author":null,"title":"Rahul Gandhi Blew Kisses While Passing By BJP Office. Then This Happened - NDTV","description":"Congress leader Rahul Gandhi blew kisses and waved as he passed a BJP office this morning during his Bharat Jodo Yatra in Rajasthan's Jhalawar.","url":"https://www.ndtv.com/india-news/watch-rahul-gandhi-blows-kisses-while-crossing-bjp-office-in-rajasthan-3581858","urlToImage":"https://c.ndtvimg.com/2022-12/scqduee8_rahul-gandhi-flying-kiss_625x300_06_December_22.jpg","publishedAt":"2022-12-06T13:41:15Z","content":"Ahead of 2023 Rajasthan polls, Rahul Gandhi's yatra route cutting through a BJP stronghold is significant\r\nCongress leader Rahul Gandhi blew kisses and waved as he passed a BJP office this morning du… [+2606 chars]"},{"source":{"id":null,"name":"Hindustan Times"},"author":"HT Tech","title":"iOS 16.2 update: 3 big changes for iPhones coming soon - HT Tech","description":"iOS 16.2 update on iPhones is going to bring 3 big changes and here is a quick look.","url":"https://tech.hindustantimes.com/mobile/news/ios-16-2-update-3-big-changes-for-iphone-coming-soon-71670333567351.html","urlToImage":"https://images.hindustantimes.com/tech/img/2022/12/06/1600x900/iPhone_14_Pro_Max_AOD_1663424222157_1670333779501_1670333779501.jpg","publishedAt":"2022-12-06T13:37:56Z","content":"Apple is preparing the iOS 16.2 update for iPhones across the world and just like the previous release, there are a couple of changes coming for the iPhones. Apple is yet to announce a release date f… [+1541 chars]"},{"source":{"id":null,"name":"The Tribune India"},"author":"The Tribune India","title":"Billy Gardell Keto Gummies Reviews [Scam OR Legit] Shocking Shark Tank Exposed? - The Tribune India","description":"Billy Gardell Keto Gummies they are an easy and quick way to lose body corpulence within days of ingesting them without any negative impact. OFFICIAL WEBSITE-&rdquo; CLICK HERE&rdquo;","url":"https://www.tribuneindia.com/news/brand-connect/billy-gardell-keto-gummies-reviews-scam-or-legit-shocking-shark-tank-exposed-458367","urlToImage":"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/12/2022_12$largeimg_1988024857.jpg","publishedAt":"2022-12-06T13:25:00Z","content":"Billy Gardell Keto Gummies they are an easy and quick way to lose body corpulence within days of ingesting them without any negative impact. OFFICIAL WEBSITE-” CLICK HERE”\r\nA rundown on the keto diet… [+8205 chars]"},{"source":{"id":null,"name":"YouTube"},"author":null,"title":"Nasa's Orion moon probe is Earth-ward bound - Evening Standard","description":"It’s the home stretch for Nasa’s space capsule, which made a final lap around the moon before heading back to Earth while testing systems for a 2024 human lu...","url":"https://www.youtube.com/watch?v=mrRmaZolmkE","urlToImage":"https://i.ytimg.com/vi/mrRmaZolmkE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGB4gZShYMA8=&rs=AOn4CLAIPsgjCXkDm3jURWvx7KLQiN9PNQ","publishedAt":"2022-12-06T13:06:41Z","content":null}]
    constructor(){
      super()
      this.state={
        articles : this.articles,
        loading :false
      }
    }

    // async componentDidMount(){
    //   let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7a1ec55b18a14db79bc3ee6aa0264a70";
    //   let data = await fetch(url);
    //   let ParseData = await data.json()
    //   this.setState({articles : ParseData.articles})
    // }

  render() {

    return (
      <div className="container my-3">
        <h2>EasyNews - Top Headline</h2>
      <div className="row">
        {this.state.articles.map((element) =>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:""} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        
      </div>
      </div>

    )
  }
}
