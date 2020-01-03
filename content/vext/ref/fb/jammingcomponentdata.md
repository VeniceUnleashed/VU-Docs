---
title: JammingComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| JammingComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| JammingComponentData(JammingComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| JammingComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [JammingComponentData](JammingComponentData).                      |
| JammingComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [JammingComponentData](JammingComponentData).                    |
| JammingComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [JammingComponentData](JammingComponentData).              |
| JammingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [JammingComponentData](JammingComponentData). |

## Properties

| Name              | Type                                           | Description |
| ----------------- | ---------------------------------------------- | ----------- |
| smokeJamming      | [SmokeJammingData](SmokeJammingData)           |             |
| airMissileJamming | [AirMissileJammingData](AirMissileJammingData) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [JammingComponentData](JammingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [JammingComponentData](JammingComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
