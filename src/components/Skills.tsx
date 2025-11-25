import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Expertise",
      skills: [
        "Data Science",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Large Language Models",
        "Generative AI",
        "Agentic AI",
        "Predictive Modeling",
        "Graph ML",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "R", "C++", "C", "Bash"],
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        "PyTorch",
        "TensorFlow",
        "TensorRT",
        "LangGraph",
        "LangChain",
        "LlamaIndex",
        "AutoGen",
        "Phi Data",
        "Hugging Face Transformers",
        "OpenCV",
        "NumPy",
        "Pandas",
      ],
    },
    {
      title: "Big Data & Databases",
      skills: ["Hadoop Spark", "Apache Kafka", "MySQL", "PostgreSQL"],
    },
    {
      title: "Cloud & MLOps",
      skills: [
        "GCP",
        "AWS",
        "Docker",
        "Git",
        "Flask",
        "FastAPI",
        "MLFlow",
        "Nvidia Deepstream",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 transition-all duration-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Detail-oriented Machine Learning Engineer with expertise in Natural Language Processing, 
            Deep Learning, and Computer Vision. I specialize in architecting end-to-end AI solutions 
            from data pipeline integration to model deployment that deliver measurable impact in 
            real-world applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="card-glass hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
