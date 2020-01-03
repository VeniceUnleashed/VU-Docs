---
title: PlanarReflectionComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PlanarReflectionComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| PlanarReflectionComponentData(PlanarReflectionComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PlanarReflectionComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [PlanarReflectionComponentData](PlanarReflectionComponentData).                      |
| PlanarReflectionComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PlanarReflectionComponentData](PlanarReflectionComponentData).                    |
| PlanarReflectionComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PlanarReflectionComponentData](PlanarReflectionComponentData).              |
| PlanarReflectionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlanarReflectionComponentData](PlanarReflectionComponentData). |

## Properties

| Name                 | Type                     | Description |
| -------------------- | ------------------------ | ----------- |
| verticalBlurFilter   | [BlurFilter](BlurFilter) |             |
| horizontalDeviation  | number                   |             |
| groundHeight         | number                   |             |
| verticalDeviation    | number                   |             |
| horizontalBlurFilter | [BlurFilter](BlurFilter) |             |
| skyRenderEnable      | bool                     |             |
| enable               | bool                     |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PlanarReflectionComponentData](PlanarReflectionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlanarReflectionComponentData](PlanarReflectionComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
