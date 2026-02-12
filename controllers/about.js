'use strict';
import logger from "../utils/logger.js";
import appStore from "../models/employee.js";

const start = {

  createView(request, response) {
    
    
    logger.info("Start page loading!")
    const viewData = {
      title: "About the Playlist app!",
      emp: appStore.getAppInfo()
    };
    
    logger.debug(viewData.emp);
    response.render('about', viewData);   
  },  
};

export default start;
