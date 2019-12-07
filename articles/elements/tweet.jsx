import { aqt } from 'rqt'
import { format } from 'url'
import { writeFileSync } from 'fs'

const fetchTweet = async (link) => {
  const { statusCode, statusMessage, body } = await aqt(link, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    },
  })
  if (statusCode != 200) throw new Error(`Twitter returned non-200 code ${statusMessage} :: ${statusMessage}.`)
  let [, r] = /<p class="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text".+?>([\s\S]+?)<\/p>/
    .exec(body) || []
  if (!r) throw new Error('Could not parse the tweet.')
  r = r.replace(/href="\//g, 'href="https://twitter.com/')

  r = r
    .replace(/<s>@<\/s>/g, '@')
    .replace(/<span class="invisible">(.+?)<\/span>/g, '')
    .replace(/<a /g, '<a target="_blank" ')

  const [, date] = /<small class="time">[\s\S]+?title="(.+?)"/.exec(body)
  const [, datetimems] = /data-time-ms="(.+?)"/.exec(body)
  const [, username] = /<span class="username u-dir u-textTruncate.+?>@<b>(.+?)</.exec(body)
  const [, name, img] = /<img class="ProfileCardMini-avatarImage" alt="(.+?)" src="(.+?)"/.exec(body)
  const [, likes] = /data-compact-localized-count="(\d+)"[\s\S]+?likes?">/.exec(body)
  return { date, data: r, datetimems, username, name, img, likes }
}

/**
 * @param {string} id
 * @param {Splendid} splendid
 */
const fetchCard = async (id, splendid) => {
  let card
  // cardImg
  const url = format({ host: 'twitter.com', protocol: 'https', pathname: `i/cards/tfw/v1/${id}` })
  let cards = await aqt(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    },
  })
  if (cards.statusCode == 200) {
    try {
      [, cards] = /<body>([\s\S]+)<\/body>/.exec(cards.body)
      card = cards.replace(/<script[\s\S]+?<\/script>/g, '')
    } catch (err) {
      throw new Error('Could not extract the card body.')
    }
  } else return {}
  card = card
    .replace(/ class="tcu-imageWrapper".+?>/, '>')
    .replace(/ data-src/, ' src')
    .split('\n').filter(a => a.trim()).join('\n')
    .replace(/<img( .+?)>/, '<splendid-img$1/>')
    .replace(/alt=""/, 'alt="Twitter Card"')
    .replace(/<a /g, '<a target="_blank" ')
    .replace(/h2/g, 'h4')
  let cardImg = /src="(.+?)"/.exec(card)
  if (cardImg) {
    cardImg = cardImg[1]
    const data = await aqt(cardImg, {
      binary: true,
    })
    if (data.statusCode !== 200) {
      splendid.logError2('tweet', 'Status Code %s: %s', data.statusCode, data.statusMessage)
    }
    const path = `img/${id}.jpg`
    writeFileSync(splendid.getPath(path), data.body)
    card = card.replace(/src=".+?"/, `placeholder-auto src="${path}"`)
  }
  return { card, cardImg }
}

/**
 * Splendid link.
 * @param {Object} param0
 * @param {Splendid} param0.splendid
 */
