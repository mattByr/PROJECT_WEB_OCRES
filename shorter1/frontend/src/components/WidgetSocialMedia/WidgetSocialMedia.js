import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'



const ShareButtons = ({ title, url, twitterHandle, tags }) => {

  return (
    
    <div>
     
        <FacebookShareButton url={url} >
        <div class = "espace">
       <FacebookIcon size={40} round={true} />
       
       <div class="text font-weight-bold text-info text-uppercase mb-1" >
          10K
          </div>
          </div>
          </FacebookShareButton>

        <TwitterShareButton url={url} ii={title} via={twitterHandle} hashtags={tags}>
        <div class = "espace">
          <TwitterIcon size={40} round={true} />
          
          <div class="text font-weight-bold text-info text-uppercase mb-1" >
            10K
                </div>
                </div>
        </TwitterShareButton>

        <LinkedinShareButton url={url} >
        <div class = "espace">
          <LinkedinIcon size={40} round={true} />
          <div class="text font-weight-bold text-info text-uppercase mb-1" >
            10K
                </div>
                </div>
        </LinkedinShareButton>

          

           
        </div>
      )

}
export default ShareButtons