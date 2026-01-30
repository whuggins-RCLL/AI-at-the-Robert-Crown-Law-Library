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
          { 
            title: "The Digitalist Papers", 
            author: "Erik Brynjolfsson et al.", 
            publisher: "Stanford Digital Economy Lab", 
            date: "September 2024", 
            isbn: "9798991279307",
            link: "https://searchworks.stanford.edu/view/in00000192250", 
            description: "Modeled on America's founding Federalist Papers, this ambitious policy essay series convenes leading experts from economics, law, technology, and political science to reimagine governance in the age of AI. Volume 1 explores how artificial intelligence intersects with democracy, offering a pluralistic, interdisciplinary roadmap for navigating transformative change."
          },
          { 
            title: "Co-Intelligence: Living and Working with AI", 
            author: "Ethan Mollick", 
            publisher: "Portfolio", 
            date: "April 2024", 
            isbn: "9780593716717",
            link: "https://searchworks.stanford.edu/view/in00000386467",
            customCoverUrl: "https://i.postimg.cc/Y0bVjbJq/Co-intelligence.jpg",
            description: "An instant New York Times bestseller from Wharton's leading voice on AI, this guide offers the definitive practical playbook for working, learning, and living alongside generative AI. Mollick urges readers to engage with AI as co-worker, co-teacher, and coach, providing dozens of real-world examples while challenging us to harness AI's power without losing our human identity."
          },
          { 
            title: "The Emergent Mind: How Intelligence Arises in People and Machines", 
            author: "Gaurav Suri and Jay McClelland", 
            publisher: "Basic Books", 
            date: "October 2025", 
            isbn: "9781541605282",
            link: "https://searchworks.stanford.edu/view/in00000861296",
            customCoverUrl: "https://i.postimg.cc/05wLp1wz/Emergent-Mind.jpg",
            description: "This paradigm-shifting work explores how human and artificial minds work through neural networks, asking fundamental questions about the nature of intelligence itself. The book illuminates the surprising parallels between biological and digital cognition. Readers fascinated by the intersection of neuroscience and AI will find fresh insights into what makes minds emerge."
          },
          { 
            title: "The Worlds I See: Curiosity, Exploration, and Discovery at the Dawn of AI", 
            author: "Fei-Fei Li", 
            publisher: "Flatiron Books", 
            date: "November 2023", 
            isbn: "9781250897930",
            link: "https://searchworks.stanford.edu/view/in00000026318",
            description: "Named one of Barack Obama's recommended books on AI and a Financial Times Best Book of 2023, this moving memoir traces the improbable journey of a Chinese immigrant who became one of AI's most influential scientists. Dr. Li chronicles her creation of ImageNet, the dataset that catalyzed modern deep learning, while advocating powerfully for a human-centered, ethical approach to technological transformation."
          },
          { 
            title: "AI Ethics: A Textbook", 
            author: "Paula Boddington", 
            publisher: "Springer", 
            date: "April 2024", 
            isbn: "9789811993848",
            link: "https://searchworks.stanford.edu/view/in00000861292",
            customCoverUrl: "https://i.postimg.cc/MHVNx1SC/AI-Ethics-A-Textbook.jpg",
            description: "This comprehensive textbook bridges theory and practice to explore the critical ethical challenges of artificial intelligence. Boddington examines how AI forces us to address fundamental questions about human life, value, and meaning, covering topics from philosophical foundations to practical controversies in work, superintelligence, and moral machines."
          },
          { 
            title: "AI Snake Oil: What Artificial Intelligence Can Do, What It Can't, and How to Tell the Difference", 
            author: "Arvind Narayanan and Sayash Kapoor", 
            publisher: "Princeton University Press", 
            date: "September 2024", 
            isbn: "9780691249131",
            link: "https://searchworks.stanford.edu/view/in00000861293",
            customCoverUrl: "https://i.postimg.cc/CMqWjpq5/AI-Snake-Oil.jpg",
            description: "From two of TIME's 100 Most Influential People in AI comes an essential guide for separating AI hype from reality. Computer scientists Narayanan and Kapoor explain why much of 'predictive AI' is snake oil, offering products that don't work and never will, while providing nuanced analysis of generative AI's genuine potential."
          },
          { 
            title: "The AI Con: How to Fight Big Tech's Hype and Create the Future We Want", 
            author: "Emily M. Bender and Alex Hanna", 
            publisher: "Harper", 
            date: "May 2025", 
            isbn: "9780063418561",
            link: "https://searchworks.stanford.edu/view/in00000861293",
            description: "A sharp, accessible takedown of artificial intelligence hype by two of tech's most prominent AI critics. Known for their influential 'Stochastic Parrots' paper, Bender and Hanna expose how tech corporations use AI narratives to justify data theft, surveillance capitalism, and labor devaluation."
          },
          { 
            title: "Empire of AI: Dreams and Nightmares in Sam Altman's OpenAI", 
            author: "Karen Hao", 
            publisher: "Penguin Press", 
            date: "May 2025", 
            isbn: "9780593657508",
            link: "https://searchworks.stanford.edu/view/in00000861297",
            description: "An instant New York Times bestseller and National Book Critics Circle Award finalist from one of the few journalists ever granted inside access to OpenAI. Drawing on 300+ interviews and seven years of reporting, Hao delivers a deeply researched investigation into the company at the center of the AI revolution, including the never before told story of Sam Altman's firing and return."
          },
          { 
            title: "AI Valley: Microsoft, Google, and the Trillion-Dollar Race to Cash In on Artificial Intelligence", 
            author: "Gary Rivlin", 
            publisher: "Harper Business", 
            date: "March 2025", 
            isbn: "9780063347496",
            link: "https://searchworks.stanford.edu/view/in00000433686",
            customCoverUrl: "https://i.postimg.cc/yxctB0KH/AI-Valley.jpg",
            description: "Pulitzer Prize-winning investigative journalist Rivlin embeds with Silicon Valley's top AI players during the explosive post-ChatGPT era, following Reid Hoffman, Sam Altman, and Mustafa Suleyman as startups and tech giants collide. Weaving together the fascinating history of AI's evolution with real-time reporting on 2023 and 2024 breakthroughs and failures."
          },
          { 
            title: "AI Superpowers: China, Silicon Valley, and the New World Order", 
            author: "Kai-Fu Lee", 
            publisher: "Houghton Mifflin Harcourt", 
            date: "September 2018", 
            isbn: "9781328546395",
            link: "https://searchworks.stanford.edu/view/in00000861294",
            description: "A prescient and influential analysis of the US-China AI competition from one of the world's foremost AI pioneers. Lee argues China has caught up to America through its vast data resources, aggressive startup culture, and government support. Beyond geopolitics, Lee provides a clear-eyed assessment of which jobs will be affected and offers a blueprint for human coexistence with AI."
          },
          { 
            title: "A Brief History of Intelligence: Evolution, AI, and the Five Breakthroughs That Made Our Brains", 
            author: "Max Bennett", 
            publisher: "Mariner Books", 
            date: "October 2023", 
            isbn: "9780063286344",
            link: "https://searchworks.stanford.edu/view/in00000861295",
            description: "A paradigm-shifting work bridging neuroscience and artificial intelligence that asks: why can AI beat grandmasters at chess but can't load a dishwasher? Bennett chronicles the billion-year evolutionary story of the brain through five key 'breakthroughs,' revealing where modern AI has matched or surpassed human capabilities and where critical gaps remain."
          },
          { 
            title: "Why Machines Learn: The Elegant Math Behind Modern AI", 
            author: "Anil Ananthaswamy", 
            publisher: "Dutton", 
            date: "July 2024", 
            isbn: "9780593185742",
            link: "https://searchworks.stanford.edu/view/in00000861303",
            description: "Award-winning science writer Ananthaswamy demystifies the mathematical foundations powering today's AI revolution, from 17th-century calculus and linear algebra to modern deep learning architectures. This 'Next Big Idea Club Must-Read' weaves together the colorful history of machine learning pioneers with accessible explanations of fundamental algorithms."
          },
          { 
            title: "Teaching with AI: A Practical Guide to a New Era of Human Learning", 
            author: "José Antonio Bowen and C. Edward Watson", 
            publisher: "Johns Hopkins University Press", 
            date: "April 2024", 
            isbn: "9781421449227",
            link: "https://searchworks.stanford.edu/view/in00000895840",
            description: "This indispensable guide equips educators with research-backed strategies for harnessing AI as a powerful teaching tool while navigating critical issues of academic integrity, cheating, and the transformation of creativity and authorship. Bowen and Watson offer practical suggestions from interactive learning techniques to advanced assessment strategies."
          },
          { 
            title: "The Alignment Problem: Machine Learning and Human Values", 
            author: "Brian Christian", 
            publisher: "W. W. Norton & Company", 
            date: "October 2020", 
            isbn: "9780393635829",
            link: "https://searchworks.stanford.edu/view/13808091",
            description: "In this meticulously researched and 'riveting' account, bestselling author Brian Christian explores the fundamental challenge of creating AI systems that do what we actually want, examining how algorithms inherit our biases and make consequential decisions about bail, mortgages, and employment."
          },
          { 
            title: "Nexus: A Brief History of Information Networks from the Stone Age to AI", 
            author: "Yuval Noah Harari", 
            publisher: "Random House", 
            date: "September 2024", 
            isbn: "9780593734223",
            link: "https://searchworks.stanford.edu/view/in00000861299",
            description: "From the author of Sapiens comes this #1 New York Times bestseller that traces how information networks, from oral traditions and sacred texts to bureaucracies and AI, have shaped human societies and now threaten our very existence. Harari examines the complex relationship between information and truth, warning of urgent choices we face as 'non-human intelligence threatens to annihilate us.'"
          },
          { 
            title: "The Cambridge Handbook of the Law, Ethics and Policy of Artificial Intelligence", 
            author: "Nathalie A. Smuha (ed.)", 
            publisher: "Cambridge University Press", 
            date: "February 2025", 
            isbn: "9781009367813",
            link: "https://searchworks.stanford.edu/view/in00000426630",
            customCoverUrl: "https://i.postimg.cc/sfhtpChp/The-Cambridge-Handbook.jpg",
            description: "This comprehensive, interdisciplinary handbook provides essential reading for understanding AI's legal, ethical, and policy implications, with particular focus on European regulatory frameworks including the EU AI Act. Drawing on contributions from experts across law, philosophy, and technology, the volume covers AI applications in healthcare, finance, education, media, labor, and law enforcement."
          },
          { 
            title: "AI and the Legal Profession: Transforming the Future of Law (Second Edition)", 
            author: "Francesca Ramadan (ed.)", 
            publisher: "Globe Law and Business", 
            date: "June 2025", 
            isbn: "9781837230884",
            link: "https://searchworks.stanford.edu/view/in00000451305",
            customCoverUrl: "https://i.postimg.cc/prz4xKvN/AI-and-the-Legal-Profession.jpg",
            description: "This comprehensive second edition serves as an essential guide for legal professionals navigating the rapidly evolving landscape of AI in law practice. Written by leading experts at the intersection of AI and law, the book explores how artificial intelligence is revolutionizing legal research, document review, and predictive analytics while addressing critical concerns about ethics, privacy, and algorithmic bias."
          },
          { 
            title: "The Singularity Is Nearer: When We Merge with AI", 
            author: "Ray Kurzweil", 
            publisher: "Viking", 
            date: "June 2024", 
            isbn: "9780399562761",
            link: "https://searchworks.stanford.edu/?search_field=search&q=The+Singularity+Is+Nearer%3A+When+We+Merge+with+AI",
            description: "In this long-awaited sequel to his influential 2005 work The Singularity Is Near, Google's legendary futurist presents an updated vision of humanity's technological future, reaffirming his predictions that AI will reach human-level intelligence by 2029 and that humans will merge with machines by 2045."
          },
          { 
            title: "How To Think About AI: A Guide for the Perplexed", 
            author: "Richard Susskind", 
            publisher: "Oxford University Press", 
            date: "March 2025", 
            isbn: "9780198941927",
            link: "https://searchworks.stanford.edu/view/in00000861298",
            customCoverUrl: "https://i.postimg.cc/qB398H36/How-to-Think-about-AI.jpg",
            description: "Drawing on four decades of work in artificial intelligence, legal technology pioneer Richard Susskind offers a remarkably accessible and balanced guide that cuts through the confusion surrounding AI. Rather than providing answers, Susskind equips readers with the frameworks and vocabulary needed to think critically about AI's capabilities, limitations, risks, and regulatory challenges."
          },
          { 
            title: "The Optimist: Sam Altman, OpenAI, and the Race to Invent the Future", 
            author: "Keach Hagey", 
            publisher: "W. W. Norton & Company", 
            date: "May 2025", 
            isbn: "9781324075967",
            link: "https://searchworks.stanford.edu/view/in00000861300",
            description: "Wall Street Journal reporter Hagey delivers the first major biography of Sam Altman, the enigmatic leader driving the AI revolution as CEO of OpenAI. Based on more than 250 interviews, including extensive time with Altman himself, Hagey charts his rise from precocious childhood in St. Louis through Y Combinator to building OpenAI."
          },
          { 
            title: "The Thinking Machine: Jensen Huang, Nvidia, and the World's Most Coveted Microchip", 
            author: "Stephen Witt", 
            publisher: "Viking", 
            date: "April 2025", 
            isbn: "9780593832691",
            link: "https://searchworks.stanford.edu/view/in00000423370",
            description: "Through unprecedented access to Jensen Huang and Nvidia's inner circle, acclaimed journalist Witt tells the riveting story of how a video game chip company became the engine of the AI revolution and, in June 2024, the most valuable corporation on Earth. This is essential reading for understanding the hardware foundations powering AI."
          },
          { 
            title: "These Strange New Minds: How AI Learned to Talk and What It Means", 
            author: "Christopher Summerfield", 
            publisher: "Viking", 
            date: "March 2025", 
            isbn: "9780593831717",
            link: "https://searchworks.stanford.edu/view/in00000861329",
            customCoverUrl: "https://i.postimg.cc/ryrvS2rG/These-Strange-New-Minds.jpg",
            description: "A neuroscientist and AI researcher with dual expertise offers readers the definitive guide to understanding Large Language Models like ChatGPT and Claude. Summerfield masterfully weaves together cognitive science, linguistics, and philosophy to explain how these 'talking machines' work, whether they can truly think, and what their emergence means for humanity."
          },
          { 
            title: "The Coming Wave: Technology, Power, and the Twenty-first Century's Greatest Dilemma", 
            author: "Mustafa Suleyman with Michael Bhaskar", 
            publisher: "Crown", 
            date: "September 2023", 
            isbn: "9780593593950",
            link: "https://searchworks.stanford.edu/view/in00000861313",
            customCoverUrl: "https://i.postimg.cc/xjzWKVzv/The-Coming-Wave.jpg",
            description: "From a co-founder of DeepMind and current CEO of Microsoft AI comes an urgent insider's warning about the dual-edged nature of transformative technologies. Suleyman argues that AI and synthetic biology will create unprecedented prosperity while threatening the very foundations of the nation-state."
          },
          { 
            title: "Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence", 
            author: "Kate Crawford", 
            publisher: "Yale University Press", 
            date: "April 2021", 
            isbn: "9780300209570",
            link: "https://searchworks.stanford.edu/view/in00000434680",
            description: "A landmark critical examination that reveals AI as neither artificial nor particularly intelligent, but rather a technology of extraction, from lithium mines to underpaid data labelers to the surveillance apparatus. Drawing on a decade of fieldwork across warehouses, mines, and data centers, Crawford creates an indispensable map showing how AI concentrates power while depleting planetary resources and human labor."
          },
          { 
            title: "Brave New Words: How AI Will Revolutionize Education (and Why That's a Good Thing)", 
            author: "Salman Khan", 
            publisher: "Viking", 
            date: "May 2024", 
            isbn: "9780593656952",
            link: "https://searchworks.stanford.edu/view/in00000861311",
            customCoverUrl: "https://i.postimg.cc/h4dH9Rdj/Brave-New-Words.jpg",
            description: "The founder of Khan Academy provides the first comprehensive guide to the AI revolution in education, offering a hopeful yet realistic roadmap for teachers, parents, and students navigating this transformative moment. Rather than fearing ChatGPT, Khan shows how AI can personalize learning, adapt to individual student needs, and democratize access to world-class tutoring."
          },
          { 
            title: "Searches: Selfhood in the Digital Age", 
            author: "Vauhini Vara", 
            publisher: "Pantheon", 
            date: "April 2025", 
            isbn: "9780593701522",
            link: "https://searchworks.stanford.edu/view/in00000409949",
            customCoverUrl: "https://i.postimg.cc/bYtKQftt/Searches-Selfhood-in-the-digital-age.jpg",
            description: "A genre-defying blend of memoir, journalism, and experimental writing that interrogates our complicated relationship with technology and AI through the lens of profound personal loss. Pulitzer Prize finalist Vara gained viral attention for asking a ChatGPT predecessor to help write about her sister's death; now she expands that experiment into a searching examination of how technology companies have both fulfilled and exploited our desire for connection."
          },
          { 
            title: "Digitalization and Artificial Intelligence in Courts: Opportunities and Challenges", 
            author: "Fernando Esteban de la Rosa et al. (eds.)", 
            publisher: "Oxford University Press", 
            date: "September 2025", 
            isbn: "9780198918721",
            link: "https://searchworks.stanford.edu/view/in00000861316",
            customCoverUrl: "https://i.postimg.cc/nVD6vfDL/Digitization-and-Artifical-Intelligence-in-Courts.jpg",
            description: "This authoritative edited volume examines how digitalization and artificial intelligence are transforming global justice systems, from online dispute resolution to the controversial concept of 'AI judges.' With contributions from international legal scholars and a foreword by Lord Briggs of the UK Supreme Court, the book provides rigorous analysis of algorithmic bias, data privacy, and cybersecurity challenges."
          },
          { 
            title: "Shared Wisdom: Cultural Evolution in the Age of AI", 
            author: "Alex Pentland", 
            publisher: "MIT Press", 
            date: "November 2025", 
            isbn: "9780262050999",
            link: "https://searchworks.stanford.edu/view/in00000861328",
            customCoverUrl: "https://i.postimg.cc/05wLp1wD/Shared-Wisdom.jpg",
            description: "Renowned data scientist Alex Pentland argues that humanity's greatest breakthroughs, from the Enlightenment to the Scientific Revolution, emerged not from individual genius but from cultural inventions that accelerated collective wisdom. Drawing on his dual expertise in social science and technology, Pentland offers a compelling framework for ensuring AI amplifies rather than replaces human deliberation."
          },
          { 
            title: "Generative AI and Libraries: Claiming Our Place in the Center of a Shared Future", 
            author: "Michael Hanegan and Chris Rosser", 
            publisher: "ALA Editions/Core", 
            date: "June 2025", 
            isbn: "9798892553100",
            link: "https://searchworks.stanford.edu/view/in00000861319",
            customCoverUrl: "https://i.postimg.cc/gcZfvbZR/Generative-AI-and-Libraries.jpg",
            description: "This timely guide makes a compelling case that libraries are uniquely positioned to lead AI's ethical and human-centered integration within communities, serving as trusted stewards of knowledge in the 'Age of Intelligence.' Blending foundational principles with practical frameworks, the authors provide actionable strategies for evaluating AI tools and navigating ethical considerations."
          },
          { 
            title: "Power and Progress: Our Thousand-Year Struggle Over Technology and Prosperity", 
            author: "Daron Acemoglu and Simon Johnson", 
            publisher: "PublicAffairs", 
            date: "May 2023", 
            isbn: "9781541702530",
            link: "https://searchworks.stanford.edu/view/14859366",
            description: "In this landmark work by two Nobel Prize-winning MIT economists, Acemoglu and Johnson deliver a sweeping thousand-year history demonstrating that technological progress doesn't automatically benefit everyone. It depends on political, social, and economic choices. From medieval cathedrals built while peasants starved to today's AI-driven automation displacing workers, they debunk techno-optimism and provide a manifesto for redirecting innovation toward shared prosperity."
          },
          { 
            title: "The AI and Data Revolution: Understanding the New Data Landscape", 
            author: "Martin De Saulles", 
            publisher: "Facet Publishing", 
            date: "June 2025", 
            isbn: "9781783307081",
            link: "https://searchworks.stanford.edu/view/in00000869722",
            customCoverUrl: "https://i.postimg.cc/1RqLp1qD/The-AI-and-Data-Revolution.jpg",
            description: "Technology analyst Martin De Saulles provides an authoritative guide to understanding how AI-driven innovations represent a fundamental step-change in how organizations extract value from data. Tracing 30 years of evolution from mass media and the internet through mobile computing, social networks, and generative AI, this book combines established frameworks with real-world case studies."
          }
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