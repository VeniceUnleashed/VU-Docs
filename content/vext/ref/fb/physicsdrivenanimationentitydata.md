---
title: PhysicsDrivenAnimationEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsDrivenAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| PhysicsDrivenAnimationEntityData(PhysicsDrivenAnimationEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| PhysicsDrivenAnimationEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PhysicsDrivenAnimationEntityData](/vext/ref/fb/physicsdrivenanimationentitydata/).                            |
| PhysicsDrivenAnimationEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PhysicsDrivenAnimationEntityData](/vext/ref/fb/physicsdrivenanimationentitydata/).                    |
| PhysicsDrivenAnimationEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PhysicsDrivenAnimationEntityData](/vext/ref/fb/physicsdrivenanimationentitydata/).              |
| PhysicsDrivenAnimationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsDrivenAnimationEntityData](/vext/ref/fb/physicsdrivenanimationentitydata/). |

## Properties

| Name                         | Type                                                                       | Description |
| ---------------------------- | -------------------------------------------------------------------------- | ----------- |
| realm                        | [Realm](/vext/ref/fb/realm/)                                                             |             |
| binding                      | [PhysicsDrivenAnimationEntityBinding](/vext/ref/fb/physicsdrivenanimationentitybinding/) |             |
| animationEntitySpacePriority | number                                                                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsDrivenAnimationEntityData](/vext/ref/fb/physicsdrivenanimationentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsDrivenAnimationEntityData](/vext/ref/fb/physicsdrivenanimationentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
