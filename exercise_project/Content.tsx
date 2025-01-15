import React from 'react';

interface CoursePart {
  name: string;
  exerciseCount: number;
  description?: string;
  groupProjectCount?: number;
  backgroundMaterial?: string;
  kind: "basic" | "group" | "background";
}

interface ContentProps {
  courseParts: CoursePart[];
}

const Content: React.FC<ContentProps> = ({ courseParts }) => {
  return (
    <div>
      {courseParts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exerciseCount} {part.description && `(Description: ${part.description})`}
          {part.groupProjectCount && `, Group projects: ${part.groupProjectCount}`}
          {part.backgroundMaterial && `, Background material: ${part.backgroundMaterial}`}
        </p>
      ))}
    </div>
  );
};

export default Content;
