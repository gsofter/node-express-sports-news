/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react'
import { makeStyles, withStyles, Typography, Button } from '@material-ui/core'
import moment from 'moment'
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
    '& a.sponsor': {
      color: 'red',
      fontSize: '12pt',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        lineHeight: '18px',
      },
    },
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
  },
  banner: {},
}))

const BannerAds = () => {
  const classes = useStyles()
  const html = `<div id="320441640">
  <script type="text/javascript">
      try {
          window._mNHandle.queue.push(function (){
              window._mNDetails.loadTag("320441640", "300x250", "320441640");
          });
      }
      catch (error) {}
  </script>
</div>`
  return (
    <div
      className={classes.banner}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
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

const Articles = ({ articles }) => {
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
              {index === 2 ? (
                <a href="#" className="sponsor">
                  Sponsored
                </a>
              ) : null}
            </div>
            {index === 9 || index === 19 || index === 29 || index === 39 ? (
              <BannerAds />
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
