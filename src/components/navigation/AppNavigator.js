import React, {useContext} from 'react'

import UserNavigation from '../users/UserNavigation'
import ProductNavigation from '../products/ProductNavigation'
import { UserContext } from '../users/UserContext'
import { NavigationContainer } from '@react-navigation/native'

const AppNavigator = () => {
    const {isLoggedIn} = useContext(UserContext);
  return (
    <NavigationContainer>
        {
            isLoggedIn == false ? <UserNavigation/> : <ProductNavigation/>
        }
    </NavigationContainer>
  )
}

export default AppNavigator