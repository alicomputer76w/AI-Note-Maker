// ===== GLOBAL VARIABLES =====
let currentNotes = null;
let savedNotes = JSON.parse(localStorage.getItem('aiNotesSaved')) || [];

// ===== DAILY LEARNING TIPS =====
const learningTips = [
    "Use the Pomodoro Technique: Study for 25 minutes, then take a 5-minute break to improve focus and retention.",
    "Create mind maps to visualize connections between different concepts and improve understanding.",
    "Teach someone else what you've learned - it's one of the most effective ways to reinforce knowledge.",
    "Use active recall: Test yourself regularly instead of just re-reading notes.",
    "Study in different locations to create multiple memory cues and improve recall.",
    "Break down complex topics into smaller, manageable chunks for better comprehension.",
    "Use mnemonics and memory techniques to remember difficult information.",
    "Review material within 24 hours of learning it to strengthen memory consolidation.",
    "Practice spaced repetition: Review information at increasing intervals over time.",
    "Connect new information to what you already know to build stronger neural pathways.",
    "Use multiple senses when studying: read aloud, write notes, and create visual aids.",
    "Take regular breaks to prevent mental fatigue and maintain concentration.",
    "Study during your peak energy hours when your brain is most alert.",
    "Create a dedicated study space free from distractions.",
    "Use the Feynman Technique: Explain concepts in simple terms as if teaching a child."
];

// ===== AI NOTE GENERATION SIMULATION =====
class AINotesGenerator {
    constructor() {
        this.templates = {
            summary: this.generateSummary.bind(this),
            bullets: this.generateBulletPoints.bind(this),
            mcqs: this.generateMCQs.bind(this),
            flashcards: this.generateFlashcards.bind(this)
        };
    }

    async generateNotes(topic) {
        // Simulate AI processing delay
        await this.delay(2000 + Math.random() * 1000);
        
        const notes = {
            topic: topic,
            timestamp: new Date().toISOString(),
            summary: this.generateSummary(topic),
            bullets: this.generateBulletPoints(topic),
            mcqs: this.generateMCQs(topic),
            flashcards: this.generateFlashcards(topic)
        };

        return notes;
    }

    generateSummary(topic) {
        const topicLower = topic.toLowerCase();
        
        // Topic-specific content generation
        if (topicLower.includes('photosynthesis')) {
            return `Photosynthesis is the biological process by which plants, algae, and some bacteria convert light energy (usually from sunlight) into chemical energy stored in glucose. This process occurs primarily in the chloroplasts of plant cells and involves two main stages: the light-dependent reactions (occurring in the thylakoids) and the light-independent reactions or Calvin cycle (occurring in the stroma). The overall equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Photosynthesis is crucial for life on Earth as it produces oxygen and serves as the foundation of most food chains.`;
        } else if (topicLower.includes('world war') || topicLower.includes('ww1') || topicLower.includes('ww2')) {
            return `World War I (1914-1918) and World War II (1939-1945) were two of the most significant conflicts in human history. WWI was triggered by the assassination of Archduke Franz Ferdinand and involved complex alliance systems, trench warfare, and new military technologies. WWII began with Germany's invasion of Poland and expanded globally, featuring the Holocaust, atomic weapons, and ultimately reshaping the world order. Both wars resulted in massive casualties, technological advances, and profound social and political changes that continue to influence international relations today.`;
        } else if (topicLower.includes('python') || topicLower.includes('programming')) {
            return `Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability with its use of significant whitespace. It supports multiple programming paradigms including procedural, object-oriented, and functional programming. Python is widely used in web development, data science, artificial intelligence, automation, and scientific computing. Key features include dynamic typing, automatic memory management, extensive standard library, and a large ecosystem of third-party packages available through pip.`;
        } else if (topicLower.includes('shakespeare') || topicLower.includes('hamlet') || topicLower.includes('romeo')) {
            return `William Shakespeare (1564-1616) is widely regarded as the greatest writer in the English language and the world's greatest dramatist. His works include 37 plays and 154 sonnets that explore themes of love, power, jealousy, betrayal, the foolishness of humans, and the spectrum of human emotion. Famous plays include "Hamlet," "Romeo and Juliet," "Macbeth," and "A Midsummer Night's Dream." Shakespeare's influence on literature, language, and culture is immeasurable, with his works continuing to be performed, adapted, and studied worldwide over 400 years after his death.`;
        } else if (topicLower.includes('cell') || topicLower.includes('biology') || topicLower.includes('mitosis')) {
            return `Cell biology is the study of cells, their structure, function, and behavior. Cells are the basic units of life and can be prokaryotic (without a nucleus) or eukaryotic (with a nucleus). Key cellular components include the cell membrane, cytoplasm, DNA, ribosomes, and in eukaryotes, organelles like mitochondria, endoplasmic reticulum, and Golgi apparatus. Cellular processes include metabolism, growth, reproduction through mitosis or meiosis, and response to environmental stimuli. Understanding cell biology is fundamental to medicine, genetics, and biotechnology.`;
        } else if (topicLower.includes('math') || topicLower.includes('algebra') || topicLower.includes('calculus')) {
            return `Mathematics is the abstract science of number, quantity, and space, either as abstract concepts (pure mathematics) or as applied to other disciplines (applied mathematics). Key branches include arithmetic, algebra, geometry, trigonometry, calculus, and statistics. Algebra deals with symbols and rules for manipulating those symbols, while calculus focuses on rates of change and accumulation. Mathematics is essential in science, engineering, economics, and technology, providing tools for modeling, analysis, and problem-solving in virtually every field of human endeavor.`;
        } else if (topicLower.includes('climate') || topicLower.includes('global warming') || topicLower.includes('environment')) {
            return `Climate change refers to long-term shifts in global temperatures and weather patterns. While climate variations are natural, scientific evidence shows that human activities, particularly burning fossil fuels, have been the dominant driver of climate change since the 1950s. This has led to increased greenhouse gas concentrations, rising global temperatures, melting ice caps, rising sea levels, and more frequent extreme weather events. Addressing climate change requires global cooperation, renewable energy adoption, sustainable practices, and policy changes to reduce greenhouse gas emissions and adapt to changing conditions.`;
        } else {
            // Generic but topic-aware summary
            return `${topic} is an important subject that encompasses various concepts, principles, and applications. Understanding ${topic} requires studying its fundamental components, historical development, and practical implications. Key aspects include theoretical foundations, real-world applications, and current research developments. Students should focus on core concepts, practice problem-solving, and connect theoretical knowledge with practical examples. Regular review and active engagement with the material will help develop a comprehensive understanding of ${topic} and its significance in the broader context of learning and application.`;
        }
    }

