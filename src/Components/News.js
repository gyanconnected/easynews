import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  articles = [{"source":{"id":"wired","name":"Wired"},"author":"Amos Barshad","title":"Stormzy Has Built a Last-of-Its-Kind Social Media Empire","description":"The UK grime rapper transformed #Merky into a music label, a book imprint, and advocacy campaigns—something that may be impossible in the new Twitter era.","url":"https://www.wired.com/story/stormzy-merky-twitter-tiktok-music/","urlToImage":"https://media.wired.com/photos/638e9848693cb0d7db268d2f/191:100/w_1280,c_limit/Stormzy-#Merky-Social-Media-Culture-1204217475.jpg","publishedAt":"2022-12-06T12:00:00Z","content":"On November 25, UK grime artist Stormzy released his much-anticipated third album, This Is What I Mean. Critically lauded, the record marked an ambitious attempt from the multifaceted MC to encapsula… [+3128 chars]"},{"source":{"id":null,"name":"Gizmodo.com"},"author":"Matt Novak","title":"Twitter Notifications Keep Breaking in Wake of Elon Musk's Mass Layoffs","description":"Have you gone to your notifications tab on Twitter, only to see nothing there? You’re not alone. Users have increasingly reported broken notifications in recent days. And while Twitter didn’t respond to questions about why, it’s hard not to see a possible cor…","url":"https://gizmodo.com/twitter-down-notifications-breaking-elon-musk-layoffs-1849856992","urlToImage":"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/23bae61cd020c12408d8c741ba2f567b.jpg","publishedAt":"2022-12-06T06:00:00Z","content":"Have you gone to your notifications tab on Twitter, only to see nothing there? Youre not alone. Users have increasingly reported broken notifications in recent days. And while Twitter didnt respond t… [+2476 chars]"},{"source":{"id":"bbc-news","name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"BBC 100 Women marks 10th year with focus on progress","description":"The innovative BBC season reflects on a decade of change in a tumultuous year which has seen women taking centre stage.","url":"https://www.bbc.co.uk/news/world-63863089","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/8461/production/_127898833_image005.jpg","publishedAt":"2022-12-06T01:36:17Z","content":"A front-line medic in Ukraine and an anonymous Iranian protester are among those recognised in the BBC 100 Women 2022 list.\r\nThe season features the female faces that have dominated international hea… [+2170 chars]"},{"source":{"id":"bbc-news","name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"'It started with a protest, but a revolution is taking shape': BBC identifies many more people killed in Iran’s protests","description":"BBC journalists have been able to identify more people killed in Iran, and research confirmed that high numbers come from ethnic minority groups.","url":"https://www.bbc.co.uk/news/world-middle-east-63836921","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/FCBB/production/_127899646_iran_dead_thumb_01.jpg","publishedAt":"2022-12-06T01:44:51Z","content":"\"If I don't go out and protest, who else will?\" \r\nThe last words of Minoo Majidi to her family before she died. \r\nMinoo was 62 when she was shot by security forces on the streets of Kermanshah in the… [+8089 chars]"}]
    constructor(){
      super()
      this.state={
        articles : this.articles,
        loading :false
      }
    }
  render() {

    return (
      <div className="container my-3">
        <h2>EasyNews - Top Headline</h2>
      <div className="row">
        {this.state.articles.map((element) =>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,100)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        
      </div>
      </div>

    )
  }
}
