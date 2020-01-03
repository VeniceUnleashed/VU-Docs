---
title: EventCompareGateEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| EventCompareGateEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| EventCompareGateEntityData(EventCompareGateEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| EventCompareGateEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EventCompareGateEntityData](/vext/ref/fb/eventcomparegateentitydata/).                            |
| EventCompareGateEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EventCompareGateEntityData](/vext/ref/fb/eventcomparegateentitydata/).                    |
| EventCompareGateEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EventCompareGateEntityData](/vext/ref/fb/eventcomparegateentitydata/).              |
| EventCompareGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventCompareGateEntityData](/vext/ref/fb/eventcomparegateentitydata/). |

## Properties

| Name        | Type                                         | Description |
| ----------- | -------------------------------------------- | ----------- |
| value       | number                                       |             |
| compareType | [EventCompareGateType](/vext/ref/fb/eventcomparegatetype/) |             |
| realm       | [Realm](/vext/ref/fb/realm/)                               |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventCompareGateEntityData](/vext/ref/fb/eventcomparegateentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventCompareGateEntityData](/vext/ref/fb/eventcomparegateentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