    generateBulletPoints(topic) {
        const topicLower = topic.toLowerCase();
        
        // Topic-specific bullet points
        if (topicLower.includes('photosynthesis')) {
            return [
                'Light-dependent reactions occur in thylakoids and produce ATP and NADPH',
                'Calvin cycle takes place in stroma and fixes CO₂ into glucose',
                'Chlorophyll absorbs light energy, primarily red and blue wavelengths',
                'Oxygen is released as a byproduct of water splitting',
                'Process requires carbon dioxide, water, and sunlight',
                'Produces glucose which serves as energy storage for plants',
                'Essential for oxygen production in Earth\'s atmosphere',
                'Foundation of most food chains and ecosystems'
            ];
        } else if (topicLower.includes('world war') || topicLower.includes('ww1') || topicLower.includes('ww2')) {
            return [
                'WWI (1914-1918) caused by complex alliance systems and nationalism',
                'Trench warfare characterized the Western Front',
                'WWII (1939-1945) began with Germany\'s invasion of Poland',
                'Holocaust resulted in systematic murder of 6 million Jews',
                'Atomic bombs dropped on Hiroshima and Nagasaki ended WWII',
                'Both wars led to massive technological advancements',
                'Resulted in formation of League of Nations and later UN',
                'Changed global power structure and colonial systems'
            ];
        } else if (topicLower.includes('python') || topicLower.includes('programming')) {
            return [
                'High-level, interpreted programming language',
                'Emphasizes code readability and simplicity',
                'Supports object-oriented, procedural, and functional programming',
                'Extensive standard library and third-party packages',
                'Dynamic typing and automatic memory management',
                'Popular for web development, data science, and AI',
                'Cross-platform compatibility across operating systems',
                'Large, active community and comprehensive documentation'
            ];
        } else if (topicLower.includes('shakespeare') || topicLower.includes('hamlet') || topicLower.includes('romeo')) {
            return [
                'Wrote 37 plays and 154 sonnets during his career',
                'Explored universal themes of love, power, and human nature',
                'Created complex characters with psychological depth',
                'Invented many words and phrases still used today',
                'Works divided into comedies, histories, and tragedies',
                'Globe Theatre was his primary performance venue',
                'Influenced by classical literature and contemporary events',
                'Works continue to be adapted and performed worldwide'
            ];
        } else if (topicLower.includes('cell') || topicLower.includes('biology') || topicLower.includes('mitosis')) {
            return [
                'Cells are the basic structural and functional units of life',
                'Prokaryotic cells lack a membrane-bound nucleus',
                'Eukaryotic cells contain organelles and a nucleus',
                'Cell membrane controls what enters and exits the cell',
                'Mitochondria produce ATP through cellular respiration',
                'DNA contains genetic information for cell functions',
                'Mitosis produces two identical diploid cells',
                'Cell cycle includes interphase and mitotic phase'
            ];
        } else if (topicLower.includes('math') || topicLower.includes('algebra') || topicLower.includes('calculus')) {
            return [
                'Mathematics is the study of numbers, patterns, and relationships',
                'Algebra uses symbols to represent unknown quantities',
                'Calculus deals with rates of change and accumulation',
                'Geometry studies shapes, sizes, and spatial relationships',
                'Statistics analyzes and interprets numerical data',
                'Mathematical proofs establish the truth of statements',
                'Applied mathematics solves real-world problems',
                'Pure mathematics explores abstract concepts and theories'
            ];
        } else if (topicLower.includes('climate') || topicLower.includes('global warming') || topicLower.includes('environment')) {
            return [
                'Human activities are the primary cause of recent climate change',
                'Greenhouse gases trap heat in Earth\'s atmosphere',
                'Global temperatures have risen significantly since 1950s',
                'Melting ice caps contribute to rising sea levels',
                'Extreme weather events are becoming more frequent',
                'Renewable energy sources can reduce carbon emissions',
                'Deforestation reduces Earth\'s carbon absorption capacity',
                'International cooperation is essential for climate action'
            ];
        } else {
            // Generic but topic-aware bullet points
            const bulletTemplates = [
                [
                    `Definition and core concepts of ${topic}`,
                    "Historical background and development",
                    "Key principles and fundamental laws",
                    "Main components and their functions",
                    "Relationships between different elements",
                    "Practical applications and use cases",
                    "Current research and developments",
                    "Future implications and potential",
                    "Common misconceptions and clarifications",
                    "Related fields and interdisciplinary connections"
                ],
                [
                    `Introduction to ${topic} and its significance`,
                    "Theoretical foundations and frameworks",
                    "Methodologies and approaches used",
                    "Key findings and discoveries",
                    "Advantages and benefits",
                    "Challenges and limitations",
                    "Case studies and examples",
                    "Best practices and recommendations",
                    "Tools and resources available",
                    "Conclusion and key takeaways"
                ]
            ];

            const template = bulletTemplates[Math.floor(Math.random() * bulletTemplates.length)];
            return template.slice(0, 6 + Math.floor(Math.random() * 4)); // Return 6-9 points
        }
    }

