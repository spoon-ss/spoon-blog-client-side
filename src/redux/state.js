const template_state = {
        blog_info:{
            metadata:{
                current_page: 1,
                total_page: 1,
                current_category: "algorithm"
            },
            content:[
                {
                    id: 1,
                    title: "title",
                    introduction: "",
                },
            ],

            category: {
                content: [
                    {
                        id: 1,
                        label: "Algorithm",
                        to_blog: "/category/algorithm/blog",
                        content: [
                            {
                                id: 2,
                                label: "BFS",
                                to_blog: "/category/algorithm/bfs/blog",
                            },
                            {
                                id: 3,
                                label: "DFS",
                                to_blog: "/category/algorithm/dfs/blog",
                            },
                            {
                                id: 4,
                                label: "DP",
                                to_blog: "/category/algorithm/dp/blog",
                            }
                        ]
                    }
                ],
                metadata: {}
            }
        },

       /*----------------------------------------------------*/
        blog_detail:{
            metadata: {
            },
            content:{
                id: 1,
                title: "title",
                date: "2010-03-03",
                content: "# markdown string",
                category: "category",
                to_category_blog: "/category/blog",
            }
        },
}
