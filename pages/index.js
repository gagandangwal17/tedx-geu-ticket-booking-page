import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Input,
    Box,
    Text,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        alignItems: 'center',
    },

    content: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 500,
        position: 'relative',

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
        }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}))

export default function Home() {
    const { classes } = useStyles()
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Book your{' '}
                            <span
                                style={{
                                    color: '#ff0000',
                                }}
                            >
                                pass
                            </span>{' '}
                            now!
                            <div
                                style={{
                                    display: 'block',
                                    width: 180,
                                    height: 60,
                                    backgroundColor: '#ff0000',
                                    zIndex: -1,
                                    top: -24,
                                    position: 'absolute',
                                }}
                            ></div>
                        </Title>

                        <Box
                            sx={(theme) => ({
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20,
                                marginTop: 40,
                                marginBottom: 40,
                            })}
                        >
                            <Input.Wrapper label="Name" required>
                                <Input placeholder="Your Name" />
                            </Input.Wrapper>

                            <Input.Wrapper label="Email" required>
                                <Input placeholder="Your Email" />
                            </Input.Wrapper>
                        </Box>

                        <Button
                            radius="xl"
                            size="md"
                            className={classes.control}
                            sx={(theme) => ({
                                backgroundColor: '#ff0000',
                                border: 0,
                                borderRadius: 5,
                            })}
                        >
                            Proceed To Pay
                        </Button>
                    </div>
                    <Image src={'/mockup.png'} className={classes.image} />
                </div>
            </Container>
        </div>
    )
}
