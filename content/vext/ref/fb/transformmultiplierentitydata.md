---
title: TransformMultiplierEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformMultiplierEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| TransformMultiplierEntityData(TransformMultiplierEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| TransformMultiplierEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TransformMultiplierEntityData](/vext/ref/fb/transformmultiplierentitydata/).                            |
| TransformMultiplierEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TransformMultiplierEntityData](/vext/ref/fb/transformmultiplierentitydata/).                    |
| TransformMultiplierEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TransformMultiplierEntityData](/vext/ref/fb/transformmultiplierentitydata/).              |
| TransformMultiplierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformMultiplierEntityData](/vext/ref/fb/transformmultiplierentitydata/). |

## Properties

| Name  | Type                                                    | Description |
| ----- | ------------------------------------------------------- | ----------- |
| in1   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in2   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm | [Realm](/vext/ref/fb/realm/)                                          |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformMultiplierEntityData](/vext/ref/fb/transformmultiplierentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformMultiplierEntityData](/vext/ref/fb/transformmultiplierentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