export default async function Tweet({ href, splendid }) {
  const { $tweet, $Tweet, $header, $body, $avatar, $TweetAuthor, $screenName, $decoratedName,
    $Icon, $IconVerified, $verifiedBadge, $nameScreenNameContainer, $name, $IconHeart, $IconTwitter, $TweetInfo,
    $TweetInfoHeart, $TweetInfoHeartStat, $TweetInfoTimeGeo,
    $brand }
    = splendid.css('../articles/styles/twitter.css', '.EmbeddedTweet', {
      whitelist: ['Emoji--forText', 'TwitterCardsGrid', 'TwitterCard', 'TwitterCard-container',
        'TwitterCard-container--clickable', 'SummaryCard-destination', 'SummaryCard-content'],
      exported: false,
    })
  const [,id] = /(\d+)$/.exec(href)
  let { data, card, cardImg, date, datetimems, username, name, img, likes } = splendid.getCache('tweet', id)
  if (!data) {
    ({ data, date, datetimems, username, name, img, likes } = await fetchTweet(href))

    ;({ card, cardImg } = await fetchCard(id, splendid))

    await splendid.appendCache('tweet', { [id]: { data, card, cardImg, date, datetimems, username, name, img, likes } })
  }

  const datetime = new Date(parseInt(datetimems, 10))
  const timePosted = `Time posted: ${date}`
  const likeHref = `https://twitter.com/intent/like?tweet_id=${id}`
  const tw = `https://twitter.com/${username}`

  return (<div className="EmbeddedTweet my-auto">
    <div className="EmbeddedTweet-tweetContainer">
      <div className={$tweet}>
        <blockquote className={$Tweet}>
          <div className={$header}>
            <a className={$avatar} href={tw} aria-label={name}>
              <splendid-img className="Avatar" alt={name} src={img}/>
            </a>
            <div className={$TweetAuthor}>
              <a className="TweetAuthor-link Identity u-linkBlend" href={tw} aria-label={name}>
                <div className={$nameScreenNameContainer}>
                  <span className={$decoratedName}>
                    <span className={$name} title={name}>{name}</span>
                    <span className={$verifiedBadge}>
                      <div className={[$Icon, $IconVerified].join(' ')} aria-label="Verified Account" title="Verified Account" role="img"></div>
                    </span>
                  </span>
                  <span className={$screenName} title={`@${username}`} dir="ltr">@{username}</span>
                </div>
              </a>
            </div>

            <div className={$brand}>
              <a href={href}><span className="FollowButton-bird">
                <div className={[$Icon, $IconTwitter].join(' ')} aria-label="View on Twitter" title="View on Twitter" role="presentation"/>
              </span></a>
            </div>
          </div>
          <div className={$body}>
            <p className="Tweet-text e-entry-title" lang="en" dir="ltr" dangerouslySetInnerHTML={{ __html: data }}/>

            {card && <div className="Tweet-card" dangerouslySetInnerHTML={{ __html: card }}/>}

            <div className={$TweetInfo}>
              <div className="TweetInfo-like">
                <a className={$TweetInfoHeart} title="Like" href={likeHref}>
                  <div>
                    <div className={[$Icon, $IconHeart].join(' ')} aria-label="Like" title="Like" role="img"></div>
                  </div>
                  <span className={$TweetInfoHeartStat}>{likes}</span>
                </a>
              </div>
              <div className={$TweetInfoTimeGeo}>
                <a className="u-linkBlend" href={href}>
                  <time className="dt-updated" dateTime={datetime.toLocaleString()} title={timePosted}>{date}</time>
                </a>
              </div>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>)
}

//  <div class="MediaCard-widthConstraint js-cspForcedStyle" style="max-width: 960px" data-style="max-width: 960px" data-csp-fix="true">
//     <div class="MediaCard-mediaContainer js-cspForcedStyle MediaCard--roundedTop MediaCard--roundedBottom" style="padding-bottom: 56.3542%" data-style="padding-bottom: 56.3542%" data-csp-fix="true">
//       <a href="https://twitter.com/Interior/status/463440424141459456/photo/1" class="MediaCard-mediaAsset NaturalImage">
//         <img class="NaturalImage-image" data-image="https://pbs.twimg.com/media/Bm54nBCCYAACwBi" data-image-format="jpg" width="960" height="541" title="View image on Twitter" alt="View image on Twitter" src="https://pbs.twimg.com/media/Bm54nBCCYAACwBi?format=jpg&amp;name=small" />
//       </a>
//     </div>
//   </div>
/* <b className="u-hiddenVisually">✔</b> */


/**
 * @typedef {import('splendid')} Splendid
 */
