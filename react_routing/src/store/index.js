import React from 'react'
import Frontlogin from './Frontlogin';



class RootStore {
  constructor() {
    this.Frontlogin = new Frontlogin(this);
  }
}


const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);