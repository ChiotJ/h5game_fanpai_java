package cn.com.flytv.fanpai.dao;

import cn.com.flytv.fanpai.bean.GameRecordBean;
import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.hibernate.type.DateType;
import org.hibernate.type.LongType;
import org.hibernate.type.StringType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by jian_ on 2016/6/7.
 */
@Repository
public class GRDao extends BaseDao {
    @Autowired
    private SessionFactory sessionFactory;

    public List<GameRecordBean> getGameRecord(int size) {
        return sessionFactory
                .getCurrentSession()
                .createSQLQuery(
                        "SELECT g.name,g.phone,g.time,g.updateTime from (SELECT * from game_record as gg where gg.status=1 ORDER BY gg.time) as g GROUP BY g.phone ORDER BY g.time,g.updateTime")
                .addScalar("name", StringType.INSTANCE)
                .addScalar("phone", StringType.INSTANCE)
                .addScalar("time", LongType.INSTANCE)
                .addScalar("updateTime")
                .setResultTransformer(Transformers.aliasToBean(GameRecordBean.class)).setMaxResults(size)
                .list();
    }
}
