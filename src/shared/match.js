// src/app/shared/match.js

export const matchJobsToUser = (userSkills, careerTrack, jobs) => {
  return jobs
    .map((job) => {
      const matchedSkills = job.requiredSkills.filter((skill) =>
        userSkills.includes(skill)
      );
      const isTrackMatch = job.title
        .toLowerCase()
        .includes(careerTrack.toLowerCase());

      if (matchedSkills.length > 0 || isTrackMatch) {
        return {
          job,
          reason: `Matches: ${matchedSkills.join(", ")}`,
        };
      }
      return null;
    })
    .filter(Boolean);
};

export const matchResourcesToUser = (userSkills, resources) => {
  return resources
    .map((resource) => {
      const matchedSkills = resource.relatedSkills.filter((skill) =>
        userSkills.includes(skill)
      );
      if (matchedSkills.length > 0) {
        return {
          resource,
          reason: `Relevant to: ${matchedSkills.join(", ")}`,
        };
      }
      return null;
    })
    .filter(Boolean);
};
