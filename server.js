import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const mcqs = {
  "mcqs": [
    {
      "question": "What are the three fundamental factors influencing pricing decisions in a business?",
      "options": {
        "A": "Place, Product, and Price",
        "B": "Customer, Competitor, and Company",
        "C": "Perfect market, Physical evidence, and Promotion",
        "D": "None of the above"
      },
      "answer": "B"
    },
    {
      "question": "An organization is best defined as a structured _______ entity that operates for a specific purpose.",
      "options": {
        "A": "Commercial",
        "B": "Practitioner",
        "C": "Government",
        "D": "Non-Profit"
      },
      "answer": "A"
    },
    {
      "question": "In PESTEL analysis, which factor primarily concerns global warming and sustainability issues?",
      "options": {
        "A": "Economic",
        "B": "Environmental",
        "C": "Entertaining",
        "D": "Evolving"
      },
      "answer": "B"
    },
    {
      "question": "When is customer satisfaction at its peak in terms of value delivery?",
      "options": {
        "A": "When the provided value is maximum",
        "B": "When the provided value is minimum",
        "C": "When the provided value equals the expected value",
        "D": "None of the above"
      },
      "answer": "C"
    },
    {
      "question": "What does the term 'Omni-Channel' refer to in marketing?",
      "options": {
        "A": "Physical Channel",
        "B": "Digital Channel",
        "C": "Both Physical and Digital Channels",
        "D": "Delivery Channel"
      },
      "answer": "C"
    },
    {
      "question": "Which of the following tasks is the least digitalized?",
      "options": {
        "A": "Booking a cab for a hotel journey",
        "B": "Getting a Demand Draft from a bank",
        "C": "Ordering food online",
        "D": "Connecting with a friend via a laptop"
      },
      "answer": "B"
    },
    {
      "question": "What is the primary goal of developing a business model focused on customer experience?",
      "options": {
        "A": "Creating a seamless experience for the customer",
        "B": "Generating profit at a high cost",
        "C": "Making products and services more accessible",
        "D": "Both A and C"
      },
      "answer": "D"
    },
    {
      "question": "Which of the following is a key component in ensuring a seamless shopping experience for customers?",
      "options": {
        "A": "A well-developed platform or mobile app",
        "B": "Website",
        "C": "Hoarding (Billboards)",
        "D": "Company office"
      },
      "answer": "A"
    },
    {
      "question": "In SEO (Search Engine Optimization), what does 'SERP' stand for?",
      "options": {
        "A": "Social Engagement and Reach Platform",
        "B": "Search Engine Result Page",
        "C": "Search Engine Ranking Protocol",
        "D": "Social Engine Ranking Page"
      },
      "answer": "B"
    },
    {
      "question": "Why is digital marketing considered more suitable for small businesses than traditional marketing?",
      "options": {
        "A": "Equal exposure to all businesses",
        "B": "Easier to use without expertise",
        "C": "Target niche markets with precision",
        "D": "Traditional marketing offers better visibility"
      },
      "answer": "C"
    },
    {
      "question": "Why is digital marketing often considered more cost-effective?",
      "options": {
        "A": "No investment in advertising platforms",
        "B": "Enables accurate ROI measurement",
        "C": "Traditional tools are expensive",
        "D": "Digital marketing is free"
      },
      "answer": "B"
    },
    {
      "question": "Which of the following is a primary advantage of digital marketing?",
      "options": {
        "A": "Broader reach without segmentation",
        "B": "Real-time personalized campaigns",
        "C": "Traditional demographic targeting",
        "D": "No need to measure preferences"
      },
      "answer": "B"
    },
    {
      "question": "What is the primary goal of content marketing?",
      "options": {
        "A": "Share valuable content",
        "B": "Increase ads",
        "C": "Maximize ad budget",
        "D": "Automate support"
      },
      "answer": "A"
    },
    {
      "question": "Key benefit of social media marketing for businesses?",
      "options": {
        "A": "Instant SEO ranking",
        "B": "Direct interaction with customers",
        "C": "Automated email replies",
        "D": "High CPC"
      },
      "answer": "B"
    },
    {
      "question": "What does CTR stand for in email marketing?",
      "options": {
        "A": "Click-Through Rate",
        "B": "Cost-To-Reach",
        "C": "Customer Turnover Rate",
        "D": "Conversion Tracking Rate"
      },
      "answer": "A"
    },
    {
      "question": "Which application focuses on improving visibility in search results?",
      "options": {
        "A": "Social Media Marketing",
        "B": "Search Engine Optimization",
        "C": "Content Marketing",
        "D": "Email Marketing"
      },
      "answer": "B"
    },
    {
      "question": "Which of the following is NOT a common application of digital marketing?",
      "options": {
        "A": "SEO",
        "B": "PPC",
        "C": "Telemarketing",
        "D": "SMM"
      },
      "answer": "C"
    },
    {
      "question": "Primary purpose of using Google Analytics?",
      "options": {
        "A": "Create social media content",
        "B": "Analyze web traffic",
        "C": "Manage emails",
        "D": "Optimize TV ads"
      },
      "answer": "B"
    },
    {
      "question": "A key component of content marketing is?",
      "options": {
        "A": "Creating valuable content",
        "B": "Buying email lists",
        "C": "Cold emails",
        "D": "TV ads"
      },
      "answer": "A"
    },
    {
      "question": "Most important metric for PPC campaign success?",
      "options": {
        "A": "Followers Count",
        "B": "CTR",
        "C": "Bounce Rate",
        "D": "Page Views"
      },
      "answer": "B"
    },
    {
      "question": "Which of the following is NOT a characteristic of digital marketing communication?",
      "options": {
        "A": "Interactive nature",
        "B": "Immediate feedback",
        "C": "One-way mass communication",
        "D": "Personalization"
      },
      "answer": "C"
    },
    {
      "question": "In the 6M’s framework, what refers to delivering the message to the audience?",
      "options": {
        "A": "Market",
        "B": "Message",
        "C": "Media",
        "D": "Measurement"
      },
      "answer": "C"
    },
    {
      "question": "What does POEM stand for in digital marketing?",
      "options": {
        "A": "Paid Media, Offline Media, Engaged Media",
        "B": "Performance Media, Owned Media, Earned Media",
        "C": "Paid Media, Owned Media, Earned Media",
        "D": "Programmatic Media, Organic Media, Engaged Media"
      },
      "answer": "C"
    },
    {
      "question": "Which of the following is an example of owned media?",
      "options": {
        "A": "Google Ads",
        "B": "A company's official website",
        "C": "A sponsored Instagram post",
        "D": "A newspaper advertisement"
      },
      "answer": "B"
    },
    {
      "question": "Native advertising refers to:",
      "options": {
        "A": "Ads that blend with content and match style",
        "B": "Search engine ads",
        "C": "Aggressive pop-ups",
        "D": "Banner ads only"
      },
      "answer": "A"
    },
    {
      "question": "Key advantage of paid search advertising?",
      "options": {
        "A": "Guarantees organic reach",
        "B": "Targets specific keywords and user intent",
        "C": "Only for social media",
        "D": "Free method"
      },
      "answer": "B"
    },
    {
      "question": "Major trend in digital marketing today?",
      "options": {
        "A": "Shift to desktop advertising",
        "B": "Decline in social media",
        "C": "Rise of mobile and social media",
        "D": "Return to traditional media"
      },
      "answer": "C"
    },
    {
      "question": "Display ads in digital marketing are:",
      "options": {
        "A": "Text ads in search engines",
        "B": "Print media ads",
        "C": "Visual ads like banners/videos",
        "D": "Influencer posts"
      },
      "answer": "C"
    },
    {
      "question": "Example of earned media?",
      "options": {
        "A": "Facebook ad campaign",
        "B": "Paid YouTube influencer review",
        "C": "Google Ads",
        "D": "Customer review"
      },
      "answer": "D"
    },
    {
      "question": "Which stage does digital marketing mainly focus on in value delivery?",
      "options": {
        "A": "Communicate the value",
        "B": "Provide the value",
        "C": "Choose the value",
        "D": "Deliver the value"
      },
      "answer": "A"
    },
    {
      "question": "What is the primary goal of inbound marketing?",
      "options": {
        "A": "Send cold emails",
        "B": "Interrupt users with ads",
        "C": "Attract through valuable content",
        "D": "Buy email lists"
      },
      "answer": "C"
    },
    {
      "question": "Which is NOT a stage of inbound marketing?",
      "options": {
        "A": "Attract",
        "B": "Engage",
        "C": "Convert",
        "D": "Cold Calling"
      },
      "answer": "D"
    },
    {
      "question": "Why do users share video content online?",
      "options": {
        "A": "Increase ad count",
        "B": "Engage with emotion or value",
        "C": "Reduce traffic",
        "D": "Because it's required"
      },
      "answer": "B"
    },
    {
      "question": "Key objective of content marketing?",
      "options": {
        "A": "Increase bounce rate",
        "B": "Attract and retain customers",
        "C": "Avoid interaction",
        "D": "Ignore feedback"
      },
      "answer": "B"
    },
    {
      "question": "Inbound vs outbound marketing?",
      "options": {
        "A": "Inbound uses ads to interrupt",
        "B": "Outbound uses SEO only",
        "C": "Inbound attracts via value; outbound pushes ads",
        "D": "Outbound has no paid ads"
      },
      "answer": "C"
    },
    {
      "question": "Key SEO component in content marketing?",
      "options": {
        "A": "Keyword Optimization",
        "B": "Buy followers",
        "C": "Mass email blasts",
        "D": "Hashtag spam"
      },
      "answer": "A"
    },
    {
      "question": "Example of inbound marketing?",
      "options": {
        "A": "TV ads",
        "B": "Cold calls",
        "C": "Valuable blog content",
        "D": "Spam emails"
      },
      "answer": "C"
    },
    {
      "question": "Significance of 'Engage' stage in inbound marketing?",
      "options": {
        "A": "Convert customers into advocates",
        "B": "Use aggressive sales pitches",
        "C": "Only on social media",
        "D": "Ignore concerns"
      },
      "answer": "A"
    },
    {
      "question": "Effective use of video content in inbound marketing?",
      "options": {
        "A": "Random irrelevant posts",
        "B": "Engaging, aligned videos",
        "C": "Clickbait only",
        "D": "No descriptions/captions"
      },
      "answer": "B"
    },
    {
      "question": "Benefit of content marketing in inbound strategy?",
      "options": {
        "A": "Avoid engagement",
        "B": "Build trust and thought leadership",
        "C": "Only for B2B",
        "D": "Replace SEO"
      },
      "answer": "B"
    },
    {
      "question": "What is a key reason for the growth of social media?",
      "options": {
        "A": "Declining internet penetration",
        "B": "Increased smartphone usage",
        "C": "Decreased digital engagement",
        "D": "Lack of interest in online communities"
      },
      "answer": "B"
    },
    {
      "question": "What does 'Social Media for Open Innovation' involve?",
      "options": {
        "A": "Keeping innovation confidential",
        "B": "Using social media to gather external ideas",
        "C": "Limiting feedback to surveys",
        "D": "Avoiding customer engagement"
      },
      "answer": "B"
    },
    {
      "question": "Which of the following is NOT a common social strategy?",
      "options": {
        "A": "Engagement-based strategy",
        "B": "Broadcasting-only strategy",
        "C": "Influencer collaboration strategy",
        "D": "Customer service strategy"
      },
      "answer": "B"
    },
    {
      "question": "A consistent and integrated social media strategy means:",
      "options": {
        "A": "Posting random content",
        "B": "Same content for all platforms without modification",
        "C": "Unified brand message across platforms",
        "D": "Paid promotions only"
      },
      "answer": "C"
    },
    {
      "question": "Social media endorsements are most effective when:",
      "options": {
        "A": "From celebrities only",
        "B": "Endorser has no connection with brand",
        "C": "Authentic and aligned with interests",
        "D": "Automated bots are used"
      },
      "answer": "C"
    },
    {
      "question": "What does 'Social Strategy - Options Thematically' mean?",
      "options": {
        "A": "Group strategies by themes like engagement/sales",
        "B": "Random strategy selection",
        "C": "Use only one strategy at a time",
        "D": "Rely only on influencer marketing"
      },
      "answer": "A"
    },
    {
      "question": "Primary metric to measure ROI of a social media campaign?",
      "options": {
        "A": "Followers gained",
        "B": "Website traffic",
        "C": "Conversion rate and revenue",
        "D": "Posts shared"
      },
      "answer": "C"
    },
    {
      "question": "Why measure social media ROI?",
      "options": {
        "A": "To justify budget and effectiveness",
        "B": "Increase likes",
        "C": "Replace all other marketing",
        "D": "Focus on viral content only"
      },
      "answer": "A"
    },
    {
      "question": "Example of using social media for product development?",
      "options": {
        "A": "Run ads for old products",
        "B": "Polls to crowdsource ideas",
        "C": "Sample products to employees only",
        "D": "Avoid feedback"
      },
      "answer": "B"
    },
    {
      "question": "Key characteristic of effective social media strategy?",
      "options": {
        "A": "Post without analysis",
        "B": "Clear goals aligned with business",
        "C": "Only customer service",
        "D": "Ignore analytics"
      },
      "answer": "B"
    },
    {
      "question": "Primary purpose of customer insights?",
      "options": {
        "A": "Increase product prices",
        "B": "Understand customer needs/behaviors",
        "C": "Reduce complaints",
        "D": "Create ads without feedback"
      },
      "answer": "B"
    },
    {
      "question": "Key factor in customer retention?",
      "options": {
        "A": "Price fluctuation",
        "B": "Consistent value & quality service",
        "C": "Limited support",
        "D": "Make switching hard"
      },
      "answer": "B"
    },
    {
      "question": "Market development strategy to expand customer base?",
      "options": {
        "A": "Reduce features",
        "B": "Enter new geographies",
        "C": "Avoid distributors",
        "D": "Focus on existing only"
      },
      "answer": "B"
    },
    {
      "question": "Customer co-creation is best described as:",
      "options": {
        "A": "Company develops products alone",
        "B": "Customer collaboration in development",
        "C": "Excluding opinions",
        "D": "Advertising technique"
      },
      "answer": "B"
    },
    {
      "question": "Primary goal of customer analysis?",
      "options": {
        "A": "Understand demographics & preferences",
        "B": "Cut marketing budget",
        "C": "Ignore feedback",
        "D": "Sell randomly"
      },
      "answer": "A"
    },
    {
      "question": "Why is customer feedback important in product development?",
      "options": {
        "A": "Follow competitors blindly",
        "B": "Align product to customer needs",
        "C": "No changes needed",
        "D": "Only for startups"
      },
      "answer": "B"
    },
    {
      "question": "Which is NOT a key element of market development?",
      "options": {
        "A": "New customer segments",
        "B": "New markets for existing products",
        "C": "Reduce customer base",
        "D": "Research new opportunities"
      },
      "answer": "C"
    },
    {
      "question": "Company involving customers in idea generation is practicing:",
      "options": {
        "A": "Customer retention",
        "B": "Market segmentation",
        "C": "Customer co-creation",
        "D": "Product withdrawal"
      },
      "answer": "C"
    },
    {
      "question": "Example of a customer retention strategy?",
      "options": {
        "A": "Ignore complaints",
        "B": "Personalized loyalty programs",
        "C": "Decrease product quality",
        "D": "Increase prices"
      },
      "answer": "B"
    },
    {
      "question": "Benefit of involving customers in product development?",
      "options": {
        "A": "Less marketing needed",
        "B": "Faster adoption and satisfaction",
        "C": "Higher cost, no sales",
        "D": "Complexity increase"
      },
      "answer": "B"
    }
  ]
};

app.get('/api/mcqs', (req, res) => {
  res.json(mcqs);
});

app.get('/api/mcqs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < mcqs.mcqs.length) {
    res.json(mcqs.mcqs[id]);
  } else {
    res.status(404).json({ error: 'MCQ not found' });
  }
});

app.listen(port, () => {
  console.log(`MCQ API running at http://localhost:${port}`);
});