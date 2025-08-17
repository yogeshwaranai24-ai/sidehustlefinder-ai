import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RoadmapAccordion = ({ steps }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Step {index + 1}: {step.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              {step.description}
            </Typography>
            {step.resources && (
              <>
                <Typography variant="subtitle2">Resources:</Typography>
                <ul>
                  {step.resources.map((resource, i) => (
                    <li key={i}>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default RoadmapAccordion;