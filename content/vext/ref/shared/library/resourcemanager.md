---
title: ResourceManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[MountSuperBundle](#mountsuperbundle)**(superbundle: string, mediaHint: [MediaHint](/vext/ref/shared/type/mediahint) = MediaHint.MediaHint_Default, optional: bool = false) | void |
| **[UnmountSuperBundle](#unmountsuperbundle)**(superbundle: string) | void |
| **[GetSettings](#getsettings)**(settingsType: string) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[LookupDataContainer](#lookupdatacontainer)**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment), name: string) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[SearchForDataContainer](#searchfordatacontainer)**(name: string) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[FindInstanceByGuid](#findinstancebyguid)**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid)) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[SearchForInstanceByGuid](#searchforinstancebyguid)**(instanceGuid: [Guid](/vext/ref/shared/type/guid)) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| **[FindDatabasePartition](#finddatabasepartition)**(partitionGuid: [Guid](/vext/ref/shared/type/guid)) | [DatabasePartition](/vext/ref/shared/type/databasepartition) \| nil |
| **[FindPartitionForInstance](#findpartitionforinstance)**(instance: [DataContainer](/vext/ref/shared/type/datacontainer)) | [DatabasePartition](/vext/ref/shared/type/databasepartition) \| nil |
| **[RegisterInstanceLoadHandler](#registerinstanceloadhandler)**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil |
| **[RegisterInstanceLoadHandler](#registerinstanceloadhandler-1)**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), context: any, callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) |
| **[RegisterInstanceLoadHandlerOnce](#registerinstanceloadhandleronce)**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) |
| **[RegisterInstanceLoadHandlerOnce](#registerinstanceloadhandleronce-1)**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), context: any, callback: callable) | [ContainerCallback](/vext/ref/shared/type/containercallback) |
| **[AddRegistry](#addregistry)**(registry: [DataContainer](/vext/ref/shared/type/datacontainer), compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment)) | void |
| **[BeginLoadData](#beginloaddata)**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment), bundles: string{}) | int |
| **[EndLoadData](#endloaddata)**(handle: int) | bool |
| **[PollBundleOperation](#pollbundleoperation)**(handle: int) | bool |
| **[CancelBundleOperation](#cancelbundleoperation)**(handle: int) | void |
| **[BeginClear](#beginclear)**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment)) | int |
| **[EndClear](#endclear)**(handle: int) | void |
| **[AllocateDynamicCompartment](#allocatedynamiccompartment)**(name: string, parent: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment), clientOnly: bool) | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |
| **[DestroyDynamicCompartment](#destroydynamiccompartment)**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment)) | void |

## Methods

### MountSuperBundle {#mountsuperbundle}

> **MountSuperBundle**(superbundle: string, mediaHint: [MediaHint](/vext/ref/shared/type/mediahint) = MediaHint.MediaHint_Default, optional: bool = false)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **superbundle** | string |  |
| **mediaHint** | [MediaHint](/vext/ref/shared/type/mediahint) |  |
| **optional** | bool |  |

### UnmountSuperBundle {#unmountsuperbundle}

> **UnmountSuperBundle**(superbundle: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **superbundle** | string |  |

### GetSettings {#getsettings}

> **GetSettings**(settingsType: string): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **settingsType** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### LookupDataContainer {#lookupdatacontainer}

> **LookupDataContainer**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment), name: string): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **compartment** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### SearchForDataContainer {#searchfordatacontainer}

> **SearchForDataContainer**(name: string): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### FindInstanceByGuid {#findinstancebyguid}

> **FindInstanceByGuid**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid)): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partitionGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **instanceGuid** | [Guid](/vext/ref/shared/type/guid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### SearchForInstanceByGuid {#searchforinstancebyguid}

> **SearchForInstanceByGuid**(instanceGuid: [Guid](/vext/ref/shared/type/guid)): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **instanceGuid** | [Guid](/vext/ref/shared/type/guid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

### FindDatabasePartition {#finddatabasepartition}

> **FindDatabasePartition**(partitionGuid: [Guid](/vext/ref/shared/type/guid)): [DatabasePartition](/vext/ref/shared/type/databasepartition) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partitionGuid** | [Guid](/vext/ref/shared/type/guid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DatabasePartition](/vext/ref/shared/type/databasepartition)** \| **nil** |  |

### FindPartitionForInstance {#findpartitionforinstance}

> **FindPartitionForInstance**(instance: [DataContainer](/vext/ref/shared/type/datacontainer)): [DatabasePartition](/vext/ref/shared/type/databasepartition) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **instance** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DatabasePartition](/vext/ref/shared/type/databasepartition)** \| **nil** |  |

### RegisterInstanceLoadHandler {#registerinstanceloadhandler}

> **RegisterInstanceLoadHandler**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partitionGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **instanceGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** \| **nil** |  |

### RegisterInstanceLoadHandler {#registerinstanceloadhandler-1}

> **RegisterInstanceLoadHandler**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), context: any, callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partitionGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **instanceGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **context** | any |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** |  |

### RegisterInstanceLoadHandlerOnce {#registerinstanceloadhandleronce}

> **RegisterInstanceLoadHandlerOnce**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partitionGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **instanceGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** |  |

### RegisterInstanceLoadHandlerOnce {#registerinstanceloadhandleronce-1}

> **RegisterInstanceLoadHandlerOnce**(partitionGuid: [Guid](/vext/ref/shared/type/guid), instanceGuid: [Guid](/vext/ref/shared/type/guid), context: any, callback: callable): [ContainerCallback](/vext/ref/shared/type/containercallback)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **partitionGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **instanceGuid** | [Guid](/vext/ref/shared/type/guid) |  |
| **context** | any |  |
| **callback** | callable |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContainerCallback](/vext/ref/shared/type/containercallback)** |  |

### AddRegistry {#addregistry}

> **AddRegistry**(registry: [DataContainer](/vext/ref/shared/type/datacontainer), compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **registry** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **compartment** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |

### BeginLoadData {#beginloaddata}

> **BeginLoadData**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment), bundles: string{}): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **compartment** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |
| **bundles** | string{} |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### EndLoadData {#endloaddata}

> **EndLoadData**(handle: int): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### PollBundleOperation {#pollbundleoperation}

> **PollBundleOperation**(handle: int): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### CancelBundleOperation {#cancelbundleoperation}

> **CancelBundleOperation**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### BeginClear {#beginclear}

> **BeginClear**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment)): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **compartment** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### EndClear {#endclear}

> **EndClear**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### AllocateDynamicCompartment {#allocatedynamiccompartment}

> **AllocateDynamicCompartment**(name: string, parent: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment), clientOnly: bool): [ResourceCompartment](/vext/ref/shared/type/resourcecompartment)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **parent** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |
| **clientOnly** | bool |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ResourceCompartment](/vext/ref/shared/type/resourcecompartment)** |  |

### DestroyDynamicCompartment {#destroydynamiccompartment}

> **DestroyDynamicCompartment**(compartment: [ResourceCompartment](/vext/ref/shared/type/resourcecompartment))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **compartment** | [ResourceCompartment](/vext/ref/shared/type/resourcecompartment) |  |

