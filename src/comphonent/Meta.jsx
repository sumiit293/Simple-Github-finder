import React from 'react';
import MetaTags from 'react-meta-tags';
import { withRouter } from 'react-router';


class Meta extends React.Component {
    componentDidMount(){
        console.log(this.props.location);
    }
  render() {
    return (
          <MetaTags>
            <meta id="meta-description" name="description" content="Some description." />
            <meta id="og-title" property="og:title" content="creative work" />
            <meta id="og-image" property="og:image" content="https://ih1.redbubble.net/image.1199988245.2981/st,small,507x507-pad,600x600,f8f8f8.jpg" />
          </MetaTags>
      )
  }
}

export default withRouter(Meta);
