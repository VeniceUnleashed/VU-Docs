---
title: TransformBlendEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| TransformBlendEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| TransformBlendEntityData(TransformBlendEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| TransformBlendEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata/).                            |
| TransformBlendEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata/).                    |
| TransformBlendEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata/).              |
| TransformBlendEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata/). |

## Properties

| Name        | Type                                                    | Description |
| ----------- | ------------------------------------------------------- | ----------- |
| in2         | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in1         | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| blendValue  | number                                                  |             |
| blendValue2 | number                                                  |             |
| realm       | [Realm](/vext/ref/fb/realm/)                                          |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformBlendEntityData](/vext/ref/fb/transformblendentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
