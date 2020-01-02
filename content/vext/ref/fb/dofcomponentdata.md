---
title: DofComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| DofComponentData()                                                          | Create a new instance of this container type.                                                                           |
| DofComponentData(DofComponentData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| DofComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DofComponentData](DofComponentData).                      |
| DofComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DofComponentData](DofComponentData).                    |
| DofComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DofComponentData](DofComponentData).              |
| DofComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DofComponentData](DofComponentData). |

## Properties

| Name                    | Type                     | Description |
| ----------------------- | ------------------------ | ----------- |
| realm                   | [Realm](Realm)           |             |
| nearDistanceScale       | number                   |             |
| focusDistance           | number                   |             |
| blurFilter              | [BlurFilter](BlurFilter) |             |
| blurFilterDeviation     | number                   |             |
| farDistanceScale        | number                   |             |
| blurAdd                 | number                   |             |
| scale                   | number                   |             |
| diffusionDofFocalLength | number                   |             |
| diffusionDofAperture    | number                   |             |
| diffusionDofEnable      | bool                     |             |
| enable                  | bool                     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [DofComponentData](DofComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DofComponentData](DofComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
