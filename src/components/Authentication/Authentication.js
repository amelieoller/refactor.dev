import React from 'react';

import Routes from '../Routes';
import withUser from '../withUser';
import Loading from '../../atoms/Loading';

const Authentication = ({ user }) => (user === null ? <Loading /> : <Routes />);

export default withUser(Authentication);
