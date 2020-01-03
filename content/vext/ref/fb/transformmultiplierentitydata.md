---
title: TransformMultiplierEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformMultiplierEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| TransformMultiplierEntityData(TransformMultiplierEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| TransformMultiplierEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TransformMultiplierEntityData](TransformMultiplierEntityData).                            |
| TransformMultiplierEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TransformMultiplierEntityData](TransformMultiplierEntityData).                    |
| TransformMultiplierEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TransformMultiplierEntityData](TransformMultiplierEntityData).              |
| TransformMultiplierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformMultiplierEntityData](TransformMultiplierEntityData). |

## Properties

| Name  | Type                                                    | Description |
| ----- | ------------------------------------------------------- | ----------- |
| in1   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in2   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm | [Realm](Realm)                                          |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformMultiplierEntityData](TransformMultiplierEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformMultiplierEntityData](TransformMultiplierEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
