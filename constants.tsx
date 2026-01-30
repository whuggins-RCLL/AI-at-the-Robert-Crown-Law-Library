import { ExhibitCategory, ExhibitItem } from './types';

export const EXHIBIT_CATEGORIES: ExhibitCategory[] = [
  {
    id: 'resources',
    title: 'Law Library Resources',
    subtitle: 'Tools & Training',
    description: 'Workshops, expert help, and the latest AI news.',
    coverImage: 'https://i.postimg.cc/mgmWzQnT/AI-Learning-Hub-Redesign.png',
    items: [
      {
        id: 'learning-hub',
        title: 'The AI Learning Hub',
        subtitle: 'DIY Training',
        description: 'Catch up on past workshops, access DIY training modules, and get recommended reading lists.',
        details: ['Self-paced learning modules.', 'Archive of past workshops.', 'Curated resources.'],
        posterUrl: 'https://i.postimg.cc/mgmWzQnT/AI-Learning-Hub-Redesign.png',
        gallery: ['https://i.postimg.cc/mgmWzQnT/AI-Learning-Hub-Redesign.png'],
        icon: '🎓',
        links: [
          { title: 'Visit The AI Learning Hub Website', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/home' }
        ]
      },
      {
        id: 'curiosity-corner',
        title: 'Curiosity Corner',
        subtitle: 'Expert 1:1 Help',
        description: 'Zero judgment help with AI tools, hosted twice weekly by librarians.',
        details: ['Thursdays 2-3pm in Reference Office.', 'Ask anything about AI tools.', 'Open to entire SLS community.'],
        posterUrl: 'https://i.postimg.cc/Dwx3JqNF/AI-Curiosity-Corner-Redesign.png',
        gallery: ['https://i.postimg.cc/Dwx3JqNF/AI-Curiosity-Corner-Redesign.png'],
        icon: '💡',
        links: [
          { title: 'View Upcoming Events', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/events' },
          { title: 'View Past Events', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/view-past-events' }
        ]
      },
      {
        id: 'ai-upload',
        title: 'The AI Upload',
        subtitle: 'Weekly Digest',
        description: 'Stay ahead with the latest AI news and innovations, delivered every Friday. Now available as a NotebookLM audio and video podcast.',
        details: ['Latest AI news & innovations.', 'Listen or watch via NotebookLM.', 'Weekly digest delivered Fridays.'],
        posterUrl: 'https://i.postimg.cc/T3tvLrsg/The-AI-Upload-Redesign.png',
        gallery: ['https://i.postimg.cc/T3tvLrsg/The-AI-Upload-Redesign.png'],
        icon: '📨',
        links: [
          { title: 'View Latest & Past Issues', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/the-ai-upload' }
        ]
      }
    ]
  },
  {
    id: 'rules',
    title: 'Recommended Rules',
    subtitle: 'Frameworks & Policies',
    description: 'Essential frameworks like P.A.U.S.E. and the NYT Rule.',
    coverImage: 'https://i.postimg.cc/T3dX3kCC/10.png',
    items: [
      {
        id: 'pause-nyt',
        title: 'Recommended Rules',
        subtitle: 'P.A.U.S.E. Framework & The NYT Rule',
        description: 'Adopt these two essential frameworks for safe and ethical AI usage. The P.A.U.S.E. framework guides you through a 5-step process to ensuring effectiveness, while the NYT Rule provides a simple ethical litmus test.',
        details: [
          'P.A.U.S.E.: Pinpoint, Assess, Use, Self-Assess, Enhance.',
          'NYT Rule: Would you want your AI use on the front page?',
          'Always keep a human in the loop.'
        ],
        posterUrl: 'https://i.postimg.cc/dV5ck8fC/NYT-Rule-Original.png',
        gallery: [
          'https://i.postimg.cc/vZYdZP3z/14.png',
          'https://i.postimg.cc/Vkfck7DZ/15.png',
          'https://i.postimg.cc/8zpVzytn/16.png',
          'https://i.postimg.cc/0ykqytcB/17.png',
          'https://i.postimg.cc/pLWtL0qS/18.png'
        ],
        galleryLayout: 'vertical',
        contentImage: 'https://i.postimg.cc/dV5ck8fC/NYT-Rule-Original.png',
        icon: '🛑',
        links: [
          { title: 'Read more about the P.A.U.S.E. Rule', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/the-pause-rule' }
        ]
      }
    ]
  },
  {
    id: 'human-loop',
    title: 'Keep the Lawyer in the Loop',
    subtitle: 'Oversight & Bias',
    description: 'Maintaining human judgment, understanding bias, and avoiding hallucinations.',
    coverImage: 'https://i.postimg.cc/g2gbXv7w/Keep-the-Lawyer-in-the-Loop-Redesign.png',
    items: [
      {
        id: 'lawyer-loop',
        title: 'Lawyer in the Loop',
        subtitle: 'AI Assists, You Advise',
        description: 'You decide when to use AI. You verify output. You apply judgment.',
        details: ['Leverage AI responsibly.', 'Verify output.', 'Accountability.'],
        posterUrl: 'https://i.postimg.cc/g2gbXv7w/Keep-the-Lawyer-in-the-Loop-Redesign.png',
        gallery: ['https://i.postimg.cc/g2gbXv7w/Keep-the-Lawyer-in-the-Loop-Redesign.png'],
        icon: '⚖️'
      },
      {
        id: 'bias',
        title: 'Mind the Bias',
        subtitle: '4 Cognitive Biases',
        description: 'Beware of Confirmation, Anchor, Authority, and Automation biases.',
        details: ['Confirmation Bias.', 'Anchor Bias.', 'Authority Bias.', 'Automation Bias.'],
        posterUrl: 'https://i.postimg.cc/RZgx6cYn/Mind-the-Bias-Redesign.png',
        gallery: ['https://i.postimg.cc/RZgx6cYn/Mind-the-Bias-Redesign.png'],
        icon: '🧠'
      },
      {
        id: 'glitch-matrix',
        title: 'The Glitch in the Matrix',
        subtitle: 'Understanding Hallucinations',
        description: 'Large Language Models are prediction engines, not truth machines. They can confidently state falsehoods as facts.',
        details: ['Pattern matching vs. Fact checking.', 'Probabilistic generation.', 'Risk of fabrication.'],
        posterUrl: 'https://i.postimg.cc/52sWYwr9/Glitch-in-the-Matrix-Original.png',
        gallery: ['https://i.postimg.cc/52sWYwr9/Glitch-in-the-Matrix-Original.png'],
        icon: '🐛'
      },
      {
        id: 'ai-sanctions',
        title: 'Sanctions Tracker',
        subtitle: 'Cases & Consequences',
        description: 'Tracking the rising number of legal cases where AI hallucinations led to court sanctions and professional discipline.',
        details: ['Mata v. Avianca (The "ChatGPT Lawyer").', 'Fake case citations.', 'Judicial warnings.'],
        posterUrl: 'https://i.postimg.cc/jSMYwz1x/Glitch-in-the-Matrix-Sanctions.png',
        gallery: ['https://i.postimg.cc/jSMYwz1x/Glitch-in-the-Matrix-Sanctions.png'],
        icon: '🔨'
      }
    ]
  },
  {
    id: 'research',
    title: 'AI & Legal Research',
    subtitle: 'V.E.T. & Validation',
    description: 'How to vet output, understanding RAG, and pros/cons of legal AIs.',
    coverImage: 'https://i.postimg.cc/cLFGgQzf/VET-Redesign.png',
    items: [
      {
        id: 'vet',
        title: 'V.E.T. Framework',
        subtitle: 'Verify, Evaluate, Test',
        description: 'Verify the source exists. Evaluate the nuance. Test the reasoning.',
        details: ['Verify citations.', 'Evaluate jurisdiction/holding.', 'Test logic.'],
        posterUrl: 'https://i.postimg.cc/cLFGgQzf/VET-Redesign.png',
        icon: '✅'
      },
      {
        id: 'research-guide-1',
        title: 'Generative AI & Law',
        subtitle: 'Visual Guide',
        description: 'A visual guide to the intersection of generative AI and legal practice.',
        details: ['Technology overview.', 'Legal applications.', 'Strategic integration.'],
        posterUrl: 'https://i.postimg.cc/Qd8rd60w/21.png',
        gallery: ['https://i.postimg.cc/Qd8rd60w/21.png'],
        icon: '🤖'
      },
      {
        id: 'research-guide-2',
        title: 'Strategic Implementation',
        subtitle: 'Workflow Integration',
        description: 'How to effectively integrate AI tools into legal research workflows.',
        details: ['Process optimization.', 'Tool selection.', 'Efficiency gains.'],
        posterUrl: 'https://i.postimg.cc/9QmjQxJs/23.png',
        gallery: ['https://i.postimg.cc/9QmjQxJs/23.png'],
        icon: '⚙️'
      },
      {
        id: 'research-guide-3',
        title: 'Risk Management',
        subtitle: 'Navigating Pitfalls',
        description: 'Identifying and managing the risks associated with AI-driven legal research.',
        details: ['Hallucination awareness.', 'Bias detection.', 'Confidentiality.'],
        posterUrl: 'https://i.postimg.cc/RZSzZPg5/24.png',
        gallery: ['https://i.postimg.cc/RZSzZPg5/24.png'],
        icon: '🛡️'
      },
      {
        id: 'research-guide-4',
        title: 'The Future of Search',
        subtitle: 'Evolution of Tools',
        description: 'Exploring the trajectory of legal search tools in the age of AI.',
        details: ['Search methodology.', 'Algorithm evolution.', 'Future trends.'],
        posterUrl: 'https://i.postimg.cc/2SkfSH0j/25.png',
        gallery: ['https://i.postimg.cc/2SkfSH0j/25.png'],
        icon: '🚀'
      }
    ]
  },
  {
    id: 'faculty',
    title: 'SLS Faculty Publications',
    subtitle: 'Stanford Scholarship',
    description: 'Selected publications from Stanford Law School faculty on the frontiers of AI and law.',
    coverImage: 'https://i.postimg.cc/gjDQpFLW/1.png',
    link: {
      title: 'Explore More Faculty Publications',
      url: 'https://sites.google.com/law.stanford.edu/ailearninghub/reading-and-literature/selected-faculty-publications-on-ai'
    },
    items: [
      {
        id: 'fac-pub-1',
        title: 'Faculty Scholarship',
        subtitle: 'Featured Work',
        description: 'Cutting-edge legal scholarship exploring the implications of artificial intelligence.',
        details: ['Faculty research.', 'Legal analysis.', 'Technological impact.'],
        posterUrl: 'https://i.postimg.cc/gjDQpFLW/1.png',
        gallery: ['https://i.postimg.cc/gjDQpFLW/1.png'],
        icon: '📝',
        links: [
           { title: 'View All Faculty Publications', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/reading-and-literature/selected-faculty-publications-on-ai' }
        ]
      },
      {
        id: 'fac-pub-2',
        title: 'Governance & Policy',
        subtitle: 'Featured Work',
        description: 'Addressing the regulatory challenges and policy frameworks for emerging AI technologies.',
        details: ['AI Governance.', 'Policy recommendations.', 'Regulatory frameworks.'],
        posterUrl: 'https://i.postimg.cc/05dLDmWn/4.png',
        gallery: ['https://i.postimg.cc/05dLDmWn/4.png'],
        icon: '🏛️',
        links: [
           { title: 'View All Faculty Publications', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/reading-and-literature/selected-faculty-publications-on-ai' }
        ]
      },
      {
        id: 'fac-pub-3',
        title: 'Ethics & Law',
        subtitle: 'Featured Work',
        description: 'Examining the ethical dimensions and legal responsibilities in the age of AI.',
        details: ['Ethical considerations.', 'Legal responsibility.', 'Societal impact.'],
        posterUrl: 'https://i.postimg.cc/5NsTkJMJ/5.png',
        gallery: ['https://i.postimg.cc/5NsTkJMJ/5.png'],
        icon: '⚖️',
        links: [
           { title: 'View All Faculty Publications', url: 'https://sites.google.com/law.stanford.edu/ailearninghub/reading-and-literature/selected-faculty-publications-on-ai' }
        ]
      }
    ]
  },
  {
    id: 'stanford-ai',
    title: 'AI at Stanford',
    subtitle: 'University Ecosystem',
    description: 'Explore the institutes, labs, and initiatives driving AI innovation across the Stanford campus.',
    coverImage: 'https://i.postimg.cc/qBsNPkQ4/2.png',
    items: [
      {
        id: 'liftlab',
        title: 'LiftLab',
        subtitle: 'Law & Infrastructure',
        description: 'Stanford Law School\'s experimental lab focused on the intersection of law, technology, and infrastructure.',
        details: ['Legal innovation.', 'Tech prototyping.', 'Future of law.'],
        posterUrl: 'https://i.postimg.cc/qBsNPkQ4/2.png',
        gallery: ['https://i.postimg.cc/qBsNPkQ4/2.png'],
        icon: '⚖️',
        links: [
          { title: 'Visit LiftLab', url: 'https://law.stanford.edu/liftlab/' }
        ]
      },
      {
        id: 'ai-playground',
        title: 'AI Playground',
        subtitle: 'Secure GenAI Access',
        description: 'Stanford\'s internal, secure platform for accessing generative AI models like GPT-4, keeping institutional data safe.',
        details: ['Secure access.', 'Data privacy.', 'Multiple models.'],
        posterUrl: 'https://i.postimg.cc/FFyYM9GX/5.png',
        gallery: ['https://i.postimg.cc/FFyYM9GX/5.png'],
        icon: '🔒',
        links: [
          { title: 'Launch AI Playground', url: 'https://uit.stanford.edu/aiplayground' }
        ]
      },
      {
        id: 'ai-tinkery',
        title: 'AI Tinkery',
        subtitle: 'Community Makerspace',
        description: 'A dedicated space for the Stanford community to explore, build, and experiment with hands-on AI tools and projects.',
        details: ['Hands-on experimentation.', 'Community building.', 'Creative prototyping.'],
        posterUrl: 'https://i.postimg.cc/gcVxCY40/6.png',
        gallery: ['https://i.postimg.cc/gcVxCY40/6.png'],
        icon: '🛠️',
        links: [
          { title: 'Visit AI Tinkery', url: 'https://ai-tinkery.stanford.edu/' }
        ]
      },
      {
        id: 'hai',
        title: 'Stanford HAI',
        subtitle: 'Human-Centered AI',
        description: 'The Institute for Human-Centered AI (HAI) advances AI research, education, policy, and practice to improve the human condition.',
        details: ['Interdisciplinary research.', 'Policy impact.', 'Human-centered design.'],
        posterUrl: 'https://i.postimg.cc/FFyYM9GR/7.png',
        gallery: ['https://i.postimg.cc/FFyYM9GR/7.png'],
        icon: '🏛️',
        links: [
          { title: 'Visit Stanford HAI', url: 'https://hai.stanford.edu/' }
        ]
      }
    ]
  },
  {
    id: 'reading',
    title: 'Selected Reading',
    subtitle: 'Curated Collection',
    description: 'How to avoid "AI Slop" and find human-made content.',
    coverImage: 'https://i.postimg.cc/fR8QtxPR/Don-t-Read-AI-Slop-Redesign.png',
    items: [
      {
        id: 'slop',
        title: 'Don\'t Read "Slop"',
        subtitle: 'Spotting AI Books',
        description: 'Trace the author, sample the prose, check citations, and cross-compare reviews.',
        details: ['Repetitive prose.', 'Fake citations.', 'No author footprint.'],
        posterUrl: 'https://i.postimg.cc/fR8QtxPR/Don-t-Read-AI-Slop-Redesign.png',
        gallery: [
          'https://i.postimg.cc/fR8QtxPR/Don-t-Read-AI-Slop-Redesign.png', 
          'https://i.postimg.cc/T3dX3kCC/10.png'
        ],
        videoUrl: 'https://drive.google.com/file/d/1xGFaZKPCBhWyC4MP03DLZP5OcdXbIEng/preview',
        books: [
          { title: "The Digitalist Papers", author: "Erik Brynjolfsson et al.", publisher: "Stanford Digital Economy Lab", date: "September 2024", link: "https://searchworks.stanford.edu/view/in00000192250" },
          { title: "Co-Intelligence", author: "Ethan Mollick", publisher: "Portfolio", date: "April 2024", link: "https://searchworks.stanford.edu/view/in00000386467" },
          { title: "The Emergent Mind", author: "Karen Donovan & Ian McGilchrist", publisher: "Basic Books", date: "July 2025", link: "https://searchworks.stanford.edu/view/in00000861296" },
          { title: "The Worlds I See", author: "Fei-Fei Li", publisher: "Flatiron Books", date: "November 2023", link: "https://searchworks.stanford.edu/view/in00000026318" },
          { title: "AI Ethics: A Textbook", author: "Paolo Boddington", publisher: "Springer", date: "April 2024", link: "https://searchworks.stanford.edu/view/in00000861292" },
          { title: "The AI Snake Oil", author: "Arvind Narayanan & Sayash Kapoor", publisher: "Princeton University Press", date: "September 2024" },
          { title: "The AI Con", author: "Emily M. Bender & Timnit Gebru", publisher: "MIT Press", date: "May 2025", link: "https://searchworks.stanford.edu/view/in00000861293" },
          { title: "Empire of AI", author: "Karen Hao", publisher: "Penguin Press", date: "May 2025", link: "https://searchworks.stanford.edu/view/in00000861297" },
          { title: "AI Superpowers", author: "Kai-Fu Lee", publisher: "Houghton Mifflin Harcourt", date: "September 2018", link: "https://searchworks.stanford.edu/view/in00000861294" },
          { title: "AI Valley", author: "Gary Rivlin", publisher: "Penguin Press", date: "March 2025", link: "https://searchworks.stanford.edu/view/in00000433686" },
          { title: "A Brief History of Intelligence", author: "Max Bennett", publisher: "Mariner Books", date: "October 2023", link: "https://searchworks.stanford.edu/view/in00000861295" },
          { title: "Why Machines Learn", author: "Anil Ananthaswamy", publisher: "Dutton", date: "July 2024", link: "https://searchworks.stanford.edu/view/in00000861303" },
          { title: "Teaching with AI", author: "José Antonio Bowen", publisher: "Johns Hopkins University Press", date: "April 2024", link: "https://searchworks.stanford.edu/view/in00000895840" },
          { title: "AI and the Legal Profession", author: "Francesca Tamamaha (ed.)", publisher: "Globe Law and Business", date: "September 2025", link: "https://searchworks.stanford.edu/view/in00000451305" },
          { title: "The Cambridge Handbook...", author: "Natasha A. Smuha (ed.)", publisher: "Cambridge University Press", date: "February 2025", link: "https://searchworks.stanford.edu/view/in00000426630" },
          { title: "Nexus", author: "Yuval Noah Harari", publisher: "Random House", date: "September 2024", link: "https://searchworks.stanford.edu/view/in00000861299" },
          { title: "The Alignment Problem", author: "Brian Christian", publisher: "W. W. Norton & Company", date: "October 2020", link: "https://searchworks.stanford.edu/view/13808091" },
          { title: "The Singularity Is Nearer", author: "Ray Kurzweil", publisher: "Viking", date: "June 2024", link: "https://searchworks.stanford.edu/?search_field=search&q=The+Singularity+Is+Nearer%3A+When+We+Merge+with+AI" },
          { title: "How to Think About AI", author: "Richard Susskind", publisher: "Oxford University Press", date: "May 2025", link: "https://searchworks.stanford.edu/view/in00000861298" },
          { title: "The Thinking Machine", author: "Stephen Witt", publisher: "Viking", date: "April 2025", link: "https://searchworks.stanford.edu/view/in00000423370" },
          { title: "The Optimist", author: "Keach Hagey", publisher: "W. W. Norton & Company", date: "May 2025", link: "https://searchworks.stanford.edu/view/in00000861300" },
          { title: "These Strange New Minds", author: "Christopher Summerfield", publisher: "Viking", date: "March 2025", link: "https://searchworks.stanford.edu/view/in00000861329" },
          { title: "The Coming Wave", author: "Mustafa Suleyman", publisher: "Crown", date: "April 2025", link: "https://searchworks.stanford.edu/view/in00000861313" },
          { title: "Atlas of AI", author: "Kate Crawford", publisher: "Yale University Press", date: "August 2022", link: "https://searchworks.stanford.edu/view/in00000434680" },
          { title: "Brave New Words", author: "Salman Khan", publisher: "Viking", date: "May 2024", link: "https://searchworks.stanford.edu/view/in00000861311" },
          { title: "Searches: Selfhood...", author: "Vauhini Vara", publisher: "Pantheon", date: "April 2025", link: "https://searchworks.stanford.edu/view/in00000409949" },
          { title: "Digitalization and AI in Courts", author: "Fernando Esteban et al.", publisher: "Oxford University Press", date: "September 2025", link: "https://searchworks.stanford.edu/view/in00000861316" },
          { title: "Generative AI and Libraries", author: "Michael Hanegan", publisher: "ALA Editions Core", date: "2025", link: "https://searchworks.stanford.edu/view/in00000861319" },
          { title: "Shared Wisdom", author: "Alex Pentland", publisher: "MIT Press", date: "November 2025", link: "https://searchworks.stanford.edu/view/in00000861328" },
          { title: "Power and Progress", author: "Daron Acemoglu", publisher: "Public Affairs", date: "September 2024", link: "https://searchworks.stanford.edu/view/14859366" },
          { title: "The AI and Data Revolution", author: "Martin De Saulles", publisher: "Facet Publishing", date: "2025", link: "https://searchworks.stanford.edu/view/in00000869722" }
        ],
        icon: '📚'
      }
    ]
  }
];

// Flatten for AI context
const FLATTENED_DATA = EXHIBIT_CATEGORIES.flatMap(cat => cat.items.map(item => ({
  ...item,
  category: cat.title
})));

export const SYSTEM_INSTRUCTION = `
You are the "AI Curator", the digital curator for the Robert Crown Law Library's interactive AI display.
You are helpful, knowledgeable about law and technology, and concise.
You have access to the following exhibit data:
${JSON.stringify(FLATTENED_DATA)}

Answer questions based on this data. 
If asked about P.A.U.S.E., explain the 5 steps (Pinpoint, Assess, Use, Self-Assess, Enhance).
If asked about V.E.T., explain Verify, Evaluate, Test.
If asked about the "New York Times Rule", explain it exactly as defined in the exhibit.
If asked about "Slop", explain the red flags for AI-generated books.
Keep answers brief and strictly related to the exhibit content or general legal AI ethics.
`;