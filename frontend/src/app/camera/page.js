"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import ButtonGroup from "./_components/buttonGroup";
import StepperIcon from "./_components/stepperIcon";

const steps = ["Upload Menu", "Verify"];

export default function Camera() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Box width={"100%"}>
        <Stepper
          activeStep={activeStep}
          sx={{ maxWidth: "500px", margin: "auto" }}
        >
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepperIcon index={index}>{label}</StepperIcon>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </>
        ) : (
          <>
            {(() => {
              switch (activeStep) {
                case 0:
                  return (
                    <>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        Upload Menu Instructions...
                      </Typography>
                      <ButtonGroup />
                    </>
                  );
                case 1:
                  return (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      Verify Your Upload...
                    </Typography>
                  );
                default:
                  return (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      Step {activeStep + 1}
                    </Typography>
                  );
              }
            })()}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
