import { Box, Typography } from '@mui/material';



const WelcomeLogo = () => {


    return (
        <Box
            className="WelcomeLogo"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'column',
                gap: 1,
                animation: `fadeIn 2200ms linear forwards`,
                transformOrigin: 'center',
                '@keyframes fadeIn': {
                    '0%': { opacity: 0.1  },
                    '30%': { opacity: 0.7 },
                    '75%': {  opacity: 1 },
                    '100%': { opacity: 0 },
                },
            }}
        >
            <Box
                sx={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '1px solid #fff',
                    width: 150,
                    height:  150,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={require('assets/img/alb-logo.webp')} style={{ height:  150 }} alt="img" />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                    }}
                >
                    <Typography
                        sx={{
                            
                            fontSize: 72,
                            fontWeight: 400,
                            textShadow: '#0000006a 0 0 2px',
                            mr: 0.1,
                            lineHeight:1
                        }}
                    >
                        A
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize: 72,
                            fontWeight: 400,
                            color: '#000',
                            textShadow: '#000 0 0 2.25px',
                            lineHeight:1
                        }}
                    >
                        L
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize: 72,
                            fontWeight: 400,
                            color: '#000',
                            textShadow: '#000 0 0 2.25px',
                            lineHeight:1
                        }}
                    >
                        B
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize: 72,
                            fontWeight: 400,
                            color: '#000',
                            textShadow: '#000 0 0 2.25px',
                            lineHeight:1
                        }}
                    >
                        E
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize: 72,
                            fontWeight: 400,
                            color: '#000',
                            textShadow: '#000 0 0 2.25px',
                            lineHeight:1
                        }}
                    >
                        R
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize: 72,
                            fontWeight: 400,
                            color: '#000',
                            textShadow: '#000 0 0 2.25px',
                            lineHeight:1
                        }}
                    >
                        T
                    </Typography>
                    <Typography
                        sx={{
                        
                            fontSize: 72,
                            fontWeight: 400,
                            color: '#000',
                            textShadow: '#000 0 0 2.25px',
                            lineHeight:1
                        }}
                    >
                       O
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                    }}
                >
                    <Typography
                        sx={{
                            
                            fontSize:  38,
                            letterSpacing:0,
                            fontWeight: 400,
                          
                            color: '#252525',
                            lineHeight:1
                        }}
                    >
                        B
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize:  38,
                            letterSpacing:0,
                            fontWeight: 400,
                            color: '#252525',
                     
                            lineHeight:1
                        }}
                    >
                        I
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize:  38,
                            letterSpacing:0,
                            fontWeight: 400,
                            color: '#252525',
                     
                            lineHeight:1
                        }}
                    >
                       N
                    </Typography>
                    <Typography
                        sx={{
                            
                            fontSize:  38,
                            letterSpacing:0,
                            fontWeight: 400,
                            color: '#252525',
                    
                            lineHeight:1
                        }}
                    >
                        I
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default WelcomeLogo;
