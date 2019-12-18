---
title: UISoldierCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UISoldierCompData()                                                          | Create a new instance of this container type.                                                                             |
| UISoldierCompData(UISoldierCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UISoldierCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UISoldierCompData](UISoldierCompData).                  |
| UISoldierCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UISoldierCompData](UISoldierCompData).                                      |
| UISoldierCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UISoldierCompData](UISoldierCompData). |

## Properties

| Name                                 | Type   | Description |
| ------------------------------------ | ------ | ----------- |
| criticalHealthThreshold              | number |             |
| hitShaderDamageMultiplier            | number |             |
| hitShaderMinDamage                   | number |             |
| ekgLineThickness                     | number |             |
| shockTraumaAbilityIndex              | number |             |
| rangerPTProgramAbilityIndex          | number |             |
| focusAbilityIndex                    | number |             |
| ekgLineAlpha                         | number |             |
| hitShaderGradientDurationMultiplier  | number |             |
| hitShaderMaxDamage                   | number |             |
| hitShaderIndicatorDurationMultiplier | number |             |
| useVehicleTeamSpawn                  | bool   |             |
| useSquadSpawn                        | bool   |             |
| spawnOnSquadLeaders                  | bool   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UISoldierCompData](UISoldierCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UISoldierCompData](UISoldierCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
