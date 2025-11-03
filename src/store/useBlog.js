import { create } from 'zustand'

const useBlog = create((set) => ({
  blogs: [],
  addBlog: (newBlog) => set((state) => ({ blogs: [...state.blogs, newBlog] })),
  removeBlog: (blogId) => set((state)=>({ blogs: state.blogs.filter(blog => blog.id !==blogId) })),
  updateBears: ({blogId, data}) => set((state)=>({ blogs: state.blogs.map((blog)=> blog.id === blogId ? {...blog, ...data} : data) })),
}))
export default useBlog;