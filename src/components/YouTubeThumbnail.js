import React from 'react'

function YouTubePlayerThumbnail({ quality, id, ...props }) {
  let image;

  switch(quality) {
    case 0: {
      image = 'default.jpg'
      break;
    }

    case 1: {
      image = 'hqdefault.jpg'
      break;
    }

    case 2: {
      image = 'mqdefault.jpg'
      break;
    }

    case 3: {
      image = 'maxresdefault.jpg'
      break;
    }

    default: {
      image = 'default.jpg'
    }
  }

  const imgUrl = `https://img.youtube.com/vi/${id}/${image}`

  return <img src={imgUrl} alt="YouTube Thumbnail" {...props} />
}

export default YouTubePlayerThumbnail