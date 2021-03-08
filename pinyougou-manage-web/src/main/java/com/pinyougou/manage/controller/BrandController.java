package com.pinyougou.manage.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/brand")
@RestController
public class BrandController {

    @Reference//(timeout = 10000)
    private BrandService brandService;

    @GetMapping("/testPage")
    public List<TbBrand> testPage(Integer page,Integer rows){
//        return brandService.testPage(page,rows);
        return (List<TbBrand>) brandService.findPage(page,rows).getRows();
    }

    @GetMapping("/findAll")
    public List<TbBrand> queryAll() {
//        return brandService.queryAll();
        return brandService.findAll();
    }
}


