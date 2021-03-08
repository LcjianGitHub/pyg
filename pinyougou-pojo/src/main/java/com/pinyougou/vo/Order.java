package com.pinyougou.vo;

import com.pinyougou.pojo.TbOrder;

import java.io.Serializable;
import java.util.List;

public class Order implements Serializable {
    private TbOrder order;
    private List<OrderItem> orderItemList;

    public TbOrder getOrder() {
        return order;
    }

    public void setOrder(TbOrder order) {
        this.order = order;
    }

    public List<OrderItem> getOrderItemList() {
        return orderItemList;
    }

    public void setOrderItemList(List<OrderItem> orderItemList) {
        this.orderItemList = orderItemList;
    }
}
