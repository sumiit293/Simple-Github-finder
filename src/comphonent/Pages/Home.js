import React, { Fragment } from 'react';
import Search from './../user/Search'
import Users from './../user/Users'

const Home = (props) => {

    return (<Fragment>
        <Search />
        <Users {...props} />
    </Fragment>)
}
export default Home;
