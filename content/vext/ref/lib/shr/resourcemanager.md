---
title: ResourceManager (Shared Manager)
---
## Description

## Methods

| Type                                                            | Name                                                      | Parameters                                                                                                              |
| --------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| void                                                            | [MountSuperBundle](#mountsuperbundle)                     | string **superbundle**, [MediaHint](/vext/ref/cls/shr/mediahint) **=** MediaHint\_Default, bool **optional** = false |
| void                                                            | [UnmountSuperBundle](#unmountsuperbundle)                 | string **superbundle**                                                                                                  |
| int                                                             | [BeginLoadData](#beginloaddata)                           | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**, string\[\] **bundles**                 |
| bool                                                            | [EndLoadData](#endloaddata)                               | int **handle**                                                                                                          |
| bool                                                            | [PollBundleOperation](#pollbundleoperation)               | int **handle**                                                                                                          |
| void                                                            | [CancelBundleOperation](#cancelbundleoperation)           | int **handle**                                                                                                          |
| int                                                             | [BeginClear](#beginclear)                                 | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**                                         |
| void                                                            | [EndClear](#endclear)                                     | int **handle**                                                                                                          |
| [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) | [AllocateDynamicCompartment](#allocatedynamiccompartment) | string **name**, [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **parent**, bool **clientOnly**        |
| void                                                            | [DestroyDynamicCompartment](#destroydynamiccompartment)   | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**                                         |
| [DataContainer](/vext/ref/cls/shr/datacontainer)             | [GetSettings](#getsettings)                               | string **settings**                                                                                                     |
| [DataContainer](/vext/ref/cls/shr/datacontainer)             | [FindInstanceByGUID](#findinstancebyguid)                 | [Guid](/vext/ref/cls/shr/guid) **partitionGuid**, [Guid](/vext/ref/cls/shr/guid) **instanceGuid**                 |
| [DataContainer](/vext/ref/cls/shr/datacontainer)             | [LookupDataContainer](#lookupdatacontainer)               | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**, string **name**                        |
| [DataContainer](/vext/ref/cls/shr/datacontainer)             | [SearchForInstanceByGUID](#searchforinstancebyguid)       | [Guid](/vext/ref/cls/shr/guid) **instanceGuid**                                                                      |
| [DatabasePartition](/vext/ref/cls/shr/databasepartition)     | [FindDatabasePartition](#finddatabasepartition)           | [Guid](/vext/ref/cls/shr/guid) **partitionGuid**                                                                     |

### MountSuperBundle

> void **MountSuperBundle**(string **superbundle**, [MediaHint](/vext/ref/cls/shr/mediahint) **=** MediaHint\_Default, bool **optional** = false)

#### Parameters

| Name        | Type                                        | Description |
| ----------- | ------------------------------------------- | ----------- |
| superbundle | string                                      |             |
| \=          | [MediaHint](/vext/ref/cls/shr/mediahint) |             |
| optional    | bool                                        |             |

### UnmountSuperBundle

> void **UnmountSuperBundle**(string **superbundle**)

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| superbundle | string |             |

### BeginLoadData

> int **BeginLoadData**([ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**, string\[\] **bundles**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) |             |
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

> int **BeginClear**([ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) |             |

### EndClear

> void **EndClear**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### AllocateDynamicCompartment

> [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **AllocateDynamicCompartment**(string **name**, [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **parent**, bool **clientOnly**)

#### Parameters

| Name       | Type                                                            | Description |
| ---------- | --------------------------------------------------------------- | ----------- |
| name       | string                                                          |             |
| parent     | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) |             |
| clientOnly | bool                                                            |             |

### DestroyDynamicCompartment

> void **DestroyDynamicCompartment**([ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) |             |

### GetSettings

> [DataContainer](/vext/ref/cls/shr/datacontainer) **GetSettings**(string **settings**)

#### Parameters

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| settings | string |             |

### FindInstanceByGUID

> [DataContainer](/vext/ref/cls/shr/datacontainer) **FindInstanceByGUID**([Guid](/vext/ref/cls/shr/guid) **partitionGuid**, [Guid](/vext/ref/cls/shr/guid) **instanceGuid**)

#### Parameters

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| partitionGuid | [Guid](/vext/ref/cls/shr/guid) |             |
| instanceGuid  | [Guid](/vext/ref/cls/shr/guid) |             |

### LookupDataContainer

> [DataContainer](/vext/ref/cls/shr/datacontainer) **LookupDataContainer**([ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) **compartment**, string **name**)

#### Parameters

| Name        | Type                                                            | Description |
| ----------- | --------------------------------------------------------------- | ----------- |
| compartment | [ResourceCompartment](/vext/ref/cls/shr/resourcecompartment) |             |
| name        | string                                                          |             |

### SearchForInstanceByGUID

> [DataContainer](/vext/ref/cls/shr/datacontainer) **SearchForInstanceByGUID**([Guid](/vext/ref/cls/shr/guid) **instanceGuid**)

#### Parameters

| Name         | Type                              | Description |
| ------------ | --------------------------------- | ----------- |
| instanceGuid | [Guid](/vext/ref/cls/shr/guid) |             |

### FindDatabasePartition

> [DatabasePartition](/vext/ref/cls/shr/databasepartition) **FindDatabasePartition**([Guid](/vext/ref/cls/shr/guid) **partitionGuid**)

#### Parameters

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| partitionGuid | [Guid](/vext/ref/cls/shr/guid) |             |
