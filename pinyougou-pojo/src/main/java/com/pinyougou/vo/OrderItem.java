package com.pinyougou.vo;

import com.pinyougou.pojo.TbOrderItem;

import java.io.Serializable;

public class OrderItem implements Serializable {
    private TbOrderItem orderItem;
    private String specStr;

    public TbOrderItem getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(TbOrderItem orderItem) {
        this.orderItem = orderItem;
    }

    public String getSpecStr() {
        return specStr;
    }

    public void setSpecStr(String specStr) {
        this.specStr = specStr;
    }
}
