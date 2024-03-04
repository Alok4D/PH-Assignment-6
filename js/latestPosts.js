const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts?category=coding');
    const data = await res.json();
    console.log(data);
    // const dataAll = data.posts;
    // console.log(dataAll);
    // letDiscuss(dataAll);
    
    
    // console.log(data.);
}
latestPost();   