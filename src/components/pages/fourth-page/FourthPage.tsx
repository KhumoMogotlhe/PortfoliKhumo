import React from 'react';
import { motion } from 'framer-motion';
import type { FourthPageProps } from './FourthPage.types';
import {
  // Scene,
  ChapterTitle,
  Footer,
  PageContent,
  PageHeader,
  PageNumber,
  Scene,
  Section,
  SectionTitle,
} from '../bookpage/styles/BookPage.styles';
import NextButton from '../../buttons/next-button/NextButton';
import CloudServiceCard from '../../animations/CloudServices';
import {
  EC2Architecture,
  S3Architecture,
  LambdaArchitecture,
  ServerlessArchitecture,
} from '../../animations/ArchitectureDiagrams';
import { CloudGrid, ConceptBox, ConceptText, ConceptTitle } from './FourthPage.styles';
import { BookPageShell } from '../BookPageShell';


const FourthPage: React.FC<FourthPageProps> = ({ onNext, onPrev }) => {
  return (
     <BookPageShell
      pageNumber="03"
      chapterLabel="Chapter 4: The Cloud"
      tearVariant={0}
    >
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
             Moving from local machines to the cloud changed everything. 
              Suddenly, applications could scale, be available 24/7, and reach 
              users anywhere. This is where infrastructure became code.
          </p>
        </motion.div>
      </Section>
  

        <Section>
          <SectionTitle>AWS Services Explored</SectionTitle>
          <CloudGrid>
            <CloudServiceCard
              icon="🖥️"
              name="EC2 (Elastic Compute)"
              description="Virtual servers in the cloud. Learned to launch instances, configure security groups, and manage compute resources."
              architecture={<EC2Architecture />}
            />

            <CloudServiceCard
              icon="📦"
              name="S3 (Simple Storage)"
              description="Object storage for files and static assets. Practiced bucket policies, versioning, and static website hosting."
              architecture={<S3Architecture />}
            />

            <CloudServiceCard
              icon="⚡"
              name="Lambda (Serverless)"
              description="Run code without managing servers. Built event-driven functions that scale automatically."
              architecture={<LambdaArchitecture />}
            />

            <CloudServiceCard
              icon="🏗️"
              name="Serverless Architecture"
              description="Combining API Gateway, Lambda, and databases for fully serverless applications."
              architecture={<ServerlessArchitecture />}
            />
          </CloudGrid>
        </Section>

        <Section>
          <SectionTitle>Key Concepts Learned</SectionTitle>

          <ConceptBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <ConceptTitle>💰 Pay-as-you-go Model</ConceptTitle>
            <ConceptText>
              No upfront infrastructure costs. Only pay for what you use. 
              This changes how we think about resource allocation and scaling.
            </ConceptText>
          </ConceptBox>

          <ConceptBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <ConceptTitle>📈 Scalability</ConceptTitle>
            <ConceptText>
              Auto-scaling groups, load balancers, and serverless functions 
              mean your app can handle 10 users or 10 million without manual intervention.
            </ConceptText>
          </ConceptBox>

          <ConceptBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <ConceptTitle>📝 Infrastructure as Code</ConceptTitle>
            <ConceptText>
              Define infrastructure with code (CloudFormation, Terraform). 
              Version control your infrastructure. Deploy with consistency.
            </ConceptText>
          </ConceptBox>
        </Section>

        <Section>
          <SectionTitle>The Shift in Thinking</SectionTitle>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Cloud computing isn't just about where your code runs—it's about 
            designing systems that are resilient, scalable, and cost-effective. 
            It's infrastructure that adapts to your needs, not the other way around.
          </motion.p>
        </Section>
      

     <Footer>
        <NextButton onClick={onNext} label="next" />
        {onPrev && <NextButton onClick={onPrev} label="prev" position="left" />}
      </Footer>
    </BookPageShell>
  );
};

export default FourthPage;