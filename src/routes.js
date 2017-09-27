import Home from 'components/Home/home';
import CategoryIndex from 'components/Categories/index';
import CategoryView from 'components/Categories/view';
import CreateCategory from 'components/Categories/create';
import EditCategory from 'components/Categories/edit';
import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import CreatePost from 'components/Posts/createPost';
import EditPost from 'components/Posts/editPost';
import NotFound from 'components/NotFound/notFound';
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '/categories',
    component: CategoryIndex
  },
  {
    path: '/view/:id',
    name: 'view',
    component: CategoryView
  },
  {
    path: '/categories/create',
    name: 'createCategory',
    component: CreateCategory
  },
  {
    path: '/category/:id/edit',
    name: 'editCategory',
    component: EditCategory
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
