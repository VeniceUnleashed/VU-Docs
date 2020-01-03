---
title: BFAISettingsData
---
### Base Classes

[AISettingsData](/vext/ref/fb/aisettingsdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| BFAISettingsData()                                                          | Create a new instance of this container type.                                                                           |
| BFAISettingsData(BFAISettingsData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| BFAISettingsData([AISettingsData](/vext/ref/fb/aisettingsdata/) other)                    | Upcast an instance of type [AISettingsData](/vext/ref/fb/aisettingsdata/) to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata/).                    |
| BFAISettingsData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata/).                                      |
| BFAISettingsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFAISettingsData](/vext/ref/fb/bfaisettingsdata/). |

## Properties

| Name                      | Type                                                         | Description |
| ------------------------- | ------------------------------------------------------------ | ----------- |
| movementConstants         | [MovementConstantData](/vext/ref/fb/movementconstantdata/)                 |             |
| turretControlConstants    | [TurretControlConstantData](/vext/ref/fb/turretcontrolconstantdata/)       |             |
| searchAndDestroyConstants | [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata/) |             |
| followConstants           | [FollowConstantData](/vext/ref/fb/followconstantdata/)                     |             |
| combatConstants           | [CombatConstantData](/vext/ref/fb/combatconstantdata/)                     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BFAISettingsData](/vext/ref/fb/bfaisettingsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFAISettingsData](/vext/ref/fb/bfaisettingsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
