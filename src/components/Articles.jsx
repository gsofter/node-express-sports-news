/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react'
import { makeStyles, withStyles, Typography, Button } from '@material-ui/core'
import moment from 'moment'
import { useSelector } from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
    },

    '& a': {
      textDecoration: 'none',
      color: 'black',
      fontSize: '18pt',
      fontWeight: '700',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
        lineHeight: '24px',
      },
    },
    borderTop: '1px solid rgba(0, 0, 0, .1)',
  },

  page: {
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
  },

  article: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',

    '& .description': {
      paddingTop: theme.spacing(2),
      fontSize: '12pt',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        lineHeight: '18px',
      },
      color: '#a5a5a5',
    },

    '& .sponsored': {
      paddingTop: theme.spacing(2),
      fontSize: '12pt',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        lineHeight: '18px',
      },
      color: '#77c38b',
    },
  },
  banner_desktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  banner_mobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

const BannerAds = ({ banner }) => {
  const classes = useStyles()

  return (
    <>
      <div
        className={classes.banner_desktop}
        dangerouslySetInnerHTML={{ __html: banner.desktop }}
      ></div>
      <div
        className={classes.banner_mobile}
        dangerouslySetInnerHTML={{ __html: banner.mobile }}
      ></div>
    </>
  )
}

const LoadMoreButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#080920',
    borderRadius: '0px',
    textTransform: 'none',
    fontSize: '12pt',
    padding: '15px 10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}))(Button)

const Articles = ({ articles, sponText, sponLink }) => {
  const banners = useSelector((state) => state.banners)
  const classes = useStyles()
  const [showCount, setShowCount] = useState(
    articles.length > 40 ? 40 : articles.length,
  )

  const displayArticles = useMemo(() => articles.slice(0, showCount), [
    showCount,
    articles,
  ])

  const onLoadMore = (e) => {
    if (articles.length > showCount + 40) setShowCount(showCount + 40)
    else setShowCount(articles.length)
  }
  return (
    <div className={classes.root}>
      {displayArticles.map((article, index) => {
        return (
          <>
            <div className={classes.article}>
              <Typography variant="h5">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </Typography>
              <Typography variant="body1" className="description">
                {moment(article.pub_date).fromNow()} - {article.feed}
              </Typography>
            </div>
            {index === 2 && sponText && sponLink ? (
              <div className={classes.article}>
                <Typography variant="h5">
                  <a href={sponLink} target="_blank" rel="noopener noreferrer">
                    {sponText}
                  </a>
                </Typography>
                <Typography variant="body1" className="sponsored">
                  Sponsored
                </Typography>
              </div>
            ) : null}
            {index === 9 && banners && banners[0] ? (
              <BannerAds banner={banners[0]} />
            ) : null}
            {index === 19 && banners && banners[0] ? (
              <BannerAds banner={banners[1]} />
            ) : null}
            {index === 29 && banners && banners[0] ? (
              <BannerAds banner={banners[2]} />
            ) : null}
          </>
        )
      })}
      <LoadMoreButton
        variant="contained"
        fullWidth
        disabled={articles.length === showCount}
        onClick={onLoadMore}
      >
        Load more
      </LoadMoreButton>
    </div>
  )
}

export default Articles