    generateMCQs(topic) {
        const topicLower = topic.toLowerCase();
        
        // Topic-specific MCQs
        if (topicLower.includes('photosynthesis')) {
            return [
                {
                    question: "What is the primary purpose of photosynthesis?",
                    options: ["To produce oxygen", "To convert light energy into chemical energy", "To absorb carbon dioxide", "To create chlorophyll"],
                    correct: 1
                },
                {
                    question: "Where do the light-dependent reactions of photosynthesis occur?",
                    options: ["Stroma", "Thylakoids", "Nucleus", "Cytoplasm"],
                    correct: 1
                },
                {
                    question: "What is the overall equation for photosynthesis?",
                    options: ["6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂", "CO₂ + H₂O → glucose + O₂"],
                    correct: 2
                },
                {
                    question: "Which pigment is primarily responsible for capturing light energy?",
                    options: ["Carotene", "Chlorophyll", "Xanthophyll", "Anthocyanin"],
                    correct: 1
                },
                {
                    question: "What are the products of the light-dependent reactions?",
                    options: ["Glucose and oxygen", "ATP and NADPH", "Carbon dioxide and water", "ADP and NADP+"],
                    correct: 1
                },
                {
                    question: "Where does the Calvin cycle take place?",
                    options: ["Thylakoids", "Stroma", "Chloroplast membrane", "Cell wall"],
                    correct: 1
                },
                {
                    question: "What gas is released as a byproduct of photosynthesis?",
                    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
                    correct: 2
                },
                {
                    question: "Which wavelengths of light are most effectively absorbed by chlorophyll?",
                    options: ["Green and yellow", "Red and blue", "Orange and purple", "All wavelengths equally"],
                    correct: 1
                },
                {
                    question: "What is the role of water in photosynthesis?",
                    options: ["It provides electrons and protons", "It stores energy", "It produces glucose", "It absorbs light"],
                    correct: 0
                },
                {
                     question: "How many molecules of CO₂ are needed to produce one molecule of glucose?",
                     options: ["3", "6", "9", "12"],
                     correct: 1
                 },
                 {
                     question: "What happens to the oxygen atoms from water during photosynthesis?",
                     options: ["They form glucose", "They are released as O₂ gas", "They combine with CO₂", "They remain in water"],
                     correct: 1
                 },
                 {
                     question: "Which factor does NOT directly affect the rate of photosynthesis?",
                     options: ["Light intensity", "Temperature", "CO₂ concentration", "Soil pH"],
                     correct: 3
                 }
            ];
        } else if (topicLower.includes('world war') || topicLower.includes('ww1') || topicLower.includes('ww2')) {
            return [
                {
                    question: "What event triggered the start of World War I?",
                    options: ["Invasion of Poland", "Assassination of Archduke Franz Ferdinand", "Attack on Pearl Harbor", "Sinking of Lusitania"],
                    correct: 1
                },
                {
                    question: "Which years did World War II span?",
                    options: ["1914-1918", "1939-1945", "1941-1945", "1936-1942"],
                    correct: 1
                },
                {
                    question: "What type of warfare characterized the Western Front in WWI?",
                    options: ["Blitzkrieg", "Trench warfare", "Naval warfare", "Guerrilla warfare"],
                    correct: 1
                },
                {
                    question: "Which country was NOT part of the Allied Powers in WWII?",
                    options: ["United States", "Soviet Union", "Germany", "United Kingdom"],
                    correct: 2
                },
                {
                    question: "What was the Holocaust?",
                    options: ["A major battle", "Systematic persecution and murder of Jews", "A peace treaty", "A military strategy"],
                    correct: 1
                },
                {
                    question: "Which cities were targeted by atomic bombs in WWII?",
                    options: ["Tokyo and Osaka", "Hiroshima and Nagasaki", "Kyoto and Yokohama", "Kobe and Sendai"],
                    correct: 1
                },
                {
                    question: "What alliance system contributed to WWI escalation?",
                    options: ["NATO", "Triple Alliance and Triple Entente", "Warsaw Pact", "League of Nations"],
                    correct: 1
                },
                {
                    question: "Which event brought the United States into WWII?",
                    options: ["Invasion of France", "Battle of Britain", "Attack on Pearl Harbor", "D-Day landings"],
                    correct: 2
                },
                {
                    question: "What was the Blitzkrieg strategy?",
                    options: ["Defensive warfare", "Lightning-fast military attacks", "Naval blockade", "Air superiority tactics"],
                    correct: 1
                },
                {
                     question: "Which organization was formed after WWI to maintain peace?",
                     options: ["United Nations", "League of Nations", "NATO", "European Union"],
                     correct: 1
                 },
                 {
                     question: "What was the Eastern Front in WWII?",
                     options: ["War in Pacific", "German invasion of Soviet Union", "Battle for North Africa", "Italian campaign"],
                     correct: 1
                 },
                 {
                     question: "Which technology was NOT significantly developed during the World Wars?",
                     options: ["Radar", "Jet engines", "Internet", "Antibiotics"],
                     correct: 2
                 }
            ];
        } else if (topicLower.includes('python') || topicLower.includes('programming')) {
            return [
                {
                    question: "Who created the Python programming language?",
                    options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
                    correct: 1
                },
                {
                    question: "What type of programming language is Python?",
                    options: ["Compiled", "Interpreted", "Assembly", "Machine code"],
                    correct: 1
                },
                {
                    question: "Which of these is a key feature of Python?",
                    options: ["Complex syntax", "Manual memory management", "Code readability", "Static typing only"],
                    correct: 2
                },
                {
                    question: "What is the correct way to define a function in Python?",
                    options: ["function myFunc():", "def myFunc():", "func myFunc():", "define myFunc():"],
                    correct: 1
                },
                {
                    question: "Which data type is mutable in Python?",
                    options: ["String", "Tuple", "List", "Integer"],
                    correct: 2
                },
                {
                    question: "What does PEP 8 refer to in Python?",
                    options: ["Python version", "Style guide", "Error handling", "Package manager"],
                    correct: 1
                },
                {
                    question: "Which operator is used for floor division in Python?",
                    options: ["/", "//", "%", "**"],
                    correct: 1
                },
                {
                    question: "What is the output of print(type([]))?",
                    options: ["<class 'tuple'>", "<class 'list'>", "<class 'dict'>", "<class 'set'>"],
                    correct: 1
                },
                {
                    question: "Which keyword is used to handle exceptions in Python?",
                    options: ["catch", "except", "handle", "error"],
                    correct: 1
                },
                {
                     question: "What is pip in Python?",
                     options: ["Python interpreter", "Package installer", "Code editor", "Debugging tool"],
                     correct: 1
                 },
                 {
                     question: "Which of these is NOT a Python web framework?",
                     options: ["Django", "Flask", "FastAPI", "React"],
                     correct: 3
                 },
                 {
                     question: "What is the correct way to create a comment in Python?",
                     options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
                     correct: 2
                 }
            ];
        } else {
            // Generic MCQs for any topic - minimum 10 questions
            const genericMCQs = [
                {
                    question: `What is the primary focus of studying ${topic}?`,
                    options: ["Memorizing facts", "Understanding concepts and applications", "Passing exams", "Following instructions"],
                    correct: 1
                },
                {
                    question: `Which approach is most effective for learning ${topic}?`,
                    options: ["Passive reading only", "Active engagement and practice", "Memorization techniques", "Avoiding difficult concepts"],
                    correct: 1
                },
                {
                    question: `What role does practice play in mastering ${topic}?`,
                    options: ["It's unnecessary", "It reinforces understanding", "It's only for beginners", "It slows down learning"],
                    correct: 1
                },
                {
                    question: `How should students approach complex concepts in ${topic}?`,
                    options: ["Skip them entirely", "Break them into smaller parts", "Memorize without understanding", "Avoid asking questions"],
                    correct: 1
                },
                {
                    question: `What is the importance of real-world applications in ${topic}?`,
                    options: ["They are irrelevant", "They help connect theory to practice", "They make learning harder", "They are only for experts"],
                    correct: 1
                },
                {
                    question: `Which resource is most valuable for studying ${topic}?`,
                    options: ["Single textbook only", "Diverse learning materials", "Social media posts", "Random internet articles"],
                    correct: 1
                },
                {
                    question: `How often should students review ${topic} material?`,
                    options: ["Never", "Only before exams", "Regularly and consistently", "Once per semester"],
                    correct: 2
                },
                {
                    question: `What is the best way to test understanding of ${topic}?`,
                    options: ["Avoiding challenges", "Applying knowledge to solve problems", "Reading the same material repeatedly", "Copying others' work"],
                    correct: 1
                },
                {
                    question: `Which mindset is most beneficial for learning ${topic}?`,
                    options: ["Fixed mindset", "Growth mindset", "Perfectionist mindset", "Avoidance mindset"],
                    correct: 1
                },
                {
                    question: `What should students do when they encounter difficulties in ${topic}?`,
                    options: ["Give up immediately", "Seek help and additional resources", "Ignore the problems", "Switch to easier topics"],
                    correct: 1
                },
                {
                    question: `How important is understanding the fundamentals of ${topic}?`,
                    options: ["Not important", "Extremely important for building advanced knowledge", "Only important for beginners", "Can be skipped"],
                    correct: 1
                },
                {
                    question: `What is the relationship between ${topic} and other subjects?`,
                    options: ["Completely isolated", "Interconnected with many fields", "Only related to similar topics", "Has no connections"],
                    correct: 1
                }
            ];
            
            return genericMCQs;
        }
    }

