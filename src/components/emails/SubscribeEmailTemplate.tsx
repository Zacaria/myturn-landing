import * as React from 'react';

interface SubscribeEmailTemplateProps {
  email: string;
}

export const SubscribeEmailTemplate: React.FC<Readonly<SubscribeEmailTemplateProps>> = ({ email }) => (
  <div>
    <h1>Welcome, {email}!</h1>
  </div>
);
