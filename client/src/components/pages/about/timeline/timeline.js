import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return [
        { label: 'September 2006', title: 'Graphic Designer OR Programmer ?!' },
        { label: '2006 - 2012', title: `AD & BSs in Software Engineering` },
        { label: '2008 - 2012', title: `My Own Company!` },
        {
            label: 'Apr 2012 - Aug. 2015',
            title: `Start a Journey >> Saman Ltd.`,
        },
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `I started my education in Computer Graphic field and I got my first Diploma in one of Art Branches! but I continue my education unitl I got my second Diploam in Programming Diploma!`;
        case 1:
            return 'Test Content B';
        case 2:
            return `Test Content C`;
        default:
            return 'Unknown step';
    }
}

export default function TimeLine() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper
                activeStep={activeStep}
                color='secondary'
                orientation='vertical'
            >
                {steps.map((label, index) => (
                    <Step key={label} color='secondary'>
                        <StepLabel
                            style={{
                                textDecoration: 'underline',
                                borderBlockColor: 'red !important',
                            }}
                        >
                            {label.label}
                        </StepLabel>
                        <StepContent color='secondary'>
                            <h5 style={{ color: 'grey' }}>{label.title}</h5>
                            <Typography color='dark'>
                                {getStepContent(index)}
                            </Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        color='secondary'
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1
                                            ? 'Finish'
                                            : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}
