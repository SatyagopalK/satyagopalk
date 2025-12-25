const n=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8" />\r
    <title>Machine Learning: An Intuitive Introduction</title>\r
\r
    <meta\r
            name="description"\r
            content="An intuitive, beginner-friendly introduction to Machine Learning, its types, learning approaches, and real-world challenges."\r
    />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
\r
    <style>\r
        body {\r
            font-family: Georgia, "Times New Roman", serif;\r
            background: #ffffff;\r
            color: #242424;\r
            line-height: 1.7;\r
            margin: 0;\r
            padding: 0;\r
            text-align: justify;\r
        }\r
\r
        .container {\r
            max-width: 1000px;\r
            margin: 40px auto;\r
            padding:;\r
        }\r
\r
        h1 {\r
            font-size: 38px;\r
            line-height: 1.2;\r
            margin-bottom: 16px;\r
        }\r
\r
        h2 {\r
            font-size: 26px;\r
            margin-top: 40px;\r
            margin-bottom: 12px;\r
        }\r
\r
        p {\r
            font-size: 20px;\r
            margin: 18px 0;\r
        }\r
\r
        ul {\r
            font-size: 20px;\r
            margin: 18px 0 18px 20px;\r
        }\r
\r
        li {\r
            margin-bottom: 8px;\r
        }\r
\r
        .meta {\r
            color: #6b6b6b;\r
            font-size: 16px;\r
            margin-bottom: 32px;\r
        }\r
\r
        .author {\r
            font-weight: bold;\r
            color: #000;\r
        }\r
\r
        blockquote {\r
            border-left: 4px solid #ddd;\r
            padding-left: 16px;\r
            margin: 30px 0;\r
            font-style: italic;\r
            color: #444;\r
        }\r
\r
        .divider {\r
            margin: 50px 0;\r
            text-align: center;\r
            color: #aaa;\r
        }\r
