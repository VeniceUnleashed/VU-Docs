---
title: VeniceSoldierHealthModuleData
---
### Base Classes

[SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceSoldierHealthModuleData()                                                          | Create a new instance of this container type.                                                                                                     |
| VeniceSoldierHealthModuleData(VeniceSoldierHealthModuleData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VeniceSoldierHealthModuleData([SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata/) other)  | Upcast an instance of type [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata/) to [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata/).  |
| VeniceSoldierHealthModuleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata/). |

## Properties

| Name                              | Type                                                     | Description |
| --------------------------------- | -------------------------------------------------------- | ----------- |
| timeForCorpse                     | number                                                   |             |
| postReviveResponseTime            | number                                                   |             |
| interactiveManDownThreshold       | number                                                   |             |
| interactiveManDownPoseConstraints | [PoseConstraintsData](/vext/ref/fb/poseconstraintsdata/)               |             |
| manDownStateTime                  | number                                                   |             |
| manDownStateHealthPoints          | number                                                   |             |
| immortalTimeAfterSpawn            | number                                                   |             |
| abortSpawnImmortalityInputs       | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)\[\]         |             |
| postReviveHealth                  | number                                                   |             |
| criticalFakeImmortalTime          | number                                                   |             |
| regenerationDelay                 | number                                                   |             |
| regenerationRate                  | number                                                   |             |
| binding                           | [SoldierHealthModuleBinding](/vext/ref/fb/soldierhealthmodulebinding/) |             |
| sprintDisabledWhenDamagedTime     | number                                                   |             |
| sprintDisabledDamageThreshold     | number                                                   |             |
| manDownRotate                     | [RotateToHitData](/vext/ref/fb/rotatetohitdata/)                       |             |
| interactiveManDown                | bool                                                     |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceSoldierHealthModuleData](/vext/ref/fb/venicesoldierhealthmoduledata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
