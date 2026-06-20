import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Quantiphi Analytics",
      role: "Machine Learning Engineer",
      period: "Jun 2025 – Present",
      location: "Irving, TX, USA",
      logo: "assets/img/quantiphi_logo.png",
      achievements: [
        "Developed an AI Governance system that audits agentic use cases across legal, ethical, material, and security dimensions and monitors them in production for FinOps, ROI, and performance, standardizing a reusable agentic harness that cuts compliance review from days to minutes (~200x faster).",
        "Built an internal Coding Agent CLI (comparable to Claude Code) used org-wide that analyzes codebases to flag security vulnerabilities, enforce internal engineering standards, auto-generate READMEs and documentation, and remediate bugs, cutting manual code-review effort by 80%.",
        "Engineered an LLM-powered document processing pipeline for a Tier-1 telecom using self-hosted LLaMA 3.1 70B and Gemini models, transforming 2M+ contracts from unstructured legalese into a structured, queryable knowledge graph.",
        "Built a GraphRAG-powered Document Assist chatbot that lets legal teams surface risks and key terms across 2M+ documents, cutting review cycles by 75% with sub-second retrieval latency and 90%+ answer accuracy.",
        "Built a unified agentic support system using Google ADK with Gemini models and MCP servers, serving 175+ Slack channels through a single Cloud Run deployment that dynamically instantiates context-aware agents per request, reducing developer wait time for SME-driven issue resolution by over 90%.",
        "Built an agentic Slack workflow across 175+ channels (Google ADK, LiteLLM, MCP servers) that autonomously resolves internal employee issues without SME intervention, cutting wait times by 70% and boosting productivity.",
      ],
    },
    {
      company: "Michigan State University",
      role: "Graduate Research Assistant – AI R&D",
      period: "Jan 2024 – May 2025",
      location: "East Lansing, MI, USA",
      logo: "assets/img/msu_logo.png",
      achievements: [
        "Pretrained a domain-adapted BERT (MLM) with domain-aware masking (boosted mask probability for curated terminology) on 1M abstracts, delivering +15% average accuracy on downstream tasks.",
        "Built a domain-specific knowledge graph with over 2 million entities and 1.4 million relationships to accelerate hypothesis generation in plant science, leveraging Named Entity Recognition (NER) and Relation Extraction.",
        "Fine-tuned LLMs, including Qwen and LLaMA variants, using LoRA and built a custom BERT-based multi-relation extraction model, achieving 94% accuracy in entity extraction and 84% in relation identification.",
        "Developed a conversational research assistant with GraphRAG + GenAI workflows (LangGraph) to reason over the knowledge graph and literature.",
        "Built large-scale topic analysis of 700k evolutionary biology research abstracts, uncovering temporal trends, research shifts, and literature gaps; leveraged BERT-based topic modeling and Agentic AI to extract ~150 high-quality topics.",
      ],
    },
    {
      company: "Quantiphi Analytics",
      role: "Machine Learning Engineer",
      period: "May 2021 – Jul 2023",
      location: "Bangalore, India",
      logo: "assets/img/quantiphi_logo.png",
      achievements: [
        "Automated document processing pipelines for Banking, Financial Services, and Insurance (BFSI) workflows using computer vision and NLP-based models, reducing manual review time by 75% with 90% data extraction accuracy.",
        "Delivered 10+ Proof of Concepts (PoCs) on document classification & extraction, object detection, image classification, and semantic segmentation in collaboration with cross-functional teams of frontend developers and business stakeholders.",
        "Developed insurance-focused predictive models for risk assessment and claim outcome prediction using Logistic Regression, Decision Trees, Bagging, Random Forest, and Gradient Boosting Machines (GBM).",
        "Built and optimized real-time inference pipelines for Nvidia edge devices using DeepStream with custom C++ plugins, achieving 27 FPS for latency-sensitive applications.",
        "Orchestrated the deployment of 20+ machine learning models into production using CI/CD pipelines across AWS SageMaker, GCP Vertex AI, and Kubernetes, decreasing model deployment time by 30%.",
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
