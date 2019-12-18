---
title: DatabasePartition (Shared Class)
---
## Description

A Frostbite Database Partition. Partitions represent game-data bound structures (ebx).

## Constructors

| Constructor                                                                                                                      | Description                                              |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [DatabasePartition](/vext/ref/cls/shr/databasepartition)([DatabasePartition](/vext/ref/cls/shr/databasepartition) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name            | Type                                                      | Writable | Description                                                                                     |
| --------------- | --------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| instances       | [DataContainer\[](/vext/ref/cls/shr/datacontainer[])\] | N        | A read-only array holding the instances of this partition.                                      |
| guid            | [Guid](/vext/ref/cls/shr/guid)                         | N        | The GUID of this partition.                                                                     |
| primaryInstance | [DataContainer](/vext/ref/cls/shr/datacontainer)       | N        | The primary instance of this partition.                                                         |
| name            | string                                                    | N        | The name of this partition. Ususally corresponds to the relative filename of the original file. |

## Methods

| Type                                                | Name                                | Parameters                                                                                                                                                               |
| --------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [DataContainer](/vext/ref/cls/shr/datacontainer) | [FindInstance](#findinstance)       | [Guid](/vext/ref/cls/shr/guid) **guid**                                                                                                                               |
| void                                                | [ReplaceInstance](#replaceinstance) | [DataContainer](/vext/ref/cls/shr/datacontainer) **instance**, [DataContainer](/vext/ref/cls/shr/datacontainer) **replacement**, bool **replaceReferences** = true |
| void                                                | [AddInstance](#addinstance)         | [DataContainer](/vext/ref/cls/shr/datacontainer) **instance**                                                                                                         |
| void                                                | [RemoveInstance](#removeinstance)   | [DataContainer](/vext/ref/cls/shr/datacontainer) **instance**                                                                                                         |

### FindInstance

> [DataContainer](/vext/ref/cls/shr/datacontainer) **FindInstance**([Guid](/vext/ref/cls/shr/guid) **guid**)

Tries to find and retrieve an instance with a matching **guid** from the current partition.

#### Parameters

| Name | Type                              | Description                       |
| ---- | --------------------------------- | --------------------------------- |
| guid | [Guid](/vext/ref/cls/shr/guid) | The GUID of the instance to find. |

### ReplaceInstance

> void **ReplaceInstance**([DataContainer](/vext/ref/cls/shr/datacontainer) **instance**, [DataContainer](/vext/ref/cls/shr/datacontainer) **replacement**, bool **replaceReferences** = true)

Replaces an **instance** within this partition with another **replacement** instance. When **replaceReferences** is set to `true` (default), VeniceEXT also calls [DataContainer::ReplaceReferences](datacontainer#replacereferences) on the original instance, replacing all references to it with its replacement.

#### Parameters

| Name              | Type                                                | Description                                                                                         |
| ----------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| instance          | [DataContainer](/vext/ref/cls/shr/datacontainer) | The instance to replace.                                                                            |
| replacement       | [DataContainer](/vext/ref/cls/shr/datacontainer) | The replacement instance.                                                                           |
| replaceReferences | bool                                                | Whether to replace all references of the original instance with the replacement. Defaults to `true` |

### AddInstance

> void **AddInstance**([DataContainer](/vext/ref/cls/shr/datacontainer) **instance**)

#### Parameters

| Name     | Type                                                | Description          |
| -------- | --------------------------------------------------- | -------------------- |
| instance | [DataContainer](/vext/ref/cls/shr/datacontainer) | The instance to add. |

### RemoveInstance

> void **RemoveInstance**([DataContainer](/vext/ref/cls/shr/datacontainer) **instance**)

#### Parameters

| Name     | Type                                                | Description             |
| -------- | --------------------------------------------------- | ----------------------- |
| instance | [DataContainer](/vext/ref/cls/shr/datacontainer) | The instance to remove. |
