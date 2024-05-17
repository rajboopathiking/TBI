import React from 'react'
import "./Details.css"
import Dc from "../../../../assets/Resource/data_collection.png"
import mb from "../../../../assets/Resource/noun-machine-learning-1348731.png"
import dp from "../../../../assets/Resource/deployment.png"
import arrow from "../../../../assets/Resource/arrow.png"
export default function Details() {
    return (
        <div className='details'>
            <h1>How It Works?</h1>
            <p className='h-t-1'>Deep learning is a subset of machine learning that mimics the human brain's neural networks. It utilizes interconnected layers of nodes to process data hierarchically. The process begins with raw data inputted into the network's input layer, passing through hidden layers where neurons apply mathematical transformations. These transformations involve adjusting weights and biases during training using backpropagation, which minimizes the difference between predicted and actual outputs. Activation functions introduce non-linearity, enabling the model to learn complex patterns. As data propagates through the network, higher-level features are progressively captured, leading to the final prediction or classification in the output layer. Deep learning's success in tasks like image recognition and natural language processing stems from its ability to automatically learn and optimize features from large datasets, often surpassing human-level performance.</p>
            <div className='details-main'>
                <div className='svg-2'>
                    <div className='d-2'>
                        <img src={Dc} alt="" width={"200px"} />
                        <p>Data Collection</p>
                    </div>
                    <img className='arrow' src={arrow} width={"100px"} alt="" />
                </div>
                <div className='svg-2'>
                    <div className='d-2'>
                        <img src={mb} alt="" width={"200px"} />
                        <p>Machine Learning Model</p>
                    </div>
                    <img className='arrow' src={arrow} width={"100px"} alt="" />
                </div>
                <div className='svg-2'>
                    <div className='d-2'>
                        <img src={dp} alt="" width={"200px"} />
                        <p>Deployment</p>
                    </div>
                </div>


            </div>


        </div>
    )
}
