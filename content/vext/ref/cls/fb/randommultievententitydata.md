---
title: RandomMultiEventEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| RandomMultiEventEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| RandomMultiEventEntityData(RandomMultiEventEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| RandomMultiEventEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RandomMultiEventEntityData](RandomMultiEventEntityData).                            |
| RandomMultiEventEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RandomMultiEventEntityData](RandomMultiEventEntityData).                    |
| RandomMultiEventEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RandomMultiEventEntityData](RandomMultiEventEntityData).              |
| RandomMultiEventEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RandomMultiEventEntityData](RandomMultiEventEntityData). |

## Properties

| Name                            | Type           | Description |
| ------------------------------- | -------------- | ----------- |
| realm                           | [Realm](Realm) |             |
| randomEventWeight               | number\[\]     |             |
| uniformDistribution             | bool           |             |
| resetOutputsWhenAllHasTriggered | bool           |             |
| disableOutputOnTrigger          | bool           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RandomMultiEventEntityData](RandomMultiEventEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RandomMultiEventEntityData](RandomMultiEventEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
