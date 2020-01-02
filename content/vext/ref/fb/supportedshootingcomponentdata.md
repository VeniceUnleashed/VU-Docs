---
title: SupportedShootingComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| SupportedShootingComponentData()                                                          | Create a new instance of this container type.                                                                                                       |
| SupportedShootingComponentData(SupportedShootingComponentData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| SupportedShootingComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SupportedShootingComponentData](SupportedShootingComponentData).                      |
| SupportedShootingComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SupportedShootingComponentData](SupportedShootingComponentData).                    |
| SupportedShootingComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SupportedShootingComponentData](SupportedShootingComponentData).              |
| SupportedShootingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupportedShootingComponentData](SupportedShootingComponentData). |

## Properties

| Name       | Type                                                       | Description |
| ---------- | ---------------------------------------------------------- | ----------- |
| commonData | [SupportedShootingCommonData](SupportedShootingCommonData) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SupportedShootingComponentData](SupportedShootingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupportedShootingComponentData](SupportedShootingComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
