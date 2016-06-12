package cn.com.flytv.fanpai.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

@Repository
public class BaseDao {
    @Autowired
    private SessionFactory sessionFactory;

    public void update(Object object) {
        sessionFactory.getCurrentSession().update(object);
    }

    public Serializable save(Object object) {
        return sessionFactory.getCurrentSession().save(object);
    }
}
