---
title: EntryComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| EntryComponentData()                                                          | Create a new instance of this container type.                                                                               |
| EntryComponentData(EntryComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| EntryComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [EntryComponentData](/vext/ref/fb/entrycomponentdata/).                      |
| EntryComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EntryComponentData](/vext/ref/fb/entrycomponentdata/).                    |
| EntryComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EntryComponentData](/vext/ref/fb/entrycomponentdata/).              |
| EntryComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryComponentData](/vext/ref/fb/entrycomponentdata/). |

## Properties

| Name                              | Type                                                 | Description |
| --------------------------------- | ---------------------------------------------------- | ----------- |
| soldierOffset                     | [Vec3](/vext/ref/shared/class/vec3)                    |             |
| aiData                            | [GameAIEntryData](/vext/ref/fb/gameaientrydata/)                   |             |
| entryClass                        | [EntryClass](/vext/ref/fb/entryclass/)                             |             |
| inputConceptDefinition            | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/) |             |
| inputMapping                      | [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata/)   |             |
| inputCurves                       | [InputCurveData](/vext/ref/fb/inputcurvedata/)\[\]                 |             |
| hudData                           | [EntryComponentHudData](/vext/ref/fb/entrycomponenthuddata/)       |             |
| entryOrderNumber                  | number                                               |             |
| enterImpulse                      | number                                               |             |
| entryRadius                       | number                                               |             |
| triggerEventOnKey                 | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)         |             |
| entrySpottingSettings             | [EntrySpottingSettings](/vext/ref/fb/entryspottingsettings/)       |             |
| poseConstraints                   | [PoseConstraintsData](/vext/ref/fb/poseconstraintsdata/)           |             |
| soldierTransitionInvisbleTime     | number                                               |             |
| numberOfStances                   | number                                               |             |
| entryComponentSound               | [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata/)   |             |
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
| [EntryComponentData](/vext/ref/fb/entrycomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntryComponentData](/vext/ref/fb/entrycomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
