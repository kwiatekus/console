import React, { createContext } from 'react';
import LuigiClient from '@kyma-project/luigi-client';
import Logs from './Logs';

import { QueryTransformServiceContext } from '../services/queryTransformService';
import { HttpServiceContext } from '../services/httpService';
import { PodSubscriptionServiceContext } from '../services/podSubscriptionService';

export const isLambdaContext = createContext(true);

export default function LogsContainer() {
  const httpService = React.useContext(HttpServiceContext);
  const queryTransformService = React.useContext(QueryTransformServiceContext);
  const podsSubscriptionService = React.useContext(
    PodSubscriptionServiceContext,
  );

  function isSplitView() {
    var params = LuigiClient.getNodeParams();
    return !!params.splitViewMode;
  }

  function getLambdaData() {
    const params = LuigiClient.getNodeParams();
    const labels = [
      `function="${params.function}"`,
      `namespace="${params.namespace}"`,
      `container_name="${params.container_name}"`,
    ];
    const lambdaName = params.container_name;
    return { labels, lambdaName };
  }

  const isCompact = isSplitView();

  return (
    <isLambdaContext.Provider value={true}>
      <Logs
        httpService={httpService}
        queryTransformService={queryTransformService}
        podsSubscriptionService={podsSubscriptionService}
        //  readonlyLabels={labels}

        isCompact={isCompact}
      />
    </isLambdaContext.Provider>
  );
}
