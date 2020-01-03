---
title: SoldierSuppressionComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSuppressionComponentData()                                                          | Create a new instance of this container type.                                                                                                         |
| SoldierSuppressionComponentData(SoldierSuppressionComponentData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| SoldierSuppressionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata/).                      |
| SoldierSuppressionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata/).                    |
| SoldierSuppressionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata/).              |
| SoldierSuppressionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata/). |

## Properties

| Name                                | Type                                               | Description |
| ----------------------------------- | -------------------------------------------------- | ----------- |
| reactionToSuppression               | [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata/) |             |
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
| [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierSuppressionComponentData](/vext/ref/fb/soldiersuppressioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