    generateFlashcards(topic) {
        const topicLower = topic.toLowerCase();
        
        // Topic-specific flashcards
        if (topicLower.includes('photosynthesis')) {
            return [
                {
                    front: "What is photosynthesis?",
                    back: "The process by which plants convert light energy into chemical energy (glucose) using CO₂ and water"
                },
                {
                    front: "Where do light reactions occur?",
                    back: "In the thylakoids of chloroplasts"
                },
                {
                    front: "Where does the Calvin cycle occur?",
                    back: "In the stroma of chloroplasts"
                },
                {
                    front: "What is the photosynthesis equation?",
                    back: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂"
                },
                {
                    front: "What are the products of light reactions?",
                    back: "ATP, NADPH, and oxygen"
                },
                {
                    front: "What is chlorophyll's role?",
                    back: "Absorbs light energy, primarily red and blue wavelengths"
                }
            ];
        } else if (topicLower.includes('world war') || topicLower.includes('ww1') || topicLower.includes('ww2')) {
            return [
                {
                    front: "What triggered WWI?",
                    back: "Assassination of Archduke Franz Ferdinand in 1914"
                },
                {
                    front: "When was WWII?",
                    back: "1939-1945"
                },
                {
                    front: "What was trench warfare?",
                    back: "Static warfare characterized by opposing trenches, common in WWI Western Front"
                },
                {
                    front: "What was the Holocaust?",
                    back: "Systematic persecution and murder of 6 million Jews by Nazi Germany"
                },
                {
                    front: "Which cities were atomic bombed?",
                    back: "Hiroshima and Nagasaki in Japan, August 1945"
                },
                {
                    front: "What was Blitzkrieg?",
                    back: "German 'lightning war' strategy using rapid, coordinated attacks"
                }
            ];
        } else if (topicLower.includes('python') || topicLower.includes('programming')) {
            return [
                {
                    front: "Who created Python?",
                    back: "Guido van Rossum in 1991"
                },
                {
                    front: "What type of language is Python?",
                    back: "High-level, interpreted programming language"
                },
                {
                    front: "How do you define a function in Python?",
                    back: "def function_name():"
                },
                {
                    front: "What is PEP 8?",
                    back: "Python's official style guide for writing clean, readable code"
                },
                {
                    front: "What is pip?",
                    back: "Python's package installer for managing third-party libraries"
                },
                {
                    front: "How do you create a comment in Python?",
                    back: "Use # for single-line comments"
                }
            ];
        } else if (topicLower.includes('shakespeare') || topicLower.includes('hamlet') || topicLower.includes('romeo')) {
            return [
                {
                    front: "When did Shakespeare live?",
                    back: "1564-1616"
                },
                {
                    front: "How many plays did Shakespeare write?",
                    back: "37 plays and 154 sonnets"
                },
                {
                    front: "Name Shakespeare's famous tragedies",
                    back: "Hamlet, Macbeth, King Lear, Othello"
                },
                {
                    front: "What was Shakespeare's theater?",
                    back: "The Globe Theatre in London"
                },
                {
                    front: "What themes did Shakespeare explore?",
                    back: "Love, power, jealousy, betrayal, human nature"
                },
                {
                    front: "What is Shakespeare's influence?",
                    back: "Created many words/phrases still used today, influenced literature worldwide"
                }
            ];
        } else if (topicLower.includes('cell') || topicLower.includes('biology') || topicLower.includes('mitosis')) {
            return [
                {
                    front: "What are cells?",
                    back: "Basic structural and functional units of all living things"
                },
                {
                    front: "Prokaryotic vs Eukaryotic cells?",
                    back: "Prokaryotic: no nucleus; Eukaryotic: has nucleus and organelles"
                },
                {
                    front: "What is mitosis?",
                    back: "Cell division producing two identical diploid cells"
                },
                {
                    front: "What do mitochondria do?",
                    back: "Produce ATP through cellular respiration - 'powerhouse of the cell'"
                },
                {
                    front: "What controls cell entry/exit?",
                    back: "Cell membrane - selectively permeable barrier"
                },
                {
                    front: "Where is genetic information stored?",
                    back: "DNA in the nucleus (eukaryotes) or nucleoid region (prokaryotes)"
                }
            ];
        } else if (topicLower.includes('math') || topicLower.includes('algebra') || topicLower.includes('calculus')) {
            return [
                {
                    front: "What is mathematics?",
                    back: "The study of numbers, patterns, shapes, and relationships"
                },
                {
                    front: "What is algebra?",
                    back: "Branch of math using symbols to represent unknown quantities"
                },
                {
                    front: "What is calculus?",
                    back: "Study of rates of change (derivatives) and accumulation (integrals)"
                },
                {
                    front: "What is geometry?",
                    back: "Study of shapes, sizes, and spatial relationships"
                },
                {
                    front: "What are mathematical proofs?",
                    back: "Logical arguments that establish the truth of mathematical statements"
                },
                {
                    front: "Pure vs Applied mathematics?",
                    back: "Pure: abstract concepts; Applied: solving real-world problems"
                }
            ];
        } else if (topicLower.includes('climate') || topicLower.includes('global warming') || topicLower.includes('environment')) {
            return [
                {
                    front: "What is climate change?",
                    back: "Long-term shifts in global temperatures and weather patterns"
                },
                {
                    front: "Main cause of recent climate change?",
                    back: "Human activities, especially burning fossil fuels since 1950s"
                },
                {
                    front: "What are greenhouse gases?",
                    back: "Gases that trap heat in atmosphere (CO₂, methane, water vapor)"
                },
                {
                    front: "Effects of climate change?",
                    back: "Rising temperatures, melting ice, sea level rise, extreme weather"
                },
                {
                    front: "Solutions to climate change?",
                    back: "Renewable energy, reduced emissions, sustainable practices, global cooperation"
                },
                {
                    front: "Role of deforestation?",
                    back: "Reduces Earth's ability to absorb CO₂, contributing to climate change"
                }
            ];
        } else {
            // Generic but topic-aware flashcards
            return [
                {
                    front: `What is ${topic}?`,
                    back: `${topic} is an important subject that involves understanding key concepts, principles, and their practical applications.`
                },
                {
                    front: `Why study ${topic}?`,
                    back: `Studying ${topic} develops critical thinking skills and provides knowledge applicable to real-world situations.`
                },
                {
                    front: `Key components of ${topic}?`,
                    back: `${topic} includes theoretical foundations, practical applications, and connections to related fields.`
                },
                {
                    front: `How to master ${topic}?`,
                    back: `Master ${topic} through consistent study, practice, and applying concepts to solve problems.`
                },
                {
                    front: `Applications of ${topic}?`,
                    back: `${topic} has practical applications in various fields and helps solve real-world challenges.`
                },
                {
                    front: `Future of ${topic}?`,
                    back: `${topic} continues to evolve with new research, technologies, and applications.`
                }
            ];
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ===== DOM ELEMENTS =====
const elements = {
    // Navigation
    navToggle: document.getElementById('nav-toggle'),
    navMenu: document.getElementById('nav-menu'),
    themeToggle: document.getElementById('theme-toggle'),
    
    // Input section
    topicInput: document.getElementById('topic-input'),
    generateBtn: document.getElementById('generate-btn'),
    clearBtn: document.getElementById('clear-btn'),
    
    // Output section
    outputSection: document.getElementById('output-section'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabPanes: document.querySelectorAll('.tab-pane'),
    
    // Content areas
    summaryContent: document.getElementById('summary-content'),
    bulletsContent: document.getElementById('bullets-content'),
    mcqsContent: document.getElementById('mcqs-content'),
    flashcardsContent: document.getElementById('flashcards-content'),
    
    // Action buttons
    saveNotesBtn: document.getElementById('save-notes-btn'),
    copyNotesBtn: document.getElementById('copy-notes-btn'),
    downloadPdfBtn: document.getElementById('download-pdf-btn'),
    
    // Saved notes
    savedNotesList: document.getElementById('saved-notes-list'),
    clearSavedBtn: document.getElementById('clear-saved-btn'),
    
    // Daily tip
    dailyTipText: document.getElementById('daily-tip-text'),
    
    // Loading overlay
    loadingOverlay: document.getElementById('loading-overlay')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize AI generator
    window.aiGenerator = new AINotesGenerator();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize theme
    initializeTheme();
    
    // Display daily tip
    displayDailyTip();
    
    // Load saved notes
    displaySavedNotes();
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Navigation toggle
    if (elements.navToggle) {
        elements.navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Theme toggle
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Input actions
    if (elements.generateBtn) {
        elements.generateBtn.addEventListener('click', generateNotes);
    }
    if (elements.clearBtn) {
        elements.clearBtn.addEventListener('click', clearInput);
    }
    if (elements.topicInput) {
        elements.topicInput.addEventListener('keypress', handleInputKeypress);
    }
    
    // Tab navigation
    if (elements.tabBtns && elements.tabBtns.length > 0) {
        elements.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => switchTab(btn.dataset.tab));
        });
    }
    
    // Output actions
    if (elements.saveNotesBtn) {
        elements.saveNotesBtn.addEventListener('click', saveCurrentNotes);
    }
    if (elements.copyNotesBtn) {
        elements.copyNotesBtn.addEventListener('click', copyAllNotes);
    }
    if (elements.downloadPdfBtn) {
        elements.downloadPdfBtn.addEventListener('click', downloadAsPDF);
    }
    
    // Saved notes actions
    if (elements.clearSavedBtn) {
        elements.clearSavedBtn.addEventListener('click', clearAllSavedNotes);
    }
    
    // Close mobile nav when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (elements.navToggle && elements.navMenu && 
            !elements.navToggle.contains(e.target) && 
            !elements.navMenu.contains(e.target)) {
            closeMobileNav();
        }
    });
}

