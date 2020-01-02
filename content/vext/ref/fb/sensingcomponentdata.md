---
title: SensingComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SensingComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| SensingComponentData(SensingComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SensingComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SensingComponentData](SensingComponentData).                      |
| SensingComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SensingComponentData](SensingComponentData).                    |
| SensingComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SensingComponentData](SensingComponentData).              |
| SensingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SensingComponentData](SensingComponentData). |

## Properties

| Name               | Type                                       | Description |
| ------------------ | ------------------------------------------ | ----------- |
| template           | [SensingTemplateData](SensingTemplateData) |             |
| settings           | [SensingSettings](SensingSettings)         |             |
| enabled            | bool                                       |             |
| sharedPlayerMemory | bool                                       |             |
| useWeaponTransform | bool                                       |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SensingComponentData](SensingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SensingComponentData](SensingComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
