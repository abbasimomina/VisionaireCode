import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProjectBySlug } from "../../api/projectService.js";

import ProjectHero from "./ProjectHero.jsx";
import ProjectOverview from "./ProjectOverview.jsx";
import ProjectProblemSolution from "./ProjectProblemSolution.jsx";
import ProjectFeatures from "./ProjectFeatures.jsx";
import ProjectArchitecture from "./ProjectArchitecture.jsx";
import ProjectTechnicalDetails from "./ProjectTechnicalDetails.jsx";
import ProjectChallenges from "./ProjectChallenges.jsx";
import ProjectConclusion from "./ProjectConclusion.jsx";

import { Container } from "../../components/layout/Container.jsx";
import { Section } from "../../components/layout/Section.jsx";
import { Typography } from "../../components/ui/Typography.jsx";

import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProjectBySlug(slug);

        setProject(data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Unable to load project."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <main className="project-details-page">
        <Section className="project-details-state">
          <Container>
            <div className="project-details-state-content">
              <Typography
                variant="h2"
                className="project-details-state-title"
              >
                Loading project...
              </Typography>

              <Typography className="project-details-state-message">
                Preparing the project details.
              </Typography>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="project-details-page">
        <Section className="project-details-state">
          <Container>
            <div className="project-details-state-content">
              <Typography
                variant="h2"
                className="project-details-state-title"
              >
                Unable to load project
              </Typography>

              <Typography className="project-details-state-message">
                {error}
              </Typography>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="project-details-page">
        <Section className="project-details-state">
          <Container>
            <div className="project-details-state-content">
              <Typography
                variant="h2"
                className="project-details-state-title"
              >
                Project not found
              </Typography>

              <Typography className="project-details-state-message">
                The project you're looking for could not be found.
              </Typography>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main className="project-details-page">
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      <ProjectProblemSolution project={project} />

      <ProjectFeatures project={project} />

      <ProjectArchitecture project={project} />

      <ProjectTechnicalDetails project={project} />

      <ProjectChallenges project={project} />

      <ProjectConclusion project={project} />
    </main>
  );
};

export default ProjectDetails;