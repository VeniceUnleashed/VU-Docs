---
title: BFAISettingsData
---
### Base Classes

[AISettingsData](AISettingsData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| BFAISettingsData()                                                          | Create a new instance of this container type.                                                                           |
| BFAISettingsData(BFAISettingsData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| BFAISettingsData([AISettingsData](AISettingsData) other)                    | Upcast an instance of type [AISettingsData](AISettingsData) to [BFAISettingsData](BFAISettingsData).                    |
| BFAISettingsData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BFAISettingsData](BFAISettingsData).                                      |
| BFAISettingsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFAISettingsData](BFAISettingsData). |

## Properties

| Name                      | Type                                                         | Description |
| ------------------------- | ------------------------------------------------------------ | ----------- |
| movementConstants         | [MovementConstantData](MovementConstantData)                 |             |
| turretControlConstants    | [TurretControlConstantData](TurretControlConstantData)       |             |
| searchAndDestroyConstants | [SearchAndDestroyConstantData](SearchAndDestroyConstantData) |             |
| followConstants           | [FollowConstantData](FollowConstantData)                     |             |
| combatConstants           | [CombatConstantData](CombatConstantData)                     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BFAISettingsData](BFAISettingsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFAISettingsData](BFAISettingsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
