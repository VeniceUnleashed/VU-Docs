---
title: PlayerLookAtEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PlayerLookAtEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PlayerLookAtEntityData(PlayerLookAtEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PlayerLookAtEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PlayerLookAtEntityData](/vext/ref/fb/playerlookatentitydata/).                            |
| PlayerLookAtEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlayerLookAtEntityData](/vext/ref/fb/playerlookatentitydata/).                    |
| PlayerLookAtEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlayerLookAtEntityData](/vext/ref/fb/playerlookatentitydata/).              |
| PlayerLookAtEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerLookAtEntityData](/vext/ref/fb/playerlookatentitydata/). |

## Properties

| Name            | Type                                                    | Description |
| --------------- | ------------------------------------------------------- | ----------- |
| targetTransform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerLookAtEntityData](/vext/ref/fb/playerlookatentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerLookAtEntityData](/vext/ref/fb/playerlookatentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
