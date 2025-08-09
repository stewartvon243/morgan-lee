import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
  githubUrl?: string;
  className?: string;
}

export default function ProjectCard({ title, description, image, tags, href , githubUrl = "", className }: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden relative glass-panel neon-border group", className)}>
      <div className="relative h-44 md:h-48 overflow-hidden">
        <img
          src={image}
          alt={`${title} preview image`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" aria-hidden />
        <div className="shine-on-hover" aria-hidden />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="link" asChild>
            <a href={href} aria-label={`Open ${title}`} target="_blank" className="inline-flex items-center gap-2">
              View project <ExternalLink className="size-4" />
            </a>
          </Button>
          {githubUrl && (
            <Button variant="link" asChild>
              <a href={githubUrl} aria-label={`View ${title} on GitHub`} className="inline-flex items-center gap-2">
                <Github className="size-4" /> GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
