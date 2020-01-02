---
title: VeniceSoldierHealthModuleData
---
### Base Classes

[SoldierHealthModuleData](SoldierHealthModuleData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VeniceSoldierHealthModuleData()                                                          | Create a new instance of this container type.                                                                                                     |
| VeniceSoldierHealthModuleData(VeniceSoldierHealthModuleData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VeniceSoldierHealthModuleData([SoldierHealthModuleData](SoldierHealthModuleData) other)  | Upcast an instance of type [SoldierHealthModuleData](SoldierHealthModuleData) to [VeniceSoldierHealthModuleData](VeniceSoldierHealthModuleData).  |
| VeniceSoldierHealthModuleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceSoldierHealthModuleData](VeniceSoldierHealthModuleData). |

## Properties

| Name                              | Type                                                     | Description |
| --------------------------------- | -------------------------------------------------------- | ----------- |
| timeForCorpse                     | number                                                   |             |
| postReviveResponseTime            | number                                                   |             |
| interactiveManDownThreshold       | number                                                   |             |
| interactiveManDownPoseConstraints | [PoseConstraintsData](PoseConstraintsData)               |             |
| manDownStateTime                  | number                                                   |             |
| manDownStateHealthPoints          | number                                                   |             |
| immortalTimeAfterSpawn            | number                                                   |             |
| abortSpawnImmortalityInputs       | [EntryInputActionEnum](EntryInputActionEnum)\[\]         |             |
| postReviveHealth                  | number                                                   |             |
| criticalFakeImmortalTime          | number                                                   |             |
| regenerationDelay                 | number                                                   |             |
| regenerationRate                  | number                                                   |             |
| binding                           | [SoldierHealthModuleBinding](SoldierHealthModuleBinding) |             |
| sprintDisabledWhenDamagedTime     | number                                                   |             |
| sprintDisabledDamageThreshold     | number                                                   |             |
| manDownRotate                     | [RotateToHitData](RotateToHitData)                       |             |
| interactiveManDown                | bool                                                     |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VeniceSoldierHealthModuleData](VeniceSoldierHealthModuleData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VeniceSoldierHealthModuleData](VeniceSoldierHealthModuleData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
