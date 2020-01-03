---
title: WingComponentData
---
### Base Classes

[PartComponentData](PartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| WingComponentData()                                                          | Create a new instance of this container type.                                                                             |
| WingComponentData(WingComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| WingComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [WingComponentData](WingComponentData).              |
| WingComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [WingComponentData](WingComponentData).                      |
| WingComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WingComponentData](WingComponentData).                    |
| WingComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WingComponentData](WingComponentData).              |
| WingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WingComponentData](WingComponentData). |

## Properties

| Name   | Type                               | Description |
| ------ | ---------------------------------- | ----------- |
| config | [WingPhysicsData](WingPhysicsData) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [WingComponentData](WingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WingComponentData](WingComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
