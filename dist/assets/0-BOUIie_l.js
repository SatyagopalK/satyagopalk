const n=`<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8" />\r
    <title>Machine Learning for Early Cardiac Risk</title>\r
\r
    <meta\r
            name="description"\r
            content="A practical exploration of using Machine Learning for early cardiac risk prediction, focusing on data understanding, model selection, and evaluation beyond accuracy."\r
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
        }\r
\r
        .container {\r
            max-width: 900px;\r
            margin: 48px auto;\r
            padding: 0 24px;\r
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
            margin-top: 42px;\r
            margin-bottom: 12px;\r
        }\r
\r
        p {\r
            font-size: 20px;\r
            margin: 18px 0;\r
            text-align: justify;\r
            hyphens: auto;\r
        }\r
\r
        ul {\r
            font-size: 20px;\r
            margin: 18px 0 18px 24px;\r
        }\r
\r
        li {\r
            margin-bottom: 10px;\r
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
            margin: 56px 0;\r
            text-align: center;\r
            color: #aaa;\r
        }\r
\r
        .divider::before {\r
            content: "• • •";\r
        }\r
\r
        .figure {\r
            text-align: center;\r
            font-size: 16px;\r
            color: #555;\r
            margin-top: 12px;\r
        }\r
\r
        a {\r
            color: #000;\r
            text-decoration: none;\r
        }\r
\r
        a:hover {\r
            text-decoration: underline;\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
<div class="container">\r
\r
    <!-- ===== TITLE ===== -->\r
    <h1>Machine Learning for Early Cardiac Risk</h1>\r
\r
    <!-- ===== META ===== -->\r
    <div class="meta">\r
        <span class="author">Satya Gopal</span> · 12 min read\r
    </div>\r
\r
    <!-- ===== INTRODUCTION ===== -->\r
    <h2>Introduction</h2>\r
\r
    <p>\r
        When I first came across Machine Learning, my immediate curiosity was simple —\r
        how do these systems actually work? Without revising mathematics or formally\r
        studying machine learning algorithms, I jumped straight into building a project.\r
        In hindsight, this decision made me uncomfortable later, but it also became one\r
        of the most important learning experiences for me.\r
    </p>\r
\r
    <p>\r
        The project, <em>“Machine Learning for Early Cardiac Risk”</em>, originated from\r
        a friend’s idea. He suggested collaborating so that we could complement each\r
        other’s strengths. He focused on understanding the problem domain, data, and\r
        medical context, while I took responsibility for the technical side — exploring\r
        machine learning models, implementation, and experimentation.\r
    </p>\r
\r
    <p>\r
        This division of roles allowed us to move forward effectively, and more\r
        importantly, it pushed me to learn machine learning concepts through hands-on\r
        problem solving rather than theory alone.\r
    </p>\r
\r
    <!-- ===== PROBLEM STATEMENT ===== -->\r
    <h2>Problem Statement</h2>\r
\r
    <p>\r
        Cardiovascular diseases are among the leading causes of death worldwide, and\r
        many heart conditions develop gradually without clear symptoms in the early\r
        stages. Although patient clinical and lifestyle data are commonly available,\r
        extracting meaningful patterns from this data to assess early cardiac risk\r
        remains difficult using traditional methods.\r
    </p>\r
\r
    <p>\r
        This limitation can delay timely medical intervention. Therefore, there is a\r
        need for a data-driven approach that can effectively analyze patient health\r
        indicators and support early identification of individuals who may be at risk\r
        of heart disease.\r
    </p>\r
\r
    <!-- ===== TECHNICAL APPROACH ===== -->\r
    <h2>Technical Approach</h2>\r
\r
    <p>\r
        The primary challenge in this project was translating raw clinical and lifestyle\r
        data into a form suitable for machine learning models. Patient datasets often\r
        contain missing values, inconsistent scales, and features with varying levels\r
        of importance, making direct model training unreliable.\r
    </p>\r
\r
    <p>\r
        To address this, the process began with careful data preprocessing. This\r
        included cleaning the dataset, handling missing values, and preparing\r
        consistent input features. These steps ensured that the model learned meaningful\r
        patterns rather than noise.\r
    </p>\r
\r
    <p>\r
        The problem was framed as a supervised classification task, where the objective\r
        was to distinguish between individuals at risk of heart disease and those\r
        without significant risk. Emphasis was placed on interpretability and evaluation\r
        to ensure that predictions were reliable and generalized across different data\r
        samples.\r
    </p>\r
\r
    <!-- ===== METHODOLOGY ===== -->\r
    <h2>Methodology</h2>\r
\r
    <p>\r
        Like many beginners, I initially selected popular machine learning algorithms\r
        without fully understanding the dataset or the nature of the problem. A small\r
        dataset with around 100 rows and 10 features was used, and multiple algorithms\r
        were trained directly.\r
    </p>\r
\r
    <p>\r
        The results initially appeared impressive, with accuracy and F1-scores exceeding\r
        95%. However, as I later learned through structured study via the CampusX\r
        machine learning lecture series, high accuracy alone does not guarantee a\r
        meaningful or reliable model.\r
    </p>\r
\r
    <p>\r
        We then sourced a more realistic dataset from Kaggle containing over 10,000\r
        records and 22 clinical and lifestyle features. Before training, the dataset\r
        was analyzed for class imbalance, missing values, and feature relevance.\r
    </p>\r
\r
    <p>\r
        Appropriate classification models were selected, including Logistic Regression,\r
        Support Vector Classifier, K-Nearest Neighbors, Random Forest, and Gaussian\r
        Naive Bayes. These models were evaluated using precision, recall, F1-score,\r
        accuracy, and confusion matrices.\r
    </p>\r
\r
    <p>\r
        Later, an ensemble voting classifier was implemented by combining the\r
        top-performing models, leading to more stable and realistic performance.\r
    </p>\r
\r
    <!-- ===== RESULTS ===== -->\r
    <h2>Results and Evaluation</h2>\r
\r
    <p>\r
        Model evaluation focused on multiple metrics rather than accuracy alone.\r
        Precision measured the reliability of high-risk predictions, recall captured\r
        the ability to identify truly at-risk patients, and the F1-score balanced both.\r
    </p>\r
\r
    <p>\r
        Individual models showed consistent performance, but no single model dominated\r
        across all metrics. The voting classifier achieved overall performance in the\r
        range of 87% to 90%, reflecting improved generalization compared to early naive\r
        experiments.\r
    </p>\r
\r
    <p>\r
        The confusion matrix of the voting classifier provides insight into prediction\r
        behavior by explicitly highlighting false positives and false negatives.\r
    </p>\r
\r
    <div class="figure">\r
        Fig-1: Confusion Matrix of Voting Classifier\r
    </div>\r
\r
    <div class="divider"></div>\r
    <img\r
            src="https://raw.githubusercontent.com/SatyagopalK/SatyagopalK.github.io/master/assets/images/image_1.jpg"\r
            alt="img"\r
    />\r
\r
    <!-- ===== FINAL THOUGHTS ===== -->\r
    <h2>Final Thoughts</h2>\r
\r
    <p>\r
        This project began as an experiment driven by curiosity and gradually evolved\r
        into a structured exploration of machine learning for real-world healthcare\r
        applications. More than the final scores, the value of this work lies in the\r
        learning process — recognizing early mistakes, refining assumptions, and\r
        developing a disciplined evaluation mindset.\r
    </p>\r
\r
    <p>\r
        The complete implementation, including the voting classifier, Streamlit-based\r
        application, and source code, is available in the GitHub repository. The Kaggle\r
        dataset used is also linked for transparency and reproducibility.\r
    </p>\r
\r
    <p><strong>Project Resources:</strong></p>\r
    <ul>\r
        <li>\r
            GitHub Repository:\r
            <a href="https://github.com/SatyagopalK/-Predictive-Analytics-for-Heart-Disease-Using-Machine-Learning">\r
                Predictive Analytics for Heart Disease\r
            </a>\r
        </li>\r
        <li>\r
            Dataset:\r
            <a href="https://www.kaggle.com/datasets/oktayrdeki/heart-disease">\r
                Kaggle Heart Disease Dataset\r
            </a>\r
        </li>\r
    </ul>\r
\r
    <p>\r
        This project serves as a foundation for deeper exploration into machine learning\r
        and healthcare, reflecting an ongoing effort to build systems that are not only\r
        accurate, but also meaningful and responsible.\r
    </p>\r
\r
</div>\r
</body>\r
</html>\r
`;export{n as default};
