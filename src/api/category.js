import store from 'src/store';
/**
 * Mocking client-server processing
 */
const _categories = [
  { 'id': 1, 'name': 'Thể Thao', 'type': 1, 'status': 1 },
  { 'id': 2, 'name': 'Văn Hóa', 'type': 1, 'status': 1 },
  { 'id': 3, 'name': 'Giải Trí', 'type': 1, 'status': 0 },
  { 'id': 4, 'name': 'Laptop', 'type': 2, 'status': 1 },
  { 'id': 5, 'name': 'Phụ kiện', 'type': 2, 'status': 1 },
  { 'id': 6, 'name': 'Phụ kiện mới', 'type': 2, 'status': 1 }
];

export default {
  getCategories() {
    if (store.getters.categories.length === 0) {
      store.dispatch('setCategory', _categories);
    }
    return store.getters.categories;
  },
  getCategory(id) {
    let categories = this.getCategories();
    return categories.find(function(category) {
        return parseInt(category.id) === parseInt(id);
    });
  },
  createCategory(data) {
    // Fake result from API return true;
    let categories = this.getCategories();
    let id = 0;
    if (categories.length > 0) {
      id = Math.max.apply(Math, categories.map(function(category){return category.id;}));
    }
    id++;
    data.id = id;
    let apiResult = {
      status: true,
      data: data
    };
    return apiResult;
  },
  updateCategory(id, data) {
    // Fake result from API return true;

    let apiResult = {
      status: true,
      data: data
    };
    return apiResult;
  },
  deleteCategory(id) {
    let apiResult = {
      id: id,
      status: true
    };
    return apiResult;
  },
  deleteListCategory(listIds) {
    let apiResult = {
      listIds: listIds,
      status: true
    };
    return apiResult;
  }
};
