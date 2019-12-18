---
title: BreakablePartComponentData (Frostbite Container)
---
### Base Classes

[DestructionPartComponentData](DestructionPartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| BreakablePartComponentData()                                                                   | Create a new instance of this container type.                                                                                                        |
| BreakablePartComponentData(BreakablePartComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                                             |
| BreakablePartComponentData([DestructionPartComponentData](DestructionPartComponentData) other) | Upcast an instance of type [DestructionPartComponentData](DestructionPartComponentData) to [BreakablePartComponentData](BreakablePartComponentData). |
| BreakablePartComponentData([ComponentData](ComponentData) other)                               | Upcast an instance of type [ComponentData](ComponentData) to [BreakablePartComponentData](BreakablePartComponentData).                               |
| BreakablePartComponentData([GameObjectData](GameObjectData) other)                             | Upcast an instance of type [GameObjectData](GameObjectData) to [BreakablePartComponentData](BreakablePartComponentData).                             |
| BreakablePartComponentData([GameDataContainer](GameDataContainer) other)                       | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BreakablePartComponentData](BreakablePartComponentData).                       |
| BreakablePartComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BreakablePartComponentData](BreakablePartComponentData).          |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| healthPercentage            | number |             |
| collapsable                 | bool   |             |
| destroyNearbyStaticEntities | bool   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BreakablePartComponentData](BreakablePartComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BreakablePartComponentData](BreakablePartComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
