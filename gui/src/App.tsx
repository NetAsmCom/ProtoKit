import React, { Component } from 'react';
import styles from './App.module.scss';
import Scrollbar from 'react-scrollbars-custom';
import {
    Tooltip,
    Button,
    Popover,
    Steps,
    Icon,
    Progress,
    Collapse,
    Form,
    Slider,
    Alert
} from 'antd';

const Step = Steps.Step;
const Panel = Collapse.Panel;
const FormItem = Form.Item;

const text = (
    <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    </p>
);

class App extends Component {
    render() {
        return (
            <div className={styles["App"]}>
                <Scrollbar className={styles.scrollbar}>
                    <div className={styles.content}>
                        <h1><Tooltip title="Wohoo!">ProtoKit</Tooltip></h1>
                        <Popover trigger="click" content="Hey There!" placement="bottom">
                            <Button type="primary">Hello</Button>
                        </Popover>
                        <Steps>
                            <Step status="finish" title="Login" icon={<Icon type="user" />} />
                            <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                            <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                        </Steps>
                        <div>
                            <Progress type="circle" percent={30} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </div>
                        <Collapse accordion bordered={false} defaultActiveKey={['1']}>
                            <Panel header="This is panel header 1" key="1">
                                {text}
                            </Panel>
                            <Panel header="This is panel header 2" key="2">
                                {text}
                            </Panel>
                            <Panel header="This is panel header 3" key="3">
                                {text}
                            </Panel>
                        </Collapse>
                        <Form layout="vertical">
                            <FormItem label="Hello">
                                <Slider />
                            </FormItem>
                            <FormItem label="World">
                                <Slider range />
                            </FormItem>
                        </Form>
                        <div>
                            <Alert message="Success Tips" type="success" showIcon />
                            <Alert message="Informational Notes" type="info" showIcon />
                            <Alert message="Warning" type="warning" showIcon />
                            <Alert message="Error" type="error" showIcon />
                            <Alert
                                message="Success Tips"
                                description="Detailed description and advices about successful copywriting."
                                type="success"
                                showIcon />
                            <Alert
                                message="Informational Notes"
                                description="Additional description and informations about copywriting."
                                type="info"
                                showIcon />
                            <Alert
                                message="Warning"
                                description="This is a warning notice about copywriting."
                                type="warning"
                                showIcon />
                            <Alert
                                message="Error"
                                description="This is an error message about copywriting."
                                type="error"
                                showIcon />
                        </div>
                    </div>
                </Scrollbar>
            </div>
        );
    }
}

export default App;
