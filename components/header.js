import { useState } from 'react'
import {
    createStyles,
    Header,
    Container,
    Anchor,
    Group,
    Burger,
    Image,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MantineLogo } from '@mantine/ds'

const HEADER_HEIGHT = 84

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    links: {
        paddingTop: theme.spacing.lg,
        height: HEADER_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    mainLinks: {
        marginRight: -theme.spacing.sm,
    },

    mainLink: {
        textTransform: 'uppercase',
        fontSize: 13,
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        padding: `7px ${theme.spacing.sm}px`,
        fontWeight: 700,
        borderBottom: '2px solid transparent',
        transition: 'border-color 100ms ease, color 100ms ease',

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
        },
    },

    secondaryLink: {
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[2]
                : theme.colors.gray[6],
        fontSize: theme.fontSizes.xs,
        textTransform: 'uppercase',
        transition: 'color 100ms ease',

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
        },
    },

    mainLinkActive: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottomColor:
            theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 5 : 6
            ],
    },
}))

export default function LayoutHeader() {
    const [opened, { toggle }] = useDisclosure(false)
    const { classes, cx } = useStyles()
    const [active, setActive] = useState(0)

    const mainLinks = [
        {
            label: 'Home',
            link: '#',
        },
        {
            label: 'About',
            link: '#',
        },
        {
            label: 'Speakers',
            link: '#',
        },
        {
            label: 'Team',
            link: '#',
        },
        {
            label: 'Contact',
            link: '#',
        },
        {
            label: 'Tickets',
            link: '#',
        },
    ]

    const userLinks = [
        // {
        //     label: 'Home',
        //     link: '#',
        // },
    ]

    const mainItems = mainLinks.map((item, index) => (
        <Anchor
            href={item.link}
            key={item.label}
            className={cx(classes.mainLink, {
                [classes.mainLinkActive]: index === active,
            })}
            onClick={(event) => {
                event.preventDefault()
                setActive(index)
            }}
            sx={(theme) => ({
                borderBottomColor: 'transparent',
                ':hover': {
                    borderBottomColor: '#ff0000',
                },
            })}
        >
            {item.label}
        </Anchor>
    ))

    const secondaryItems = userLinks.map((item) => (
        <Anchor
            href={item.link}
            key={item.label}
            onClick={(event) => event.preventDefault()}
            className={classes.secondaryLink}
        >
            {item.label}
        </Anchor>
    ))

    return (
        <Header height={HEADER_HEIGHT} mb={120} p={'md'} withBorder={false}>
            <Container className={classes.inner}>
                <Image src={'/logo.png'} width={280} alt="logo" />
                <div className={classes.links}>
                    <Group position="right">{secondaryItems}</Group>
                    <Group
                        spacing={0}
                        position="right"
                        className={classes.mainLinks}
                    >
                        {mainItems}
                    </Group>
                </div>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                />
            </Container>
        </Header>
    )
}