\r
        .divider::before {\r
            content: "• • •";\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
<div class="container">\r
\r
    <!-- ===== TITLE ===== -->\r
    <h1>Machine Learning</h1>\r
\r
    <!-- ===== META ===== -->\r
    <div class="meta">\r
        <span class="author">Satya Gopal</span> · 10 min read\r
    </div>\r
\r
    <!-- ===== INTRO ===== -->\r
    <p>\r
        When people talk about Artificial Intelligence, they define it in many ways —\r
        acting like humans, thinking like humans, or behaving rationally. When I first\r
        encountered these definitions, they felt important but distant. Yet one idea\r
        kept repeating itself: intelligence is about making the right decisions.\r
    </p>\r
\r
    <p>\r
        As I learned more, I realized that Machine Learning is one of the most practical\r
        ways to achieve this intelligence. Instead of writing every rule by hand, we\r
        show machines data and allow them to learn from it.\r
    </p>\r
\r
    <p>\r
        Like most students, I memorized definitions by Arthur Samuel and Tom Mitchell\r
        during my undergraduate days just to clear exams. It was only after working on\r
        small projects that something clicked — machine learning wasn’t really about\r
        definitions or formulas. It was about patterns.\r
    </p>\r
\r
    <blockquote>\r
        Machine learning looks at data the way a child looks at pictures first — trying\r
        to understand the story before reading the words.\r
    </blockquote>\r
\r
    <p>\r
        To understand whether these patterns are meaningful, we evaluate them using\r
        metrics. With this perspective, those famous definitions finally started to\r
        make sense — not as exam answers, but as intuitive explanations.\r
    </p>\r
\r
    <h2>Types of Machine Learning</h2>\r
\r
    <p>\r
        Before discussing the types of machine learning, I’d like to acknowledge\r
        Aurélien Géron, whose work helped me understand how learning approaches are used\r
        in real-world systems.\r
    </p>\r
\r
    <p>\r
        Most books and tutorials mention four major types — Supervised Learning,\r
        Unsupervised Learning, Semi-Supervised Learning, and Reinforcement Learning.\r
        While these categories are important, it’s even more useful to understand how\r
        they differ in practice.\r
    </p>\r
\r
    <h2>Based on the Amount of Supervision Given</h2>\r
\r
    <p>\r
        One simple way to classify machine learning systems is by looking at how much\r
        supervision is provided during training.\r
    </p>\r
\r
    <h2>Supervised Learning</h2>\r
\r
    <p>\r
        Think of solving a math problem in school. You are given the question and the\r
        correct answer. Your task is to figure out the steps connecting the two.\r
    </p>\r
\r
    <p>\r
        Supervised learning works the same way. The algorithm is trained using labeled\r
        data — inputs paired with correct outputs. Once trained, the model can predict\r
        outcomes for unseen data.\r
    </p>\r
\r
    <p><strong>Real-world examples:</strong></p>\r
    <ul>\r
        <li>Email spam detection</li>\r
        <li>House price prediction</li>\r
    </ul>\r
\r
    <p><strong>Common algorithms:</strong></p>\r
    <ul>\r
        <li>Linear Regression</li>\r
        <li>Logistic Regression</li>\r
    </ul>\r
\r
    <h2>Unsupervised Learning</h2>\r
\r
    <p>\r
        Imagine being given a notebook full of questions but no answers. Your task is\r
        to observe patterns, group similar questions, and find structure on your own.\r
    </p>\r
\r
    <p>\r
        In unsupervised learning, the algorithm receives unlabeled data and tries to\r
        discover hidden patterns or relationships.\r
    </p>\r
\r
    <p><strong>Real-world examples:</strong></p>\r
    <ul>\r
        <li>Customer segmentation</li>\r
        <li>Clustering news articles by topic</li>\r
    </ul>\r
\r
    <p><strong>Common algorithms:</strong></p>\r
    <ul>\r
        <li>K-Means Clustering</li>\r
        <li>Hierarchical Clustering</li>\r
    </ul>\r
\r
    <h2>Semi-Supervised Learning</h2>\r
\r
    <p>\r
        Semi-supervised learning lies between supervised and unsupervised learning. A\r
        small portion of data is labeled, while the rest is unlabeled.\r
    </p>\r
\r
    <p>\r
        This approach is especially useful when labeling data is expensive or\r
        time-consuming.\r
    </p>\r
\r
    <p><strong>Real-world examples:</strong></p>\r
    <ul>\r
        <li>Image classification with limited labeled data</li>\r
        <li>Speech recognition systems</li>\r
    </ul>\r
\r
    <h2>Reinforcement Learning</h2>\r
\r
    <p>\r
        Reinforcement learning is learning through experience — like learning to ride\r
        a bicycle. You try, fail, adjust, and improve over time.\r
    </p>\r
\r
    <p>\r
        An agent interacts with an environment and receives rewards or penalties. The\r
        goal is to maximize long-term rewards.\r
    </p>\r
\r
    <p><strong>Real-world examples:</strong></p>\r
    <ul>\r
        <li>Game-playing systems like AlphaGo</li>\r
        <li>Robots learning to walk</li>\r
    </ul>\r
\r
    <h2>Batch and Online Learning</h2>\r
\r
    <p>\r
        Machine learning systems can also be categorized based on how they learn from\r
        incoming data.\r
    </p>\r
\r
    <h2>Instance-Based vs Model-Based Learning</h2>\r
\r
    <p>\r
        Instance-based learning relies on memorization and similarity, while\r
        model-based learning focuses on understanding underlying patterns and\r
        generalization.\r
    </p>\r
\r
    <div class="divider"></div>\r
\r
    <h2>Main Challenges of Machine Learning</h2>\r
\r
    <ul>\r
        <li>Choosing the right algorithm</li>\r
        <li>Insufficient data</li>\r
        <li>Non-representative datasets</li>\r
        <li>Poor data quality</li>\r
        <li>Irrelevant features</li>\r
    </ul>\r
\r
    <h2>Final Thoughts</h2>\r
\r
    <p>\r
        Machine learning is like teaching a child who knows nothing at first. Confusion\r
        is natural. What we’ve discussed here is just the beginning.\r
    </p>\r
\r
    <p>\r
        AI and ML continue to evolve through the efforts of researchers and engineers\r
        worldwide — and that ongoing curiosity is what drives progress.\r
    </p>\r
\r
</div>\r
</body>\r
</html>\r
`;export{n as default};
