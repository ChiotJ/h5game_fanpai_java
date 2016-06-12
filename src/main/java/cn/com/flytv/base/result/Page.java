package cn.com.flytv.base.result;

import java.io.Serializable;
import java.util.List;

/**
 * @author jianyingshuo
 */
public class Page<T> implements Serializable {

	private static final long serialVersionUID = -7381677886137932557L;

	/** 内容 */
	private List<T> list;

	/** 每页显示数量 */
	private Integer size;

	/** 当前页数 */
	private Integer page;

	/** 总数 */
	private Long total;

	/** 总页数 */
	private Integer totalPage;

	/** 实际返回数量 */
	private Integer actualSize;

	public List<T> getList() {
		return list;
	}

	public void setList(
			List<T> list) {
		this.actualSize = list.size();
		this.list = list;
	}

	public Integer getSize() {
		return size;
	}

	public void setSize(
			Integer size) {
		this.size = size;
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(
			Long total) {
		this.total = total;
	}

	public void setTotalAndSize(
			Long total,
			Integer size) {
		this.total = total;
		this.size = size;
		this.totalPage = (int) (total / size);
		if (total % size != 0) {
			this.totalPage++;
		}

	}

	public Integer getPage() {
		return page;
	}

	public void setPage(
			Integer page) {
		this.page = page + 1;
	}

	public Integer getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(
			Integer totalPage) {
		this.totalPage = totalPage;
	}

	public Integer getActualSize() {
		return actualSize;
	}

	public void setActualSize(
			Integer actualSize) {
		this.actualSize = actualSize;
	}

}
