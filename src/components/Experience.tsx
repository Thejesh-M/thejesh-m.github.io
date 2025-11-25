import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Quantiphi Analytics",
      role: "Machine Learning Engineer",
      period: "Jun 2025 – Present",
      location: "Remote, USA",
      logo: "assets/img/quantiphi_logo.png",
      achievements: [
        "Architected an LLM-powered large document processing pipeline for a Tier-1 telecom, transforming 2M+ complex contracts from unstructured legalese to structured graphical format preserving document hierarchy for superior data integrity.",
        "Empowered legal teams to surface risks and key contract terms across 2M+ documents and cut review cycles by 60%, through a GraphRAG-powered Agentic Contract Assist chatbot with sub-second retrieval latency and 90%+ answer accuracy.",
        "Developed and deployed CI/CD workflows on Red Hat OpenShift and GCP Cloud Run, enabling zero-downtime updates and Integrated BigQuery and GCS for scalable contract metadata storage.",
        "Created 10+ Re-usable Agentic components those can be used across the organization in various document handling workstreams.",
      ],
    },
    {
      company: "Michigan State University",
      role: "Graduate Research Assistant",
      period: "Jan 2024 – Jun 2025",
      location: "East Lansing, MI, USA",
      logo: "assets/img/msu_logo.png",
      achievements: [
        "Built a domain-specific knowledge graph with over 2 million entities and 1.4 million relationships to accelerate hypothesis generation in plant science.",
        "Achieved 94% entity extraction accuracy by fine-tuning state-of-the-art domain specific BERT models.",
        "Designed and implemented a custom BERT-based multi-relation extraction model to identify and extract multiple relationships within a single sentence.",
        "Enabled accurate question answering over a knowledge graph using GenAI Agents and Retrieval-Augmented Generation (RAG) techniques.",
        "Pretrained a BERT model on 1M+ plant science PubMed abstracts with selective masking strategy, achieving significantly lower MLM validation loss compared to baseline BERT.",
      ],
    },
    {
      company: "Quantiphi Analytics",
      role: "Machine Learning Engineer",
      period: "Jun 2021 – Jul 2023",
      location: "Bangalore, India",
      logo: "assets/img/quantiphi_logo.png",
      achievements: [
        "Designed and implemented Automatic Information Extraction systems by combining custom Computer Vision and NLP LLMs in the BFSI domain.",
        "Delivered solutions for 10+ Proof of Concepts on document classification & extraction, object detection, image classification, and semantic segmentation tasks.",
        "Built end-to-end Airflow pipelines to orchestrate object detection, classification, and segmentation tasks.",
        "Developed insurance-focused predictive models for risk assessment using Logistic Regression, Decision Trees, Random Forest, and Gradient Boosting Machines.",
        "Built and optimized real-time inference pipelines for Nvidia edge devices using DeepStream with custom C++ plugins, achieving 27 FPS.",
        "Deployed and monitored 20+ Machine Learning models in production using AWS SageMaker, GCP Cloud Run & Kubernetes, Flask, and FastAPI.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20 transition-all duration-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building impactful AI solutions across industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.company}-${index}`}
              className="card-glass hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border-2 border-primary/20"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        {exp.company}
                      </h3>
                      <p className="text-lg font-medium text-primary mt-1">
                        {exp.role}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex gap-3 leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
