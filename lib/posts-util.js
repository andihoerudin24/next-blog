import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(),'posts')

export const getPostData = (postIdentifier) =>{
    const PostSlug = postIdentifier.replace(/\.md$/,'')//removve file extension
    const filePath = path.join(postDirectory,`${PostSlug}.md`)
    const fileContent= fs.readFileSync(filePath,'utf-8')
    const {data,content} = matter(fileContent)
    
    const PostData = {
        slug:PostSlug,
        ...data,
        content
    }

    return PostData
}

export const getPostFiles = () =>{
   return fs.readdirSync(postDirectory)
}

export const getAllPosts = () =>{
    const postFiles = getPostFiles()
    console.log('postFiles',postFiles)
    const removeValFromIndex = ['.DS_Store','.DS_Store.md'];    
    for (var i = removeValFromIndex.length -1; i >= 0; i--)
    postFiles.splice(removeValFromIndex[i],1);

    const allPost = postFiles.map(postFile =>{
        return getPostData(postFile)
    })
    const sortedPost= allPost.sort((postA,postB) => postA.date > postB.date ? -1 : 1)
    return sortedPost
}

export const getFeaturedPost = () =>{
     const allPosts = getAllPosts()
     const featuredPosts = allPosts.filter(post => post.isFeatured)
     return featuredPosts
}