// ===== NAVIGATION FUNCTIONS =====
function toggleMobileNav() {
    elements.navMenu?.classList.toggle('active');
    elements.navToggle?.classList.toggle('active');
}

function closeMobileNav() {
    elements.navMenu?.classList.remove('active');
    elements.navToggle?.classList.remove('active');
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== THEME FUNCTIONS =====
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = elements.themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ===== DAILY TIP FUNCTION =====
function displayDailyTip() {
    const today = new Date().toDateString();
    const savedTipDate = localStorage.getItem('dailyTipDate');
    
    let tipIndex;
    if (savedTipDate === today) {
        tipIndex = parseInt(localStorage.getItem('dailyTipIndex')) || 0;
    } else {
        tipIndex = Math.floor(Math.random() * learningTips.length);
        localStorage.setItem('dailyTipDate', today);
        localStorage.setItem('dailyTipIndex', tipIndex.toString());
    }
    
    if (elements.dailyTipText) {
        elements.dailyTipText.textContent = learningTips[tipIndex];
    }
}

// ===== INPUT FUNCTIONS =====
function handleInputKeypress(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        generateNotes();
    }
}

function clearInput() {
    if (elements.topicInput) {
        elements.topicInput.value = '';
        elements.topicInput.focus();
    }
}

// ===== NOTE GENERATION =====
async function generateNotes() {
    const topic = elements.topicInput?.value.trim();
    
    if (!topic) {
        showNotification('Please enter a topic or text to generate notes.', 'warning');
        elements.topicInput?.focus();
        return;
    }
    
    try {
        showLoading(true);
        
        // Generate notes using AI simulation
        currentNotes = await window.aiGenerator.generateNotes(topic);
        
        // Display the generated notes
        displayGeneratedNotes(currentNotes);
        
        // Show output section
        if (elements.outputSection) {
            elements.outputSection.style.display = 'block';
            elements.outputSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        showNotification('Notes generated successfully!', 'success');
        
    } catch (error) {
        console.error('Error generating notes:', error);
        showNotification('Error generating notes. Please try again.', 'error');
    } finally {
        showLoading(false);
    }
}

function displayGeneratedNotes(notes) {
    // Display summary
    if (elements.summaryContent) {
        elements.summaryContent.innerHTML = `<p>${notes.summary}</p>`;
    }
    
    // Display bullet points
    if (elements.bulletsContent) {
        const bulletsList = notes.bullets.map(bullet => `<li>${bullet}</li>`).join('');
        elements.bulletsContent.innerHTML = `<ul>${bulletsList}</ul>`;
    }
    
    // Display MCQs
    if (elements.mcqsContent) {
        const mcqsHtml = notes.mcqs.map((mcq, index) => `
            <div class="mcq-item">
                <div class="mcq-question">${index + 1}. ${mcq.question}</div>
                <ul class="mcq-options">
                    ${mcq.options.map((option, optIndex) => `
                        <li class="mcq-option ${optIndex === mcq.correct ? 'correct' : ''}" 
                            onclick="selectMCQOption(this, ${optIndex === mcq.correct})">
                            ${String.fromCharCode(65 + optIndex)}. ${option}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
        elements.mcqsContent.innerHTML = mcqsHtml;
    }
    
    // Display flashcards
    if (elements.flashcardsContent) {
        const flashcardsHtml = `
            <div class="flashcards-container">
                ${notes.flashcards.map((card, index) => `
                    <div class="flashcard" onclick="flipCard(this)">
                        <div class="flashcard-inner">
                            <div class="flashcard-front">
                                <h4>${card.front}</h4>
                            </div>
                            <div class="flashcard-back">
                                <p>${card.back}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        elements.flashcardsContent.innerHTML = flashcardsHtml;
    }
}

// ===== TAB FUNCTIONS =====
function switchTab(tabName) {
    // Update tab buttons
    elements.tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // Update tab panes
    elements.tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === `${tabName}-tab`);
    });
}

