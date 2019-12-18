---
title: BreakableRuinComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BreakableRuinComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| BreakableRuinComponentData(BreakableRuinComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| BreakableRuinComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [BreakableRuinComponentData](BreakableRuinComponentData).                      |
| BreakableRuinComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BreakableRuinComponentData](BreakableRuinComponentData).                    |
| BreakableRuinComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BreakableRuinComponentData](BreakableRuinComponentData).              |
| BreakableRuinComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BreakableRuinComponentData](BreakableRuinComponentData). |

## Properties

| Name      | Type                               | Description |
| --------- | ---------------------------------- | ----------- |
| ruinModel | [ObjectBlueprint](ObjectBlueprint) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BreakableRuinComponentData](BreakableRuinComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BreakableRuinComponentData](BreakableRuinComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
