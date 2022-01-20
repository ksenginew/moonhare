import * as React from 'react'
import { Article } from '../../Article'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import { Col6, Container, Row } from '../../Grid'
import { SizingDemo, SizingFiles } from './Sizing'
import { ColorsDemo, ColorsFiles } from './Colors'
import { Card, CardBody } from '../../Card'
import { CodeBlock } from '../../Codeblock'
import clsx from 'clsx'
import './styles.css'
import { ReactElement } from 'react'

let Example = ({ demo, files }: { demo: ReactElement, files: Record<string, string> }) => {
    return (
        <Row>
            <Col6>
                <Card>
                    <CardBody>
                        {demo}
                    </CardBody>
                </Card>
            </Col6>
            <Col6 className={'codeTabs'}>
                <Tabs>
                    {Object.entries(files).map(([name, content]) => (<TabItem value={name} label={name} key={name}>
                        <CodeBlock
                            className={clsx('language-jsx')}
                        >
                            {content}
                        </CodeBlock>
                    </TabItem>))}
                </Tabs>
            </Col6>
        </Row>)
}

export let UnlimitedDesign = () => {
    return (
        <Container>
            <h2>Unlimited Design</h2>
            <p>
                <b>Make your own design system.</b>
            </p>
            <Article>
                MoonHare comes with the unlimited design system of CSS. Design system help you
                work within the constraints of a system instead of littering your stylesheets
                with arbitrary values. You can easily define your design system with MoonHare.
            </Article>
            <Tabs>
                <TabItem value="sizing" label="Sizing" default>
                    <Example demo={SizingDemo} files={SizingFiles} />
                </TabItem>
                <TabItem value="colors" label="Colors">
                    <Example demo={ColorsDemo} files={ColorsFiles} />
                </TabItem>
                <TabItem value="banana" label="Banana">
                </TabItem>
            </Tabs>
        </Container>
    )
}
