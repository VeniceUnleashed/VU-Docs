---
title: TransformSnapToGroundEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformSnapToGroundEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| TransformSnapToGroundEntityData(TransformSnapToGroundEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| TransformSnapToGroundEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata/).                            |
| TransformSnapToGroundEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata/).                    |
| TransformSnapToGroundEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata/).              |
| TransformSnapToGroundEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata/). |

## Properties

| Name                  | Type                                                    | Description |
| --------------------- | ------------------------------------------------------- | ----------- |
| inValue               | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm                 | [Realm](/vext/ref/fb/realm/)                                          |             |
| distanceToGround      | number                                                  |             |
| rayCastLength         | number                                                  |             |
| rayCastUpOffset       | number                                                  |             |
| alignWithGroundNormal | bool                                                    |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformSnapToGroundEntityData](/vext/ref/fb/transformsnaptogroundentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
