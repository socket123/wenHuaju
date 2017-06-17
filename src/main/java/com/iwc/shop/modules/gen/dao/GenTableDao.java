/**
 * Copyright &copy; 2012-2014 <a href="http://www.iwantclick.com">iWantClick</a>iwc.shop All rights reserved.
 */
package com.iwc.shop.modules.gen.dao;

import com.iwc.shop.common.persistence.CrudDao;
import com.iwc.shop.common.persistence.annotation.MyBatisDao;
import com.iwc.shop.modules.gen.entity.GenTable;

/**
 * 业务表DAO接口
 * @author Tony Wong
 * @version 2013-10-15
 */
@MyBatisDao
public interface GenTableDao extends CrudDao<GenTable> {
	
}
