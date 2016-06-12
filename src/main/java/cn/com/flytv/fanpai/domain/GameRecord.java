package cn.com.flytv.fanpai.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by jian_ on 2016/6/7.
 */
@Entity
@Table(name = "game_record")
public class GameRecord {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String phone;
    private String ip;
    private long time;
    private int status;
    private Date createTime;
    private Date updateTime;

    public GameRecord() {
    }

    public GameRecord(String name, String phone, long time, String ip) {
        this.name = name;
        this.phone = phone;
        this.time = time;
        this.ip = ip;
        this.createTime = new Date();
        this.updateTime = new Date();
        this.status = 1;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}
