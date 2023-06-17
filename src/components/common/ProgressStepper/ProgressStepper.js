import React, { useState } from "react"
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { Typography } from "@mui/material"
import CommonButton from "../CommonButton/CommonButton"
import { Box } from "@mui/material"

const ProgressStepper = ( { steps, stepDescription } ) => {
    const [activeStep, setActiveStep] = useState(0)
    const [completed, setCompleted] = useState({})
    const [completedSteps, setCompletedSteps] = useState(0)

    const handleBack = () => {
        setActiveStep(activeStep - 1)
        delete(completed[activeStep])

        setCompletedSteps(Object.keys(completed).length - 1)
    }

    const totalSteps = steps.length
    const allStepsCompleted = completedSteps === totalSteps


    const handleNext = () => {

        setActiveStep(activeStep + 1)

        const newCompleted = completed
        newCompleted[activeStep] = true
        setCompleted(newCompleted)

        setCompletedSteps(Object.keys(completed).length)
    }

    const handleReset = () => {
        setActiveStep(0)
        setCompleted({})
        setCompletedSteps(0)
    }

    return (
        <div>
            <Stepper 
                activeStep={activeStep}
                orientation='vertical' 
            >
                {steps.map((step, index) => (
                <Step 
                    key={step}
                    completed={completed[index]}
                >
                    <StepLabel>{step}</StepLabel>
                </Step>
                    
                ))}
            </Stepper>
            <div>
                {allStepsCompleted ?
                ( 
                    <div>
                        <Typography
                            sx={{ mt:2, mb:1 }}
                        >
                            All Steps Completed
                        </Typography>
                        <Box
                            sx={{ display:'flex', flexDirection: 'row', pt: 2}}
                        >
                            <Box sx={{ flex: '1 1 auto'}} />
                            <CommonButton
                                variant='contained'
                                onClick={handleReset}
                            >
                                Reset
                            </CommonButton>
                        </Box>
                    </div>
                ) : (
                    <>
                        <Typography
                            sx={{ mt: 2, mb: 1}}
                        >
                            {stepDescription[activeStep]}
                        </Typography>
                        <Box
                            sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                        >
                            <Box sx={{ flex: '1 1 auto' }} />
                            <CommonButton 
                                onClick={handleNext} 
                                variant='contained'
                            > 
                                {completedSteps === totalSteps - 1 ? 'Finish' : 'Next'} 
                            </CommonButton>
                            <CommonButton 
                                onClick={handleBack} 
                                variant='contained'
                                disabled={activeStep === 0}
                                sx={{ mr: 1 }}
                            > 
                                Back 
                            </CommonButton>
                        </Box>
                    </>
                )}
            </div> 
        </div>
    )
}

export default ProgressStepper