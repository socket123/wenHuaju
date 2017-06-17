package com.iwc.shop.common.utils;



import java.util.List;
import java.util.Map;

/**
 * Created by 胡彪  on 2014/7/2.
 */
public class Page<T> {
    //每页显示条数
    private Integer pageNum;
    //总记录数
    private Integer totalNum;
    //总页数
    private Integer totalPage;
    //当前页页码
    private Integer currentIndex;
    //下一页页码
    private Integer nextPage;
    //预加载页数
    private Integer preloadNum;
    //上一页页码
    private Integer previousPage;

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getTotalNum() {
        return totalNum;
    }

    public void setTotalNum(Integer totalNum) {
        this.totalNum = totalNum;
    }

    public Integer getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }

    public Integer getCurrentIndex() {
        return currentIndex;
    }

    public void setCurrentIndex(Integer currentIndex) {
        this.currentIndex = currentIndex;
    }

    public Integer getNextPage() {
        return nextPage;
    }

    public void setNextPage(Integer nextPage) {
        this.nextPage = nextPage;
    }

    public Integer getPreviousPage() {
        return previousPage;
    }

    public void setPreviousPage(Integer previousPage) {
        this.previousPage = previousPage;
    }

    /**
     * @return the preloadNum
     */
    public Integer getPreloadNum() {
        return preloadNum;
    }

    /**
     * @param preloadNum the preloadNum to set
     */
    public void setPreloadNum(Integer preloadNum) {
        this.preloadNum = preloadNum;
    }

    public List<T> getDataList() {
        return dataList;
    }

    public void setDataList(List<T> dataList) {
        this.dataList = dataList;
    }

    private List<T> dataList;

    public Page() {

    }



    public Page PageCount(Page page){
        page.setTotalNum(page.getTotalNum());//总条数
        page.setTotalPage((page.getTotalNum()%page.getPageNum()==0)?
                (page.getTotalNum()/page.getPageNum()):
                ((page.getTotalNum()/page.getPageNum())+1));//总页数
        page.setTotalPage(page.getTotalPage()==0?1:page.getTotalPage());
        return page;
    }

    /**
     *
     * @param page
     * @return
     */
    public Page pageMap(Page page) {
        Page page1 = new Page();
        page1.setTotalNum(page.getTotalNum());//总数量
        page1.setTotalPage((page.getTotalNum()%page.getPageNum()==0)?
                (page.getTotalNum()/page.getPageNum()):
                ((page.getTotalNum()/page.getPageNum())+1));//总页数
        page1.setTotalPage(page1.getTotalPage()==0?1:page1.getTotalPage());
        page1.setCurrentIndex(page.getCurrentIndex()*page.getPageNum());
        return page1;
    }
}