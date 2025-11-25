import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      institution: "Michigan State University",
      degree: "Masters in Data Science",
      location: "East Lansing, Michigan",
      duration: "08/2023 - 04/2025",
      gpa: "3.95/4.0",
      logo: "assets/img/msu_logo.png",
      coursework: [
        "Advanced Machine Learning",
        "Statistical Modeling & Data Analysis",
        "Computer Vision",
        "Natural Language Processing",
        "Computational Optimization",
      ],
    },
    {
      institution: "Madanapalle Institute of Technology and Science",
      degree: "BTech - Computer Science & Engineering",
      location: "Madanapalle, India",
      duration: "07/2017 – 05/2021",
      gpa: "9.23/10",
      logo: "assets/img/mits_logo.png",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Python, C & Java",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-muted/20 to-background transition-all duration-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic foundation in Computer Science and Data Science
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <Card
              key={edu.institution}
              className="card-glass hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 space-y-6">
                {/* Header with Logo */}
                <div className="flex items-start gap-4">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-16 h-16 rounded-lg object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {edu.institution}
                    </h3>
                    <p className="text-primary font-medium mt-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.location}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-2 text-primary font-semibold">
                      <Award className="w-4 h-4" />
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge
                          key={course}
                          variant="secondary"
                          className="bg-primary/10 text-primary text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
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

export default Education;
