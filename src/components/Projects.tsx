import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Pre-training GPT Model",
      description:
        "End-to-end code for training a GPT-style language model from scratch on large text corpora. Built with PyTorch and includes modern upgrades like FlashAttention and gradient-checkpointing.",
      image: "assets/img/gpt.png",
      achievements: [
        "Re-implemented full decoder-only Transformer in ~300 lines with FlashAttention and AMP/bfloat16 support",
        "Scaled training for multi-GPU using PyTorch DDP, streaming 38 GB OpenWebText corpus",
        "Implemented configurable Top-k/Top-p sampling for diverse text generation",
      ],
      github: "https://github.com/Thejesh-M/Pre-training-GPT-Model.git",
      tags: ["PyTorch", "Transformers", "NLP", "Deep Learning"],
    },
    {
      title: "MyHealthAgent",
      description:
        "GenAI-powered multi-agent nutrition assistant that analyzes user medical conditions and provides personalized dietary guidance in real-time.",
      image: "assets/img/MyHealthAgent.png",
      achievements: [
        "Delivers personalized dietary recommendations in under 2 seconds",
        "Extracts medical conditions from lab report images using OCR and LLaMA",
        "Multi-Agent System with ~90% ingredient-recognition accuracy",
      ],
      github: "https://github.com/Thejesh-M/MyHealthAgent_Multi-Agent-Assistant.git",
      tags: ["GenAI", "Multi-Agent", "LLaMA", "Computer Vision"],
    },
    {
      title: "SurfaceVision: Road Damage Analytics",
      description:
        "Comprehensive methodology to identify deflected or damaged regions in road surfaces with volumetric quantification of surface deformities.",
      image: "assets/img/road_analysis.png",
      achievements: [
        "Applied PointNet++ for accurate 3D surface modeling",
        "Enhanced road maintenance strategies with volumetric analysis",
        "Advanced image analysis and visualization techniques",
      ],
      tags: ["Computer Vision", "3D Analysis", "PointNet++", "Python"],
    },
    {
      title: "Image Captioning with Attention",
      description:
        "Describe activities in images using attention mechanisms. Built with CNN-LSTM architecture on Flickr 8k dataset.",
      image: "assets/img/img_cap.png",
      achievements: [
        "Implemented attention mechanisms for improved caption quality",
        "Combined CNN and LSTM for feature extraction and sequence generation",
        "Achieved competitive BLEU scores on benchmark dataset",
      ],
      github: "https://github.com/Thejesh-M/Image-Captioning",
      tags: ["CNN", "LSTM", "NLP", "Attention", "Keras"],
    },
    {
      title: "Semantic Segmentation for Self-Driving",
      description:
        "Neural network for pixel-level recognition of roads, pedestrians, cars, and sidewalks for autonomous vehicles.",
      image: "assets/img/segmentation.png",
      achievements: [
        "Developed UNet and SegNet architectures for segmentation",
        "Pixel-level accuracy for multiple target classes",
        "Optimized for real-time inference on edge devices",
      ],
      github: "https://github.com/Thejesh-M/Semantic-Segmentation-for-Self-driving-cars",
      tags: ["UNet", "SegNet", "Computer Vision", "TensorFlow"],
    },
    {
      title: "SaveSphere: Anomaly Detection",
      description:
        "Real-time video analysis system that identifies potential threats and sends email alerts for security applications.",
      image: "assets/img/SaveSphere.png",
      achievements: [
        "Real-time threat detection using object detection",
        "Automated email notification system for alerts",
        "Web platform built with Flask and React",
      ],
      github: "https://github.com/Thejesh-M/savesphere",
      tags: ["PyTorch", "Flask", "React", "Object Detection"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 transition-all duration-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions in Machine Learning and AI
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-glass hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-0.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
