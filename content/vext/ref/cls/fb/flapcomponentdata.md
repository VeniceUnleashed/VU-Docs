---
title: FlapComponentData (Frostbite Container)
---
### Base Classes

[PartComponentData](PartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| FlapComponentData()                                                          | Create a new instance of this container type.                                                                             |
| FlapComponentData(FlapComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| FlapComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [FlapComponentData](FlapComponentData).              |
| FlapComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [FlapComponentData](FlapComponentData).                      |
| FlapComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FlapComponentData](FlapComponentData).                    |
| FlapComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FlapComponentData](FlapComponentData).              |
| FlapComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FlapComponentData](FlapComponentData). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| rotationAxis  | [RotationAxisEnum](RotationAxisEnum) |             |
| rotationScale | number                               |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [FlapComponentData](FlapComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FlapComponentData](FlapComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