// ===== MCQ FUNCTIONS =====
function selectMCQOption(element, isCorrect) {
    // Remove previous selections in this MCQ
    const mcqItem = element.closest('.mcq-item');
    mcqItem.querySelectorAll('.mcq-option').forEach(opt => {
        opt.classList.remove('selected', 'incorrect');
    });
    
    // Add selection class
    element.classList.add('selected');
    
    if (!isCorrect) {
        element.classList.add('incorrect');
        showNotification('Incorrect answer. The correct answer is highlighted in green.', 'warning');
    } else {
        showNotification('Correct answer!', 'success');
    }
}

// ===== FLASHCARD FUNCTIONS =====
function flipCard(card) {
    card.classList.toggle('flipped');
}

// ===== SAVE/LOAD FUNCTIONS =====
function saveCurrentNotes() {
    if (!currentNotes) {
        showNotification('No notes to save. Please generate notes first.', 'warning');
        return;
    }
    
    const noteId = Date.now().toString();
    const savedNote = {
        id: noteId,
        ...currentNotes,
        savedAt: new Date().toISOString()
    };
    
    savedNotes.unshift(savedNote);
    localStorage.setItem('aiNotesSaved', JSON.stringify(savedNotes));
    
    displaySavedNotes();
    showNotification('Notes saved successfully!', 'success');
}

