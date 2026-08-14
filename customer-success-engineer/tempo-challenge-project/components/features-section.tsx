import type {ReactElement} from 'react';
import {fetchContent} from '@croct/plug-next/server';

export default async function FeaturesSection(): Promise<ReactElement> {
  const {content} = await fetchContent('features-section@2');

  return (
    <ul>
      <li><strong>Tagline:</strong> {content.tagline}</li>
      <li><strong>Heading:</strong> {content.heading}</li>
      <li><strong>Description:</strong> {content.description}</li>
      <li>
        <strong>Features</strong>
        <ol>
          {content.features.map((feature, index) => (
            <li key={index}>
              <ul>
                <li><strong>Icon:</strong> {feature.icon}</li>
                <li><strong>Title:</strong> {feature.title}</li>
                <li><strong>Description:</strong> {feature.description}</li>
              </ul>
            </li>
          ))}
        </ol>
      </li>
    </ul>
  );
};
