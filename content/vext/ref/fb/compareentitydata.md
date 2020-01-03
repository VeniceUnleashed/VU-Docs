---
title: CompareEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| CompareEntityData()                                                          | Create a new instance of this container type.                                                                             |
| CompareEntityData(CompareEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| CompareEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CompareEntityData](/vext/ref/fb/compareentitydata/).                            |
| CompareEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CompareEntityData](/vext/ref/fb/compareentitydata/).                    |
| CompareEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CompareEntityData](/vext/ref/fb/compareentitydata/).              |
| CompareEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompareEntityData](/vext/ref/fb/compareentitydata/). |

## Properties

| Name     | Type                   | Description |
| -------- | ---------------------- | ----------- |
| realm    | [Realm](/vext/ref/fb/realm/)         |             |
| operator | [CompareOp](/vext/ref/fb/compareop/) |             |
| floatIn0 | number                 |             |
| floatIn1 | number                 |             |
| intIn0   | number                 |             |
| intIn1   | number                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [CompareEntityData](/vext/ref/fb/compareentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompareEntityData](/vext/ref/fb/compareentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
