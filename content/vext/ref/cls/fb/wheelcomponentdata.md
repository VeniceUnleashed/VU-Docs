---
title: WheelComponentData (Frostbite Container)
---
### Base Classes

[PartComponentData](PartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WheelComponentData()                                                          | Create a new instance of this container type.                                                                               |
| WheelComponentData(WheelComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WheelComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [WheelComponentData](WheelComponentData).              |
| WheelComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [WheelComponentData](WheelComponentData).                      |
| WheelComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WheelComponentData](WheelComponentData).                    |
| WheelComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WheelComponentData](WheelComponentData).              |
| WheelComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WheelComponentData](WheelComponentData). |

## Properties

| Name                | Type                                 | Description |
| ------------------- | ------------------------------------ | ----------- |
| config              | [WheelConfigData](WheelConfigData)   |             |
| physicsType         | [WheelPhysicsType](WheelPhysicsType) |             |
| effectClampVelocity | number                               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WheelComponentData](WheelComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WheelComponentData](WheelComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
