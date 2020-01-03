---
title: EntryComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EntryComponentData()                                                          | Create a new instance of this container type.                                                                               |
| EntryComponentData(EntryComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EntryComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [EntryComponentData](EntryComponentData).                      |
| EntryComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EntryComponentData](EntryComponentData).                    |
| EntryComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EntryComponentData](EntryComponentData).              |
| EntryComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryComponentData](EntryComponentData). |

## Properties

| Name                              | Type                                                 | Description |
| --------------------------------- | ---------------------------------------------------- | ----------- |
| soldierOffset                     | [Vec3](/vext/ref/shared/class/vec3)                    |             |
| aiData                            | [GameAIEntryData](GameAIEntryData)                   |             |
| entryClass                        | [EntryClass](EntryClass)                             |             |
| inputConceptDefinition            | [EntryInputActionMapsData](EntryInputActionMapsData) |             |
| inputMapping                      | [InputActionMappingsData](InputActionMappingsData)   |             |
| inputCurves                       | [InputCurveData](InputCurveData)\[\]                 |             |
| hudData                           | [EntryComponentHudData](EntryComponentHudData)       |             |
| entryOrderNumber                  | number                                               |             |
| enterImpulse                      | number                                               |             |
| entryRadius                       | number                                               |             |
| triggerEventOnKey                 | [EntryInputActionEnum](EntryInputActionEnum)         |             |
| entrySpottingSettings             | [EntrySpottingSettings](EntrySpottingSettings)       |             |
| poseConstraints                   | [PoseConstraintsData](PoseConstraintsData)           |             |
| soldierTransitionInvisbleTime     | number                                               |             |
| numberOfStances                   | number                                               |             |
| entryComponentSound               | [EntryComponentSoundData](EntryComponentSoundData)   |             |
| lockSoldierAimingToEntry          | bool                                                 |             |
| isAllowedToExitInAir              | bool                                                 |             |
| show1pSoldierInEntry              | bool                                                 |             |
| stancesEnabled                    | bool                                                 |             |
| show1pSoldierInEntryForPlayerOnly | bool                                                 |             |
| hideSoldierForPassengers          | bool                                                 |             |
| show3pSoldierWeaponInEntry        | bool                                                 |             |
| showSoldierGearInEntry            | bool                                                 |             |
| isShielded                        | bool                                                 |             |
| forbiddenForHuman                 | bool                                                 |             |
| showSoldierWeaponInEntry          | bool                                                 |             |
| showSoldierInEntry                | bool                                                 |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [EntryComponentData](EntryComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntryComponentData](EntryComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
