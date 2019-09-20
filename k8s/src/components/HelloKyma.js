import React from 'react';
import { Button } from '@kyma-project/react-components';
import { useNotification } from '../contexts/notifications';

export default function HelloKyma() {
  const { notify } = useNotification();
  return (
    <div>
      <h3>Hello Kyma!</h3>
      <p>
        <Button onClick={() => notify('Hello one again!')}>Click me</Button>
      </p>
    </div>
  );
}
