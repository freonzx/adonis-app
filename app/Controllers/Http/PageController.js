'use strict'

const Post = use('App/Models/Post')

const { validate } = use('Validator')

class PageController {
  async index ({view}) {
    const posts = await Post.all()

    return view.render('index', {
      posts: posts.toJSON()
    })
  }

  async show ({params, view}) {
    const post = await Post.find(params.id)

    return view.render('posts.show', {
      post: post
    })
  }

  async add ( {view}) {

    return view.render('posts.add')
  }

  async create ( {request, response, session}) {
    const validation = await validate(request.all(), {
      title: 'required|min:3|max:255',
      body: 'required|min:3|max:255'
    })
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const post = new Post()

    post.title = request.input('title')
    post.body = request.input('body')

    await post.save()

    session.flash({ notification: 'Post added' })
    return response.redirect('/posts')
  }

  async edit ( {params, view}){
    const post = await Post.find(params.id)

    return view.render('posts.edit', {
      post: post
    })
  }

  async update ({params, request, response, session}){
    const validation = await validate(request.all(), {
      title: 'required|min:3|max:255',
      body: 'required|min:3|max:255'
    })
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }
    const post = await Post.find(params.id)

    post.title = request.input('title')
    post.body = request.input('body')

    await post.save()

    session.flash({ notification: 'Post edited with success' })
    return response.redirect('/posts')
  }

  async destroy ({params, response, session}){
    const post = await Post.find(params.id)
    await post.delete()

    session.flash({ notification: 'Post deleted' })
    return response.redirect('/posts')
  }
}

module.exports = PageController
