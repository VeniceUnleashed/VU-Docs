---
title: SoldierSuppressionComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSuppressionComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| SoldierSuppressionComponentData(SoldierSuppressionComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| SoldierSuppressionComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierSuppressionComponentData](SoldierSuppressionComponentData).                      |
| SoldierSuppressionComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierSuppressionComponentData](SoldierSuppressionComponentData).                    |
| SoldierSuppressionComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierSuppressionComponentData](SoldierSuppressionComponentData).              |
| SoldierSuppressionComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierSuppressionComponentData](SoldierSuppressionComponentData). |

## Properties

| Name                                | Type                                               | Description |
| ----------------------------------- | -------------------------------------------------- | ----------- |
| reactionToSuppression               | [SuppressionReactionData](SuppressionReactionData) |             |
| suppressionResistModifier           | number                                             |             |
| suppressionBoostModifier            | number                                             |             |
| suppressionDecay                    | number                                             |             |
| suppressionSphereRadius             | number                                             |             |
| fallOffDelay                        | number                                             |             |
| fallOffMultiplier                   | number                                             |             |
| suppressionAbortsHealthRegeneration | bool                                               |             |
| checkLineOfSight                    | bool                                               |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierSuppressionComponentData](SoldierSuppressionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierSuppressionComponentData](SoldierSuppressionComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
