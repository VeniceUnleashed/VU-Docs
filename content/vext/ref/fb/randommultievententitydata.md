---
title: RandomMultiEventEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| RandomMultiEventEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| RandomMultiEventEntityData(RandomMultiEventEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| RandomMultiEventEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata/).                            |
| RandomMultiEventEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata/).                    |
| RandomMultiEventEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata/).              |
| RandomMultiEventEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata/). |

## Properties

| Name                            | Type           | Description |
| ------------------------------- | -------------- | ----------- |
| realm                           | [Realm](/vext/ref/fb/realm/) |             |
| randomEventWeight               | number\[\]     |             |
| uniformDistribution             | bool           |             |
| resetOutputsWhenAllHasTriggered | bool           |             |
| disableOutputOnTrigger          | bool           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomMultiEventEntityData](/vext/ref/fb/randommultievententitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
