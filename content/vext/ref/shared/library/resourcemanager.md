---
title: ResourceManager (Shared Manager)
---
## Description

## Methods

| Type                                                            | Name                                                      | Parameters                                                                                                              |
| --------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| void                                                            | [MountSuperBundle](#mountsuperbundle)                     | string **superbundle**, [MediaHint](/vext/ref/shared/class/mediahint) **=** MediaHint\_Default, bool **optional** = false |
| void                                                            | [UnmountSuperBundle](#unmountsuperbundle)                 | string **superbundle**                                                                                                  |
| int                                                             | [BeginLoadData](#beginloaddata)                           | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**, string\[\] **bundles**                 |
| bool                                                            | [EndLoadData](#endloaddata)                               | int **handle**                                                                                                          |
| bool                                                            | [PollBundleOperation](#pollbundleoperation)               | int **handle**                                                                                                          |
| void                                                            | [CancelBundleOperation](#cancelbundleoperation)           | int **handle**                                                                                                          |
| int                                                             | [BeginClear](#beginclear)                                 | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**                                         |
| void                                                            | [EndClear](#endclear)                                     | int **handle**                                                                                                          |
| [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) | [AllocateDynamicCompartment](#allocatedynamiccompartment) | string **name**, [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **parent**, bool **clientOnly**        |
| void                                                            | [DestroyDynamicCompartment](#destroydynamiccompartment)   | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**                                         |
| [DataContainer](/vext/ref/shared/class/datacontainer)             | [GetSettings](#getsettings)                               | string **settings**                                                                                                     |
| [DataContainer](/vext/ref/shared/class/datacontainer)             | [FindInstanceByGUID](#findinstancebyguid)                 | [Guid](/vext/ref/shared/class/guid) **partitionGuid**, [Guid](/vext/ref/shared/class/guid) **instanceGuid**                 |
| [DataContainer](/vext/ref/shared/class/datacontainer)             | [LookupDataContainer](#lookupdatacontainer)               | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**, string **name**                        |
| [DataContainer](/vext/ref/shared/class/datacontainer)             | [SearchForInstanceByGUID](#searchforinstancebyguid)       | [Guid](/vext/ref/shared/class/guid) **instanceGuid**                                                                      |
| [DatabasePartition](/vext/ref/shared/class/databasepartition)     | [FindDatabasePartition](#finddatabasepartition)           | [Guid](/vext/ref/shared/class/guid) **partitionGuid**                                                                     |

### MountSuperBundle

> void **MountSuperBundle**(string **superbundle**, [MediaHint](/vext/ref/shared/class/mediahint) **=** MediaHint\_Default, bool **optional** = false)

#### Parameters

| Name        | Type                                        | Description |
| ----------- | ------------------------------------------- | ----------- |
| superbundle | string                                      |             |
| \=          | [MediaHint](/vext/ref/shared/class/mediahint) |             |
| optional    | bool                                        |             |

### UnmountSuperBundle

> void **UnmountSuperBundle**(string **superbundle**)

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| superbundle | string |             |

### BeginLoadData

> int **BeginLoadData**([ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**, string\[\] **bundles**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) |             |
| bundles     | string\[\]                                                      |             |

### EndLoadData

> bool **EndLoadData**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### PollBundleOperation

> bool **PollBundleOperation**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### CancelBundleOperation

> void **CancelBundleOperation**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### BeginClear

> int **BeginClear**([ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) |             |

### EndClear

> void **EndClear**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### AllocateDynamicCompartment

> [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **AllocateDynamicCompartment**(string **name**, [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **parent**, bool **clientOnly**)

#### Parameters

| Name       | Type                                                            | Description |
| ---------- | --------------------------------------------------------------- | ----------- |
| name       | string                                                          |             |
| parent     | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) |             |
| clientOnly | bool                                                            |             |

### DestroyDynamicCompartment

> void **DestroyDynamicCompartment**([ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) |             |

### GetSettings

> [DataContainer](/vext/ref/shared/class/datacontainer) **GetSettings**(string **settings**)

#### Parameters

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| settings | string |             |

### FindInstanceByGUID

> [DataContainer](/vext/ref/shared/class/datacontainer) **FindInstanceByGUID**([Guid](/vext/ref/shared/class/guid) **partitionGuid**, [Guid](/vext/ref/shared/class/guid) **instanceGuid**)

#### Parameters

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| partitionGuid | [Guid](/vext/ref/shared/class/guid) |             |
| instanceGuid  | [Guid](/vext/ref/shared/class/guid) |             |

### LookupDataContainer

> [DataContainer](/vext/ref/shared/class/datacontainer) **LookupDataContainer**([ResourceCompartment](/vext/ref/shared/class/resourcecompartment) **compartment**, string **name**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/shared/class/resourcecompartment) |             |
| name        | string                                                          |             |

### SearchForInstanceByGUID

> [DataContainer](/vext/ref/shared/class/datacontainer) **SearchForInstanceByGUID**([Guid](/vext/ref/shared/class/guid) **instanceGuid**)

#### Parameters

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| instanceGuid | [Guid](/vext/ref/shared/class/guid) |             |

### FindDatabasePartition

> [DatabasePartition](/vext/ref/shared/class/databasepartition) **FindDatabasePartition**([Guid](/vext/ref/shared/class/guid) **partitionGuid**)

#### Parameters

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| partitionGuid | [Guid](/vext/ref/shared/class/guid) |             |
