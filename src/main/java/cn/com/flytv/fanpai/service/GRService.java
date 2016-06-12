package cn.com.flytv.fanpai.service;

import cn.com.flytv.fanpai.bean.GameRecordBean;
import cn.com.flytv.fanpai.dao.GRDao;
import cn.com.flytv.fanpai.domain.GameRecord;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.List;

/**
 * Created by jian_ on 2016/6/7.
 */

@Service
public class GRService {
    /**
     * 日志实例
     */
    private static final Logger logger = LogManager.getLogger(GRService.class);
    @Autowired
    private GRDao gRDao;

    @Transactional
    public void save(String name, String phone, long time, String ip) {
        gRDao.save(new GameRecord(name, phone, time, ip));
    }


    @Transactional
    public List<GameRecordBean> getGameRecord(int size) {
        return gRDao.getGameRecord(size);
    }
}
