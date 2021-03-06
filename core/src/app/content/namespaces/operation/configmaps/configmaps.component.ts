import { WindowTitleService } from 'shared/services/window-title.service';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentNamespaceService } from 'namespaces/services/current-namespace.service';
import { ComponentCommunicationService } from 'shared/services/component-communication.service';
import { AbstractGraphqlElementListComponent } from '../abstract-graphql-element-list.component';
import { ConfigMapsEntryRendererComponent } from './configmaps-entry-renderer/configmaps-entry-renderer.component';
import { ConfigMapsHeaderRendererComponent } from './configmaps-header-renderer/configmaps-header-renderer.component';
import { IEmptyListData } from 'shared/datamodel';
import { GraphQLClientService } from 'shared/services/graphql-client-service';

@Component({
  templateUrl: '../kubernetes-element-list.component.html'
})
export class ConfigMapsComponent extends AbstractGraphqlElementListComponent implements OnInit, OnDestroy {
  public title = 'Config Maps';
  public emptyListData: IEmptyListData = this.getBasicEmptyListData(this.title)
  public createNewElementText = 'Add Config Map';
  public resourceKind = 'ConfigMap';

  public entryRenderer = ConfigMapsEntryRendererComponent;
  public headerRenderer = ConfigMapsHeaderRendererComponent;

  constructor(
    currentEnvironmentService: CurrentNamespaceService,
    commService: ComponentCommunicationService,
    graphQLClientService: GraphQLClientService,
    changeDetector: ChangeDetectorRef,
    titleService: WindowTitleService
  ) {
    super(
      currentEnvironmentService,
      commService,
      graphQLClientService,
      changeDetector
    );
    titleService.set(this.title);
  }

  public ngOnInit() {
    super.ngOnInit();
    this.subscribeToRefreshComponent();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
  }

  getGraphqlQueryForList() {
    return `query ConfigMaps($namespace: String!) {
      configMaps(namespace: $namespace) {
        name
        labels
        creationTimestamp
      }
    }`;
  }
}
