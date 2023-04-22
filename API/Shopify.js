const Shopify = require('shopify-api-node');
const express=require('express')
const router=express.Router();

const shopify = new Shopify({
	shopName:"bruhmoment3121.myshopify.com",
	accessToken:"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"
})
async function getAllArticles(id,article){
    const data=await shopify.article.list(id);
    article.push(data);
}
router.get('/getCategories',async(req,res)=>{
    const data= await shopify.blog.list()
    const response=[];
    data.forEach((category)=>response.push({category:category.title,id:category.id}))
    console.log(response);
    res.json(response);

})
router.post("/getAllBlogs",async(req,res)=>{
    const {limit}=req.body;
    const data= await shopify.blog.list()
    const result=[]
    const article= await Promise.all(
        data.map(async (d)=>{
            const art=await shopify.article.list(d.id,{limit})
            art.forEach(a=>result.push({title:a.title,date:a.published_at.slice(0,a.published_at.indexOf('T')),img:a.image,author:a.author,content:a.body_html.replace(/<[^>]+>/g, '')}))
            return art;
        })
    )
    res.json({blogs:result})
})
router.post('/getCategoryBlogs',async(req,res)=>{
    const {id,limit}=req.body;
    console.log(id)
    if(id==1){
        const data= await shopify.blog.list()
        const result=[]
        const article= await Promise.all(
        data.map(async (d)=>{
            const art=await shopify.article.list(d.id,{limit})
            art.forEach(a=>result.push({title:a.title,date:a.published_at.slice(0,a.published_at.indexOf('T')),img:a.image,author:a.author,content:a.body_html.replace(/<[^>]+>/g, '')}))
            return art;
        })
    )
        res.json({response:result})
        return
    }
    const response=await shopify.article.list(id);
    const data=[];
    response.forEach(response=>{
        data.push({title:response.title,date:response.published_at.slice(0,response.published_at.indexOf('T')),img:response.image,author:response.author,content:response.body_html.replace(/<[^>]+>/g, '')});
    })
    res.json({response:data});
})


module.exports=router;