function displaySavedNotes() {
    if (!elements.savedNotesList) return;
    
    if (savedNotes.length === 0) {
        elements.savedNotesList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No saved notes yet. Generate and save some notes to see them here.</p>';
        return;
    }
    
    const savedNotesHtml = savedNotes.map(note => `
        <div class="saved-note-item">
            <div class="saved-note-content">
                <div class="saved-note-title">${note.topic}</div>
                <div class="saved-note-preview">${note.summary.substring(0, 150)}...</div>
                <small style="color: var(--text-muted);">Saved on ${new Date(note.savedAt).toLocaleDateString()}</small>
            </div>
            <div class="saved-note-actions">
                <button class="btn-outline" onclick="loadSavedNote('${note.id}')">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn-outline" onclick="deleteSavedNote('${note.id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
    
    elements.savedNotesList.innerHTML = savedNotesHtml;
}

function loadSavedNote(noteId) {
    const note = savedNotes.find(n => n.id === noteId);
    if (!note) return;
    
    currentNotes = note;
    displayGeneratedNotes(note);
    
    if (elements.outputSection) {
        elements.outputSection.style.display = 'block';
        elements.outputSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (elements.topicInput) {
        elements.topicInput.value = note.topic;
    }
    
    showNotification('Notes loaded successfully!', 'success');
}

function deleteSavedNote(noteId) {
    if (confirm('Are you sure you want to delete this saved note?')) {
        savedNotes = savedNotes.filter(note => note.id !== noteId);
        localStorage.setItem('aiNotesSaved', JSON.stringify(savedNotes));
        displaySavedNotes();
        showNotification('Note deleted successfully!', 'success');
    }
}

function clearAllSavedNotes() {
    if (savedNotes.length === 0) {
        showNotification('No saved notes to clear.', 'info');
        return;
    }
    
    if (confirm('Are you sure you want to delete all saved notes? This action cannot be undone.')) {
        savedNotes = [];
        localStorage.removeItem('aiNotesSaved');
        displaySavedNotes();
        showNotification('All saved notes cleared successfully!', 'success');
    }
}

// ===== COPY FUNCTION =====
async function copyAllNotes() {
    if (!currentNotes) {
        showNotification('No notes to copy. Please generate notes first.', 'warning');
        return;
    }
    
    const notesText = `
AI NOTES: ${currentNotes.topic}
Generated on: ${new Date(currentNotes.timestamp).toLocaleString()}

SUMMARY:
${currentNotes.summary}

KEY POINTS:
${currentNotes.bullets.map((bullet, index) => `${index + 1}. ${bullet}`).join('\n')}

MULTIPLE CHOICE QUESTIONS:
${currentNotes.mcqs.map((mcq, index) => `
${index + 1}. ${mcq.question}
${mcq.options.map((option, optIndex) => `   ${String.fromCharCode(65 + optIndex)}. ${option}`).join('\n')}
   Correct Answer: ${String.fromCharCode(65 + mcq.correct)}
`).join('\n')}

FLASHCARDS:
${currentNotes.flashcards.map((card, index) => `
Card ${index + 1}:
Front: ${card.front}
Back: ${card.back}
`).join('\n')}

Generated by AI Notes Maker - https://texttoolspro.fun
    `.trim();
    
    try {
        await navigator.clipboard.writeText(notesText);
        showNotification('Notes copied to clipboard!', 'success');
    } catch (error) {
        console.error('Failed to copy notes:', error);
        showNotification('Failed to copy notes. Please try again.', 'error');
    }
}

// ===== PDF EXPORT FUNCTION =====
function downloadAsPDF() {
    if (!currentNotes) {
        showNotification('No notes to download. Please generate notes first.', 'warning');
        return;
    }
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Set up fonts and colors
        doc.setFont('helvetica');
        
        // Title
        doc.setFontSize(20);
        doc.setTextColor(59, 130, 246); // Primary blue color
        doc.text('AI Notes Maker', 20, 20);
        
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text(`Topic: ${currentNotes.topic}`, 20, 35);
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated on: ${new Date(currentNotes.timestamp).toLocaleString()}`, 20, 45);
        
        let yPosition = 60;
        
        // Summary section
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('SUMMARY', 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(10);
        const summaryLines = doc.splitTextToSize(currentNotes.summary, 170);
        doc.text(summaryLines, 20, yPosition);
        yPosition += summaryLines.length * 5 + 10;
        
        // Key Points section
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
        
        doc.setFontSize(14);
        doc.text('KEY POINTS', 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(10);
        currentNotes.bullets.forEach((bullet, index) => {
            if (yPosition > 270) {
                doc.addPage();
                yPosition = 20;
            }
            const bulletLines = doc.splitTextToSize(`${index + 1}. ${bullet}`, 165);
            doc.text(bulletLines, 25, yPosition);
            yPosition += bulletLines.length * 5 + 3;
        });
        
        yPosition += 10;
        
        // MCQs section
        if (yPosition > 200) {
            doc.addPage();
            yPosition = 20;
        }
        
        doc.setFontSize(14);
        doc.text('MULTIPLE CHOICE QUESTIONS', 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(10);
        currentNotes.mcqs.forEach((mcq, index) => {
            if (yPosition > 220) {
                doc.addPage();
                yPosition = 20;
            }
            
            // Question
            const questionLines = doc.splitTextToSize(`${index + 1}. ${mcq.question}`, 170);
            doc.text(questionLines, 20, yPosition);
            yPosition += questionLines.length * 5 + 3;
            
            // Options
            mcq.options.forEach((option, optIndex) => {
                const optionText = `   ${String.fromCharCode(65 + optIndex)}. ${option}`;
                const optionLines = doc.splitTextToSize(optionText, 165);
                
                if (optIndex === mcq.correct) {
                    doc.setTextColor(16, 185, 129); // Green for correct answer
                }
                
                doc.text(optionLines, 25, yPosition);
                yPosition += optionLines.length * 5 + 2;
                
                if (optIndex === mcq.correct) {
                    doc.setTextColor(0, 0, 0); // Reset to black
                }
            });
            
            yPosition += 5;
        });
        
        // Flashcards section
        if (currentNotes.flashcards.length > 0) {
            doc.addPage();
            yPosition = 20;
            
            doc.setFontSize(14);
            doc.text('FLASHCARDS', 20, yPosition);
            yPosition += 15;
            
            doc.setFontSize(10);
            currentNotes.flashcards.forEach((card, index) => {
                if (yPosition > 240) {
                    doc.addPage();
                    yPosition = 20;
                }
                
                // Card number
                doc.setFontSize(12);
                doc.text(`Card ${index + 1}:`, 20, yPosition);
                yPosition += 8;
                
                doc.setFontSize(10);
                
                // Front
                doc.setTextColor(59, 130, 246);
                doc.text('Front:', 25, yPosition);
                yPosition += 5;
                doc.setTextColor(0, 0, 0);
                const frontLines = doc.splitTextToSize(card.front, 160);
                doc.text(frontLines, 25, yPosition);
                yPosition += frontLines.length * 5 + 5;
                
                // Back
                doc.setTextColor(59, 130, 246);
                doc.text('Back:', 25, yPosition);
                yPosition += 5;
                doc.setTextColor(0, 0, 0);
                const backLines = doc.splitTextToSize(card.back, 160);
                doc.text(backLines, 25, yPosition);
                yPosition += backLines.length * 5 + 10;
            });
        }
        
        // Footer
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text('Generated by AI Notes Maker - https://texttoolspro.fun', 20, 285);
            doc.text(`Page ${i} of ${pageCount}`, 180, 285);
        }
        
        // Save the PDF
        const fileName = `AI_Notes_${currentNotes.topic.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        showNotification('PDF downloaded successfully!', 'success');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        showNotification('Error generating PDF. Please try again.', 'error');
    }
}

// ===== UTILITY FUNCTIONS =====
function showLoading(show) {
    if (elements.loadingOverlay) {
        elements.loadingOverlay.classList.toggle('active', show);
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--bg-card);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        border-left: 4px solid ${getNotificationColor(type)};
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || colors.info;
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to generate notes
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        generateNotes();
    }
    
    // Ctrl/Cmd + S to save notes
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveCurrentNotes();
    }
    
    // Ctrl/Cmd + C to copy notes (when not in input field)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        copyAllNotes();
    }
    
    // Escape to close mobile nav
    if (e.key === 'Escape') {
        closeMobileNav();
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images and optimize performance
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    showNotification('An unexpected error occurred. Please refresh the page and try again.', 'error');
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    showNotification('An error occurred while processing your request.', 'error');
});

// ===== ANALYTICS AND TRACKING (Optional) =====
function trackEvent(eventName, properties = {}) {
    // This is where you would integrate with analytics services
    console.log('Event tracked:', eventName, properties);
}

// Track note generation - safely wrap the original function
if (typeof generateNotes === 'function') {
    const originalGenerateNotes = generateNotes;
    window.generateNotesWithTracking = function() {
        const topicValue = elements.topicInput?.value?.substring(0, 50) || 'unknown';
        trackEvent('notes_generated', { topic: topicValue });
        return originalGenerateNotes.apply(this, arguments);
    };
}

// ===== SERVICE WORKER REGISTRATION (Optional for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

console.log('AI Notes Maker initialized successfully! 🚀');